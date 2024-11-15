import React from "react";
import { useState } from "react";
import binToDec from "../BinToDec";
import './DecConverter.css'

const DevConverter = () => {

    const [decimal, setDecimal] = useState('')
    const [binary, setBinary] = useState('')

    const handleNumbers = (e) => {
        let value = e.target.validity.valid ? e.target.value : binary
        setBinary(value)
        setDecimal(binToDec(value))
    }

    const clear = () => {
        setDecimal('')
        setBinary('')
    }


    return (
        <div className='main-group'>
            <div className='binaryGroup'>
                <label htmlFor='binaryNumber' >Binary Number</label>
                <input id='binaryNumber' placeholder='binary' type="text" pattern="[0-1]*" onChange={handleNumbers} value={binary}/>
            </div>
            <div className='decimalGroup'>
                <label htmlFor='decimalNumber' >Decimal Number</label>
                <input id='decimalNumber' readOnly value={decimal} />
            </div>
            <button onClick={clear}>Clear</button>
        </div>
    )


}

export default DevConverter;