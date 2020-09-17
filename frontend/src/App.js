import React from "react";
import axios from "axios";

import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: "",
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    this.setState({ loading: true });
    try {
      const response = await axios.get("http://localhost:3200/api");
      console.log(response);
      this.setState({ data: response.data.data });
    } catch (e) {
      console.log(e);
    }
    this.setState({ loading: false });
  }

  renderData() {
    if (this.state.loading) {
      return <i class="fas fa-circle-notch fa-spin"></i>;
    }
    if (this.state.data) {
      return this.state.data;
    }
  }

  render() {
    return (
      <div className="App">
        <div className="content">
          <div className="container app-content">
            <span role="img" aria-label="whale" className="icon">
              🐳
            </span>
            &nbsp; React in Docker !{" "}
            <div className="data">{this.renderData()}</div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default App;
