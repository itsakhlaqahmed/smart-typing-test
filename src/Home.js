import React, { useEffect, useState } from "react";
import Word from "./components/Word";
import Input from "./components/Input";
import Nav from "./Nav";


const Home = () => {
    
    const txt = 'In the great temple at Benares beneath the dome which marks the centre of the world, rests a brass plate in which are fixed three diamond needles, each a cubit high and as thick as the body of a bee. On one of these needles, at the creation, God placed sixty-four discs of pure gold, the largest disc resting on the brass plate, and the others getting smaller and smaller up to the top one. This is the Tower of Bramah. Day and night unceasingly the priests transfer the discs from one diamond needle to another according to the fixed and immutable laws of Bramah, which require that the priest on duty must not move more than one disc at a time and that he must place this disc on a needle so that there is no smaller disc below it.'
    const [caret, setCaret] = useState({X: 0, Y: 0});
    const [text, setText] = useState([txt.split(' ')]);
    const [inputText, setInputText] = useState([]);
    const [currentInput, setCurrentInput] = useState();
    const [activeWordIndex, setActiveWordIndex] = useState(0);

    useEffect(() => {
        setText((txt.split(' ')).map((word) => {
            return {word, isTouched: false, correct: false}
        })
        )
    }, [])

    useEffect(() => {
        if (currentInput  !== '' && currentInput === '-1xx'){  // '-1xx' is backspacecode
            if (currentInput === text[activeWordIndex].word){
                text[activeWordIndex].word = true;
            }
            setInputText([...inputText, currentInput])
            setCurrentInput('');
            setActiveWordIndex((index) => index+1)
            console.log(inputText)
        }
        
        if (currentInput === '-1xx' && activeWordIndex > 0){
            let lastWord = text[activeWordIndex - 1] // last typed index
            if (!lastWord.correct){
                text[activeWordIndex].isTouched = false;
                setActiveWordIndex(activeWordIndex - 1);
            }
        }
    }, [currentInput, inputText])

    return(
        <div className="container overflow-hidden">
            <Nav />
            <Input setCurrentInput={setCurrentInput}></Input>
            <h1>Words</h1>
            {/* <div className="words-wrapper mx-32 overflow-hidden">
                <div className="words flex  box-border flex-wrap overflow-hidden h-32 relative"> */}
                    {/* <div className="caret h-7 w-0.5 bg-orange-500 text-2xl/7 my-1.5 absolute" style={{left: `${caret.X}px`}}></div> */}
                    {/* {
                        text.map((word, index) => {
                            return <Word setCaretX={''} key={index} word={word} input={currentInput} isActive={index === activeWordIndex} />
                        })
                    }
                    </div>
            </div> */}
        </div>
    )
}

export default Home;