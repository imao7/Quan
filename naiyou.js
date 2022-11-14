/******************************

脚本功能：奶油壁纸解锁会员
软件版本：2.0
脚本作者：imao7
更新时间：2022-11-15
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
#奶由壁纸vip
https://nz-api.duitang.com/account/me url script-response-body https://raw.githubusercontent.com/imao7/Quan/master/naiyou.js
[mitm]
hostname = nz-api.duitang.com

*******************************
var body = $response.body; 
var obj = JSON.parse(body); 

obj.data.vip = true

body = JSON.stringify(obj);
$done({body});
