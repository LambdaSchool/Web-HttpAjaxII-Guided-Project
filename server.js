const express = require('express');
const cors = require('cors');
const uuid = require('uuid');

const app = express();
app.use(express.json());
app.use(cors());

let friends = [
  { id: uuid(), name: 'Anna', age: 24 },
  { id: uuid(), name: 'Josemaria', age: 26 },
  { id: uuid(), name: 'Basil', age: 23 },
  { id: uuid(), name: 'Emily', age: 28 },
];

function getAllFriends(req, res) {
  res.json(friends);
}

function getFriendById(req, res) {
  res.json(friends.find(friend => friend.id === req.params.id));
}

function postNewFriend(req, res) {
  const friend = { id: uuid(), ...req.body };
  friends.push(friend);
  res.json(friend);
}

function deleteFriendById(req, res) {
  friends = friends.filter(friend => friend.id !== req.params.id);
  res.json(req.params.id);
}

function replaceFriendById(req, res) {
  friends = friends.filter(friend => friend.id !== req.params.id);
  const friend = { id: req.params.id, ...req.body };
  friends.push(friend);
  res.json(friend);
}

app.get('/api/friends', getAllFriends);
app.get('/api/friends/:id', getFriendById);
app.post('/api/friends', postNewFriend);
app.delete('/api/friends/:id', deleteFriendById);
app.put('/api/friends/:id', replaceFriendById);

app.listen(3000, () => console.log(
  'Friends server listening on port 3000!',
));
