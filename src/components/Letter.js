import React from "react";

const Letter = ({letter, inputLetter}) => {
    const color = inputLetter === letter ? '#fff' : 'red';
    console.log(color)
    return (
         <letter style={{color: `${color}`}}>{letter}</letter>
            
    )
}

export default Letter;