import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./WrPart.scss"
function WrPart({ part, handleClick, name }) {
    const onClick = () => {
        handleClick(part, name)
    }
    return (
        <div className="col l-4 m-6 c-12">
            <div className="wr_part" onClick={onClick} >
                <div className="wr_part__header">
                    <div className="wr_part__name">
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
                <div className="wr_part__body">
                    <div className="wr_part__info">
                        <div className="wr_part__question-number"><span>{part.amount_question}</span> questions</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WrPart;
