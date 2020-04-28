
dump = {}
$.each(
  $('input'),
  function(i, e) {
    try {
      o = $(e);
      label = $("label[for='" + o.attr('id') + "']").text()
      dump[label] = o.val()
    }
    catch(e) {
      console.log(e)
    }
  }
)
$.each(
  $('.awsui-select-value'),
  function(i, e) {
    try {
      o = $(e);
      label = $(o.parents('.awsui-control-group-controls')[0]).prev().text()
      dump[label] = o.text()
    }
    catch(e) {
      console.log(e)
    }
  }
)
$.each(
  $('.awsui-checkbox-styled-box'),
  function(i, e) {
    try {
      o = $(e);
      label = $(o.parents('.awsui-control-group-controls')[0]).prev().text()
      dump[label] = o.hasClass('wsui-checkbox-styled-box-checked') ? 'true' : 'false'
    }
    catch(e) {
      console.log(e)
    }
  }
)
value = JSON.stringify(dump)
function copyToClipboard(data) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val(data).select();
  document.execCommand("copy");
  $temp.remove();
}
copyToClipboard(value)
