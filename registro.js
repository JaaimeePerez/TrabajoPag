class Usuario{

    constructor(Nombre, Apellido, Usuario, Contra, Email, FechaNac, ID){
    this.Nombre = Nombre;
    this.Apellido = Apellido;
    this.Usuario = Usuario;
    this.Contra = Contra;
    this.Email = Email;
    this.FechaNac = FechaNac;
    this.ID = ID;
    this.conn = false;
    }
}


if (localStorage.getItem("Usuario") == null){
    localStorage.setItem("Usuario", JSON.stringify([]))
}

function registro(){

    var Nombre = document.getElementById("Nombre").value;
    var Apellido = document.getElementById("Apellido").value;
    var usuario = document.getElementById("Usuario").value;
    var Contra = document.getElementById("Contra").value;
    var Email = document.getElementById("Email").value;
    var FechaNac = document.getElementById("FechaNac").value;
    alert(Nombre);




    alert(new Usuario(Nombre, Apellido, usuario,Contra, Email, FechaNac,3));
    var Array = JSON.parse(localStorage.getItem("Usuario"));
    Array.push(new Usuario(Nombre, Apellido, usuario,Contra, Email, FechaNac,3));
    localStorage.setItem("Usuario", JSON.stringify(Array));
}

/*funtion Log(){

}*/