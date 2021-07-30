var widget_content = "";
widget_content += ('<div id="widget" style="width:' + wWidth + '; background-color: #18191a;" >');

//<!-- WIDGET HTML CODE START -->
widget_content += ('<button type="button" class="btn rounded-0 btn-' + wType + '" style="width:' + wWidth + ';">' + wOriginalText + '</button>');
//<!---------------------------->

widget_content += ('</div>');
document.getElementById('widget_container').innerHTML = widget_content;