const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const encodeUrl = url => {
  /*
    +       URL中+号表示空格              %2B
    空格     URL中的空格可以用+号或者编码   %20
    /       分隔目录和子目录               %2F
    ?       分隔实际的URL和参数            %3F
    %       指定特殊字符                  %25
    #       表示书签                      %23
    &       URL中指定的参数间的分隔符      %26
    =       URL中指定参数的值             %3D
   */
  url = url.replace('+', '%2B');
  url = url.replace(' ', '%20');
  url = url.replace('/', '%2F');
  url = url.replace('?', '%3F');
  url = url.replace('%', '%25');
  url = url.replace('#', '%23');
  url = url.replace('&', '%26');
  url = url.replace('=', '%3D');
  return url;
}

//测试使用
const decodeUrl = url => {
  url = url.replace('%2B', '+');
  url = url.replace('%20', ' ');
  url = url.replace('%2F', '/');
  url = url.replace('%3F', '?');
  url = url.replace('%25', '%');
  url = url.replace('%23', '#');
  url = url.replace('%26', '&');
  url = url.replace('%3D', '=');
  return url;
}

module.exports = {
  formatTime: formatTime,
  encodeUrl: encodeUrl,
  decodeUrl: decodeUrl
}
