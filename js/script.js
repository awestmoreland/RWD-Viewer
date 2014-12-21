function GetURLParameter(sParam)
{
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split('&');
  for (var i = 0; i < sURLVariables.length; i++)
  {
    var sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] == sParam)
    {
      return sParameterName[1];
    }
  }
}

var page = GetURLParameter('page');
var index, len;
var widths = ['wide', 'medium', 'narrow'];
for (index = 0, len = widths.length; index < len; ++index) {
  var newFrame = document.createElement('iframe');
      newFrame.id = widths[index];
      newFrame.src = page;
  document.body.appendChild(newFrame);
}
