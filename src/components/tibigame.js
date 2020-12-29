import React from "react";
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';

import ScriptTag from 'react-script-tag';
import "./tibigame.css"
import apple from './img/apple.png'
import {Helmet} from "react-helmet";




class TibiGame extends React.Component{
    render(){
        return (

            <section>



                <div className="row">
                    <div className="col-full instructions">
                        <h1>Your score is <span id="score">0</span>/10.</h1>
                        <h1>Tibi vagyok a hegyrol megbaszlak egybol</h1>
                        <h3>Score will be calculated based on how many icons you got right!</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-half instructions">
                        <h1>Drop the icons into the right place.</h1>
                        <h3>You'll be told whether you get the answer right or wrong.</h3>
                    </div>
                    <div className="col-half instructions">
                        <h1>Drag the icons from the container below.</h1>
                        <h3>You may drag the fruits/vegetables back into this container in case you need to rearrange.</h3>
                    </div>
                </div>
                <div className="row">
                    <div id="dropzone-holder" className="col-half">
                        <div className="col-quarter hitbox">
                            <img className="answer hide" src="img/correct-green.png"/>
                            <div id="dropzone-apple" className="dropzone" onDragEnter="return enter(event)"
                                 onDragOver="return over(event)" onDrop="return drop(event)">
                            </div>
                        </div>
                        <div className="col-quarter hitbox">
                            <img className="answer hide" src="img/correct-green.png"/>
                            <div id="dropzone-bananas" className="dropzone" onDragEnter="return enter(event)"
                                 onDragOver="return over(event)" onDrop="return drop(event)">
                            </div>
                        </div>
                        <div className="col-quarter hitbox">
                            <img className="answer hide" src="img/correct-green.png"/>
                            <div id="dropzone-carrot" className="dropzone" onDragEnter="return enter(event)"
                                 onDragOver="return over(event)" onDrop="return drop(event)">
                            </div>
                        </div>
                        <div className="col-quarter hitbox">
                            <img className="answer hide" src="img/correct-green.png"/>
                            <div id="dropzone-cherries" className="dropzone" onDragEnter="return enter(event)"
                                 onDragOver="return over(event)" onDrop="return drop(event)">
                            </div>
                        </div>
                        <div className="col-quarter hitbox">
                            <img className="answer hide" src="img/correct-green.png"/>
                            <div id="dropzone-grapes" className="dropzone" onDragEnter="return enter(event)"
                                 onDragOver="return over(event)" onDrop="return drop(event)">
                            </div>
                        </div>
                        <div className="col-quarter hitbox">
                            <img className="answer hide" src="img/correct-green.png"/>
                            <div id="dropzone-lemon" className="dropzone" onDragEnter="return enter(event)"
                                 onDragOver="return over(event)" onDrop="return drop(event)">
                            </div>
                        </div>
                        <div className="col-quarter hitbox">
                            <img className="answer hide" src="img/correct-green.png"/>
                            <div id="dropzone-pear" className="dropzone" onDragEnter="return enter(event)"
                                 onDragOver="return over(event)" onDrop="return drop(event)">
                            </div>
                        </div>
                        <div className="col-quarter hitbox">
                            <img className="answer hide" src="img/correct-green.png"/>
                            <div id="dropzone-strawberry" className="dropzone" onDragEnter="return enter(event)"
                                 onDragOver="return over(event)" onDrop="return drop(event)">
                            </div>
                        </div>
                        <div className="col-quarter hitbox">
                            <img className="answer hide" src="img/correct-green.png"/>
                            <div id="dropzone-tomato" className="dropzone" onDragEnter="return enter(event)"
                                 onDragOver="return over(event)" onDrop="return drop(event)">
                            </div>
                        </div>
                        <div className="col-quarter hitbox">
                            <img className="answer hide" src="img/correct-green.png"/>\
                            <div id="dropzone-watermelon" className="dropzone" onDragEnter="return enter(event)"
                                 onDragOver="return over(event)" onDrop="return drop(event)">
                            </div>
                        </div>

                    </div>
                    <div className="col-half hitbox">
                        <div id="dropzone-container" className="dropzone container" onDragEnter="return enter(event)"
                             onDragOver="return over(event)" onDrop="return drop(event)">
                            <img id="icon-apple" className="icon" draggable="true" onDragStart="return start(event)"
                                 onDragEnd="return end(event)" src={apple} />
                            <img id="icon-bananas" className="icon" draggable="true" onDragStart="return start(event)"
                                 onDragEnd="return end(event)" src="img/bananas.png"/>
                            <img id="icon-carrot" className="icon" draggable="true"
                                 onDragStart="return start(event)" onDragEnd="return end(event)"
                                 src="img/carrot.png"/>
                            <img id="icon-cherries" className="icon" draggable="true"
                                 onDragStart="return start(event)" onDragEnd="return end(event)"
                                 src="img/cherries.png"/>
                            <img id="icon-grapes" className="icon" draggable="true"
                                 onDragStart="return start(event)" onDragEnd="return end(event)"
                                 src="img/grapes.png"/>
                            <img id="icon-lemon" className="icon" draggable="true"
                                 onDragStart="return start(event)" onDragEnd="return end(event)"
                                 src="img/lemon.png"/>
                            <img id="icon-pear" className="icon" draggable="true"
                                 onDragStart="return start(event)" onDragEnd="return end(event)"
                                 src="img/pear.png"/>
                            <img id="icon-strawberry" className="icon" draggable="true"
                                 onDragStart="return start(event)" onDragEnd="return end(event)"
                                 src="img/strawberry.png"/>
                            <img id="icon-tomato" className="icon" draggable="true"
                                 onDragStart="return start(event)"
                                 onDragEnd="return end(event)" src="img/tomato.png"/>
                            <img id="icon-watermelon" className="icon" draggable="true"
                                 onDragStart="return start(event)"
                                 onDragEnd="return end(event)" src="img/watermelon.png"/>

                        </div>
                    </div>
                </div>








            </section>


        );
    }



}

export default TibiGame;