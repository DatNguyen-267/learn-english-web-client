import React, { useEffect } from 'react';
import "./ListenFooter.scss"
function ListenFooter({onClickNext, onClickPre, question_playing, length, list_question}) {
    
    const playerButton = document.querySelector('.player-button'),
        audio = document.querySelector('audio'),
        timeline = document.querySelector('.timeline'),
        soundButton = document.querySelector('.sound-button'),
        playIcon = `<i class="fas fa-play"></i>`,
        pauseIcon = `<i class="fas fa-pause"></i>`,
        soundIcon = ` <i class="fas fa-volume-up"></i>`,
        muteIcon = `<i class="fas fa-volume-mute"></i>`;
    var currentTime = document.getElementById('currentTime'),
        durationTime = document.getElementById('durationTime');

    const toggleAudio=()=> {
        if (audio.paused) {
            audio.play();
            playerButton.innerHTML = pauseIcon;
            setInterval(timeUpdateMusic, 100);
        } else {
            audio.pause();
            playerButton.innerHTML = playIcon;
        }
    }

    const timeUpdateMusic=()=> {

        let durmin = Math.floor(audio.duration / 60);
        let dursec = Math.floor(audio.duration - durmin * 60);
        let curmin = Math.floor(audio.currentTime / 60);
        let cursec = Math.floor(audio.currentTime - curmin * 60);
        if (durmin < 10) {
            durmin = "0" + durmin;
        }
        if (dursec < 10) {
            dursec = "0" + dursec;
        }
        if (curmin < 10) {
            curmin = "0" + curmin;
        }
        if (cursec < 10) {
            cursec = "0" + cursec;
        }
        // Thời gian toàn bộ của bài nhạc
        durationTime.innerHTML = durmin + ":" + dursec;
        // Thời gian hiện tại của bài nhạc
        currentTime.innerHTML = curmin + ":" + cursec;
    }
    const changeTimelinePosition=()=> {
        const percentagePosition = (100 * audio.currentTime) / audio.duration;
        timeline.style.backgroundSize = `${percentagePosition}% 100%`;
        timeline.value = percentagePosition;
    }

    const audioEnded=()=> {
        playerButton.innerHTML = playIcon;
    }
    const changeSeek=()=> {
        const time = (timeline.value * audio.duration) / 100;
        audio.currentTime = time;

    }
    const toggleSound=()=> {
        audio.muted = !audio.muted;
        soundButton.innerHTML = audio.muted ? muteIcon : soundIcon;
    }
    const onclickNext = ()=>{
        console.log("footer: ", question_playing, " - ", length)
        onClickNext({
            question_playing,
            length
        })
        
        const percentagePosition = (100 * 0) / audio.duration;
        timeline.style.backgroundSize = `${percentagePosition}% 100%`;
        timeline.value = percentagePosition;
        
        
    }
    const onclickPre = ()=>{
        console.log("footer: ", question_playing, " - ", length)
        onClickPre({
            question_playing,
            length
        })
        const percentagePosition = (100 * 0) / audio.duration;
        timeline.style.backgroundSize = `${percentagePosition}% 100%`;
        timeline.value = percentagePosition;
        
    }
    return (
        <div class="ls-footer">
            <div class="grid wide ls-footer-content">
                <button class="btn-previous btn-main" onClick={onclickPre} id='btn-scroll-left'>
                    <i class="fas fa-angle-left"></i>
                    Trước
                </button>
                <div class="ls-footer__content__audio">
                    <div class="audio-player">
                        <audio onTimeUpdate={changeTimelinePosition} onEnded={audioEnded}
                            src={(length>0 && list_question[question_playing].sound) ? list_question[question_playing].sound:""}></audio>
                        <div class="controls">
                            <button class="player-button" onClick={toggleAudio}>
                                <i class="fas fa-play"></i>
                            </button>
                            <span id="currentTime">00:00</span>
                            <input type="range" class="timeline" max="100" value="0" onChange={changeSeek}/>
                            <span id="durationTime">00:00</span>
                            <button class="sound-button" onClick={toggleSound}>
                                <i class="fas fa-volume-up"></i>
                            </button>
                        </div>
                    </div>

                </div>
                <button class="btn-next btn-main" onClick={onclickNext} id="btn-scroll-right">
                    Tiếp
                    <i class="fas fa-angle-right"></i>
                </button>

            </div>
        </div>
    );
}

export default ListenFooter;