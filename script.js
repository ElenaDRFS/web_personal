console.log('hola');

 function imprimirConsole (event){
    event.preventDefault();
    alert ('Gracias por enviar tu formulario. En breve te contactaremos');
   const formulario = document.getElementById('basedform');
   formulario.reset();
   formulario.style ='background-color: pink'
}



