import React, {Component} from 'react';
import {addnumber} from "../actions/actions-types";
import {connect} from "react-redux";

class KeypadNumber extends Component {

    render() {
        //get the value from this.props when we click on a number on this pad we got the value returned
        const {value} = this.props;
        return (
            <button class="btn btn-dark buttonspacing" onClick={() => this.props.addnumber(value)}><h3>{value}</h3></button>
        )
    }
}

const mapStateToProps = (state) => {return {...state }};
const mapDispatchToProps =  {addnumber};

export default connect(mapStateToProps, mapDispatchToProps)(KeypadNumber)

