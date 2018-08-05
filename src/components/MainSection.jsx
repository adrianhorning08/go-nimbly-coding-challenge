import React from 'react';

class MainSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      forecast: null,
      locationId: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.fetchLocationId = this.fetchLocationId.bind(this);
    this.fetchLocationWeatherData = this.fetchLocationWeatherData.bind(this);
  }

  async fetchLocationId(locationName) {
    const results = await fetch(`/api/locationName/${locationName}`);
    const data = await results.json();
    const city = data[0];
    this.setState({ location: city.title, locationId: city.woeid}, () => {
      this.fetchLocationWeatherData(this.state.locationId)
    })
  }

  async fetchLocationWeatherData(locationId) {
    const results = await fetch(`/api/locationId/${locationId}`);
    const data = await results.json();
    this.setState({ forecast: data.consolidated_weather}, () => console.log(this.state))
  }

  update() {
    return e => {
      this.setState({location: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault;
    this.fetchLocationId(this.state.location);
  }

  render() {
    return (
      <div className="main-section">
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter a City
            <input
              type='text'
              value={this.state.location}
              onChange={this.update()}
              />
          </label>
          <button>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default MainSection;
