import React from 'react';
import '../App.css';
import {FaFreeCodeCamp, HiArrowsExpand} from "react-icons/all";

const Editor = ({expander,handleChange,text,classNames}) => {
    return (
        <div className='editor'>
            <div className='header'>
                <div className="left ">
                    <FaFreeCodeCamp/>
                    <h3>Editor</h3>
                </div>
                <button onClick={expander}><HiArrowsExpand/></button>


            </div>
            <div className='text'>
                <textarea rows={15} value={text} onChange={handleChange} className={classNames}/>
            </div>
        </div>
    );
};

export default Editor;
