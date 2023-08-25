import React, { useState } from "react";
import Word from "./components/Word";
import Input from "./components/Input";


const Home = () => {

    // const [text, setText] = useState("passing a callback to set the it breaksand it makes components".split(' '))
    const [text, setText] = useState("The primary goal of this course is to give you an excellent introduction to React and its ecosystem, tackle advanced features, and teach you as many best ".split(' '))
    const [input, setInput] = useState([]);
    const [isActive, setIsActive] = useState(0);
    // console.log(input)
    return(
        <div className="container">

            <Input setInput={setInput} setIsActive={setIsActive}></Input>
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