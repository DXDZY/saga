import React, { Component } from 'react';
class carDetail extends Component {
    static defaultProps = {
        data:[],
    }
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
        this.props.getCarDetail();
    }
    render() { 
        const {data} = this.props;
        return (  
            <div>
                {JSON.stringify(data)}
            </div>
        )
    }
}
 
export default carDetail;