function verifyInputs(user, password){
	if (user != ""){
		if (password != ""){
			getOrSetUser(user, password)
			
		} else{
			alert("Preencha o campo de senha")
			
		}
	}else{
		alert("Preencha o campo de usuário")
	}
}