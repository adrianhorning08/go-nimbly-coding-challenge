import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: null
    };
  }

  async componentDidMount() {
    const results = await fetch("/api");
    const data = await results.json();
    console.log(data);
  }

  render() {
    return (
      <div id="page">
        <header>
          this is the header
        </header>
        this is the rest of the page
      </div>
    );
  }
}

export default App;
