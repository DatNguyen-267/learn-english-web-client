import React, { Component } from 'react';
import './LsCourse.scss'
function LsCourse({course}) {
    
    return (
        <div class="course" >
            <div class="course__header">
                <div class="course__name">{course.name}</div>
                <div class="course__learning">
                    Đã xem
                </div>
                <div class="course__part">
                    {course.name}
                </div>
            </div>
            <div class="course__body">
                <div class="course__info">
                    <div class="course__lesson-number">{course.amount_part} lesson</div>
                </div>
            </div>
        </div>
    );
}

export default LsCourse;