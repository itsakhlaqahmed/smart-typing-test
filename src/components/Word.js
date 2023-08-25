import React from "react";
import Letter from "./Letter";


const Word = ({word}) => {
    
    return (
        <div className="word">
           {
            [...word].map((letter, index) => {
                return <Letter key={index} letter={letter} correct={true}></Letter>
            })
           }
        </div>
    )
}

// input here
// 

export default Word;