import React, { Component } from 'react';
import images from './data.js'
import ImageList from './ImageList.js';
import Dropdown from './Dropdown.js';
import keyOptionList from './typeOptions.js';
import hornOptionList from './hornOptions.js';
import './Horned.css'

class App extends Component {
  state = { keyword: 'All', horns:"All"};
  handleType = (event) => {
    this.setState({ keyword: event.target.value });
  };
  handleHorns = (event) => {
    this.setState({ horns: event.target.value });
    }
  render() { 
    const filterCreatures = images.filter(
      (image) =>  {
        return (this.state.keyword === 'All' || this.state.keyword === image.keyword) && (this.state.horns ==='All' || Number(this.state.horns) === image.horns)
      }
        );

    return ( 
      <div className='App'>
        <Dropdown 
        label='Type'
        options={keyOptionList}
        thingHappen={this.handleType}
        />
        <Dropdown
        label='# of Horns'
        options={hornOptionList}
        thingHappen={this.handleHorns}
        />
        <ImageList
          something={filterCreatures}
          />
      </div>
     );
  }
}
 
export default App;