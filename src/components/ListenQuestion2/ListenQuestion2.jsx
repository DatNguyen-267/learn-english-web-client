
import React from 'react';
import "./ListenQuestion2.scss"
function ListenQuestion2() {
    return (
        <div class="question-2-item">
            <div class="question-2-item__content">
                <div class="min-question">
                    <h2 class="min-question__title">
                        Câu 1.
                        <span class="min-question__title__content">
                            What is he doing?
                        </span>
                    </h2>
                    <div class="min-question__answers row">
                        <div class="col l-12 m-12 c-12">
                            <div class="answers-item" data-value="true">
                                <div class="answers-item__radio">
                                    <input type="radio" name="radio"id="radio1"/>
                                </div>
                                <div class="answers-item__title">
                                    <h2> A</h2>
                                </div>
                                <div class="answers-item__content">
                                    He is playing soccer
                                </div>
                            </div>
                        </div>
                        <div class="col l-12 m-12 c-12">
                            <div class="answers-item" >
                                <div class="answers-item__radio">
                                    <input type="radio" name="radio"id="radio1"/>
                                </div>
                                <div class="answers-item__title">
                                    <h2>B</h2>
                                </div>
                                <div class="answers-item__content">
                                    He is swimming
                                </div>
                            </div>
                        </div>
                        <div class="col l-12 m-12 c-12">
                            <div class="answers-item" >
                                <div class="answers-item__radio">
                                    <input type="radio" name="radio"id="radio1"/>
                                </div>
                                <div class="answers-item__title">
                                    <h2> C</h2>
                                </div>
                                <div class="answers-item__content">
                                    He is studying
                                </div>
                            </div>
                        </div>
                        <div class="col l-12 m-12 c-12">
                            <div class="answers-item" >
                                <div class="answers-item__radio">
                                    <input type="radio" name="radio"id="radio1"/>
                                </div>
                                <div class="answers-item__title">
                                    <h2> D</h2>
                                </div>
                                <div class="answers-item__content">
                                    He is playing basketball
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    );
}

export default ListenQuestion2;