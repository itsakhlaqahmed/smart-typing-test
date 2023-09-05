import React, { useState } from "react";

const Input = ({setCurrentInput}) => {

    const [input, setInput] = useState('');

    const inputHandler = (e) => {
        if(e.key === 'Backspace'){
            // handle backspace press
            setCurrentInput('-1xx')
        }
        if (e.key === ' '){
            setCurrentInput(input.trim());
            setInput('')
        }
    }
    
    return(
        <input className="border-solid mt-4 w-1/4 border-white border-2" type="text" value={input} autoCapitalize="off" autoCorrect="off" autoComplete="off" 
        data-gramm='false' data-gramm-editor='false' list="autocompleteOff" spellCheck='false' 
        data-enable-grammerly='false' onChange={(e)=> setInput(e.target.value)} onKeyUp={inputHandler} autoFocus
        />
    )
}

export default Input;