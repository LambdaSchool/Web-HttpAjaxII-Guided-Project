import React from 'react';
import axios from 'axios';
import { StyledContainer, StyledCrud } from './styled/styled';
import Friend from './Friend';

const friendsApi = 'http://localhost:3000/api/friends';

export default class Container extends React.Component {
  state = {
    friends: [],
    error: null,
    loading: false,
    friend: null,
  }

  inputNameRef = React.createRef();

  inputAgeRef = React.createRef();

  inputIdEditRef = React.createRef();

  inputNameEditRef = React.createRef();

  inputAgeEditRef = React.createRef();

  inputIdRefDelete = React.createRef();

  inputIdRefExisting = React.createRef();

  // CRUD OPERATIONS
  getAllFriends = () => {
    axios.get(friendsApi)
      .then(res => this.setState({ friends: res.data }));
  }

  getFriendById = () => {
    axios.get(`${friendsApi}/${this.inputIdRefExisting.current.value}`)
      .then(res => this.setState({ friend: res.data }));
  }

  postNewFriend = () => {
    axios.post(friendsApi, {
      name: this.inputNameRef.current.value,
      age: this.inputAgeRef.current.value,
    })
      .then(this.getAllFriends);
  }

  deleteFriendById = () => {
    const id = this.inputIdRefDelete.current.value;
    axios.delete(`${friendsApi}/${id}`).then(this.getAllFriends);
  }

  replaceFriendById = () => {
    const id = this.inputIdEditRef.current.value;
    const name = this.inputNameEditRef.current.value;
    const age = this.inputAgeEditRef.current.value;

    axios.put(`${friendsApi}/${id}`, {
      name,
      age,
    })
      .then(this.getAllFriends);
  }

  render() {
    if (this.state.loading) {
      return (
        <StyledContainer>
          Loading...
        </StyledContainer>
      );
    }

    if (this.state.error) {
      return (
        <StyledContainer>
          <div>Argh! This failed rather miserably. {this.state.error.message}</div>
        </StyledContainer>
      );
    }

    return (
      <StyledContainer>
        <StyledCrud>
          <h5>[GET] all friends</h5>
          {this.state.friends.map(fr => <Friend key={fr.id} data={fr} />)}
          <button onClick={this.getAllFriends}>getAllFriends</button>
        </StyledCrud>

        <StyledCrud>
          <h5>[GET] existing friend by id</h5>
          <Friend data={this.state.friend} />
          id: <input type='text' ref={this.inputIdRefExisting} /><br />
          <button onClick={this.getFriendById}>getFriendById</button>
        </StyledCrud>

        <StyledCrud>
          <h5>[POST] a new friend</h5>
          name: <input type='text' ref={this.inputNameRef} /><br />
          age: <input type='text' ref={this.inputAgeRef} /><br />
          <button onClick={this.postNewFriend}>postNewFriend</button>
        </StyledCrud>

        <StyledCrud>
          <h5>[PUT] replace existing friend by id</h5>
          id: <input type='text' ref={this.inputIdEditRef} /><br />
          name: <input type='text' ref={this.inputNameEditRef} /><br />
          age: <input type='text' ref={this.inputAgeEditRef} /><br />
          <button onClick={this.replaceFriendById}>replaceFriendById</button>
        </StyledCrud>

        <StyledCrud>
          <h5>[DELETE] existing friend by id</h5>
          id: <input type='text' ref={this.inputIdRefDelete} /><br />
          <button onClick={this.deleteFriendById}>delete friend</button>
        </StyledCrud>
      </StyledContainer>
    );
  }
}
