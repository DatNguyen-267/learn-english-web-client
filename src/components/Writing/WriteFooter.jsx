import React, { useEffect } from 'react';
import "./WriteFooter.scss"
function WriteFooter({onClickNext, onClickPre, question_playing, length, list_question}) {
    
    const onclickNext = ()=>{
        console.log("footer: ", question_playing, " - ", length)
        onClickNext({
            question_playing,
            length
        })
    }
    const onclickPre = ()=>{
        console.log("footer: ", question_playing, " - ", length)
        onClickPre({
            question_playing,
            length
        })
    }
   
    return (
        <div class="write-footer">
            <div class="grid wide write-footer-content">
                <a href='#' class="btn-previous btn-main" onClick={onclickPre} id='btn-scroll-left'>
                    <i class="fas fa-angle-left"></i>
                    <span> Pre</span>
                </a>
                <div className='num-question'>
                    <span>
                        {length>0 ? question_playing+1: 0} / {length}
                    </span>
                </div>
                <a href='#' class="btn-next btn-main" onClick={onclickNext} id="btn-scroll-right">
                    <span>Next</span>
                    <i class="fas fa-angle-right"></i>
                </a>

            </div>
        </div>
    );
}

export default WriteFooter;