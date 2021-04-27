$(document).ready(function(){
    $("ul#opciones li a").click(function(e){
        e.preventDefault();

        $("#frame").attr("src", $(this).attr("href"));
        $("#frame").attr("name", $(this).attr("id"));
        document.querySelector('#tit-seccion').textContent = $("#frame").attr("name");
    })
});