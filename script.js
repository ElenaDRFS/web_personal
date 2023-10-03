/* function imprimirConsole (event){
    event.preventDefault();
    alert ('Gracias por enviar tu formulario. En breve te contactaremos');
   const formulario = document.getElementById('basedform');
   formulario.reset();
   formulario.style ='background-color: pink'
}
*/

// validaciones formulario


document.getElementById('basedform').addEventListener('submit',function(event){
   event.preventDefault();

// guardamos en variables cada dato recogido

const formulario = document.getElementById('basedform');

let name = event.target.name.value;
let surname = event.target.surname.value;
let edad = event.target.edad.value;
let email = event.target.email.value;
let fecha = event.target.fecha.value;

// ponemos validaciones 

if (name = " "){
   console.log('falta el nombre');
      
   }

if (name = " "){
      console.log('escribe tu apellido');
         
      }
   
if (!email.endsWith(".com") && !email.endsWith(".es")){
   console.log('escribe un email valido')
}

if (edad != 'number'){
   console.log('inserte un número')
}

if (fecha != (type="date")){
   console.log ('respete el formato --/--/----')
}



});