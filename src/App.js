import React from "react";
import "./App.css";

if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {
  state = { like: 0, dislike: 0 };

// changing the state depends on the user input
  handleLike=(e)=>{
    const name =`${e.target.name}`;
    console.log(name);
    this.setState((state)=>{
         return {[name]: state[name]+1};
        })
  }

  render() {
    return (
      <div className="app-container">
        <div className="state-container">
          <div>{`like: ${this.state.like}`}</div>
          <div>{`dislike: ${this.state.dislike}`}</div>
        </div>

        <div className="img-container">img</div>
        <div className="buttons-container">
          <button onClick={this.handleLike} name="like">like</button>
          <button onClick={this.handleLike} name="dislike">dislike</button>
        </div>
      </div>
    );
  }
}

export default App;
