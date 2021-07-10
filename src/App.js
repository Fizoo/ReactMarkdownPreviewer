import './App.css';
import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Editor from "./component/Editor";
import Preview from "./component/Preview";
import {placeholder} from "./component/placeholder";


let marked = require('marked')

function App() {

    const [text, setText] = useState(placeholder)
    const [showA, setShowA] = useState(true);
    const [classNames, setClassNames] = useState('')

    const expander = () => {
        setShowA(!showA);
        showA ? setClassNames('men') : setClassNames('')
    }
    const handleChange = (e) => {
        setText(e.target.value);
    }
    return (
        <div className='main'>
            <Editor expander={expander}
                    handleChange={handleChange}
                    text={text}
                    classNames={classNames}
            />
            {showA &&
            <Preview
                marked={marked}
                text={text}/>
            }

        </div>
    )
}


export default App;
