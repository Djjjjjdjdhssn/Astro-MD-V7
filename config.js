const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
ALIVE_MSG: process.env.ALIVE_MSG === undefined ? '🧑‍✈️මං ඉන්නො පැටියෝ ❤️' : process.env.ALIVE_MSG,
LANG: process.env.LANG === undefined ? 'SI' : process.env.LANG,
ALIVE_LOGO: process.env.ALIVE_LOGO === undefined ? 'https://i.ibb.co/xhTs5GF/4-E53-AB10-1-D90-4540-B97-E-4-F20723-E54-EE.jpg' : process.env.ALIVE_LOGO,
FOOTER: process.env.FOOTER === undefined ? 'Support in ntm bot group' : process.env.FOOTER,
CAPTION: process.env.CAPTION === undefined ? '*Support in ntm bot group*' : process.env.CAPTION,
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'false' : process.env.ONLY_GROUP,
INBOX_BL_MSG: process.env.INBOX_BL_MSG === undefined ? '*Inbox not allowed' : process.env.INBOX_BL_MSG,
HOST: process.env.HOST === undefined ? 'whatsapp' : process.env.HOST,
SESSION_ID: process.env.SESSION_ID === undefined ? 'ASTRO=LkFdFafjmAEzG2kxlLmtIs_3hw' : process.env.SESSION_ID
};
