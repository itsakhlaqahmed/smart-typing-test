import React from "react";
import Letter from "./Letter";


const Word = ({word, input, isActive, setCaretX}) => {
    
    return (

        <div className="word text-2xl/7 flex m-1.5"> 
            {
                [...word].map((letter, index) => {
                    const color =  'grey';
                    // console.log(color)
                    return (
                        <div onClick={e => setCaretX(e.screenX)} style={{color: `${color}`}}>{letter}</div>
                            
                    )
                     // return <Letter setCaretX={setCaretX} key={index} letter={letter} correct={true} inputLetter={isActive && input[index]}></Letter>
                })
            }
        </div>

    )
}

// input here
// 

export default Word;