import React, { useState } from 'react'
import { Checkboxes } from './passwordsInfo/Checkboxes';
// import { InputsInfo } from './passwordsInfo/InputsInfo';

export const SideBar = (
    { 
        checkboxStates, 
        handleCheckboxChange, 
        inputValueStates, 
        handleInputChange, 
        generatePassword,
        passwords
    }
    
    ) => {

    const getStateCheckbox = () => {
        console.log(checkboxStates)
    }

    const proverka = () => {
        console.log(inputValueStates);
    }

    const proverka2 = () => {
        console.log(passwords)
    }

    return (
        <div className="sidebar">
            <h2 className="sidebar__title">Генератор паролей</h2>
            <div className="sidebar__inputs">
                {/* <InputsInfo 
                    inputValueStates={inputValueStates}
                    handleInputChange={handleInputChange}
                /> */}
            <div>
                <div>
                    <div>
                        <h3>Длина пароля</h3>
                        <input 
                            type="text" 
                            placeholder='Количество символов'
                            id="passwordLength"
                            onChange={handleInputChange}
                        />
                        <p>символов</p>
                    </div>
                    <div>
                        <h3>Количество</h3>
                        <input 
                            type="text" 
                            placeholder='Количество паролей'
                            id="passwordCount"
                            onChange={handleInputChange}
                        />
                        <p>паролей</p>
                    </div>
                </div>
            </div>
            </div>
            <div className="sidebar__checkboxes">
                {
                    checkboxStates.map((checkbox, index) => (
                        <Checkboxes 
                            id={checkbox.id} 
                            value={checkbox.value}
                            checked={checkbox.state}
                            info={checkbox.info}
                            handleCheckboxChange={handleCheckboxChange}
                            key={index}
                        />
                        )
                    )
                }
                <button onClick={generatePassword}>Сгенерировать пароли</button>

            </div>
        </div>
    )
}