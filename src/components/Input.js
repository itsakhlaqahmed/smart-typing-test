import React, { useEffect, useState } from "react";

const Input = ({setInput, setIsActive}) => {

    const [text, setText] = useState('');

    useEffect(() => {
        if(text[text.length-1] === ' '){
            setInput('')
            setText('');
            setIsActive((i) => i+1)
        }
    })
    
    return(
        <input type="text" value={text} autoCapitalize="off" autoCorrect="off" autoComplete="off" 
        data-gramm='false' data-gramm-editor='false' list="autocompleteOff" spellCheck='false' 
        data-enable-grammerly='false' onChange={(e)=>
            {
                let text = e.target.value;
                setInput(text)
                setText(text)

        }
        }/>
    )
}

export default Input;