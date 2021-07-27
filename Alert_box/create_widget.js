var widget_content = "";
widget_content += ('<div id="widget" style="width:' + wWidth + ';" >');
//<!-- WIDGET HTML CODE START -->
widget_content += ('<div class="alert alert-' + wAlertType + '" role="alert">' + wText + '</div>');
//<!---------------------------->
widget_content += ('</div>');
document.getElementById('widget_container').innerHTML = widget_content;