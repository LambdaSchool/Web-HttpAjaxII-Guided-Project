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

  idToGetInput = React.createRef();

  newNameInput = React.createRef();

  newAgeInput = React.createRef();

  idToReplaceInput = React.createRef();

  nameToReplaceInput = React.createRef();

  ageToReplaceInput = React.createRef();

  idToDeleteInput = React.createRef();

  // CRUD OPERATIONS
  getAllFriends = () => {

  }

  getFriendById = () => {

  }

  postNewFriend = () => {

  }

  deleteFriendById = () => {

  }

  replaceFriendById = () => {

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
          id: <input type='text' ref={this.idToGetInput} /><br />
          <button onClick={this.getFriendById}>getFriendById</button>
        </StyledCrud>

        <StyledCrud>
          <h5>[POST] a new friend</h5>
          name: <input type='text' ref={this.newNameInput} /><br />
          age: <input type='text' ref={this.newAgeInput} /><br />
          <button onClick={this.postNewFriend}>postNewFriend</button>
        </StyledCrud>

        <StyledCrud>
          <h5>[PUT] replace existing friend by id</h5>
          id: <input type='text' ref={this.idToReplaceInput} /><br />
          name: <input type='text' ref={this.nameToReplaceInput} /><br />
          age: <input type='text' ref={this.ageToReplaceInput} /><br />
          <button onClick={this.replaceFriendById}>replaceFriendById</button>
        </StyledCrud>

        <StyledCrud>
          <h5>[DELETE] existing friend by id</h5>
          id: <input type='text' ref={this.idToDeleteInput} /><br />
          <button onClick={this.deleteFriendById}>delete friend</button>
        </StyledCrud>
      </StyledContainer>
    );
  }
}
