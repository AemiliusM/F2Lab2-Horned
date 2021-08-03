import React, { Component } from 'react';
import ImageItem from './ImageItem.js';

class ImageList extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            {this.props.something.map((item, index) => {
                return <ImageItem 
                         key={index}
                         keyword={item.keyword} 
                         image={item.url} 
                         horns={item.horns}
                         description={item.description}
                         title={item.title} />;
                // return <ImageItem key={item.horns} image={item} />;
            })}
            </>
         );
    }
}
 
export default ImageList;
