function mostrar(){
const nombrepantalla = document.getElementById("nombre").value,
emailpantalla = document.getElementById("correo").value 
if (nombrepantalla=="" || emailpantalla ==""){
    alert("CAMPOS VACIOS!! LLENE TODOS LOS CAMPOS")
} 
  else
     alert("BIENVENIDO   " + "  " +nombrepantalla)
    
}


