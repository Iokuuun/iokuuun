const app_id = "181547db-ece5-41b3-bc4e-97c1c745e582" //skywayのアプリケーションID //skyway application ID
const secret_key = "CPfoScbVRgMzroj/Wo4GBjyzz2Mu+qbo95YB5pu+v98=" //skywayのシークレットキー // skyway secret key
let proximity = true;  // 近接VCのtrue:有効/false:無効(デフォルトはtrue) //Proximity VC true:enable/false:disable (default: true)
let distance = 20; // 声の届く最大距離(デフォルトは6) //Max distance of sound (default: 6)
const port = 19132; // websocketをlistenするポート //Port to listen
const web_port = 8080; // 近接vcのwebサイトと接続するポート // Port to connect website
const lang = "jp"; //言語(jp:日本語, en:英語) //Language (jp:Japanese, en:English)
module.exports = { distance, app_id, secret_key, proximity, port, web_port, lang };