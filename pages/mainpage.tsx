import React, { useState } from 'react';
import Router from 'next/router';

export default function MainPage() {
    const [objects, setObjects] = useState("2");
    const [values, setValues] = useState(1);
    const [buttonUpIsActive, setButtonUpIsActive] = useState(true);
    const [buttonDownIsActive, setButtonDownIsActive] = useState(false);
    const paramsArray = [1, 9, 19, 50, 99, 999];
    const direction = buttonUpIsActive;
    function handleChangeObjects(evt: React.ChangeEvent<HTMLInputElement>) {
        setObjects(evt.target.value)
    }
    function handleChangeValues(evt: React.ChangeEvent<HTMLInputElement>) {
        const value = parseInt(evt.target.value);
        setValues(paramsArray[value])
    }
    function handleToggleActiveButton() {
        setButtonUpIsActive(!buttonUpIsActive)
        setButtonDownIsActive(!buttonDownIsActive)
    }
    function playGameSubmitButton() {
        Router.push(`play/${direction}/${objects}/${values}`)
    }
    return (
        <>
            <div className="mainpage">
            <div className="overlay">
            <div className="select">
                <div className="menu menu_objects">
                    <h2 className="select__title">Кол-во предметов</h2>
                    <ul className="menu__parameters menu__parameters_objects">
                        <li className="menu__parameter">2</li>
                        <li className="menu__parameter">3</li>
                        <li className="menu__parameter">4</li>
                        <li className="menu__parameter">5</li>
                    </ul>
                    <input className="select__range" type="range" min="2" max="5" step="1" onChange={handleChangeObjects} defaultValue={objects}></input>
                </div>
                <div className="menu menu_values">
                    <h2 className="select__title">Значения</h2>
                    <ul className="menu__parameters menu__parameters_values">
                        <li className="menu__parameter">A</li>
                        <li className="menu__parameter">9</li>
                        <li className="menu__parameter">19</li>
                        <li className="menu__parameter">50</li>
                        <li className="menu__parameter">99</li>
                        <li className="menu__parameter">999</li>
                    </ul>
                    <input className="select__range" type="range" min="0" max="5" step="1" onChange={handleChangeValues} defaultValue={values - 1}></input>
                </div>
                <div className="button__container">
                    <button onClick={handleToggleActiveButton} className={buttonUpIsActive ? "select__button select__button_active" : "select__button"}>По возрастанию</button>
                    <button onClick={handleToggleActiveButton} className={buttonDownIsActive ? "select__button select__button_active" : "select__button"}>По убыванию</button>
                </div>
                <button onClick={playGameSubmitButton} className="play__button">Играть</button>
            </div>
            </div>
        </div>
        </>
    )
}