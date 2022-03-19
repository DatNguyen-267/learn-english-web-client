import React from 'react';
import "./ListenHeader.scss"
function ListenHeader() {
    return (
      
        <div class="ls-header">
            <div class="grid wide ls-header-content">
                <div class="ls-header__title">
                <i class="fas fa-headphones"></i>
                    <h1>Photograph 1</h1>
                </div>
                <div class="ls-header__active">
                    <a href="/view/sign-up.html">
                        <i class="fas fa-window-close ls-header__active__close"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ListenHeader;