import React, {Component} from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div className="App">
                <Typography variant={"h1"}>Plotcenter</Typography>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {...state};
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
