import React from "react";

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

export default Alertmessage;