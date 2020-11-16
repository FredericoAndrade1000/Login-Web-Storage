document.getElementById("login").onclick = function (){
	verifyInputs(document.getElementById("user").value, document.getElementById("password").value)
}
function getOrSetUser(user, password){
	if(localStorage.getItem(`${user}`) == password){
		alert(`Bem-vindo, ${user}!`)
	} else{
		alert("Usuário não encontrado")
	}
}