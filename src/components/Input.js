import React, { useState } from "react";

const Input = () => {

    
    return(
        <input type="text" autoCapitalize="off" autoCorrect="off" autoComplete="off" 
        data-gramm='false' data-gramm-editor='false' list="autocompleteOff" spellCheck='false' 
        data-enable-grammerly='false' />
    )
}

export default Input;