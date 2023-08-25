import React, { useState } from "react";
import Word from "./components/Word";
import Input from "./components/Input";


const Home = () => {

    const [text, setText] = useState("passing a callback to set the it breaksand it makes components".split(' '))
    const [input, setInput] = useState([]);
    const [isActive, setIsActive] = useState(text.length-1);
    // console.log(input)
    return(
        <div className="container">

            <Input setInput={setInput}></Input>
            <h1>Words</h1>
            <div className="words-wrapper">
                <div className="words">
                    {
                        text.map((word, index) => {
                            return <Word key={index} word={word} input={input} isActive={index === isActive} />
                        })
                    }

                    
                    
                </div>
            </div>
        </div>
    )
}

export default Home;