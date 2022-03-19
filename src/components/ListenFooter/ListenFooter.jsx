import React from 'react';
import "./ListenFooter.scss"
function ListenFooter() {
    return (
        <div class="ls-footer">
            <div class="grid wide ls-footer-content">
                <button class="btn-previous btn-main">
                    <i class="fas fa-angle-left"></i>
                    Trước
                </button>
                <div class="ls-footer__content__audio">
                    <div class="audio-player">
                        <audio
                            src="https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-61905/zapsplat_multimedia_alert_chime_short_musical_notification_cute_child_like_001_64918.mp3?_=1"></audio>
                        <div class="controls">
                            <button class="player-button">
                                <i class="fas fa-play"></i>
                            </button>
                            <span id="currentTime">00:00</span>
                            <input type="range" class="timeline" max="100" value="0"/>
                            <span id="durationTime">00:00</span>
                            <button class="sound-button">
                                <i class="fas fa-volume-up"></i>
                            </button>
                        </div>
                    </div>

                </div>
                <button class="btn-next btn-main">
                    Tiếp
                    <i class="fas fa-angle-right"></i>
                </button>

            </div>
        </div>
    );
}

export default ListenFooter;