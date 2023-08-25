import React, { useState } from "react";
import Word from "./components/Word";
import Input from "./components/Input";


const Home = () => {

    const [text, setText] = useState("passing a callback to set the it breaksand it makes components".split(' '))
    console.log(text)
    return(
        <div className="container">

            <Input></Input>
            <div className="words-wrapper">
                <div className="words">
                    {
                        // text.map((word) => {
                        //     return <Word word={word} />
                        // })
                    }

                    <h1>Words</h1>
                    <Word word={'abc'}/>
                    
                </div>
            </div>
        </div>
    )
}

export default Home;