import React from "react";
import Letter from "./Letter";


const Word = ({word, input, isActive}) => {
    
    return (
        <div className="word">
           {
            [...word].map((letter, index) => {
                return <Letter key={index} letter={letter} correct={true} inputLetter={isActive && input[index]}></Letter>
            })
           }
        </div>
    )
}

// input here
// 

export default Word;