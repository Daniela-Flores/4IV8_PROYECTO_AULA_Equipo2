var inputs = document.getElementsByClassName('formulario__input');
for(var i=0;i<inputs.length;i++){
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length>=1){
            this.nextElementSibling.classList.add('fijar');
        }else{
            this.nextElementSibling.classList.remove('fijar');
        }       
    })
}

function validar(formulario){
    if(formulario.nombre.value.length < 3){
        alert("Por favor escribe tres carácteres o más en tu nombre");
        formulario.nombre.focus();
        return false;
    }

    var checkOk="QWERTYUIOPASDFGHJKLÑZXCVBNM+"+"qwertyuiopasdfghjklñzxcvbnm"+" ";
    var checkStr=formulario.nombre.value;
    var allValid=true;

    for(var i=0; i<checkStr.length;i++){
        var ch=checkStr.charAt(i);
        for(var j=0; j<checkOk.length; j++)
        if(ch==checkOk.charAt(j))
            break;
        if(j==checkOk.length){
            allValid=false;
            break;
        }
    }

    if(!allValid){
        alert("Escribe solo letras en el campo Nombre");
        formulario.nombre.focus();
        return false;
    }

    var checkOk="1234567890";
    var checkStr=formulario.phone.value;
    var allValid=true;

    for(var i=0; i<checkStr.length;i++){
        var ch=checkStr.charAt(i);
        for(var j=0; j<checkOk.length; j++)
        if(ch==checkOk.charAt(j))
            break;
        if(j==checkOk.length){
            allValid=false;
            break;
        }
    }

    if(!allValid){
        alert("Escribe solo numeros en tu teléfono");
        formulario.nombre.focus();
        return false;
    }

    var txt=formulario.email.value;
    //expresion regular
    var b=/^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/; //diagonal invertda s significa cadena
    alert("Email "+ (b.test(txt)?"":"no ")+"valido");
    return b.test(txt);
}