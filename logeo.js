function Logear(){
    alert("dentro de log")
    var usuarioLogin = document.getElementById("usuarioLogin").value;
    var contraLogin = document.getElementById("contraLogin").value;
    var Array = JSON.parse(localStorage.getItem("Usuario"));

    for(var i = 0; i<Array.length; i++){
        alert("dentro del for")
        alert(usuarioLogin);
        alert(Array[i].usuario); 
        if(usuarioLogin == Array[i].usuario && contraLogin == Array[i].Contra){
         window.open("Principal.html");   
        //window.open("JaimeRecuero.html");

        }else{
        alert("NO ESTAS LOGEADO LOKETE");
    }
}
}
