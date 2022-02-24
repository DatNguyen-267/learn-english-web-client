import React, { Component } from 'react';
import "./LsPart.scss"
import LsCourse from '../LsCourse/LsCourse';
function LsPart({part}) {
    
    return (
        <div className="col l-6 m-6 c-12">
            <div className="part" >
                <div className="part__header">
                    <div className="part__name">{part.name}</div>
                    <div className="part__learned">
                        Đã xem
                    </div>
                    <div className="part__question-number"><span>6</span> questions</div>
                </div>
                <div className="part__body">
                    <div className="part__info">
                        <div className="part__source">
                            <i className="fas fa-book"></i>
                            {part.source}
                        </div>
                        <div className="part__person-number">
                            <i className="fas fa-users"></i>
                            <span>{part.follow}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LsPart;
