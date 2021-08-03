import React, { Component } from 'react';
import images from './data.js'
import ImageList from './ImageList.js';
import './Horned.css'

class App extends Component {
  state = { keyword: 'All', horns:1};
  handleType = (event) => {
    this.setState({ keyword: event.target.value });
    console.log(event.target.value)
  };
  handleHorns = (event) => {
    this.setState({ horns: Number(event.target.value) });
    console.log(typeof event.target.value)
    }
  render() { 

    const filterCreatures = images.filter(
      (image) => (this.state.type === 'All' || image.keyword === this.state.keyword) && (image.horns === this.state.horns)
    );
    return ( 
      <div className='App'>
        <h4>Horn-ed Cre-atures!</h4>
        <span>Type:</span>
        <select onChange={this.handleType}>
          <option value ='All'>All</option>
        <option value='narwhal'>narwhal</option>
        <option value='rhino'>rhino</option>
        <option value='unicorn'>unicorn</option>
        <option value='unilego'>unilego</option>
        <option value='triceratops'>triceratops</option>
        <option value='markhor'>markhor</option>
        <option value='mouflon'>mouflon</option>
        <option value='addax'>addax</option>
        <option value='chameleon'>chameleon</option>
        <option value='lizard'>lizard</option>
        <option value='dragon'>dragon</option>
        </select>
        <span>Number of horns</span>
        <select onChange={this.handleHorns}>
          <option value= '1'>1</option>
          <option value= '2'>2</option>
          <option value= '3'>3</option>
          <option value= '100'>100</option>

        </select>
      
        <ImageList
          something={filterCreatures}
          />
      </div>
     );
  }
}
 
export default App;