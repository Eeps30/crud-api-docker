import React from 'react';
import axios from 'axios';

class LandingPage extends React.Component {
    componentDidMount() {
        this.getData();
    }

    getData() {
        axios.get('https://api.spacexdata.com/v3/launches')
            .then(res => {
                console.log(res);
            })
    }

    render() {
        return(
            <div>Hello</div>
        )
    }
};

export default LandingPage;