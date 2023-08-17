const executorFunction = (resolve, reject) =>{
	const isCoffeMachineReady = false
			
	if (isCoffeMachineReady){
		resolve('Kopi berhasil di buat');
	}else{
		reject('Mesin kopi tidak dapat di gunakan!');
	}
};

const handlerSuccess = resolvedValue => {
	console.log(resolvedValue);
}
const handlerRejected = rejectedValue =>{
	console.log(rejectedValue);
}
const buatKopi = new Promise(executorFunction);
buatKopi.then(handlerSuccess, handlerRejected);