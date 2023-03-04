import React from 'react';
import image from '../image.jpeg';
import '../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 320,
      width: 320,
    };
    this.handleHeightChange = this.handleHeightChange.bind(this);
    this.handleWidthChange = this.handleWidthChange.bind(this);
  }

  handleHeightChange(event) {
    this.setState({ height: event.target.value });
  }

  handleWidthChange(event) {
    this.setState({ width: event.target.value });
  }

  render() {
    const { height, width } = this.state;
    return (
      <div id="main">
        <img src={image} id="resizable-img" height={height} width={width} alt="resizable" />
        <div>
          <label htmlFor="height-slider">Height:</label>
          <input type="range" id="height-slider" name="height" min="100" max="800" value={height} onChange={this.handleHeightChange} />
        </div>
        <div>
          <label htmlFor="width-slider">Width:</label>
          <input type="range" id="width-slider" name="width" min="100" max="800" value={width} onChange={this.handleWidthChange} />
        </div>
      </div>
    );
  }
}

export default App;
