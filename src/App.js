import React from "react";
import axios from "axios";
import "./App.css";
import Spinner from "./components/spinner/Spinner";
import { logDOM } from "@testing-library/react";

if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {
  state = {
    like: 0,
    dislike: 0,
    photos: [],
    count: 0,
    currentImg: "",
    currentName: "",
    isloading: false,
  };

  componentDidMount = async () => {
    this.setState({ isloading: true });

    try {
      const res = await axios.get(
        "https://61c468f0f1af4a0017d99514.mockapi.io/animals"
      );
      this.setState({ photos: res.data, isloading: false });
      const obj={
        name:"Lion",
        img:"https://images.unsplash.com/photo-1511216113906-8f57bb83e776?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      }
      this.createImg();
      console.log(res.data);
    } catch (e) {}
  };

  // changing the state depends on the user input and reset counter if counter >10
  handleLike = (e) => {
    if (this.state.count === 9) {
      this.setState((state) => {
        return { count: 0 };
      });
    }
    const name = `${e.target.name}`;
    this.setState((state) => {
      return { [name]: state[name] + 1, count: state.count + 1 };
    });
    this.createImg();
  };

  //create an img depends on counter number in state
  createImg = () => {
    this.setState({
      currentImg: (
        <img
          src={`${this.state.photos[this.state.count].img}`}
          className="img-container" alt={this.state.photos[this.state.count].name}
        />
      ),
      currentName: this.state.photos[this.state.count].name,
    });
  };

  render() {
    return (
      <div className="app-container">
        <div className="state-container">
          <div>{`likes: ${this.state.like}`}</div>
          <div>{`dislikes: ${this.state.dislike}`}</div>
        </div>

        <div className="img-container">
          {this.state.isloading ? <Spinner /> : null}
          {this.state.currentName}
          {this.state.currentImg}
        </div>
        <div className="buttons-container">
          <button
            onClick={this.handleLike}
            name="like"
            className="like-btn"
          ></button>
          <button
            onClick={this.handleLike}
            name="dislike"
            className="dislike-btn"
          ></button>
        </div>
      </div>
    );
  }
}

export default App;
