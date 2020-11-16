document.getElementById("register").onclick = function (){
	verifyInputs(document.getElementById("user").value, document.getElementById("password").value)
}
function getOrSetUser(user, password){
	if (localStorage.getItem(`${user}`) == "undefined" || localStorage.getItem(`${user}`) == null){
		localStorage.setItem(`${user}`, `${password}`)
		alert("Usuário cadastrado com sucesso")
	} else{
		alert("Esse usuário já está cadastrado")
	}
}