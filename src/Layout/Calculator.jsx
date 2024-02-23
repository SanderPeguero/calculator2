
import React, { useState } from "react"
import Button from "../Components/Button/Button"

const Calculadora = () => {

    const [result, setResult] = useState(0)
    const [inputNumber, setinputNumber] = useState(' ')

    const handleNumberClick = (number) => {
        setinputNumber((prevInput) => prevInput + number)
    }

    const handleSuma = () => {
        console.log(inputNumber)
        setResult((prevResult) => prevResult + parseFloat(inputNumber));
        setinputNumber('');
    };

    const handleResta = () => {
        setResult((prevResult) => prevResult - parseFloat(inputNumber));
        setinputNumber('');
    };

    const handleMultiplicacion = () => {
        setResult((prevResult) => prevResult * parseFloat(inputNumber));
        setinputNumber('');
    };

    const handleDivision = () => {
        setResult((prevResult) => prevResult / parseFloat(inputNumber));
        setinputNumber('');
    };

    const handleClearClick = () => {
        setResult(" ");
        setinputNumber("");

    };

    const handleEqualsClick = (e) => {
        setResult(eval(inputNumber))
        setinputNumber('')
    }

    return (

        <div>
            <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center px-5 py-5">
                <div className="w-full mx-auto rounded-xl bg-gray-100 shadow-xl text-gray-800 relative overflow-hidden" style={{ maxWidth: 300 }} >


                    <div className="w-full h-40 bg-gradient-to-b from-gray-800 to-gray-700 flex items-end text-right">
                        <div className="w-full py-5 px-6 text-6xl text-white font-thin">
                            {inputNumber !== "" ?
                                (inputNumber.toString().includes('*') ? inputNumber.toString().replace('*', 'x') :
                                    (inputNumber.toString().includes('/') ? inputNumber.toString().replace('/', '÷') : inputNumber))
                                : result}
                        </div>
                    </div>

                    <div >
                        {/*Operadores */}
                        <div className="w-full bg-gradient-to-b from-indigo-400 to-indigo-500">
                            <div className="flex w-full">
                                <div className="w-1/4  border-r border-b  border-indigo-400">
                                    <Button
                                        onClick={() => handleClearClick()}
                                        className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-opacity-50 text-xl font-light">C</Button>
                                </div>
                                <div className="w-1/4 border-r border-b border-indigo-400">
                                    <Button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-opacity-50 text-xl font-light">+/-</Button>
                                </div>
                                <div className="w-1/4 border-r border-b  border-indigo-400">
                                    <Button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-opacity-50 text-xl font-light">%</Button>
                                </div>
                                <div className="w-1/4 border-r border-b  border-indigo-400">
                                    <Button onClick={() => handleNumberClick('/')}>÷</Button>
                                </div>

                            </div>
                            <div className="flex w-full">
                                <div className="w-1/4 border-r border-b border-indigo-400">
                                    <Button onClick={() => handleNumberClick(7)}>7</Button>
                                </div>
                                <div className="w-1/4 border-r border-b border-indigo-400">
                                <Button onClick={() => handleNumberClick(8)}>8</Button>
                                </div>
                                <div className="w-1/4 border-r border-b border-indigo-400">
                                    <Button onClick={() => handleNumberClick(9)}>9</Button>
                                </div>
                                {/*Operadores */}
                                <div className="w-1/4 border-r border-b border-indigo-400">
                                    <Button onClick={() => handleNumberClick('*')}>x</Button>
                                </div>
                            </div>

                            <div className="flex w-full">
                                <div className="w-1/4 border-r border-b border-indigo-400">
                                    <Button onClick={() => handleNumberClick(4)}>4</Button>
                                </div>
                                <div className="w-1/4 border-r border-b border-indigo-400">
                                    <Button onClick={() => handleNumberClick(5)}>5</Button>
                                </div>
                                <div className="w-1/4 border-r border-b border-indigo-400">
                                    <Button onClick={() => handleNumberClick(6)}>6</Button>
                                </div>
                                {/*Operadores */}
                                <div className="w-1/4 border-r border-b border-indigo-400">
                                    <Button onClick={() => handleNumberClick('-')}>-</Button>
                                </div>
                            </div>

                            <div className="flex w-full">
                                <div className="w-1/4 border-r border-b border-indigo-400">
                                    <Button onClick={() => handleNumberClick(1)}>1</Button>
                                </div>
                                <div className="w-1/4 border-r border-b border-indigo-400">
                                    <Button onClick={() => handleNumberClick(2)}>2</Button>
                                </div>
                                <div className="w-1/4 border-r border-b border-indigo-400">
                                    <Button onClick={() => handleNumberClick(3)}>3</Button>
                                </div>
                                {/*Operadores */}
                                <div className="w-1/4 border-r border-b border-indigo-400">
                                    <Button onClick={() => handleNumberClick('+')}>+</Button>
                                </div>
                            </div>

                            <div className="flex w-full">
                                <div className="w-1/4 border-r border-indigo-400">
                                    <Button onClick={() => handleNumberClick(0)}>0</Button>
                                </div>
                                <div className="w-1/4 border-r border-indigo-400">
                                    <Button onClick={() => handleNumberClick(".")}>.</Button>
                                </div>
                                {/*Operadores */}
                                <div className="w-2/4 border-r border-indigo-400">
                                    <Button onClick={handleEqualsClick}>=</Button>
                                </div>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}


export default Calculadora