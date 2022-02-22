import React, { Component } from 'react';
import "./LsTopic.scss"
import LsCourse from '../LsCourse/LsCourse';
function LsTopic({topic}) {
    const listcourse = topic.list_course
    console.log("list_course:",listcourse)
    return (
        <div class="topic__item">
            <div class="topic__item__header">
                <div class="topic__item__header__title">
                    <h2>
                        {topic.name}
                    </h2>
                </div>
            </div>
            <div class="topic__item__list row">
                <div class="col l-4 m-4 c-6">
                   {
                       listcourse.map((item)=>{
                            return(
                                <LsCourse course={item}/>
                            )
                       })
                   }
                </div>
                
            </div>
        </div>
    );
}

export default LsTopic;
