import React from "react";
import "./App.css";

if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {
  state = { like: 0, dislike: 0 };

  render() {
    return (
      <div className="app-container">
        <div className="state-container">
          <div>{this.state.like}</div>
          <div>{this.state.dislike}</div>
        </div>

        <div className="img-container">img</div>
        <button>like</button>
        <button>dislike</button>
      </div>
    );
  }
}

export default App;
