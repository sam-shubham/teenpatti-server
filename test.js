let Mysqli = require("mysqli");

let conn = new Mysqli({
  host: "https://maria-database-1.cyaqjw201819.us-west-2.rds.amazonaws.com", // IP/domain
  post: 3306, //port, default 3306
  user: "admin", // username
  passwd: "ots%maria123!", // password
  db: "ots_db", // the default database name  【optional】
});

let db = conn.emit();

db.tableList().then((d) => {
  console.log(d);
});

// console.log(d);

('<html><head><title>Teen-Patti|Backend</title><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"><style>html{font-family:Poppins;background:#000;margin:0;padding:0}.loading{position:fixed;top:0;left:0;width:100%;height:100%;background:#000;z-index:9999}.loading-text{font-size:20px;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;text-align:center;width:100%;height:100px;line-height:100px}.loading-text span{display:inline-block;margin:0 5px;color:#00b3ff;font-family:"Quattrocento Sans",sans-serif}.loading-text span:nth-child(1){filter:blur(0);animation:blur-text 1.5s 0s infinite linear alternate}.loading-text span:nth-child(2){filter:blur(0);animation:blur-text 1.5s .2s infinite linear alternate}.loading-text span:nth-child(3){filter:blur(0);animation:blur-text 1.5s .4s infinite linear alternate}.loading-text span:nth-child(4){filter:blur(0);animation:blur-text 1.5s .6s infinite linear alternate}.loading-text span:nth-child(5){filter:blur(0);animation:blur-text 1.5s .8s infinite linear alternate}.loading-text span:nth-child(6){filter:blur(0);animation:blur-text 1.5s 1s infinite linear alternate}.loading-text span:nth-child(7){filter:blur(0);animation:blur-text 1.5s 1.2s infinite linear alternate}.loading-text span:nth-child(8){filter:blur(0);animation:blur-text 1.5s 1.4s infinite linear alternate}.loading-text span:nth-child(9){filter:blur(0);animation:blur-text 1.5s 1.6s infinite linear alternate}.loading-text span:nth-child(10){filter:blur(0);animation:blur-text 1.5s 1.8s infinite linear alternate}@keyframes blur-text{0%{filter:blur(0)}100%{filter:blur(4px)}}</style></head><body><div id="loading" class="loading"><div class="loading-text"><span class="loading-text-words">J</span><span class="loading-text-words">U</span><span class="loading-text-words">S</span><span class="loading-text-words">T</span><span class="loading-text-words">H</span><span class="loading-text-words">A</span><span class="loading-text-words">C</span><span class="loading-text-words">K</span><span class="loading-text-words">I</span><span class="loading-text-words">T</span></div></div></body></html>');
