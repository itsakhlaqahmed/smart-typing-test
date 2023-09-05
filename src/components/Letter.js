import React from "react";

const Letter = ({letter, inputLetter, setCaretX}) => {
    const color = inputLetter === letter ? '#fff' : 'grey';
    // console.log(color)
    return (
         <div onClick={e => setCaretX(e.screenX)} style={{color: `${color}`}}>{letter}</div>
            
    )
}

export default Letter;