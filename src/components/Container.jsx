import React from 'react';
import axios from 'axios';
import { StyledContainer, StyledCrud } from './styled/styled';
import Friend from './Friend';

const friendsApi = 'http://localhost:3000/api/friends';

export default class Container extends React.Component {
  state = {
    friends: [],
    currentFriend: null,
    error: null,
    loading: false,
  }

  inputNameRef = React.createRef();

  inputAgeRef = React.createRef();

  inputNameEditRef = React.createRef();

  inputAgeEditRef = React.createRef();

  inputIdRef = React.createRef();

  // CRUD OPERATIONS
  getAllFriends = () => {
    axios.get(friendsApi)
      .then(res => this.setState({ friends: res.data }));
  }

  getFriendById = () => {

  }

  postNewFriend = () => {

  }

  deleteFriendById = () => {

  }

  replaceFriendById = id => {

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
          {
            this.state.friends.map(fr => <Friend data={fr} />)
          }
          <button onClick={this.getAllFriends}>getAllFriends</button>
        </StyledCrud>

        <StyledCrud>
          <h5>[POST] a new person</h5>
          name: <input type='text' ref={this.inputNameRef} /><br />
          age: <input type='text' ref={this.inputAgeRef} /><br />
          <button onClick={this.postNewPerson}>submit new person</button>
        </StyledCrud>

        <StyledCrud>
          <h5>[PUT] existing person by id</h5>
          name: <input type='text' ref={this.inputNameEditRef} /><br />
          age: <input type='text' ref={this.inputAgeEditRef} /><br />
          <button onClick={this.putPerson}>edit person</button>
        </StyledCrud>

        <StyledCrud>
          <h5>[DELETE] existing person by id</h5>
          id: <input type='text' ref={this.inputIdRef} /><br />
          <button
            onClick={() => this.deletePerson(this.inputIdRef.current.value)}
          >
            delete person
          </button>
        </StyledCrud>
      </StyledContainer>
    );
  }
}
