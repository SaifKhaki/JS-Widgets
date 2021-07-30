$(document).ready(function(){
    var expanded = false;
    $("button").click(function() {
        if(!expanded){
            $(this).html(wReplacableText);
            expanded = true;
        }
        else{
            $(this).html(wOriginalText);
            expanded = false;
        }
    });
});