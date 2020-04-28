
var defer = function(toWaitFor, method) {
    if (window[toWaitFor]) {
        method();
    } else {
        setTimeout(function () { defer(toWaitFor, method) }, 50);
    }
};
var dump_form = function() {
  dump = {};
  $.each(
    $('input'),
    function(i, e) {
      try {
        var o = $(e);
        var label = $("label[for='" + o.attr('id') + "']").text();
        dump[label] = o.val();
      }
      catch(e) {
        console.log(e);
      }
    }
  )
  $.each(
    $('.awsui-select-value'),
    function(i, e) {
      try {
        var o = $(e);
        var label = $(o.parents('.awsui-control-group-controls')[0]).prev().text();
        dump[label] = o.text();
      }
      catch(e) {
        console.log(e);
      }
    }
  )
  $.each(
    $('.awsui-checkbox-styled-box'),
    function(i, e) {
      try {
        var o = $(e);
        var label = $(o.parents('.awsui-control-group-controls')[0]).prev().text();
        dump[label] = o.hasClass('wsui-checkbox-styled-box-checked') ? 'true' : 'false';
      }
      catch(e) {
        console.log(e);
      }
    }
  )
  var value = JSON.stringify(dump);
  copyToClipboard = function(data) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(data).select();
    document.execCommand("copy");
    $temp.remove();
  }
  copyToClipboard(value);
};
if(typeof jQuery == 'undefined') {
  var script_jQuery = document.createElement('script');
  script_jQuery.setAttribute('src', '//code.jquery.com/jquery-latest.min.js');
  document.body.appendChild(script_jQuery);
  defer('jQuery', () => {
    dump_form();
  });
} else {
  dump_form();
}
