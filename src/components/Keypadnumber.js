import React, {Component} from 'react';
import {addnumber} from "../actions/actions-types";
import {connect} from "react-redux";

class KeypadNumber extends Component {

    render() {
        const {value} = this.props;

        return (
            <button class="btn btn-dark buttonspacing" onClick={() => this.props.addnumber(value)}><h2>{value}</h2></button>
        )
    }
}

const mapStateToProps = (state) =>{return {...state }};
const mapDispatchToProps =  {addnumber};

export default connect(mapStateToProps, mapDispatchToProps)(KeypadNumber)

