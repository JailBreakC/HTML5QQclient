var isObject = function (b){return null!=b&&'object'===typeof b}

var host = window.location.host
if(host.length > 5)
	host = 'http://127.0.0.1:5000';
else
	host ='http://hi-hi.cn:5033'
	//host = 'http://192.168.1.111:5000';
Qqapi = function(host) {
	return function(cmd, param) {
      var r;
      r = void 0;
      if (arguments.length === 2 && isObject(param)) {
        param = JSON.stringify(param);
      } else {
        param = JSON.stringify(Array.prototype.slice.call(arguments, 1));
      }
      if (1 || param.length > 20 || cmd.indexOf('post') !== -1) {
        r = $.ajax({
          type: 'POST',
          url: host + '/api/' + cmd,
          contentType: 'application/json',
          data: param,
          dataType: 'json',
        });
      } else {
        r = $.getJSON( host + '/api/' + cmd + '/' + param);
      }
/*      r.error(function(data) {
        return alert('执行错误，请与管理员联系' + data);
      });*/
      return r;
     }
};
window.qqapi = {};
window.qqapi.query = Qqapi(host);
window.qqapi.host = host;
window.qqapi.imghost = host + '/qqimg/';