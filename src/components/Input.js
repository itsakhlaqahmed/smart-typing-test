import React from "react";

const Input = ({setInput}) => {

    
    return(
        <input type="text" autoCapitalize="off" autoCorrect="off" autoComplete="off" 
        data-gramm='false' data-gramm-editor='false' list="autocompleteOff" spellCheck='false' 
        data-enable-grammerly='false' onChange={(e)=>
            {
            setInput(e.target.value)
        }
        }/>
    )
}

export default Input;