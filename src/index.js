import _ from 'lodash'
import './style.css'
import imgUrl from "./webpack-icon.png"
function component (){
    const element = document.createElement('div');

    element.innerHTML= _.join (['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const myImage = new Image ();
    myImage.src = imgUrl;
    document.body.appendChild(myImage)
    return element
}
document.body.appendChild(component())