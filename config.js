const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "Enter-MongoURI-HERE"
global.port= process.env.PORT || 5000
global.email = 'sam@sec.live'
global.github = 'https://github.com/Biswajit7684/PRABATH-MD'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.devs = '917684990894';
global.website = '' //wa.me/+94762280384
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/2cecad9c5b0e1e34e8299.jpg'
module.exports = {
  OPENAI_API_KEY:process.env.OPENAI_API_KEY || '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',
  botname: process.env.BOT_NAME || '𝑫𝑨𝑹𝑲-𝑴𝑰𝑵𝑫',
  dl_limit: process.env.DL_SIZE || '300',
  art: process.env.AUTO_RESTART || 'true',
  sudo: process.env.SUDO || '919556082678',
  alivepic: process.env.ALIVE_IMG || 'https://telegra.ph/file/2cecad9c5b0e1e34e8299.jpg',
  alivemsj: process.env.ALIVE_MSJ || '*POWERD BY DARK MIND RAJA* 🎊',
  ownername:process.env.OWNER_NAME || '𝔹𝕀𝕊𝕎𝔸𝕁𝕀𝕋',
  sessionName: process.env.SESSION_ID || 'PRABATH-MD~gqNS0LYY#QunJtLe82L61t6MY0adYehMKs9qLRrJPjAWJ0hMMMb4',
  author: process.env.PACK_INFO.split(";")[0] || 'author', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'false',
  packname: process.env.PACK_INFO.split(";")[1] || 'Name',
  autoreaction: process.env.AUTO_REACTION || 'off',
  antibadword : process.env.ANTI_BAD_WORD || 'fuck,huth,fucking,huththa,huththo,hukanna,fucked,pakaya,pako,pon,porn,maghia,bia,boubiq,bou bia,banda,pela',
  alwaysonline: process.env.ALWAYS_ONLINE || 'true',
  antifake : process.env.FAKE_COUNTRY_CODE || '',
  readmessage: process.env.READ_MESSAGE || true
  HANDLERS: process.env.PREFIX || "null"
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "flase",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || 'put your herokuapp name',
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || 'put your heroku_api_key',
  BRANCH: 'main',
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || '',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'put-key-here',
  VERSION: process.env.VERSION === undefined ? 'v.5.0.0' : process.env.VERSION,
  LANG: process.env.THEME|| 'Dark-MD',
  WORKTYPE: process.env.WORK_TYPE === undefined ? 'public' : process.env.WORK_TYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
