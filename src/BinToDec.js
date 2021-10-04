const binToDec = (binary = 0) => {

	let expo = binary.length - 1;
	let dec = 0;

	for (let b of binary) {
		dec += Math.pow(2,  expo--) * b;
	}

	return dec;
}

export default binToDec
