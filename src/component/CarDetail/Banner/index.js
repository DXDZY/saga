import React, { Component } from 'react';

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {carConfigPicsInfo} = this.props;
        return (  
            <div>
               <textarea name="" id="" cols="30" rows="10">
                {JSON.stringify(carConfigPicsInfo)}
               </textarea>
            </div>
        )
    }
}
 
export default Banner;