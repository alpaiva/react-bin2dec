import React from "react";
import { useState } from "react";
import binToDec from "../BinToDec";
import './DecConverter.css'

const DevConverter = () => {

    const [decimal, setDecimal] = useState('')
    const [binary, setBinary] = useState('')

    const getDecimalValue = (e) => {
        setDecimal(binToDec(e.target.value))
    }

    const clear = () => {
        setDecimal('')
        setBinary('')
    }


    return (
        <div className='main-group'>
            <div className='binaryGroup'>
                <label htmlFor='binaryNumber' >Binary Number</label>
                <input id='binaryNumber' placeholder='binary' onChange={getDecimalValue} />
            </div>
            <div className='decimalGroup'>
                <label htmlFor='decimalNumber' >Decimal Number</label>
                <input id='decimalNumber' readOnly value={decimal} />
            </div>
        </div>
    )


}

export default DevConverter;