[rewrite_local]
#奶由壁纸vip
https://nz-api.duitang.com/account/me url script-response-body https://raw.githubusercontent.com/imao7/Quan/master/nybz.js
[mitm]
hostname = nz-api.duitang.com

*****************************/

var body = $response.body; 
var obj = JSON.parse(body); 

obj.data.vip = true

body = JSON.stringify(obj);
$done({body});
