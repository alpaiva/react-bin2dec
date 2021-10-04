import React from "react";
import { Component } from "react";
import binToDec from "../BinToDec";
import './DecConverter.css'

export class DevConverter extends Component {

    state = {
        decimal: '',
        binary: ''
    }

    constructor() {
        super();
        this.getDecimalValue = this.getDecimalValue.bind(this)
        this.clear = this.clear.bind(this)
    }

    getDecimalValue(e) {
        console.log(e.target.value)
        this.setState({ decimal: binToDec(e.target.value) })
    }

    clear(){
        this.setState({ binary: '', decimal: '' })
    }

    render() {
        return (
            <div className='main-group'>
                <div className='binaryGroup'>
                    <label htmlFor='binaryNumber' >Binary Number</label>
                    <input id='binaryNumber' placeholder='binary' onChange={this.getDecimalValue}  />
                </div>
                <div className='decimalGroup'>
                    <label htmlFor='decimalNumber' >Decimal Number</label>
                    <input id='decimalNumber' readOnly value={this.state.decimal} />
                </div>
            </div>
        )
    }

}

export default DevConverter;