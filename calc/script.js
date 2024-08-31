"use strict";
let $ = document;

const ChangerButton = $.querySelector('.fa-bars');
const body = $.querySelector('.theme1')


let styleIndex = 0;
const styles = ['theme1', 'theme2', 'theme3' , 'theme4']; // styles array

function changeStyle() {
    styleIndex = (styleIndex + 1) % styles.length;
    document.body.className = styles[styleIndex];
}

ChangerButton.addEventListener('click' , changeStyle);


