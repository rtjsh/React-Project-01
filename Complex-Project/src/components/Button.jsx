// Common button

import React from "react";

function Button({
    children, // It is just like "text" as it signifies a nwe button if user creates one 
    type = 'button',
    bgColor = "bg-blue-600",
    textColor = 'text-white',
    className = '',
    ...props  
    // The ...props in the Button component is part of JavaScript's rest syntax (spread/rest operator) and is used to collect any additional properties passed to the Button component that are not explicitly defined in its parameter list.
}){
    return(
        <button className={`px-4 py-4 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    )
}

export default Button