import React from 'react';
import {FaFreeCodeCamp} from "react-icons/all";

const Preview = ({text,marked}) => {
    return (
        <div className='preview'>
            <div className="header">
                <div className="left ">
                    <FaFreeCodeCamp/>
                    <h3>Preview</h3>
                </div>

            </div>
            <div className="textPreview">
                <div dangerouslySetInnerHTML={{__html: marked(text)}}/>
            </div>

        </div>
    );
};

export default Preview;
