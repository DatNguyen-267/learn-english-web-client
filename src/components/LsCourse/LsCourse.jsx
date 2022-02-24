import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './LsCourse.scss'
function LsCourse({course}) {
    return (
        <div className="col l-4 m-4 c-6">
            <div className="course" >
                <div className="course__header">
                    <div className="course__learning">
                        Đã xem
                    </div>
                    <Link to={`/practice-listen/${course._id}/part`}>
                        <div className="course__name">
                            <div className="course__name-content">
                                <span>
                                    {course.name}
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="course__body">
                    <div className="course__info">
                        <div className="course__lesson-number">{course.amount_part} lesson</div>
                    </div>
                </div>
            </div>   
        </div>
    );
}

export default LsCourse;