import React from "react";

//creation alertmessage in order to alert user if it's a good or false answer, this will switch color
const Alertmessage = ({children, color}) => {
    //check if !color => switch between blue and green ->succes -> red when false
    if(!color) color = "primary";
    return(
        //create alert message + color assignement
        <div className={`alert alert-${color}`}>
            {children}
        </div>
    )
};

//export the altermessage in order to reuse it late
export default Alertmessage;