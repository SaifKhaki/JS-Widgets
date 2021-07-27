WidgetCallback([
    {
        "image_url": "https://saifkhaki.github.io/JS-Widgets/HelloWorld/images/widget.gif",
        "text": " World ",
        "description": " My First Widget",
        "id": "1"
    }
]);
function WidgetCallback(JSONobject) {
    var wHelloWorld = JSONobject[0];
    var wHTML = "";

    wHTML += ('<center><div id="MyWidget" style="background-image:url(https://saifkhaki.github.io/JS-Widgets/HelloWorld/images/bg.png);width:' + wWidth + ';Height:' + wHeight + ';" >');
    wHTML += ('<br><br><img border="0" width="221" height="82" src="' + wHelloWorld.image_url + '">');
    wHTML += ('<br><a target="_blank" href="' + wURL + '" style="font-size:x-large;text-decoration:none;color:' + wFColor + '">');
    wHTML += ( wTitle + ' ' + wHelloWorld.text + '</a><br>');
    wHTML += ('</div></center>');

    document.getElementById('myFirstWidget').innerHTML = wHTML;
}
