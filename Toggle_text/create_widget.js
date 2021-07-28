var widget_content = "";
widget_content += ('<div id="widget");

//<!-- WIDGET HTML CODE START -->
widget_content += ('<button type="button" class="btn btn-' + wType + '" style="border-radius: 100px;">' + wOriginalText + '</button>');
//<!---------------------------->

widget_content += ('</div>');
document.getElementById('widget_container').innerHTML = widget_content;
