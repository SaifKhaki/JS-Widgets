$(document).ready(function(){
    var expanded = false;
    $("button").click(function() {
        if(!expanded){
            $(this).fadeOut(400, function() {
                $(this).removeClass("btn-"+wType);
                $(this).addClass("btn-"+wReplacableType);
                $(this).html(wReplacableText).fadeIn(400);
            });
            expanded = true;
        }
        else{
            $(this).fadeOut(400, function() {
                $(this).removeClass("btn-"+wReplacableType);
                $(this).addClass("btn-"+wType);
                $(this).html(wOriginalText).fadeIn(400);
            });
            expanded = false;
        }
    });
});