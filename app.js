let boton = document.getElementById('sumar');
let botonresta= document.getElementById('restar');
let botonmultiplicar= document.getElementById('multiplicar');
let botondivision = document.getElementById('dividir');
let respuesta = document.getElementById('respuesta');

boton.addEventListener('click', hacersuma); 
botonresta.addEventListener('click', hacerresta); 
botonmultiplicar.addEventListener('click', multiplicar); 
botondivision.addEventListener('click', hacerdivision); 


function hacersuma(){
    let n1=parseFloat(document.getElementById('n1').value);
    let n2=parseFloat(document.getElementById('n2').value);
    let n3 = n1+n2; 
    respuesta.innerHTML=`El resultado de la suma es: ${n3}`;
}

function hacerresta(){
    let n1=parseFloat(document.getElementById('n1').value);
    let n2=parseFloat(document.getElementById('n2').value);
    let n3 = n1-n2; 
    respuesta.innerHTML=`El resultado de la resta es: ${n3}`;
}

function multiplicar(){
    let n1=parseFloat(document.getElementById('n1').value);
    let n2=parseFloat(document.getElementById('n2').value);
    let n3 = n1*n2; 
    respuesta.innerHTML=`El resultado de la multiplicación es: ${n3}`;
}

function hacerdivision(){
    let n1=parseFloat(document.getElementById('n1').value);
    let n2=parseFloat(document.getElementById('n2').value);
    let n3 = n1/n2; 
    respuesta.innerHTML=`El resultado de la división es: ${n3}`;
}
