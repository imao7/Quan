[rewrite_local]
#奶由壁纸vip
^https://nz-api.duitang.com/account/me url script-response-body https://raw.githubusercontent.com/imao7/Quan/master/naiyou.js
[mitm]
hostname = nz-api.duitang.com

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/account/me';

if (url.indexOf(vip) != -1) {
    obj.data.vip = true;
   body = JSON.stringify(obj);
}
$done({body});
