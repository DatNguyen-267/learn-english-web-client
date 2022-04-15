import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './LsCourse.scss'
function LsCourse({course}) {
    
    return (
        <div className="col l-6 m-6 c-12">
            <div className="course" >
                
                <div className="course__header">
                    <div class="course__name">{course.name}</div>
                    <div className="course__part">
                        <div className="course__part-content">
                            <Link to={`/practice-listen/course/${course._id}`}>
                                <span className='span-1'>
                                    <span dangerouslySetInnerHTML={{__html: course.icon}} />
                                    Part {course.part}
                                </span>
                            </Link>
                           
                        </div>
                    </div>
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