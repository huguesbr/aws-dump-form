javascript:(function()%7Bvar%20defer%20%3D%20function(toWaitFor%2C%20method)%20%7B%0A%20%20%20%20if%20(window%5BtoWaitFor%5D)%20%7B%0A%20%20%20%20%20%20%20%20method()%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20setTimeout(function%20()%20%7B%20defer(toWaitFor%2C%20method)%20%7D%2C%2050)%3B%0A%20%20%20%20%7D%0A%7D%3B%0Avar%20dump_form%20%3D%20function()%20%7B%0A%20%20dump%20%3D%20%7B%7D%3B%0A%20%20%24.each(%0A%20%20%20%20%24('input')%2C%0A%20%20%20%20function(i%2C%20e)%20%7B%0A%20%20%20%20%20%20try%20%7B%0A%20%20%20%20%20%20%20%20var%20o%20%3D%20%24(e)%3B%0A%20%20%20%20%20%20%20%20var%20label%20%3D%20%24(%22label%5Bfor%3D'%22%20%2B%20o.attr('id')%20%2B%20%22'%5D%22).text()%3B%0A%20%20%20%20%20%20%20%20dump%5Blabel%5D%20%3D%20o.val()%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20catch(e)%20%7B%0A%20%20%20%20%20%20%20%20console.log(e)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20)%0A%20%20%24.each(%0A%20%20%20%20%24('.awsui-select-value')%2C%0A%20%20%20%20function(i%2C%20e)%20%7B%0A%20%20%20%20%20%20try%20%7B%0A%20%20%20%20%20%20%20%20var%20o%20%3D%20%24(e)%3B%0A%20%20%20%20%20%20%20%20var%20label%20%3D%20%24(o.parents('.awsui-control-group-controls')%5B0%5D).prev().text()%3B%0A%20%20%20%20%20%20%20%20dump%5Blabel%5D%20%3D%20o.text()%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20catch(e)%20%7B%0A%20%20%20%20%20%20%20%20console.log(e)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20)%0A%20%20%24.each(%0A%20%20%20%20%24('.awsui-checkbox-styled-box')%2C%0A%20%20%20%20function(i%2C%20e)%20%7B%0A%20%20%20%20%20%20try%20%7B%0A%20%20%20%20%20%20%20%20var%20o%20%3D%20%24(e)%3B%0A%20%20%20%20%20%20%20%20var%20label%20%3D%20%24(o.parents('.awsui-control-group-controls')%5B0%5D).prev().text()%3B%0A%20%20%20%20%20%20%20%20dump%5Blabel%5D%20%3D%20o.hasClass('wsui-checkbox-styled-box-checked')%20%3F%20'true'%20%3A%20'false'%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20catch(e)%20%7B%0A%20%20%20%20%20%20%20%20console.log(e)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20)%0A%20%20var%20value%20%3D%20JSON.stringify(dump)%3B%0A%20%20copyToClipboard%20%3D%20function(data)%20%7B%0A%20%20%20%20var%20%24temp%20%3D%20%24(%22%3Cinput%3E%22)%3B%0A%20%20%20%20%24(%22body%22).append(%24temp)%3B%0A%20%20%20%20%24temp.val(data).select()%3B%0A%20%20%20%20document.execCommand(%22copy%22)%3B%0A%20%20%20%20%24temp.remove()%3B%0A%20%20%7D%0A%20%20copyToClipboard(value)%3B%0A%7D%3B%0Aif(typeof%20jQuery%20%3D%3D%20'undefined')%20%7B%0A%20%20var%20script_jQuery%20%3D%20document.createElement('script')%3B%0A%20%20script_jQuery.setAttribute('src'%2C%20'%2F%2Fcode.jquery.com%2Fjquery-latest.min.js')%3B%0A%20%20document.body.appendChild(script_jQuery)%3B%0A%20%20defer('jQuery'%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20dump_form()%3B%0A%20%20%7D)%3B%0A%7D%20else%20%7B%0A%20%20dump_form()%3B%0A%7D%7D)()%3B