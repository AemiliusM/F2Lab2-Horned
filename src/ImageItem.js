import React, { Component } from 'react';

class ImageItem extends Component {
    state = {};
    render() { 
        return ( 
            <p>
                <p>Title:{this.props.title}</p>
                <p>Type:{this.props.keyword}</p>
                <p>Horns:{this.props.horns}</p>
                <img
                alt={this.props.keyword}
                width='100'
               src={this.props.image} 
                />
               <p><span>Description:{this.props.description}</span></p>
            </p>
         );
    }
}
 
export default ImageItem;