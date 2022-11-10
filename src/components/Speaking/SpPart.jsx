import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./SpPart.scss"
function LsPart({ part, handleClick, name }) {
    const onClick = () => {
        handleClick(part, name)
    }
    return (
        <div className="col l-4 m-6 c-12">
            <div className="sp_part" onClick={onClick} >
                <div className="sp_part__header">
                    <div className="sp_part__name">
                        <div className='name__icon'>
                            <i className="fas fa-book"></i>
                        </div>
                        <div className='name__content'>
                            <span>
                                {name}
                            </span>
                        </div>
                    </div>

                </div>
                <div className="sp_part__body">
                    <div className="sp_part__info">
                        <div className="sp_part__question-number"><span>{part.amount_question}</span> questions</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LsPart;
