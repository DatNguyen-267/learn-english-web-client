import React from 'react';
import "./ListenHeader.scss"
function ListenHeader({name}) {
    return (
      
        <div class="ls-header">
            <div class="grid wide ls-header-content">
                <div class="ls-header__title">
                <i class="fas fa-headphones"></i>
                    <h1>{name}</h1>
                </div>
                <div class="ls-header__active">
                    <a href="#">
                        <i class="fas fa-window-close ls-header__active__close"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ListenHeader;