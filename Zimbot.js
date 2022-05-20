// ⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈
//▮ZIM BOT INC 2022 ®️ALL RIGHTS RESERVED
//▮
//▮FORK AND DON'T FORGET TO GIVE A STAR
//▮
//▮THIS SOFTWARE IS UNDER UZ COPYRIGHT
//▮
//▮REPORT ABUSE OF THIS SOFTWARE EMAIL US
//▮reinhardtuna@mail.uk
//▮WHATSAPP US : +44 7441 437150
//▮YOUTUBE CHANNELL: https://youtube.com/c/DRIPSOFC
//▮
//╰▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
//
//┏━━━━━━━━━━━━━━━━━━━━━━━━━
//┃THIS SOFTWARE INCLUDES 
//┃SOME ENCRYPTED FILES
//┃
//┃THANKS FOR CHOOSING ZIMBOT
//┃THANKS TO DIKA ARDNT
//┗━━━━━━━━━━━━━━━━━━━━━━━━━
//

require('./bot')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const { fetchUrl, isUrl, processTime } = require("./lib/myfunc")
const path = require('path')
const url = require('url')
const os = require('os')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime,  sleep, clockString, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
let { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./lib/lvlfunction")
const speedofbot = require("performance-now")
const { mediafireDl } = require('./lib/mediafire.js')
const { lirikLagu } = require('./lib/lirik.js')
const { fromBuffer } = require('file-type')
const mel = require('kitsune-api');
const { Boom } = require("@hapi/boom")
const ffmpeg = require('fluent-ffmpeg')
//xp and leveling database⧈⧈⧈⧈
const _0x47f5e0=_0x15ad;function _0x15ad(_0x27749b,_0x3200ba){const _0x34eaba=_0x34ea();return _0x15ad=function(_0x15ad2c,_0x5f079d){_0x15ad2c=_0x15ad2c-0x12c;let _0x42e9a2=_0x34eaba[_0x15ad2c];return _0x42e9a2;},_0x15ad(_0x27749b,_0x3200ba);}(function(_0x28ec88,_0x5e92cc){const _0x70cb1=_0x15ad,_0x1522a3=_0x28ec88();while(!![]){try{const _0x4c81da=-parseInt(_0x70cb1(0x141))/0x1*(parseInt(_0x70cb1(0x13d))/0x2)+parseInt(_0x70cb1(0x131))/0x3*(-parseInt(_0x70cb1(0x142))/0x4)+-parseInt(_0x70cb1(0x138))/0x5+-parseInt(_0x70cb1(0x135))/0x6+-parseInt(_0x70cb1(0x12c))/0x7+-parseInt(_0x70cb1(0x133))/0x8*(-parseInt(_0x70cb1(0x12d))/0x9)+parseInt(_0x70cb1(0x139))/0xa;if(_0x4c81da===_0x5e92cc)break;else _0x1522a3['push'](_0x1522a3['shift']());}catch(_0x5440b3){_0x1522a3['push'](_0x1522a3['shift']());}}}(_0x34ea,0xc3331));const {addInventoriDarah,cekDuluJoinAdaApaKagaDiJson,addDarah,kurangDarah,getDarah}=require(_0x47f5e0(0x13f)),{cekInventoryAdaAtauGak,addInventori,addBesi,addEmas,addEmerald,addUmpan,addPotion,kurangBesi,kurangEmas,kurangEmerald,kurangUmpan,kurangPotion,getBesi,getEmas,getEmerald,getUmpan,getPotion}=require(_0x47f5e0(0x12f)),{addInventoriMonay,cekDuluJoinAdaApaKagaMonaynyaDiJson,addMonay,kurangMonay,getMonay}=require(_0x47f5e0(0x13e)),{addInventoriLimit,cekDuluJoinAdaApaKagaLimitnyaDiJson,addLimit,kurangLimit,getLimit}=require(_0x47f5e0(0x136)),{cekDuluHasilBuruanNya,addInventoriBuruan,addIkan,addAyam,addKelinci,addDomba,addSapi,addGajah,kurangIkan,kurangAyam,kurangKelinci,kurangDomba,kurangSapi,kurangGajah,getIkan,getAyam,getKelinci,getDomba,getSapi,getGajah}=require(_0x47f5e0(0x132));let DarahAwal=global[_0x47f5e0(0x12e)][_0x47f5e0(0x137)];const isDarah=cekDuluJoinAdaApaKagaDiJson(m[_0x47f5e0(0x140)]),isCekDarah=getDarah(m[_0x47f5e0(0x140)]),isUmpan=getUmpan(m['sender']),isPotion=getPotion(m[_0x47f5e0(0x140)]),isIkan=getIkan(m[_0x47f5e0(0x140)]),isAyam=getAyam(m[_0x47f5e0(0x140)]),isKelinci=getKelinci(m[_0x47f5e0(0x140)]),isDomba=getDomba(m[_0x47f5e0(0x140)]),isSapi=getSapi(m[_0x47f5e0(0x140)]),isGajah=getGajah(m[_0x47f5e0(0x140)]),isMonay=getMonay(m[_0x47f5e0(0x140)]),isLimit=getLimit(m[_0x47f5e0(0x140)]),isBesi=getBesi(m[_0x47f5e0(0x140)]),isEmas=getEmas(m['sender']),isEmerald=getEmerald(m['sender']),isInventory=cekInventoryAdaAtauGak(m[_0x47f5e0(0x140)]),isInventoriBuruan=cekDuluHasilBuruanNya(m[_0x47f5e0(0x140)]),isInventoryLimit=cekDuluJoinAdaApaKagaLimitnyaDiJson(m[_0x47f5e0(0x140)]),isInventoryMonay=cekDuluJoinAdaApaKagaMonaynyaDiJson(m[_0x47f5e0(0x140)]),ikan=['🐟','🐠','🐡'];let _limit=JSON['parse'](fs['readFileSync'](_0x47f5e0(0x13c))),_buruan=JSON['parse'](fs[_0x47f5e0(0x13a)](_0x47f5e0(0x13b))),_darahOrg=JSON[_0x47f5e0(0x130)](fs['readFileSync'](_0x47f5e0(0x134)));function _0x34ea(){const _0x342b6b=['./storage/user/alat_tukar.js','parse','3ztPcLG','./storage/user/buruan.js','120bgCsdt','./storage/user/darah.json','3773322EyoZII','./storage/user/limit.js','darahawal','7469000lHiTlD','51826160NmdomL','readFileSync','./storage/user/hasil_buruan.json','./storage/user/limit.json','440322wwiOYf','./storage/user/monay.js','./storage/user/darah.js','sender','3usdGwe','5633708JYCuyl','9471784jMQNGx','696978MVdYUI','rpg'];_0x34ea=function(){return _0x342b6b;};return _0x34ea();}

//message type
let drips = fs.readFileSync('./Zimbot/drips.jpg')

//database
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))


global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    chats: {},
    ...(global.db || {})
}
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []
	
module.exports = ZimBotInc = async (ZimBotInc, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await ZimBotInc.decodeJid(ZimBotInc.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	
//gc groupMetadata
        const groupMetadata = m.isGroup ? await ZimBotInc.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const isAntiLink = m.isGroup ? antilink.includes(m.chat) : false
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	
//rest apis
global.APIs = { 
    bx: 'https://bx-hunter.herokuapp.com',
    dhnjing: 'https://dhnjing.xyz',
    hardianto: 'https://hardianto-chan.herokuapp.com',
    jonaz: 'https://jonaz-api-v2.herokuapp.com',
    neoxr: 'https://neoxr-api.herokuapp.com',
    nrtm: 'https://nurutomo.herokuapp.com',
    pencarikode: 'https://pencarikode.xyz',
    xteam: 'https://api.xteam.xyz',
    zahir: 'https://zahirr-web.herokuapp.com',
    zekais: 'http://zekais-api.herokuapp.com',
    zeks: 'https://api.zeks.xyz',
  }
  global.APIKeys = { 
    'https://bx-hunter.herokuapp.com': 'Ikyy69',
    'https://hardianto-chan.herokuapp.com': 'hardianto',
    'https://neoxr-api.herokuapp.com': 'yntkts',
    'https://pencarikode.xyz': 'pais',
    'https://api.xteam.xyz': 'apikeymu',
    'https://zahirr-web.herokuapp.com': 'zahirgans',
    'https://api.zeks.xyz': 'apivinz',
  }
  

const runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " Day, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " Hour, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " Minute, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " second" : " Second") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}
	

	                                                                                             function _0xc8a5(){const _0xcbdd1c=['readFileSync','https://wa.me/27634090203','89991cirMcq','716225IowUGM','3272330wbzpBc','9502ZOjRls','66YRVWWL','ZIM\x20BOT\x20INC','sendMessage','1493958mNQkZU','chat','9mUrQVG','PHOTO','875384UnrjiI','1536094yTBJcx','./Zimbot/drips.jpg','botnma','8wSDplG'];_0xc8a5=function(){return _0xcbdd1c;};return _0xc8a5();}(function(_0x492434,_0x2c3280){const _0x12a446=_0xdf32,_0x225316=_0x492434();while(!![]){try{const _0x157dbd=parseInt(_0x12a446(0x160))/0x1+-parseInt(_0x12a446(0x163))/0x2*(-parseInt(_0x12a446(0x152))/0x3)+parseInt(_0x12a446(0x159))/0x4+-parseInt(_0x12a446(0x161))/0x5+-parseInt(_0x12a446(0x155))/0x6+parseInt(_0x12a446(0x15a))/0x7*(-parseInt(_0x12a446(0x15d))/0x8)+parseInt(_0x12a446(0x157))/0x9*(parseInt(_0x12a446(0x162))/0xa);if(_0x157dbd===_0x2c3280)break;else _0x225316['push'](_0x225316['shift']());}catch(_0x1c9159){_0x225316['push'](_0x225316['shift']());}}}(_0xc8a5,0x1f790));function _0xdf32(_0x3da20f,_0xa66b4c){const _0xc8a5b8=_0xc8a5();return _0xdf32=function(_0xdf32d3,_0x197cf3){_0xdf32d3=_0xdf32d3-0x152;let _0x52bcc4=_0xc8a5b8[_0xdf32d3];return _0x52bcc4;},_0xdf32(_0x3da20f,_0xa66b4c);}const reply=_0x5f448a=>{const _0x3f646c=_0xdf32;ZimBotInc['sendMessage'](m[_0x3f646c(0x156)],{'text':_0x5f448a,'contextInfo':{'externalAdReply':{'title':'\x20'+global[_0x3f646c(0x15c)],'body':'ZIM\x20BOT\x20INC','previewType':_0x3f646c(0x158),'thumbnailUrl':'','thumbnail':fs[_0x3f646c(0x15e)]('./Zimbot/drips.jpg'),'sourceUrl':_0x3f646c(0x15f)}}},{'quoted':m});},replay=_0x1baafb=>{const _0x510a39=_0xdf32;ZimBotInc[_0x510a39(0x154)](m['chat'],{'text':_0x1baafb,'contextInfo':{'externalAdReply':{'title':'\x20'+global['botnma'],'body':_0x510a39(0x153),'previewType':_0x510a39(0x158),'thumbnailUrl':'','thumbnail':fs[_0x510a39(0x15e)](_0x510a39(0x15b)),'sourceUrl':'https://youtu.be/cZ3UrzArI5A'}}},{'quoted':m});};
                                                                                                 let picaks = []
                                                                                                 let picak = picaks[Math.floor(Math.random() * picaks.length)]
    try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.users[m.sender]
            if (typeof user !== 'object') global.db.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
            let chats = global.db.chats[m.chat]
                if (typeof chats !== 'object') global.db.chats[m.chat] = {}
                if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('wame' in chats)) chats.wame = false
             } else global.db.chats[m.chat] = {
                mute: false,
                wame: false,
        }
        } catch (err) {
            console.error(err)
        }
	    

//public/self
        if (!ZimBotInc.public) {
            if (!m.key.fromMe) return
        }

//push message to console && autoread
        if (m.message) {
            ZimBotInc.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ZIM BOT INC]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
//leveling
const levelRole = getLevelingLevel(m.sender)
	  var role = 'bronz'
	  if (levelRole <= 3) {
	role = 'Copper'
	  } else if (levelRole <= 5) {
	role = 'Iron'
	  } else if (levelRole <= 7) {
	role = 'Silver'
	  } else if (levelRole <= 10) {
	role = 'Gold'
	  } else if (levelRole <= 12) {
	role = 'Platinum'
	  } else if (levelRole <= 15) {
	role = 'Mithril'
	  } else if (levelRole <= 18) {
	role = 'Orichalcum'
	  } else if (levelRole <= 25) {
	role = 'Adamantite'
	  } else if (levelRole <= 45) {
	role = 'Good In Game'
	  }
	
//antilink
	if (isAntiLink) 
if (budy.includes('https://chat.whatsapp.com/')) {
               if (!m.key.fromMe) {
               reply('[ 𝗭𝗜𝗠 𝗕𝗢𝗧 𝗔𝗡𝗧𝗜𝗟𝗜𝗡𝗞 ]\n𝗟𝗶𝗻𝗸 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱 𝗵𝗲𝗿𝗲, 𝗢𝗞𝘆?..,\n𝗚𝗼𝗼𝗱 𝗯𝘆𝗲 𝗜𝗺 𝗸𝗶𝗰𝗸𝗶𝗻𝗴 𝘂𝗿 𝗮𝘀𝘀 𝗻𝗼𝘄👋🏻')
               let sianj = m.sender
               await ZimBotInc.groupParticipantsUpdate(m.chat, [sianj], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
               }
	  }
	if (db.chats[m.chat].wame) {
        if (budy.match(`wa.me/`)) {
        m.reply(`「 𝗭𝗜𝗠 𝗕𝗢𝗧 𝗔𝗡𝗧𝗜𝗟𝗜𝗡𝗞 」\n\n𝗬𝗼𝘂 𝗵𝗮𝘃𝗲 𝘀𝗲𝗻𝗱 𝘄𝗮.𝗺𝗲 𝗹𝗶𝗻𝗸, 𝗻𝗼 𝘁𝗶𝗺𝗲 𝘁𝗼 𝘄𝗮𝘀𝘁𝗲 𝘂𝗮 𝗼𝘂𝘁!`)
          if (!isBotAdmins) return m.reply(`𝘡𝘪𝘮 𝘉𝘰𝘵 𝘮𝘶𝘴𝘵 𝘣𝘦 𝘢𝘥𝘮𝘪𝘯 𝘧𝘪𝘳𝘴𝘵😚`)
        let gclink = (`https://wa.me/`)
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`𝘖𝘏 𝘠𝘦𝘢𝘩 𝘪𝘵 𝘥𝘪𝘥𝘯𝘵 𝘩𝘢𝘱𝘱𝘦𝘯, 𝘣𝘦𝘤𝘢𝘶𝘴𝘦 𝘺𝘰𝘶 𝘴𝘦𝘯𝘵 𝘵𝘩𝘪𝘴 𝘸𝘢.𝘮𝘦 𝘭𝘪𝘯𝘬𝘺 𝘰𝘬𝘢𝘺😌`)
        if (isAdmins) return m.reply(`𝘏𝘦𝘭𝘭 𝘯𝘰😱 𝘺𝘰𝘶 𝘢𝘥𝘮𝘪𝘯`)
        if (isCreator) return m.reply(`𝘖𝘰𝘰𝘰𝘩 𝘴𝘩𝘪𝘵😩 𝘴𝘰𝘳𝘳𝘺 𝘺𝘶 𝘢𝘳𝘦 𝘵𝘩𝘦 𝘰𝘸𝘯𝘦𝘳 𝘭𝘶𝘤𝘬𝘺 𝘺𝘰𝘶`)
        ZimBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
//mute chat
      if (db.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
//write database every 1minute
	setInterval(() => {
            fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
        }, 60 * 1000)
//But5Loc
const send5Butlmg = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
    var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                locationMessage: { degreesLatitude: 0, degreesLongtitude: 0, jpegThumbnail: img },
            "hydratedContentText": text,
                   "hydratedFooterText": footer,
                   "hydratedButtons": but
                }
                }
                }), options)
    return ZimBotInc.relayMessage(jid, template.message, { messageId: template.key.id })
    }
//reset limit every 12hrs
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Africa/Harare"
        })
	    
//respond to cmd
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
        let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: ZimBotInc.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, ZimBotInc.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        ZimBotInc.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Answer the following questions :\n${room.soal}\n\n\nThere is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}
${isWin ? `All Answers Answered` : isSurender ? 'Give up!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            ZimBotInc.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ZimBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'GUESS THE MUSIC' }, type: 1 }], ` Guess The Song\n\nCorrect Answer 🎉\n\nWant to play again? ZIM BOT INC`, ZimBotInc.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*WRONG ANSWER!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`Math Quiz\n\nCorrect answer 🎉\n\nWant to play again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*WRONG ANSWER!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ZimBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], ` Guess The Picture\n\nCorrect answer 🎉\n\nWant to play again? ZIM BOT INC`, ZimBotInc.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*WRONG ANSWER!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ZimBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'GUESS THE WORD' }, type: 1 }], `Guess The Word\n\nCorrect answer 🎉\n\nWant to play again? ZIM BOT INC`, ZimBotInc.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*WRONG ANSWER!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ZimBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'GUESS LONTONG' }, type: 1 }], `Guess Lontong\n\nCorrect answer 🎉\n*${deskripsi}*\n\nWant to play again? ZIM BOT INC`, ZimBotInc.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*WRONG ANSWER!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ZimBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], ` Guess The Sentence \n\nCorrect answer 🎉\n\nWant to play again? ZIM BOT INC`, ZimBotInc.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*WRONG ANSWER!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ZimBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], ` Guess The Lyrics \n\nCorrect answer 🎉\n\nWant to play again? ZIM BOT INC`, ZimBotInc.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*WRONG ANSWER!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ZimBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Riddles' }, type: 1 }], `Riddles \n\nCorrect answer 🎉\n\nWant to play again? ZIM BOT INC`, ZimBotInc.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*WRONG ANSWER!*')
        }
        
//tic-tac toe game
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game has ended',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Win!` : isTie ? `Game over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *give up* to surrender and admit defeat`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await ZimBotInc.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await ZimBotInc.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

//suit vp
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|sure|oke?|reject|dont|later|yes|can|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|dont|later|n|no|can)/i.test(m.text)) {
	    ZimBotInc.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} reject the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    ZimBotInc.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) ZimBotInc.sendText(roof.p, `Please select \n\nRock🗿\nPaper📄\nScissors`, m)
	    if (!roof.pilih2) ZimBotInc.sendText(roof.p2, `Please select \n\nRock🗿\nPaper📄\nScissor️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) ZimBotInc.sendText(m.chat, `Both players don't want to play,\nSuit canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    ZimBotInc.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} didn't choose suit, game over`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih2) ZimBotInc.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih) ZimBotInc.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    ZimBotInc.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`
Don't tag him!
He's in Offline/AFK, ${reason ? 'with reason ' + reason : 'no reason'}
Its been ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.users[m.sender].afkTime > -1) {
            let user = global.db.users[m.sender]
            reply(`
You came back online from AFK${user.afkReason ? ' after ' + user.afkReason : ''}
In ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	    
        switch(command) {
            case 'xp': case 'inventory': case 'profile':{
                if (q.includes('--help')) return reply(examkosong) 
                  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
                  if (!isInventory){ addInventori(m.sender) }
                  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
                     
                     var xeonbotinc = await getBuffer(picak+`User's Inventory`)
                     let teksehmazeh = `❰ 🌟INFO USER ❱\n\n`
                     teksehmazeh += `*❤️YOUR BLOOD* : ${getDarah(m.sender)}\n`
                     teksehmazeh += `*◻️️YOUR IRON* : ${getBesi(m.sender)}\n`
                     teksehmazeh += `*🌟YOUR GOLD* : ${getEmas(m.sender)}\n`
                     teksehmazeh += `*💎YOUR EMERALD* : ${getEmerald(m.sender)}\n`
                     teksehmazeh += `*⏺️YOUR LIMIT* : ${getLimit(m.sender)}\n`
                     teksehmazeh += `*🧪YOUR POTION* : ${getPotion(m.sender)}\n\n`
                     teksehmazeh += `❰ HUNT RESULT🌟❱\n`
                     teksehmazeh += `*🐟FISH* : ${getIkan(m.sender)}\n`
                     teksehmazeh += `*🐔CHICKEN* : ${getAyam(m.sender)}\n`
                     teksehmazeh += `*🐇RABBIT* : ${getKelinci(m.sender)}\n`
                     teksehmazeh += `*🐑SHEEP* : ${getDomba(m.sender)}\n`
                     teksehmazeh += `*🐄COW* : ${getSapi(m.sender)}\n`
                     teksehmazeh += `*🐘ELEPHANT* : ${getGajah(m.sender)}\n\n`
                     teksehmazeh += `_*${pushname}*_`
                    
                    reply(teksehmazeh)
                  }
                  break
            case 'userlimit': 
{      
   let txt = `「 *ALL LIMIT USER* 」\n\n`
     for (let i of _limit){
     txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
     }
    reply(txt)       
  }
 break
 case 'leaderboard':
{      
   let txt = `❰ *LEADERBOARD*🌟 ❱\n\n`
     for (let i of _buruan){
     txt += `🌟 *ID :* ${i.id}\n`
     txt += `*🐟FISH* : ${i.ikan}\n`
     txt += `*🐔CHICKEN* : ${i.ayam}\n`
     txt += `*🐇RABBIT* : ${i.kelinci}\n`
     txt += `*🐑SHEEP* : ${i.domba}\n`
     txt += `*🐄COW* : ${i.sapi}\n`
     txt += `*🐘ELEPHANT* : ${i.gajah}\n\n`
     }
    reply(txt)       
  }
 break
case 'mining': case 'mine':{
if (q.includes('--help')) return reply(examkosong) 
  if (!isInventory){ addInventori(m.sender) }
  if (isCekDarah < 1) return reply(`You're tired!, try to heal using potions`) 
  let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
  let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
  let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
  var besinya = besi[Math.floor(Math.random() * besi.length)]  
  var emasnya = emas[Math.floor(Math.random() * emas.length)]  
  var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]  
  setTimeout( () => {
  let caption = `❰ MINING RESULT ❱\n*IRON* : ${besinya}\n*GOLD* : ${emasnya}\n*EMERALD* : ${emeraldnya}`
  let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'MINE🌟️'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: './storage/image/tambang.jpg' },
      caption: caption,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     ZimBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
   
   }, 7000)  
  setTimeout( () => {
  reply(`@${m.sender.split("@")[0]} Started Mining🎣`)     
  }, 1500)
  kurangDarah(m.sender, 10)
  addBesi(m.sender, besinya)
  addEmas(m.sended, emasnya)
  addEmerald(m.sender, emeraldnya)	     
  }   
  break  
  
 case 'purchase': case 'buy':{
if (q.includes('--help')) return reply(examkosong) 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 if (!q) return reply(`What Do You Want To Buy?\n\n1.potion\n2.baitfood\n3.limit\n\nExample: ${prefix + command} baitfood`)
 var anu = args[1]
  if (args[0] === 'potion'){
  let noh = 100000 * anu
 if (!args[1]) return reply(`Example : ${prefix + command} potion 2\n 1 Potion = 100000 Money`)
 if (isMonay < noh) return reply('*Your pocket money is not sufficient for this purchase🌟*')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
  setTimeout( () => {
  reply(`*deal sealed transaction succesfully✨*\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Potion* : ${getPotion(m.sender)}`)
  }, 2000) 
 } else 
 if (args[0] === 'baitfood'){
  let noh = 5000 * anu
 if (!args[1]) return reply(`Example : ${prefix + command} baitfood 2\n 1 Bait Food = 2500 Money`)
 if (isMonay < noh) return reply('*Your pocket money is not sufficient for this purchase🌟*')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
  setTimeout( () => {
  reply(`*deal sealed transaction succesfully✨*\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Bait Food* : ${getUmpan(m.sender)}`)
  }, 2000) 
  } else 
  if (args[0] === 'limit'){
  let noh = 35000 * anu
 if (!args[1]) return reply(`Example : ${prefix + command} limit 2\n 1 Limit = 35000 Money`)
 if (isMonay < noh) return reply('*Your pocket money is not sufficient for this purchase🌟*')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
  setTimeout( () => {
  reply(`*deal sealed transaction succesfully✨*\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Limit* : ${getLimit(m.sender)}`)
  }, 2000) 
  } else { reply("Incorrect Format!") }
 }
 break
 case 'sel': case 'jual':{
 if (!q) return  reply(`What Do You Want To Sell??\nExample : ${prefix + command} fish 2`)
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 var anu = args[1]
 if (args[0] === 'fish'){
 if (isIkan < anu) return reply(`*You don't have enough fish for this transaction🌟*`)
 if (!args[1]) return reply(`Example : ${prefix + command} fish 2\n 1 Fish = 1500 Money`)
 kurangIkan(m.sender, anu)
 let monaynya = 1500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`*deal sealed transaction succesfully✨*\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Fish(es)* : ${getIkan(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'chicken'){
 if (isAyam < anu) return reply(`*You don't have enough chickens for this transaction🌟*`)
 if (!args[1]) return reply(`Example : ${prefix + command} chicken 2\n 1 Chicken = 2500 Money`)
 kurangAyam(m.sender, anu)
 let monaynya = 2500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`*deal sealed transaction succesfully✨*\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Chicken* : ${getAyam(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'rabbit'){
 if (isKelinci < anu) return reply(`*You don't have enough rabbits for this transaction🌟*`)
 if (!args[1]) return reply(`Example : ${prefix + command} rabbit 2\n 1 Rabbit = 3000 Money`)
 kurangKelinci(m.sender, anu)
 let monaynya = 3000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`*deal sealed transaction succesfully✨*\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Rabbit(s)* : ${getKelinci(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'sheep'){
 if (isDomba < anu) return reply(`*You don't have enough sheeps for this transaction🌟*`)
 if (!args[1]) return reply(`Example : ${prefix + command} domba 2\n 1 Sheep = 5000 money`)
 kurangDomba(m.sender, anu)
 let monaynya = 5000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`*deal sealed transaction succesfully✨*\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Sheep(s)* : ${getDomba(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'cow'){
 if (isSapi < anu) return reply(`*You don't have enough cows for this transaction🌟*`)
 if (!args[1]) return reply(`Example : ${prefix + command} cow 2\n 1 Cow = 10000 Money`)
 kurangSapi(m.sender, anu)
 let monaynya = 10000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`*deal sealed transaction succesfully✨*\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Cow(s)* : ${getSapi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'elephant'){
 if (isGajah < anu) return reply(`*You don't have enough elephants for this transaction🌟*`)
 if (!args[1]) return reply(`Example : ${prefix + command} elephant 2\n 1 Elephant = 15000 Money`)
 kurangGajah(m.sender, anu)
 let monaynya = 15000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`*deal sealed transaction succesfully✨*\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Elephant(s)* : ${getGajah(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'iron'){
 if (isBesi < anu) return reply(`*You don't have enough gold for this transaction🌟*`)
 if (!args[1]) return reply(`Example : ${prefix + command} iron 2\n 1 Iron = 15000 Money`)
 kurangBesi(m.sender, anu)
 let monaynya = 16000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`*deal sealed transaction succesfully✨*\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Iron(s)* : ${getBesi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'gold'){
 if (isEmas < anu) return reply(`*You don't have enough gold for this transaction🌟*`)
 if (!args[1]) return reply(`Example : ${prefix + command} gold 2\n 1 Gold = 50000 Money`)
 kurangEmas(m.sender, anu)
 let monaynya = 50000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`*deal sealed transaction succesfully✨*\n*Your Money* : ${getMonay(m.sender)}\n*Your Remaining Gold(s)* : ${getEmas(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return reply(`*You don't have enough emerald(s) for this transaction🌟*`)
 if (!args[1]) return reply(`Example : ${prefix + command} emerald 2\n 1 Emerald = 100000 Money`)
 kurangEmerald(m.sender, anu)
 let monaynya = 100000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction ️deal done🌟\n*Your  Money* : ${getMonay(m.sender)}\n*You don't have enough emeralds for this transaction✊* : ${getEmerald(m.sender)}`)
  }, 2000) 
 } else { reply("*Incorrect format bro👀*") }

 }
 break

 case 'heal':{
if (q.includes('--help')) return reply(examkosong) 
 if (!isCekDarah < 1) return reply('*You can only heal wen ur blood is on critical level🌟*')
 if (isCekDarah > 100) return reply('Your Blood Is Full')
 if (isPotion < 1) return reply(`*You don't have a potion, try Buying it this type the following cmd🌟* .buypotion _amount_`) 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 reply('*healed ur blood is full🌟*')
 }
 break
 case 'hunt': case 'hunting': {
if (q.includes('--help')) return reply(examkosong) 
 if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
 if (isCekDarah < 1) return reply('*Ur blood is gone, try to heal Using potions🌟*') 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
  let luka = ["*pierced by a thorn while hunting🌟*","*slipped into the abyss while hunting🌟*","*scratched by a wild animal🌟*","*not careful🌟*","*🌟entangled in roots*","*fall while hunting🌟*"]
  let location = ["*Jungle💫*","*Amazon forest🌟*","*tropical forest🌟*","*Meadow🌟*","*African forest🌟*","*Mountains🌟*"]
   var ikanmu = Math.ceil(Math.random() * 10)
   var ayam = Math.ceil(Math.random() * 8)
   var kelinci = Math.ceil(Math.random() * 7)
   var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
   var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
   var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
   var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
   var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
   var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]    
   var lukanya = luka[Math.floor(Math.random() * luka.length)]
   var lokasinya = location[Math.floor(Math.random() * location.length)]
 if (lokasinya === 'Jungle') {
    var image = './storage/image/rimba.jpg'
   } else
 if (lokasinya === 'Amazon forest') {
    var image =  './storage/image/amazon.jpg'
   } else
 if (lokasinya === 'Tropical forest') {
    var image = './storage/image/tropis.jpg'
   } else
 if (lokasinya === 'Meadow') {
    var image = './storage/image/padang_rumput.jpg'
   } else
 if (lokasinya === 'African forest') {
    var image = './storage/image/afrika.jpg'
   } else
 if (lokasinya === 'Mountains') {
   var image = './storage/image/pegunungan.jpg'
   }
 setTimeout( () => {
  let teksehmazeh = `❰ HUNT RESULT ❱\n`
     teksehmazeh += `*🐟FISH🌟* : ${ikanmu}\n`
     teksehmazeh += `*🐔CHICKEN🌟* : ${ayam}\n`
     teksehmazeh += `*🐇RABBIT🌟* : ${kelinci}\n`
     teksehmazeh += `*🐑SHEEP🌟* : ${domba}\n`
     teksehmazeh += `*🐄COW🌟* : ${sapi}\n`
     teksehmazeh += `*🐘ELEPHANT💫* : ${gajah}\n\n`
     teksehmazeh += `❰ INFO ❱\n`
     teksehmazeh += `*Location* : ${lokasinya}\n`
     teksehmazeh += `*WOUNDS✨* : ${lukanya}, blood - 10\n`
     teksehmazeh += `*REMAINING BLOOD ✨* : ${getDarah(m.sender)}\n`
 
 reply(teksehmazeh)

         
  }, 5000)  
 setTimeout( () => {
  reply(`@${m.sender.split("@")[0]} Started Hunting In ${lokasinya}`)     
  }, 1000) 
 addIkan(m.sender, ikanmu) 
   addAyam(m.sender, ayam) 
   addKelinci(m.sender, kelinci)
   addDomba(m.sender, domba)
   addSapi(m.sender, sapi)
  addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
 break
	    case 'afk': {
                let user = global.db.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${m.pushName} Already Afk${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'You are still in the game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            reply('Partner found!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room.game.currentTurn.split('@')[0]}

Type *give up* to surrender and admit defeat`
            if (room.x !== room.o) await ZimBotInc.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await ZimBotInc.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            reply('Waiting for partner' + (text ? ` type the command below ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            ZimBotInc.sendText(m.chat, `Successfully delete the TicTacToe session`, m)
            } else if (!this.game) {
            reply(`TicTacToe Session🎮 there is not any`)
            } else throw '?'
            } catch (e) {
            reply('error')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) reply(`Complete your previous suit`)
	    if (m.mentionedJid[0] === m.sender) return reply(`Can't play with myself !`)
            if (!m.mentionedJid[0]) return reply(`_Who do you want to challenge?_\nTag the person..\n\nExample : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `The person you are challenging is playing suit with someone else :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} challenging @${m.mentionedJid[0].split`@`[0]} to play suit

Please @${m.mentionedJid[0].split`@`[0]} to type accept/reject`
            this.suit[id] = {
            chat: await ZimBotInc.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) ZimBotInc.sendText(m.chat, `_Suit time out_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
	    case 'donasi': case 'donate': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
                ZimBotInc.sendMessage(m.chat, { image: { url: 'https://i.imgur.com/TfI3QYW.jpg' }, caption: `*𝗛𝗜 𝗕𝗥𝗢 ${m.pushName}*\n\n 𝗕𝗢𝗧 𝗥𝗘𝗡𝗧𝗔𝗟 𝗣𝗥𝗜𝗖𝗘\n 250rands Per Group via Gpay/paytm/phonepe 1 Month\n\nFor more details, you can chat with the owner\nhttps://wa.me/227634090203 (ZIM BOT OWNER)\n\n𝗗𝗢𝗡𝗔𝗧𝗘 : \n\n 𝗙𝗔𝗠𝗣𝗔𝗬 : https://i.imgur.com/TfI3QYW.jpg\n` }, { quoted: m })
            }
            break
            case 'sc': case 'script': {
                reply('⭐SCRIPT⭐ : https://github.com/zim-bot/zimbot-v2\n *✨DONT FORGET TO SUBSCRIBE🌟✨* https://youtu.be/cZ3UrzArI5A\n')
            }
            break
            case 'chat': {
                if (!isCreator) throw global.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    ZimBotInc.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    ZimBotInc.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    ZimBotInc.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    ZimBotInc.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    ZimBotInc.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    ZimBotInc.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    ZimBotInc.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
	    case 'family100hdiejebdjdijdjdjdj': { //this is in indonesian so if u want to activate u can but will be in indonesian
                if ('family100'+m.chat in _family100) {
                    reply('*⭐There are still unfinished match⭐*')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Answer the following questions :*\n${random.soal}\n\nThere is *${random.jawaban.length}* Answer ${random.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await ZimBotInc.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halahkdkdkd': case 'hilihdkksls': case 'huluhkdksls': case 'helehkdkdkd': case 'holohkdkskks': //this is in indonesian so if u want to activate u can but will be in indonesian (thanks to respected creator of this case)
            if (!m.quoted && !text) throw `Send/reply text with caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebakjxkzkossihdhdidii': { //this is in indonesian so if u want to activate u can but will be in indonesian (thanks to respected creator of this case)
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. music\n2. picture\n3. word\n4. sentence\n5. lyrics\n6.rice cake`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "*⭐There are still unfinished match ⭐*"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await ZimBotInc.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    ZimBotInc.sendText(m.chat, `The song is a song from?\n\nArtist : ${result.artist}\nTime : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    ZimBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'TEBAK LAGU' }, type: 1 }], `Time Out\nAnswer:  ${tebaklagu[m.sender.split('@')[0]]}\n\nWant to play? ZIM BOT INC`, ZimBotInc.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "*⭐There are still unfinished match⭐*"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    ZimBotInc.sendImage(m.chat, result.img, `Please answer the questions above\n\nDescription : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    ZimBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Time has run out\Answer:  ${tebakgambar[m.sender.split('@')[0]]}\n\nWant to play? ZIM BOT INC`, ZimBotInc.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "*⭐There are still unfinished match⭐*"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    ZimBotInc.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nTime : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    ZimBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Time has run out\nAnswer:  ${tebakkata[m.sender.split('@')[0]]}\n\nWant to play? ZIM BOT INC`, ZimBotInc.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "*⭐There are still unfinished match⭐*"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    ZimBotInc.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nTime : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    ZimBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ZimBotInc.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "*⭐There are still unfinished match⭐*"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    ZimBotInc.sendText(m.chat, `These are the lyrics of the song? : *${result.soal}*?\nTime : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    ZimBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ZimBotInc.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "*⭐There are still unfinished match⭐*"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    ZimBotInc.sendText(m.chat, `*Answer the following questions :*\n${result.soal}*\nTime : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    ZimBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ZimBotInc.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
		
                    }
                }
            }
            break
            case 'mathquiz': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "*⭐There are still unfinished match⭐*"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nExample: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                ZimBotInc.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} seconds`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    reply("Time Out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'mysoulmate': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Your match is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '❤️', buttonText: { displayText: 'LOVE♥️' }, type: 1 }
                    ]
                    await ZimBotInc.sendButtonText(m.chat, buttons, jawab, ZimBotInc.user.name, m, {mentions: ments})
            }
            break
            case 'couple': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Ciee Whats Going On💖👀`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: '❤️', buttonText: { displayText: 'DATING♥️' }, type: 1 }
                    ]
                    await ZimBotInc.sendButtonText(m.chat, buttons, jawab, ZimBotInc.user.name, m, {mentions: menst})
            }
            break
            case 'join': {
                if (!isCreator) throw global.owner
                if (!text) throw 'Enter the group link!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw '*⭐LINK INVALID*'
                replay(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await ZimBotInc.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw global.owner
                await ZimBotInc.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ZimBotInc.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ZimBotInc.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ZimBotInc.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ZimBotInc.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw global.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ZimBotInc.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw global.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ZimBotInc.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await ZimBotInc.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await ZimBotInc.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setppbot': case 'setbotpp': {
                if (!isCreator) throw global.owner
                if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                let media = await ZimBotInc.downloadAndSaveMediaMessage(quoted)
                await ZimBotInc.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
           case 'setppgroup': case 'setgrouppp': case 'setgcpp': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                let media = await ZimBotInc.downloadAndSaveMediaMessage(quoted)
                await ZimBotInc.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
case 'grupinfo': case 'groupinfo':
try{
 var pic = await ZimBotInc.getProfilePicture(m.chat)
  } catch {
 var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
  }
let ingfo = `*𝗚𝗥𝗢𝗨𝗣 𝗜𝗡𝗙𝗢*\n\n*𝗡𝗔𝗠𝗘 :* ${groupName}\n*𝗜𝗗 𝗚𝗥𝗢𝗨𝗣:* ${m.chat}\n*𝗠𝗔𝗗𝗘 :* ${moment(`${groupMetadata.creation}` * 1000).tz('Africa/Harare').format('DD/MM/YYYY HH:mm:ss')}\n*𝗚𝗥𝗢𝗨𝗣 𝗢𝗪𝗡𝗘𝗥:* @${groupMetadata.owner.split('@')[0]}\n*𝗔𝗗𝗠𝗜𝗡𝗦 :* ${groupAdmins.length}\n*𝗠𝗘𝗠𝗕𝗘𝗥𝗦 :* ${participants.length}\n*𝗗𝗘𝗦𝗖 :* \n${groupMetadata.desc}`
ds = await getBuffer(pic)
ZimBotInc.sendMessage(m.chat, { image: ds,caption: ingfo, mentions: [groupMetadata.owner] }, { quoted: m})
break
            case 'tagall': case 'tag': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = ` 
 ┏━━━━━━━━━━━┑
 ┃🌟𝗧𝗔𝗚𝗔𝗟𝗟🌟
 ┃┄┄┄┄┄┄┄┄┄┄┄┊
 ┃*𝐌𝐄𝐒𝐒𝐀𝐆𝐄 : ${q ? q : 'blank'}*\n\n
 ┗━━━━━━━━ 
`
 for (let mem of participants) {
                teks += `🎪 @${mem.id.split('@')[0]}\n`
                }
                ZimBotInc.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isAdmins) throw mess.admin
            ZimBotInc.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // response when limit runs out
		db.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Enter Query text!'
                let anu = await styletext(text)
                let teks = `Entered Text:  ${text}\n\n`
                for (let i of anu) {
                    teks += `🎪 *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`
            if (!text) throw `Enter Reason for Vote, Example: *${prefix + command} Owner is handsome*`
            reply(`Voting starts!\n\n*${prefix}upvote* - for yes\n*${prefix}devote* - for no\n*${prefix}checkvote* - to check the votes\n*${prefix}deletevote* - to delete vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `
┏━━━━━━━━━━⧁           
┃ 𝗨𝗣𝗩𝗢𝗧𝗘
┃
┃𝗥𝗘𝗔𝗦𝗢𝗡: ${vote[m.chat][0]} 
┃
┃*Total:* ${vote[m.chat][1].length}
┗━━━━━━━━━━⧁
 
┏━━━━━━━━━━⧁
┃𝗗𝗘𝗩𝗢𝗧𝗘 
┃
┃ *Total:* ${vote[m.chat][2].length}
┗━━━━━━━━━━⧁

*${prefix}deletevote* - to delete votes`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝗨𝗣𝗩𝗢𝗧𝗘'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝗗𝗘𝗩𝗢𝗧𝗘'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: ZimBotInc.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            ZimBotInc.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*Type ${prefix}vote* - to start voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'You have Voted'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `
┏━⧀ *VOTE🌟* ⧁
┃*𝗥𝗘𝗔𝗦𝗢𝗡:* ${vote[m.chat][0]}
┃
┃ 𝗨𝗣𝗩𝗢𝗧𝗘 ༻
┃
┃ Total: ${vote[m.chat][1].length}
┃${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┃
╰━━━━━━━━━━━━⧁

┏━━⧀𝗗𝗘𝗩𝗢𝗧𝗘🌟⧁
┃ 
┃ Total: ${vote[m.chat][2].length}
┃${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┃
╰━━━━━━━━━━━━━⧁

*${prefix}hapusvote* - to delete votes`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'UPVOTE'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: ZimBotInc.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            ZimBotInc.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'You Have Voted'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `

*𝗗𝗘𝗩𝗢𝗧𝗘:* ${vote[m.chat][0]}

┏༺ 𝗨𝗣𝗩𝗢𝗧𝗘 ༻
┃
┃ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┃
╰━━━━━━━━━━

┏༺ 𝗗𝗘𝗩𝗢𝗧𝗘 ༻
┃
┃ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┃
┗━━━━━━━━━━━━

*${prefix}hapusvote* - to delete votes`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'UPVOTE'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: ZimBotInc.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            ZimBotInc.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
teks_vote = `༼༺⋋ 𝗩𝗢𝗧𝗘 ⋌༻༽

*𝗥𝗘𝗔𝗦𝗢𝗡:* ${vote[m.chat][0]}

┌༺ 𝗨𝗣𝗩𝗢𝗧𝗘 ༻
 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

┌༺ 𝗗𝗘𝗩𝗢𝗧𝗘 ༻
 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

*${prefix}hapusvote* - to delete votes


©${ZimBotInc.user.id}
`
ZimBotInc.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - to start voting`
            delete vote[m.chat]
            reply('*Successfully deleted vote session in this group🌟*')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await ZimBotInc.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Successful closing the group`)).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await ZimBotInc.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Successful Opening The Group`)).catch((err) => reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'OPEN🌟' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'CLOSE🌟' }, type: 1 }
                    ]
                    await ZimBotInc.sendButtonText(m.chat, buttons, `Group Mode`, ZimBotInc.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await ZimBotInc.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully opened edit group Info`)).catch((err) => reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await ZimBotInc.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Close Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'OPEN🌟' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'CLOSE🌟' }, type: 1 }
                    ]
                    await ZimBotInc.sendButtonText(m.chat, buttons, `*GROUP SESSION🌟*`, ZimBotInc.user.name, m)

            }
            }
            break
case 'antilink':
	        if (!m.isGroup) return reply(`This feature only be used in group`)
			if (!isAdmins) return reply(`This feature could be used by admin only`)
			if (!isBotAdmins) return reply(`Bot must be admin first`)
					if (args[0] === 'on') {
						if (isAntiLink) return reply('*already activated🌟*')
						antilink.push(m.chat)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('*Successfully activated the antilink session🌟*')
						ZimBotInc.sendMessage(m.chat,  {text: `ALLERT!!! This group has been installed anti-link\nIf you violate then I will kick`})
					} else if (args[0] === 'off') {
						if (!isAntiLink) return reply('*already deactivated🌟*')
						var ini = antilink.indexOf(m.chat)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('*Successfully disabled antilink session🌟*')
					} else  {
                        let buttons = [
                               { buttonId: 'antilink on', buttonText: { displayText: 'ON' }, type: 1 },
                               { buttonId: 'antilink off', buttonText: { displayText: 'OFF' }, type: 1 }
                           ]
                           await ZimBotInc.sendButtonText(m.chat, buttons, `*ANTILINK SESSION🌟*`, ZimBotInc.user.name, m)
                       }
                    
		
					break 
					case 'antiwame': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.chats[m.chat].wame) return m.reply(`Already Activated`)
                db.chats[m.chat].wame = true
                m.reply(`Anti Wa.me Activated!`)
                } else if (args[0] === "off") {
                if (!db.chats[m.chat].wame) return m.reply(`Already deactivated`)
                db.chats[m.chat].wame = false
                m.reply(`Anti Wa.me is not activated!`)
                } else {
                 let buttons = [
                        { buttonId: 'antiwame on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antiwame off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await ZimBotInc.sendButtonText(m.chat, buttons, `Mode Anti Wa.me`, ZimBotInc.user.name, m)
                }
             }
             break
					   case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.chats[m.chat].mute) return reply(`Already activated`)
                db.chats[m.chat].mute = true
                reply(`${ZimBotInc.user.name} has been muted in this group !`)
                } else if (args[0] === "off") {
                if (!db.chats[m.chat].mute) return reply(`Already deactivated`)
                db.chats[m.chat].mute = false
                reply(`${ZimBotInc.user.name} has been unmuted in this group!`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'ON🌟' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'OFF🌟' }, type: 1 }
                    ]
                    await ZimBotInc.sendButtonText(m.chat, buttons, `Mute Bot`, ZimBotInc.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'grouplink': case 'gclink': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await ZimBotInc.groupInviteCode(m.chat)
                ZimBotInc.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink of: ${groupMetadata.subject} Group`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Enter the enable/disable value, For Example ${prefix}ephemeral enable'
                if (args[0] === 'enable') {
                    await ZimBotInc.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await ZimBotInc.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw '*The message was not sent by a bot💥*'
                ZimBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw global.owner
                if (!text) throw `Where is the text?\n\nExample : ${prefix + command} hello guys, am back`
                let getGroups = await ZimBotInc.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Send Broadcast To ${anu.length} Group Chat, Finish Time ${anu.length * 1.5} second`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'SUBSCRIBE🌟',
                                    url: 'https://github.com/zim-bot/zimbot-v2'
                                }
                            }, {
                                callButton: {
                                    displayText: 'OWNER✨',
                                    phoneNumber: '+27 634-090-0203'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'PING✨',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER✨',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'SCRIPT✨',
                                    id: 'sc'
                                }
                            }]
                      fatihgans = fs.readFileSync('./Zimbot/drips.jpg')
                      let txt = `「 ZimBot Broadcast 」\n\n${text}`
                      ZimBotInc.send5ButImg(i, txt, ZimBotInc.user.name, fatihgans, btn)
                    }
                reply(`Successful Sending Broadcast To ${anu.length} Group(s)`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw global.owner
                if (!text) throw `Where is the text?\n\nExample : ${prefix + command} Zimbot here`
                let anu = await store.chats.all().map(v => v.id)
                reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} second`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'GITHUB🌟',
                                    url: 'https://github.com/zim-bot/zimbot-v2'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER✨',
                                    id: 'owner'
                                }
                            }]
                      fatihgans = fs.readFileSync('./Zimbot/drips.jpg')
                      let txt = `「 ZIM BOT BROADCAST 」\n\n${text}`
                      ZimBotInc.send5ButImg(yoi, txt, `Broadcast By ${global.pengguna}`, fatihgans, btn)
		}
		reply('*Broadcast Success🌟*')
            }
            break
            case 'chatinfo': {
                if (!m.quoted) reply('*Reply to mesaage👀*')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw '*The message was not sent by a bot!💥*'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `🎪 @${i.userJid.split('@')[0]}\n`
                    teks += `🎪 *𝗧𝗜𝗠𝗘 :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} 🎪 *𝗦𝗧𝗔𝗧𝗨𝗦 :* ${read ? 'Read' : 'Unread'}\n\n`
                }
                ZimBotInc.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return reply('Reply Message!!')
		let wokwol = await ZimBotInc.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return reply('*The message you replied to does not contain a reply💫*')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `🎪 *𝗣𝗘𝗥𝗦𝗢𝗡𝗔𝗟 𝗖𝗛𝗔𝗧 𝗟𝗜𝗦𝗧*\n\n𝗧𝗢𝗧𝗔𝗟 𝗖𝗛𝗔𝗧 : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `🎪𝗡𝗔𝗠𝗘 : ${nama}\n🎪𝗨𝗦𝗘𝗥 : @${i.split('@')[0]}\n🎪𝗖𝗛𝗔𝗧 : https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 ZimBotInc.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `🎪𝗚𝗥𝗢𝗨𝗣 𝗖𝗛𝗔𝗧 𝗟𝗜𝗦𝗧\n\n𝗧𝗢𝗧𝗔𝗟 𝗚𝗥𝗢𝗨𝗣 : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await ZimBotInc.groupMetadata(i)
                     teks += `🎪𝗡𝗔𝗠𝗘 : ${metadata.subject}\n🎪𝗢𝗪𝗡𝗘𝗥 : @${metadata.owner.split('@')[0]}\n🎪𝗜𝗗 : ${metadata.id}\n🎪 𝗠𝗔𝗗𝗘 : ${moment(metadata.creation * 1000).tz('Africa/Harare').format('DD/MM/YYYY HH:mm:ss')}\n🎪 𝗠𝗘𝗠𝗕𝗘𝗥 : ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 ZimBotInc.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'onlinelist': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    ZimBotInc.sendText(m.chat, 'Online List:\n\n' + online.map(v => '🎪 @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `Reply Video/Image With Caption ${prefix + command}`
            replay(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await ZimBotInc.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
                let media = await quoted.download()
                let encmedia = await ZimBotInc.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`
                }
            }
            break
            case 'ebinary': {
            if (!m.quoted.text && !text) throw `Send/reply text with caption ${prefix + command}`
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            reply(eb)
        }
        break
            case 'dbinary': {
            if (!m.quoted.text && !text) throw `Send/reply text with caption ${prefix + command}`
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            reply(db)
        }
        break
            case 'emojimix': {
	        if (!text) throw `Example : ${prefix + command} 😅+🤔`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await ZimBotInc.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
            case 'toimage': case 'toimg': {
                if (!quoted) throw '*Reply Image*'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                replay(mess.wait)
                let media = await ZimBotInc.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    ZimBotInc.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                replay(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await ZimBotInc.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await ZimBotInc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: '*Convert webp to video*' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want Audio With Caption ${prefix + command}`
            if (!quoted) throw `Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`
            replay(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            ZimBotInc.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`
            if (!quoted) throw `Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`
            replay(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            ZimBotInc.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${ZimBotInc.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
            replay(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            ZimBotInc.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                replay(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await ZimBotInc.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await ZimBotInc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                replay(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await ZimBotInc.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await ZimBotInc.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    replay(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    ZimBotInc.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'SUBSCRIBE🌟 Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `🎪No: ${no++}\n💮𝗧𝗬𝗣𝗘 : ${i.type}\n🔳𝗩𝗜𝗗𝗘𝗢 𝗜𝗗: ${i.videoId}\n🔴𝗧𝗜𝗧𝗟𝗘 : ${i.title}\n🎪𝗩𝗜𝗘𝗪𝗦 : ${i.views}\n🎬𝗗𝗨𝗥𝗔𝗧𝗜𝗢𝗡 : ${i.timestamp}\n📡𝗨𝗣𝗟𝗢𝗔𝗗 𝗔𝗧 : ${i.ago}\n🎰𝗔𝗨𝗧𝗛𝗢𝗥 : ${i.author.name}\n📌𝗨𝗥𝗟 : ${i.url}\n\n─────────────────\n\n`
                }
                ZimBotInc.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `⭐*𝗧𝗜𝗧𝗟𝗘* : ${g.title}\n`
                teks += `⭐*𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗧𝗜𝗢𝗡* : ${g.snippet}\n`
                teks += `🌟*𝗟𝗜𝗡𝗞* : ${g.link}\n\n────────────────────────\n\n`
                } 
                reply(teks)
                })
                }
                break
        case 'gimage': case 'googleimage': {
        if (!text) throw `Example : ${prefix + command} ml nana`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `❰ 𝗚𝗢𝗢𝗚𝗟𝗘 𝗜𝗠𝗔𝗚𝗘 ❱
🌟*𝗤𝗨𝗘𝗥𝗬* : ${text}
🌟*𝗠𝗘𝗗𝗜𝗔 𝗨𝗥𝗟* : ${images}`,
                    footer: ZimBotInc.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                ZimBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} bts boy with luv`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                    ngen = `
🏮𝗧𝗜𝗧𝗟𝗘 : ${anu.title}
🎀𝗘𝗫𝗧 : Search
🎀𝗗𝗨𝗥𝗔𝗧𝗜𝗢𝗡 : ${anu.timestamp}
🎀𝗨𝗣𝗟𝗢𝗔𝗗𝗘𝗗 : ${anu.ago}
🎀𝗔𝗨𝗧𝗛𝗢𝗥 : ${anu.author.name}
🏮𝗖𝗛𝗔𝗡𝗡𝗘𝗟 : ${anu.author.url}
`
message = await prepareWAMessageMedia({ image : { url: anu.thumbnail } }, { upload:   ZimBotInc.waUploadToServer })
                template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: ngen,
                            hydratedFooterText: `ZIM BOT INC`,
                            hydratedButtons: [{
                                quickReplyButton: {
                                    displayText: 'SONG🌟',
                                    id: `ytmp3 ${anu.url} 256kbps`
                                    }
                                },{quickReplyButton: {
                                    displayText: 'VIDEO🌟',
                                    id: `ytmp4 ${anu.url} 360p`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                  ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://SUBSCRIBE🌟.com/watch?v=PtF6Tccag%27 256kbps`
                let quality = args[1] ? args[1] : '256kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 999999) return reply('YOUR SONG IS TOO BIG DEAR'+util.format(media))
                ZimBotInc.sendImage(m.chat, media.thumb, `🟡𝗧𝗜𝗧𝗟𝗘 : ${media.title}\n🎀𝗙𝗜𝗟𝗘 𝗦𝗜𝗭𝗘 : ${media.filesizeF}\n📡𝗨𝗥𝗟 : ${isUrl(text)}\n📜𝗘𝗫𝗧 : MP3\n📑𝗥𝗘𝗦𝗢𝗟𝗨𝗧𝗜𝗢𝗡 : ${args[1] || '256kbps'}`, m)
                ZimBotInc.sendMessage(m.chat, { document: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://SUBSCRIBE🌟.com/watch?v=PtFMhcag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 999999) return reply('YOUR VIDEO IS TOO BIG DEAR '+util.format(media))
                ZimBotInc.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `🌟𝗧𝗜𝗧𝗟𝗘 : ${media.title}\n👜𝗙𝗜𝗟𝗘 𝗦𝗜𝗭𝗘 : ${media.filesizeF}\n🌼𝗨𝗥𝗟 : ${isUrl(text)}\n🎰𝗘𝗫𝗧 : MP3\n🔮𝗥𝗘𝗦𝗢𝗟𝗨𝗧𝗜𝗢𝗡 : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return reply('Reply Message')
                if (!m.quoted.isBaileys) throw `Can only reply to messages from bots`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?Subscribe\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Maybe The Message You Replied Does Not Contain Ytsearch Results`
                let quality = args[1] ? args[1] : '256kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 999999) return reply('*YOUR SONG IS TOO BIG*'+util.format(media))
                ZimBotInc.sendImage(m.chat, media.thumb, `🏮𝗧𝗜𝗧𝗟𝗘 : ${media.title}\n🌟𝗙𝗜𝗟𝗘 𝗦𝗜𝗭𝗘 : ${media.filesizeF}\n🌟𝗨𝗥𝗟 : ${isUrl(text)}\n🎀𝗘𝗫𝗧 : MP3\n🔮𝗥𝗘𝗦𝗢𝗟𝗨𝗧𝗜𝗢𝗡 : ${args[1] || '256kbps'}`, m)
                ZimBotInc.sendMessage(m.chat, { document: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return reply('*reply to a message that has been send already*')
                if (!m.quoted.isBaileys) throw `error Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?Subscribe\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Maybe the message you replied does not contain the ytsearch result`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return reply('file over limit'+util.format(media))
                ZimBotInc.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `🎀𝗧𝗜𝗧𝗟𝗘 : ${media.title}\n💼𝗙𝗜𝗟𝗘 𝗦𝗜𝗭𝗘 : ${media.filesizeF}\n📡𝗨𝗥𝗟 : ${isUrl(text)}\n🔮𝗘𝗫𝗧 : MP3\n🛡️𝗥𝗘𝗦𝗢𝗟𝗨𝗧𝗜𝗢𝗡 : ${args[1] || '360p'}` }, { quoted: m })
            }
            case 'lyrics':
reply(mess.wait)
if (args.length < 1) return reply('What is the name of the song?')
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `${res[0].result}`
reply(lirik)
})
            break
            
            case 'apk':
        if (args.length == 0) return reply(`Example: ${prefix + command} Bgmi`)
        query = args.join(' ')
        get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/uapkpro?apps=${query}&page=1&apikey=cabd55849002ea851ce8`, { method: 'get' })
        kontol = get_result.result
        ini_txt = '❰ *APPLICATIONS🌟* ❱\n\n'
        for (var x of kontol) {
          ini_txt += `Name : ${x.apps_name}\n`
          ini_txt += `Link :${x.apps_linkdl}\n`
          ini_txt += `Tag : ${x.apps_tag}\n`
          ini_txt += `\n`
        }
        reply(ini_txt)
        break
        case 'apkdone':
        if (args.length == 0) return reply(`Example: ${prefix + command} Bgmi`)
        query = args.join(' ')
        get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/apkdone?apps=${query}&apikey=cabd55849002ea851ce8`, { method: 'get' })
        kontol = get_result.result
        ini_txt = '❰ *APPLICATIONS🌟* ❱\n\n'
        for (var x of kontol) {
          ini_txt += `Name : ${x.apps_name}\n`
          ini_txt += `Link :${x.apps_linkdl}\n`
          ini_txt += `Version : ${x.apps_version}\n`
          ini_txt += `Rate : ${x.apps_rate}\n`
          ini_txt += `Tag : ${x.apps_tag}\n\n`
          ini_txt += `\n`
        }
        reply(ini_txt)
        break
            case 'pinterest': {
                replay(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                ZimBotInc.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
            }
            break
            case 'anime': case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': {
                replay(mess.wait)
                ZimBotInc.sendMessage(m.chat, { image: { url: api('zenz', '/api/random/anime/'+command, 'apikey') }, caption: `Download From ${text}` }, { quoted: m})
            }
            break
	    case 'couplepp': case 'ppcouple': {
                replay(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                ZimBotInc.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                ZimBotInc.sendMessage(m.chat, { image: { url: random.female }, caption: `*Couple Female*` }, { quoted: m })
            }
            break

case 'loli': 
case 'lolu': const _0x1d665b=_0x50d5;function _0x50d5(_0x1e2397,_0x523eaa){const _0x1b9970=_0x1b99();return _0x50d5=function(_0x50d54b,_0x551ac6){_0x50d54b=_0x50d54b-0x1a2;let _0x3feccc=_0x1b9970[_0x50d54b];return _0x3feccc;},_0x50d5(_0x1e2397,_0x523eaa);}(function(_0x4ab38c,_0x4b97e6){const _0x574e61=_0x50d5,_0x4b1af6=_0x4ab38c();while(!![]){try{const _0x34f38c=parseInt(_0x574e61(0x1a4))/0x1+parseInt(_0x574e61(0x1a7))/0x2*(-parseInt(_0x574e61(0x1a8))/0x3)+parseInt(_0x574e61(0x1ab))/0x4*(-parseInt(_0x574e61(0x1b1))/0x5)+parseInt(_0x574e61(0x1a9))/0x6+parseInt(_0x574e61(0x1af))/0x7*(parseInt(_0x574e61(0x1b3))/0x8)+parseInt(_0x574e61(0x1a2))/0x9+-parseInt(_0x574e61(0x1a5))/0xa*(parseInt(_0x574e61(0x1a3))/0xb);if(_0x34f38c===_0x4b97e6)break;else _0x4b1af6['push'](_0x4b1af6['shift']());}catch(_0x12e480){_0x4b1af6['push'](_0x4b1af6['shift']());}}}(_0x1b99,0x6d8d0));{replay(mess[_0x1d665b(0x1ac)]);let buttons=[{'buttonId':_0x1d665b(0x1b2),'buttonText':{'displayText':_0x1d665b(0x1b0)},'type':0x1}],buttonMessage={'image':{'url':_0x1d665b(0x1ad)},'caption':_0x1d665b(0x1aa),'footer':global[_0x1d665b(0x1a6)],'buttons':buttons,'headerType':0x4};ZimBotInc['sendMessage'](m[_0x1d665b(0x1ae)],buttonMessage,{'quoted':m});}function _0x1b99(){const _0x327c8d=['1521618ezmwtO','NEXT','10fYcMgp','loli','24NbqWjK','6329943CZXPGA','11fmisuk','178903jyLIcX','3620490PFJRad','botnma','1614142pkfpib','3PZuXmV','2214444XPMZbD','Loli','571172ZkznQp','wait','https://aleatoryapi.herokuapp.com/loli','chat'];_0x1b99=function(){return _0x327c8d;};return _0x1b99();}
//MenuNsf	   
case 'culo': 
case 'ass': const _0xadb8ed=_0x449f;function _0x449f(_0x20a193,_0x1be6da){const _0x31167f=_0x3116();return _0x449f=function(_0x449f7e,_0xb9cbed){_0x449f7e=_0x449f7e-0x103;let _0x46fc88=_0x31167f[_0x449f7e];return _0x46fc88;},_0x449f(_0x20a193,_0x1be6da);}(function(_0x5deb74,_0x2e7fc7){const _0x14fa77=_0x449f,_0x251e42=_0x5deb74();while(!![]){try{const _0x3b66be=parseInt(_0x14fa77(0x10b))/0x1*(-parseInt(_0x14fa77(0x111))/0x2)+-parseInt(_0x14fa77(0x104))/0x3*(parseInt(_0x14fa77(0x10f))/0x4)+-parseInt(_0x14fa77(0x113))/0x5+parseInt(_0x14fa77(0x10a))/0x6*(parseInt(_0x14fa77(0x108))/0x7)+parseInt(_0x14fa77(0x106))/0x8+parseInt(_0x14fa77(0x112))/0x9*(parseInt(_0x14fa77(0x115))/0xa)+-parseInt(_0x14fa77(0x109))/0xb*(parseInt(_0x14fa77(0x103))/0xc);if(_0x3b66be===_0x2e7fc7)break;else _0x251e42['push'](_0x251e42['shift']());}catch(_0x12e6b7){_0x251e42['push'](_0x251e42['shift']());}}}(_0x3116,0x9ccd7));function _0x3116(){const _0x22912a=['botnma','5093976kDUVeI','chat','301SKFaOJ','22nDPbHU','175866EdorUE','3vudQbL','wait','ass','https://wallebotapi.mitomods.com/docs/nsfw/ass?apikey=Donitas','98780dxRbOC','ZIM\x20BOT\x20INC','377582GmFUAy','1395189TrloKJ','3902970sfuiOH','NEXT','50nuYxYQ','sendMessage','2468100nqsNQO','33PyxFbb'];_0x3116=function(){return _0x22912a;};return _0x3116();}{replay(mess[_0xadb8ed(0x10c)]);let buttons=[{'buttonId':_0xadb8ed(0x10d),'buttonText':{'displayText':_0xadb8ed(0x114)},'type':0x1}],anu=await fetchJson(_0xadb8ed(0x10e)),buttonMessage={'image':{'url':''+anu['result']},'caption':_0xadb8ed(0x110),'footer':global[_0xadb8ed(0x105)],'buttons':buttons,'headerType':0x4};ZimBotInc[_0xadb8ed(0x116)](m[_0xadb8ed(0x107)],buttonMessage,{'quoted':m});}
break

case 'ahegao': function _0x4531(){const _0x44de99=['botnma','ahegao','216836oiQhpI','result','28rupMOq','2dFBcle','85WiyEmZ','chat','1412483jKZVPm','5726048DZvhsm','1572999qLOFKM','18GbyHoD','sendMessage','wait','1256958qJURWK','556270uYIwYN','11177650jJJUEO'];_0x4531=function(){return _0x44de99;};return _0x4531();}function _0x1fe1(_0x456378,_0x5e6bf7){const _0x453109=_0x4531();return _0x1fe1=function(_0x1fe182,_0x24787f){_0x1fe182=_0x1fe182-0x13e;let _0x45c2ad=_0x453109[_0x1fe182];return _0x45c2ad;},_0x1fe1(_0x456378,_0x5e6bf7);}const _0x2a852b=_0x1fe1;(function(_0x326157,_0x178f5f){const _0x3ed89d=_0x1fe1,_0x27bc0a=_0x326157();while(!![]){try{const _0x418b0d=-parseInt(_0x3ed89d(0x140))/0x1*(parseInt(_0x3ed89d(0x14e))/0x2)+-parseInt(_0x3ed89d(0x142))/0x3+parseInt(_0x3ed89d(0x14b))/0x4*(parseInt(_0x3ed89d(0x13e))/0x5)+parseInt(_0x3ed89d(0x146))/0x6*(-parseInt(_0x3ed89d(0x14d))/0x7)+parseInt(_0x3ed89d(0x141))/0x8*(parseInt(_0x3ed89d(0x143))/0x9)+parseInt(_0x3ed89d(0x148))/0xa+parseInt(_0x3ed89d(0x147))/0xb;if(_0x418b0d===_0x178f5f)break;else _0x27bc0a['push'](_0x27bc0a['shift']());}catch(_0x393d89){_0x27bc0a['push'](_0x27bc0a['shift']());}}}(_0x4531,0xb6474));{replay(mess[_0x2a852b(0x145)]);let buttons=[{'buttonId':_0x2a852b(0x14a),'buttonText':{'displayText':'NEXT'},'type':0x1}],anu=await fetchJson('https://wallebotapi.mitomods.com/docs/nsfw/ahegao?apikey=Donitas'),buttonMessage={'image':{'url':''+anu[_0x2a852b(0x14c)]},'caption':'ZIM\x20BOT\x20INC','footer':global[_0x2a852b(0x149)],'buttons':buttons,'headerType':0x4};ZimBotInc[_0x2a852b(0x144)](m[_0x2a852b(0x13f)],buttonMessage,{'quoted':m});}
break

case 'bdsm': const _0x30a91b=_0x1e9a;(function(_0x5e7936,_0x45128a){const _0x24ad84=_0x1e9a,_0x429465=_0x5e7936();while(!![]){try{const _0x2ada1b=parseInt(_0x24ad84(0xda))/0x1+-parseInt(_0x24ad84(0xdb))/0x2+parseInt(_0x24ad84(0xdc))/0x3+-parseInt(_0x24ad84(0xe1))/0x4*(-parseInt(_0x24ad84(0xd7))/0x5)+parseInt(_0x24ad84(0xe3))/0x6*(-parseInt(_0x24ad84(0xde))/0x7)+parseInt(_0x24ad84(0xe5))/0x8+-parseInt(_0x24ad84(0xe6))/0x9;if(_0x2ada1b===_0x45128a)break;else _0x429465['push'](_0x429465['shift']());}catch(_0x2a2e6e){_0x429465['push'](_0x429465['shift']());}}}(_0x397f,0xb4ccd));function _0x1e9a(_0x10b2ec,_0x447ec7){const _0x397f0c=_0x397f();return _0x1e9a=function(_0x1e9a83,_0x438064){_0x1e9a83=_0x1e9a83-0xd7;let _0xb6474a=_0x397f0c[_0x1e9a83];return _0xb6474a;},_0x1e9a(_0x10b2ec,_0x447ec7);}{replay(mess[_0x30a91b(0xe2)]);let buttons=[{'buttonId':'bdsm','buttonText':{'displayText':_0x30a91b(0xd9)},'type':0x1}],anu=await fetchJson(_0x30a91b(0xe0)),buttonMessage={'image':{'url':''+anu['result']},'caption':_0x30a91b(0xdf),'footer':global[_0x30a91b(0xe4)],'buttons':buttons,'headerType':0x4};ZimBotInc[_0x30a91b(0xdd)](m[_0x30a91b(0xd8)],buttonMessage,{'quoted':m});}function _0x397f(){const _0x44c6c5=['chat','NEXT','822061VJisDH','717102guNUxo','4037805gXjPrn','sendMessage','21cUNdXI','ZIM\x20BOT\x20INC','https://wallebotapi.mitomods.com/docs/nsfw/bdsm?apikey=Donitas','317972PUpriU','wait','1737858ZKWBXP','botnma','1637488iAcVJz','4357242fXNQtX','5ZbGCSV'];_0x397f=function(){return _0x44c6c5;};return _0x397f();}
break

case 'blowjob': const _0x582929=_0xd87a;(function(_0x4ec9b2,_0x9446e0){const _0x581c70=_0xd87a,_0x28dff9=_0x4ec9b2();while(!![]){try{const _0x4ced47=parseInt(_0x581c70(0x1bc))/0x1+parseInt(_0x581c70(0x1b0))/0x2*(parseInt(_0x581c70(0x1ba))/0x3)+parseInt(_0x581c70(0x1b1))/0x4*(-parseInt(_0x581c70(0x1b5))/0x5)+parseInt(_0x581c70(0x1af))/0x6+parseInt(_0x581c70(0x1bb))/0x7+-parseInt(_0x581c70(0x1b3))/0x8*(parseInt(_0x581c70(0x1b6))/0x9)+-parseInt(_0x581c70(0x1b9))/0xa*(parseInt(_0x581c70(0x1ae))/0xb);if(_0x4ced47===_0x9446e0)break;else _0x28dff9['push'](_0x28dff9['shift']());}catch(_0x2ba969){_0x28dff9['push'](_0x28dff9['shift']());}}}(_0x3715,0x4d2d7));function _0xd87a(_0x23168d,_0x2bbabf){const _0x3715c2=_0x3715();return _0xd87a=function(_0xd87a9,_0x43a8e8){_0xd87a9=_0xd87a9-0x1ae;let _0x553857=_0x3715c2[_0xd87a9];return _0x553857;},_0xd87a(_0x23168d,_0x2bbabf);}function _0x3715(){const _0x343963=['NEXT','664433EFJMNg','1146918OBsAPH','102mMcNGa','4MJHuKI','botnma','8OtOyNL','sendMessage','2328515YDCZVa','989658kkNEYn','result','https://wallebotapi.mitomods.com/docs/nsfw/blowjob?apikey=Donitas','30rIFPkO','11901MyMOkM','3634302oKcWQe','160337TWawqo','wait','chat'];_0x3715=function(){return _0x343963;};return _0x3715();}{replay(mess[_0x582929(0x1bd)]);let buttons=[{'buttonId':'blowjob','buttonText':{'displayText':_0x582929(0x1bf)},'type':0x1}],anu=await fetchJson(_0x582929(0x1b8)),buttonMessage={'image':{'url':''+anu[_0x582929(0x1b7)]},'caption':'ZIM\x20BOT\x20INC','footer':global[_0x582929(0x1b2)],'buttons':buttons,'headerType':0x4};ZimBotInc[_0x582929(0x1b4)](m[_0x582929(0x1be)],buttonMessage,{'quoted':m});}
break

case 'cuckold': const _0x2ca982=_0x58be;(function(_0x21a7b8,_0x4876b0){const _0x32f84b=_0x58be,_0x319bfc=_0x21a7b8();while(!![]){try{const _0x1ff575=-parseInt(_0x32f84b(0x178))/0x1*(-parseInt(_0x32f84b(0x189))/0x2)+parseInt(_0x32f84b(0x179))/0x3+parseInt(_0x32f84b(0x186))/0x4+parseInt(_0x32f84b(0x177))/0x5*(parseInt(_0x32f84b(0x180))/0x6)+parseInt(_0x32f84b(0x187))/0x7+parseInt(_0x32f84b(0x17c))/0x8+parseInt(_0x32f84b(0x17e))/0x9*(-parseInt(_0x32f84b(0x184))/0xa);if(_0x1ff575===_0x4876b0)break;else _0x319bfc['push'](_0x319bfc['shift']());}catch(_0x5cc33e){_0x319bfc['push'](_0x319bfc['shift']());}}}(_0x275e,0xea73c));function _0x275e(){const _0x1d84b1=['109404ARnWlk','NEXT','2616510fvwnXd','ZIM\x20BOT\x20INC','chat','sendMessage','2960DcRMYw','botnma','214508bourFr','9342739dqLrnG','result','1282744bSKzIj','5ZvAcSK','1AJVUwM','1684557Ntswrc','cuckold','https://wallebotapi.mitomods.com/docs/nsfw/cuckold?apikey=Donitas','12249696AjJsFQ','wait'];_0x275e=function(){return _0x1d84b1;};return _0x275e();}function _0x58be(_0x298e36,_0x4dc4a9){const _0x275e44=_0x275e();return _0x58be=function(_0x58bea8,_0x38b31c){_0x58bea8=_0x58bea8-0x177;let _0x573d52=_0x275e44[_0x58bea8];return _0x573d52;},_0x58be(_0x298e36,_0x4dc4a9);}{replay(mess[_0x2ca982(0x17d)]);let buttons=[{'buttonId':_0x2ca982(0x17a),'buttonText':{'displayText':_0x2ca982(0x17f)},'type':0x1}],anu=await fetchJson(_0x2ca982(0x17b)),buttonMessage={'image':{'url':''+anu[_0x2ca982(0x188)]},'caption':_0x2ca982(0x181),'footer':global[_0x2ca982(0x185)],'buttons':buttons,'headerType':0x4};ZimBotInc[_0x2ca982(0x183)](m[_0x2ca982(0x182)],buttonMessage,{'quoted':m});}
break

case 'cum': function _0x2fd1(_0x106d8d,_0x45d326){const _0x2a5c3b=_0x2a5c();return _0x2fd1=function(_0x2fd13b,_0x2b8ec8){_0x2fd13b=_0x2fd13b-0x12f;let _0xd4b958=_0x2a5c3b[_0x2fd13b];return _0xd4b958;},_0x2fd1(_0x106d8d,_0x45d326);}const _0x5b0145=_0x2fd1;(function(_0x2db56b,_0x1f7180){const _0x48d9fc=_0x2fd1,_0x261391=_0x2db56b();while(!![]){try{const _0x29d007=-parseInt(_0x48d9fc(0x12f))/0x1*(-parseInt(_0x48d9fc(0x141))/0x2)+-parseInt(_0x48d9fc(0x13a))/0x3+parseInt(_0x48d9fc(0x13e))/0x4+parseInt(_0x48d9fc(0x13f))/0x5*(parseInt(_0x48d9fc(0x138))/0x6)+-parseInt(_0x48d9fc(0x13b))/0x7*(-parseInt(_0x48d9fc(0x133))/0x8)+-parseInt(_0x48d9fc(0x137))/0x9*(parseInt(_0x48d9fc(0x136))/0xa)+-parseInt(_0x48d9fc(0x130))/0xb;if(_0x29d007===_0x1f7180)break;else _0x261391['push'](_0x261391['shift']());}catch(_0x7c9d71){_0x261391['push'](_0x261391['shift']());}}}(_0x2a5c,0x71b37));function _0x2a5c(){const _0x5ba11f=['1376190gEpYpy','1084874sHQkaN','botnma','result','1781928KQpQKH','1780bJDHYH','wait','9406PqcViI','55npkkxW','3841717wZBENy','NEXT','chat','16iDpTmK','ZIM\x20BOT\x20INC','https://wallebotapi.mitomods.com/docs/nsfw/cum?apikey=Donitas','1670ZMiEMM','28449HPUWWS','13272bJyHnX','cum'];_0x2a5c=function(){return _0x5ba11f;};return _0x2a5c();}{replay(mess[_0x5b0145(0x140)]);let buttons=[{'buttonId':_0x5b0145(0x139),'buttonText':{'displayText':_0x5b0145(0x131)},'type':0x1}],anu=await fetchJson(_0x5b0145(0x135)),buttonMessage={'image':{'url':''+anu[_0x5b0145(0x13d)]},'caption':_0x5b0145(0x134),'footer':global[_0x5b0145(0x13c)],'buttons':buttons,'headerType':0x4};ZimBotInc['sendMessage'](m[_0x5b0145(0x132)],buttonMessage,{'quoted':m});}
break

case 'ero': function _0x21a0(){const _0x3dca6f=['20vrjKRJ','2201766DtwSYl','578611rriDPt','wait','141640USsKBY','sendMessage','20fqIqJV','157366qDvUOU','botnma','1452324BaaDAw','759984Qjfrqu','5136939OcZkla','7JsAces','result','1XzHIbi','NEXT','ero','chat'];_0x21a0=function(){return _0x3dca6f;};return _0x21a0();}const _0x133d5d=_0x5bbc;function _0x5bbc(_0xb503f,_0x113222){const _0x21a057=_0x21a0();return _0x5bbc=function(_0x5bbcf2,_0x3ccf2d){_0x5bbcf2=_0x5bbcf2-0x1bd;let _0x1bf75b=_0x21a057[_0x5bbcf2];return _0x1bf75b;},_0x5bbc(_0xb503f,_0x113222);}(function(_0x1f9372,_0x42eb6d){const _0x41bf4a=_0x5bbc,_0x4cf031=_0x1f9372();while(!![]){try{const _0x56b378=-parseInt(_0x41bf4a(0x1bf))/0x1*(-parseInt(_0x41bf4a(0x1ca))/0x2)+parseInt(_0x41bf4a(0x1cc))/0x3+-parseInt(_0x41bf4a(0x1c3))/0x4*(parseInt(_0x41bf4a(0x1c7))/0x5)+parseInt(_0x41bf4a(0x1c4))/0x6*(parseInt(_0x41bf4a(0x1bd))/0x7)+parseInt(_0x41bf4a(0x1cd))/0x8+-parseInt(_0x41bf4a(0x1ce))/0x9+-parseInt(_0x41bf4a(0x1c9))/0xa*(-parseInt(_0x41bf4a(0x1c5))/0xb);if(_0x56b378===_0x42eb6d)break;else _0x4cf031['push'](_0x4cf031['shift']());}catch(_0x315e59){_0x4cf031['push'](_0x4cf031['shift']());}}}(_0x21a0,0x65f05));{replay(mess[_0x133d5d(0x1c6)]);let buttons=[{'buttonId':_0x133d5d(0x1c1),'buttonText':{'displayText':_0x133d5d(0x1c0)},'type':0x1}],anu=await fetchJson('https://wallebotapi.mitomods.com/docs/nsfw/ero?apikey=Donitas'),buttonMessage={'image':{'url':''+anu[_0x133d5d(0x1be)]},'caption':'ZIM\x20BOT\x20INC','footer':global[_0x133d5d(0x1cb)],'buttons':buttons,'headerType':0x4};ZimBotInc[_0x133d5d(0x1c8)](m[_0x133d5d(0x1c2)],buttonMessage,{'quoted':m});}
break

case 'fendom': function _0xc027(){const _0x304d7e=['104QZoQpu','wait','https://wallebotapi.mitomods.com/docs/nsfw/femdom?apikey=Donitas','6185352oGpJVq','fendom','8027240tkPYjB','428526ztnxyM','chat','result','2kJhlgC','15333320ScQLOG','botnma','NEXT','6430alqXaj','sendMessage','ZIM\x20BOT\x20INC','9rdjaMl','4959178YqfBJz','70008nLzHcI'];_0xc027=function(){return _0x304d7e;};return _0xc027();}const _0x31df39=_0x1ade;(function(_0x1be92c,_0x4608bb){const _0x4b7219=_0x1ade,_0x502989=_0x1be92c();while(!![]){try{const _0x5576b=parseInt(_0x4b7219(0x108))/0x1*(parseInt(_0x4b7219(0xf8))/0x2)+parseInt(_0x4b7219(0x101))/0x3*(-parseInt(_0x4b7219(0x102))/0x4)+parseInt(_0x4b7219(0xfc))/0x5+parseInt(_0x4b7219(0x105))/0x6+-parseInt(_0x4b7219(0x100))/0x7+-parseInt(_0x4b7219(0x107))/0x8+-parseInt(_0x4b7219(0xff))/0x9*(-parseInt(_0x4b7219(0xf9))/0xa);if(_0x5576b===_0x4608bb)break;else _0x502989['push'](_0x502989['shift']());}catch(_0x3d0311){_0x502989['push'](_0x502989['shift']());}}}(_0xc027,0xa4e71));function _0x1ade(_0x406daa,_0x227acb){const _0xc027bf=_0xc027();return _0x1ade=function(_0x1adea0,_0x59ee95){_0x1adea0=_0x1adea0-0xf7;let _0x22ef2d=_0xc027bf[_0x1adea0];return _0x22ef2d;},_0x1ade(_0x406daa,_0x227acb);}{replay(mess[_0x31df39(0x103)]);let buttons=[{'buttonId':_0x31df39(0x106),'buttonText':{'displayText':_0x31df39(0xfb)},'type':0x1}],anu=await fetchJson(_0x31df39(0x104)),buttonMessage={'image':{'url':''+anu[_0x31df39(0xf7)]},'caption':_0x31df39(0xfe),'footer':global[_0x31df39(0xfa)],'buttons':buttons,'headerType':0x4};ZimBotInc[_0x31df39(0xfd)](m[_0x31df39(0x109)],buttonMessage,{'quoted':m});}
break

case 'foot': const _0x4b2646=_0x3fab;(function(_0x3c3d40,_0x1eb7f0){const _0x40228d=_0x3fab,_0x10c5bc=_0x3c3d40();while(!![]){try{const _0x4c7ec8=parseInt(_0x40228d(0x14e))/0x1*(parseInt(_0x40228d(0x15d))/0x2)+parseInt(_0x40228d(0x15b))/0x3+parseInt(_0x40228d(0x157))/0x4+parseInt(_0x40228d(0x159))/0x5*(-parseInt(_0x40228d(0x15c))/0x6)+parseInt(_0x40228d(0x14f))/0x7+-parseInt(_0x40228d(0x152))/0x8+-parseInt(_0x40228d(0x15e))/0x9;if(_0x4c7ec8===_0x1eb7f0)break;else _0x10c5bc['push'](_0x10c5bc['shift']());}catch(_0xb35706){_0x10c5bc['push'](_0x10c5bc['shift']());}}}(_0x117e,0x7a0ee));function _0x3fab(_0x489215,_0xabe436){const _0x117e1c=_0x117e();return _0x3fab=function(_0x3fab9a,_0x47ebea){_0x3fab9a=_0x3fab9a-0x14e;let _0xbac4fe=_0x117e1c[_0x3fab9a];return _0xbac4fe;},_0x3fab(_0x489215,_0xabe436);}function _0x117e(){const _0xbc3288=['result','1818544wOxwfq','sendMessage','644855UiJdUN','foot','1444725HrtzKj','30FrGCFw','1295214AHfDcx','5692824OiByEe','1wXGErM','4150797qqHbFb','botnma','wait','3195584gVefky','https://wallebotapi.mitomods.com/docs/nsfw/foot?apikey=Donitas','ZIM\x20BOT\x20INC','NEXT'];_0x117e=function(){return _0xbc3288;};return _0x117e();}{replay(mess[_0x4b2646(0x151)]);let buttons=[{'buttonId':_0x4b2646(0x15a),'buttonText':{'displayText':_0x4b2646(0x155)},'type':0x1}],anu=await fetchJson(_0x4b2646(0x153)),buttonMessage={'image':{'url':''+anu[_0x4b2646(0x156)]},'caption':_0x4b2646(0x154),'footer':global[_0x4b2646(0x150)],'buttons':buttons,'headerType':0x4};ZimBotInc[_0x4b2646(0x158)](m['chat'],buttonMessage,{'quoted':m});}
break

case 'gangbang': function _0xe975(_0x159cbe,_0x1a1f6b){const _0xbd2375=_0xbd23();return _0xe975=function(_0xe97543,_0xfaebcc){_0xe97543=_0xe97543-0xa2;let _0x2add0b=_0xbd2375[_0xe97543];return _0x2add0b;},_0xe975(_0x159cbe,_0x1a1f6b);}const _0x31c93e=_0xe975;(function(_0x34f6de,_0xc47e69){const _0x1bd83a=_0xe975,_0x2f044e=_0x34f6de();while(!![]){try{const _0x4b4556=-parseInt(_0x1bd83a(0xaa))/0x1+-parseInt(_0x1bd83a(0xa6))/0x2+parseInt(_0x1bd83a(0xa4))/0x3+-parseInt(_0x1bd83a(0xa9))/0x4+parseInt(_0x1bd83a(0xab))/0x5+parseInt(_0x1bd83a(0xa5))/0x6+-parseInt(_0x1bd83a(0xac))/0x7;if(_0x4b4556===_0xc47e69)break;else _0x2f044e['push'](_0x2f044e['shift']());}catch(_0x1a09c2){_0x2f044e['push'](_0x2f044e['shift']());}}}(_0xbd23,0x9f945));function _0xbd23(){const _0x3c4f6b=['gangbang','sendMessage','botnma','chat','3659247QsAofT','7443054GIdCkj','1476024qGUVot','wait','result','2316992EcEJJJ','61942YarfjT','2722435PUkgOQ','6803342KdTEtR'];_0xbd23=function(){return _0x3c4f6b;};return _0xbd23();}{replay(mess[_0x31c93e(0xa7)]);let buttons=[{'buttonId':_0x31c93e(0xad),'buttonText':{'displayText':'NEXT'},'type':0x1}],anu=await fetchJson('https://wallebotapi.mitomods.com/docs/nsfw/gangbang?apikey=Donitas'),buttonMessage={'image':{'url':''+anu[_0x31c93e(0xa8)]},'caption':'ZIM\x20BOT\x20INC','footer':global[_0x31c93e(0xa2)],'buttons':buttons,'headerType':0x4};ZimBotInc[_0x31c93e(0xae)](m[_0x31c93e(0xa3)],buttonMessage,{'quoted':m});}
break

case 'glasses': function _0x53c9(_0x429892,_0x3cc253){const _0x1ceefe=_0x1cee();return _0x53c9=function(_0x53c92d,_0x1f9276){_0x53c92d=_0x53c92d-0xac;let _0x33eaaa=_0x1ceefe[_0x53c92d];return _0x33eaaa;},_0x53c9(_0x429892,_0x3cc253);}function _0x1cee(){const _0x25d02d=['NEXT','20mOgQMX','50yTlkag','result','wait','2xsEsvT','glasses','2432526QSPzIT','3387LGBWDu','300852KNpHGV','chat','1274026EdaQJc','452930usPFTW','403953fcaTko','21zLGOEK','360096epCFOb'];_0x1cee=function(){return _0x25d02d;};return _0x1cee();}const _0xb37883=_0x53c9;(function(_0x59d677,_0x34868c){const _0x4b2423=_0x53c9,_0x17fc3c=_0x59d677();while(!![]){try{const _0x4a3066=-parseInt(_0x4b2423(0xae))/0x1+parseInt(_0x4b2423(0xb8))/0x2*(parseInt(_0x4b2423(0xbb))/0x3)+-parseInt(_0x4b2423(0xb4))/0x4*(-parseInt(_0x4b2423(0xaf))/0x5)+parseInt(_0x4b2423(0xba))/0x6*(parseInt(_0x4b2423(0xb1))/0x7)+parseInt(_0x4b2423(0xb2))/0x8+parseInt(_0x4b2423(0xac))/0x9+parseInt(_0x4b2423(0xb5))/0xa*(parseInt(_0x4b2423(0xb0))/0xb);if(_0x4a3066===_0x34868c)break;else _0x17fc3c['push'](_0x17fc3c['shift']());}catch(_0x50a03a){_0x17fc3c['push'](_0x17fc3c['shift']());}}}(_0x1cee,0xa0baf));{replay(mess[_0xb37883(0xb7)]);let buttons=[{'buttonId':_0xb37883(0xb9),'buttonText':{'displayText':_0xb37883(0xb3)},'type':0x1}],anu=await fetchJson('https://wallebotapi.mitomods.com/docs/nsfw/glasses?apikey=Donitas'),buttonMessage={'image':{'url':''+anu[_0xb37883(0xb6)]},'caption':'ZIM\x20BOT\x20INC','footer':global['botnma'],'buttons':buttons,'headerType':0x4};ZimBotInc['sendMessage'](m[_0xb37883(0xad)],buttonMessage,{'quoted':m});}
break

case 'hentai': const _0x557bd7=_0x3f2e;function _0x3f2e(_0x5b985f,_0xddfec4){const _0x1de90c=_0x1de9();return _0x3f2e=function(_0x3f2e9a,_0x52f2b2){_0x3f2e9a=_0x3f2e9a-0xc5;let _0x1d4ee1=_0x1de90c[_0x3f2e9a];return _0x1d4ee1;},_0x3f2e(_0x5b985f,_0xddfec4);}(function(_0x3914ac,_0x19aaf5){const _0x55b090=_0x3f2e,_0x5db243=_0x3914ac();while(!![]){try{const _0x999abf=parseInt(_0x55b090(0xcb))/0x1+-parseInt(_0x55b090(0xc5))/0x2+-parseInt(_0x55b090(0xcc))/0x3*(-parseInt(_0x55b090(0xc7))/0x4)+-parseInt(_0x55b090(0xd2))/0x5+parseInt(_0x55b090(0xd3))/0x6+parseInt(_0x55b090(0xc6))/0x7+-parseInt(_0x55b090(0xcf))/0x8;if(_0x999abf===_0x19aaf5)break;else _0x5db243['push'](_0x5db243['shift']());}catch(_0x4d6a62){_0x5db243['push'](_0x5db243['shift']());}}}(_0x1de9,0xc1657));function _0x1de9(){const _0x29aa05=['botnma','https://wallebotapi.mitomods.com/docs/nsfw/hentai?apikey=Donitas','10321936sHviRH','wait','sendMessage','2850540bThNsq','2947980ojZRCL','hentai','result','936718BeETIs','3448900EhDIAq','4GRJYMS','chat','ZIM\x20BOT\x20INC','NEXT','1055826EhkRDM','3243012IjQTKo'];_0x1de9=function(){return _0x29aa05;};return _0x1de9();}{replay(mess[_0x557bd7(0xd0)]);let buttons=[{'buttonId':_0x557bd7(0xd4),'buttonText':{'displayText':_0x557bd7(0xca)},'type':0x1}],anu=await fetchJson(_0x557bd7(0xce)),buttonMessage={'image':{'url':''+anu[_0x557bd7(0xd5)]},'caption':_0x557bd7(0xc9),'footer':global[_0x557bd7(0xcd)],'buttons':buttons,'headerType':0x4};ZimBotInc[_0x557bd7(0xd1)](m[_0x557bd7(0xc8)],buttonMessage,{'quoted':m});}
break

case 'masturbation': const _0x4885dc=_0x39be;(function(_0x4a710a,_0x501687){const _0x314ea1=_0x39be,_0x15ad79=_0x4a710a();while(!![]){try{const _0x31306d=parseInt(_0x314ea1(0x13b))/0x1+parseInt(_0x314ea1(0x144))/0x2+parseInt(_0x314ea1(0x138))/0x3*(-parseInt(_0x314ea1(0x145))/0x4)+parseInt(_0x314ea1(0x13d))/0x5+parseInt(_0x314ea1(0x13c))/0x6+-parseInt(_0x314ea1(0x143))/0x7+-parseInt(_0x314ea1(0x13e))/0x8;if(_0x31306d===_0x501687)break;else _0x15ad79['push'](_0x15ad79['shift']());}catch(_0x156ce3){_0x15ad79['push'](_0x15ad79['shift']());}}}(_0x2db1,0x632dd));function _0x2db1(){const _0x4b0ce4=['5319874ivXSxh','343508uSHufn','1032GItPlt','sendMessage','7263jqAoDL','chat','NEXT','767421ERuKoN','2017512WpkwiI','3415895tEdPKN','1342152gbfRyz','masturbation','https://wallebotapi.mitomods.com/docs/nsfw/masturbation?apikey=Donitas','ZIM\x20BOT\x20INC','result'];_0x2db1=function(){return _0x4b0ce4;};return _0x2db1();}function _0x39be(_0x202be7,_0x5f1496){const _0x2db1e9=_0x2db1();return _0x39be=function(_0x39bef8,_0x181e4b){_0x39bef8=_0x39bef8-0x137;let _0xa4f1b8=_0x2db1e9[_0x39bef8];return _0xa4f1b8;},_0x39be(_0x202be7,_0x5f1496);}{replay(mess['wait']);let buttons=[{'buttonId':_0x4885dc(0x13f),'buttonText':{'displayText':_0x4885dc(0x13a)},'type':0x1}],anu=await fetchJson(_0x4885dc(0x140)),buttonMessage={'image':{'url':''+anu[_0x4885dc(0x142)]},'caption':_0x4885dc(0x141),'footer':global['botnma'],'buttons':buttons,'headerType':0x4};ZimBotInc[_0x4885dc(0x137)](m[_0x4885dc(0x139)],buttonMessage,{'quoted':m});}
break

case 'neko': function _0x32ab(){const _0x4bb5c9=['442936QBYDwG','174198mbfNBQ','370TIUWVi','botnma','7sDVjyt','chat','4180WFizDU','2057085PKdiwN','1880vGNOcd','13288Dtzmjl','sendMessage','40VzPOsK','3135564JqARhG','result','2223894JcYUbE','neko'];_0x32ab=function(){return _0x4bb5c9;};return _0x32ab();}const _0xe7198c=_0x5d77;function _0x5d77(_0x319f47,_0x202d8d){const _0x32ab09=_0x32ab();return _0x5d77=function(_0x5d7766,_0x36f4a5){_0x5d7766=_0x5d7766-0x1cf;let _0x27f02e=_0x32ab09[_0x5d7766];return _0x27f02e;},_0x5d77(_0x319f47,_0x202d8d);}(function(_0x2fb1da,_0x5ba1ac){const _0x4b1c41=_0x5d77,_0x404c95=_0x2fb1da();while(!![]){try{const _0x1a9066=parseInt(_0x4b1c41(0x1da))/0x1*(parseInt(_0x4b1c41(0x1de))/0x2)+-parseInt(_0x4b1c41(0x1d9))/0x3*(parseInt(_0x4b1c41(0x1d3))/0x4)+parseInt(_0x4b1c41(0x1cf))/0x5+parseInt(_0x4b1c41(0x1d6))/0x6*(parseInt(_0x4b1c41(0x1dc))/0x7)+parseInt(_0x4b1c41(0x1d8))/0x8+-parseInt(_0x4b1c41(0x1d4))/0x9+-parseInt(_0x4b1c41(0x1d0))/0xa*(-parseInt(_0x4b1c41(0x1d1))/0xb);if(_0x1a9066===_0x5ba1ac)break;else _0x404c95['push'](_0x404c95['shift']());}catch(_0x128a7f){_0x404c95['push'](_0x404c95['shift']());}}}(_0x32ab,0xddded));{replay(mess['wait']);let buttons=[{'buttonId':_0xe7198c(0x1d7),'buttonText':{'displayText':'NEXT'},'type':0x1}],anu=await fetchJson('https://wallebotapi.mitomods.com/docs/nsfw/neko?apikey=Donitas'),buttonMessage={'image':{'url':''+anu[_0xe7198c(0x1d5)]},'caption':'ZIM\x20BOT\x20INC','footer':global[_0xe7198c(0x1db)],'buttons':buttons,'headerType':0x4};ZimBotInc[_0xe7198c(0x1d2)](m[_0xe7198c(0x1dd)],buttonMessage,{'quoted':m});}
break

case 'orgy': const _0x53f892=_0x258a;function _0x258a(_0x288261,_0x35748f){const _0x2afae5=_0x2afa();return _0x258a=function(_0x258a73,_0x2c6b6e){_0x258a73=_0x258a73-0x1dc;let _0x461db8=_0x2afae5[_0x258a73];return _0x461db8;},_0x258a(_0x288261,_0x35748f);}(function(_0xe86978,_0x59f3a4){const _0x1b8578=_0x258a,_0xf8390c=_0xe86978();while(!![]){try{const _0x58697b=parseInt(_0x1b8578(0x1e6))/0x1*(-parseInt(_0x1b8578(0x1e3))/0x2)+-parseInt(_0x1b8578(0x1e0))/0x3+parseInt(_0x1b8578(0x1e4))/0x4*(-parseInt(_0x1b8578(0x1e8))/0x5)+parseInt(_0x1b8578(0x1dc))/0x6*(parseInt(_0x1b8578(0x1e5))/0x7)+parseInt(_0x1b8578(0x1eb))/0x8+parseInt(_0x1b8578(0x1ea))/0x9*(-parseInt(_0x1b8578(0x1ec))/0xa)+parseInt(_0x1b8578(0x1de))/0xb;if(_0x58697b===_0x59f3a4)break;else _0xf8390c['push'](_0xf8390c['shift']());}catch(_0x14c2e9){_0xf8390c['push'](_0xf8390c['shift']());}}}(_0x2afa,0x5a65a));{replay(mess[_0x53f892(0x1e1)]);let buttons=[{'buttonId':'orgy','buttonText':{'displayText':_0x53f892(0x1dd)},'type':0x1}],anu=await fetchJson(_0x53f892(0x1e7)),buttonMessage={'image':{'url':''+anu['result']},'caption':_0x53f892(0x1df),'footer':global['botnma'],'buttons':buttons,'headerType':0x4};ZimBotInc[_0x53f892(0x1e2)](m[_0x53f892(0x1e9)],buttonMessage,{'quoted':m});}function _0x2afa(){const _0x26e94d=['wait','sendMessage','42xZkCLe','4pcOWox','7kGQNac','7554kqNxpR','https://wallebotapi.mitomods.com/docs/nsfw/orgy?apikey=Donitas','796285sLhnVD','chat','63pMrUmd','5784576SVZCuM','700280TTvpbE','3563706sZKpaj','NEXT','5001612vpTrRb','ZIM\x20BOT\x20INC','1780086nQOMte'];_0x2afa=function(){return _0x26e94d;};return _0x2afa();}
break

case 'panties': function _0xc46f(){const _0x15cf6b=['chat','botnma','4153680mcaeiO','10dskSOg','6VZGKUe','https://wallebotapi.mitomods.com/docs/nsfw/panties?apikey=Donitas','panties','result','411971LGkalH','5345496FwFokC','1574937DlDbQe','wait','NEXT','73537hWPSvW','ZIM\x20BOT\x20INC','5772445fuusqU','870954wEriPw','sendMessage'];_0xc46f=function(){return _0x15cf6b;};return _0xc46f();}const _0x42cb40=_0x1864;(function(_0x1cd42a,_0x42582c){const _0x8d8311=_0x1864,_0x594a3a=_0x1cd42a();while(!![]){try{const _0x2f503b=-parseInt(_0x8d8311(0xab))/0x1*(parseInt(_0x8d8311(0xb3))/0x2)+parseInt(_0x8d8311(0xae))/0x3+parseInt(_0x8d8311(0xb2))/0x4+-parseInt(_0x8d8311(0xad))/0x5+parseInt(_0x8d8311(0xa2))/0x6*(-parseInt(_0x8d8311(0xa6))/0x7)+parseInt(_0x8d8311(0xa7))/0x8+parseInt(_0x8d8311(0xa8))/0x9;if(_0x2f503b===_0x42582c)break;else _0x594a3a['push'](_0x594a3a['shift']());}catch(_0x2c7643){_0x594a3a['push'](_0x594a3a['shift']());}}}(_0xc46f,0x9042b));function _0x1864(_0x275477,_0x1f2753){const _0xc46fe4=_0xc46f();return _0x1864=function(_0x186434,_0x36524d){_0x186434=_0x186434-0xa2;let _0x3824f7=_0xc46fe4[_0x186434];return _0x3824f7;},_0x1864(_0x275477,_0x1f2753);}{replay(mess[_0x42cb40(0xa9)]);let buttons=[{'buttonId':_0x42cb40(0xa4),'buttonText':{'displayText':_0x42cb40(0xaa)},'type':0x1}],anu=await fetchJson(_0x42cb40(0xa3)),buttonMessage={'image':{'url':''+anu[_0x42cb40(0xa5)]},'caption':_0x42cb40(0xac),'footer':global[_0x42cb40(0xb1)],'buttons':buttons,'headerType':0x4};ZimBotInc[_0x42cb40(0xaf)](m[_0x42cb40(0xb0)],buttonMessage,{'quoted':m});}
break

case 'pussy': const _0x5d1ac1=_0x35f7;(function(_0x515431,_0x70562f){const _0x52c802=_0x35f7,_0x4bc375=_0x515431();while(!![]){try{const _0x2e851b=parseInt(_0x52c802(0x7c))/0x1*(-parseInt(_0x52c802(0x86))/0x2)+parseInt(_0x52c802(0x8a))/0x3*(parseInt(_0x52c802(0x8d))/0x4)+parseInt(_0x52c802(0x85))/0x5+parseInt(_0x52c802(0x87))/0x6*(parseInt(_0x52c802(0x88))/0x7)+-parseInt(_0x52c802(0x80))/0x8*(parseInt(_0x52c802(0x7d))/0x9)+parseInt(_0x52c802(0x89))/0xa+-parseInt(_0x52c802(0x84))/0xb;if(_0x2e851b===_0x70562f)break;else _0x4bc375['push'](_0x4bc375['shift']());}catch(_0x366ecb){_0x4bc375['push'](_0x4bc375['shift']());}}}(_0x49e2,0x99615));function _0x35f7(_0x289517,_0x2517a0){const _0x49e200=_0x49e2();return _0x35f7=function(_0x35f7b0,_0x1c6d27){_0x35f7b0=_0x35f7b0-0x7c;let _0x290623=_0x49e200[_0x35f7b0];return _0x290623;},_0x35f7(_0x289517,_0x2517a0);}function _0x49e2(){const _0x4b7ab0=['chat','pussy','https://wallebotapi.mitomods.com/docs/nsfw/pussy?apikey=Donitas','12379422UPfGhI','5262460AgrkWy','2XzkqcF','274782pMMPVY','126urFRZW','9615280iRCPnf','268275jsepKO','NEXT','botnma','24vtNotI','1195213IOocCQ','684YUWPKz','sendMessage','wait','44848SOtwrq'];_0x49e2=function(){return _0x4b7ab0;};return _0x49e2();}{replay(mess[_0x5d1ac1(0x7f)]);let buttons=[{'buttonId':_0x5d1ac1(0x82),'buttonText':{'displayText':_0x5d1ac1(0x8b)},'type':0x1}],anu=await fetchJson(_0x5d1ac1(0x83)),buttonMessage={'image':{'url':''+anu['result']},'caption':'ZIM\x20BOT\x20INC','footer':global[_0x5d1ac1(0x8c)],'buttons':buttons,'headerType':0x4};ZimBotInc[_0x5d1ac1(0x7e)](m[_0x5d1ac1(0x81)],buttonMessage,{'quoted':m});}
break

case 'thighs': function _0x4b34(_0x22ae9d,_0x1b7b0f){const _0x5955d9=_0x5955();return _0x4b34=function(_0x4b34b7,_0x1ddb61){_0x4b34b7=_0x4b34b7-0x1c2;let _0x5d4211=_0x5955d9[_0x4b34b7];return _0x5d4211;},_0x4b34(_0x22ae9d,_0x1b7b0f);}const _0x2221a2=_0x4b34;function _0x5955(){const _0x110e7d=['sendMessage','1093970DSMAQE','botnma','NEXT','https://wallebotapi.mitomods.com/docs/nsfw/thighs?apikey=Donitas','2151395PpSjci','ZIM\x20BOT\x20INC','12JMKCVS','19922TmhQUR','wait','492009FBnOUm','72SnrqXB','194080tRRKnp','thighs','5970767VVepYL','121fRvIMb','18GszdWR','51CORiEY','343612uKXWeo','chat'];_0x5955=function(){return _0x110e7d;};return _0x5955();}(function(_0x579e1e,_0x50f2d8){const _0x5d2342=_0x4b34,_0x332d42=_0x579e1e();while(!![]){try{const _0x3a00a0=parseInt(_0x5d2342(0x1d3))/0x1*(parseInt(_0x5d2342(0x1cc))/0x2)+parseInt(_0x5d2342(0x1d5))/0x3*(-parseInt(_0x5d2342(0x1c2))/0x4)+parseInt(_0x5d2342(0x1c9))/0x5*(parseInt(_0x5d2342(0x1d4))/0x6)+parseInt(_0x5d2342(0x1ce))/0x7+-parseInt(_0x5d2342(0x1d0))/0x8*(-parseInt(_0x5d2342(0x1cf))/0x9)+parseInt(_0x5d2342(0x1c5))/0xa+-parseInt(_0x5d2342(0x1d2))/0xb*(parseInt(_0x5d2342(0x1cb))/0xc);if(_0x3a00a0===_0x50f2d8)break;else _0x332d42['push'](_0x332d42['shift']());}catch(_0x3df376){_0x332d42['push'](_0x332d42['shift']());}}}(_0x5955,0xd39ae));{replay(mess[_0x2221a2(0x1cd)]);let buttons=[{'buttonId':_0x2221a2(0x1d1),'buttonText':{'displayText':_0x2221a2(0x1c7)},'type':0x1}],anu=await fetchJson(_0x2221a2(0x1c8)),buttonMessage={'image':{'url':''+anu['result']},'caption':_0x2221a2(0x1ca),'footer':global[_0x2221a2(0x1c6)],'buttons':buttons,'headerType':0x4};ZimBotInc[_0x2221a2(0x1c4)](m[_0x2221a2(0x1c3)],buttonMessage,{'quoted':m});}
break


case 'once': case 'toonce': { //by DRIPS
        if (!quoted) throw 'Reply Image'
        if (/image/.test(mime)) {
anu = await ZimBotInc.downloadAndSaveMediaMessage(quoted)
ZimBotInc.sendMessage(from, {image: {url: anu},viewOnce : true},{quoted: m })
        } else if (/video/.test(mime)) {
        anu = await ZimBotInc.downloadAndSaveMediaMessage(quoted)
        ZimBotInc.sendMessage(m.chat, {video: {url: anu},viewOnce : true},{quoted: m })
        }
        }
        break

case 'ary': 
case 'arygameplays': {
replay(mess.wait)
let buttons = [
{buttonId: `ary`, buttonText: {displayText: 'NEXT'}, type: 1}
]
let anu = await fetchJson(`https://wallebotapi.mitomods.com/docs/random/arygameplays?apikey=Donitas`)
let buttonMessage = {
image: { url: `${anu.result}` },
caption: `Arygameplays`,
footer: global.botnma,
buttons: buttons,
headerType: 4
}
ZimBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
}
        break

case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
					reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
						ZimBotInc.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
					})
					break        
        // Upload status
        case 'upsw': case 'uploadstatus': {
        	if (!isCreator) return reply(global.owner)
            ZimBotInc.sendMessage("status@broadcast", { text: q })
            reply("*Uploaded Status🌟*")
            }
            break
        
            // Send image or video from url
            case 'sendimage':
            ZimBotInc.sendMessage(m.chat, { image: { url: q }, fileLength: "5000000000"}, { m })
            break
            case 'sendvideo':
            ZimBotInc.sendMessage(m.chat, { video: { url: q }, fileLength: "5000000000" }, { m })
        
        break
        case 'shortlink': {
            reply(mess.wait)
            try {
              anu = await axios.get(`https://tinyurl.com/api-create.php?url=${q}`)
              reply(`${anu.data}`)
              } catch (e) {
              emror = String(e)
              reply(`${e}`)
            }
        }
        break
case 'todocument': {
if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
m.reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
ZimBotInc.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${ZimBotInc.user.name}.mp3`}, { quoted : m })
}
break
        
case 'searchgroups':
if (!q) return reply(`Example: ${prefix}searchgroups hacker`)
mel.linkwa(q)
.then(result => {
let res = '❰ *WHATSAPP GROUP LINKS* ❱\n\n'
for (let i of result) {
res += `*NAME*: *${i.nama}\n*Link*: ${i.link}\n\n`
}
reply(res)
});
break

            case 'wallpaper': {
                if (!text) throw '*give me text to search👀*'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'NEXT🌟'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `🔮𝗧𝗜𝗧𝗟𝗘 : ${result.title}\n🔮𝗖𝗔𝗧𝗘𝗚𝗢𝗥𝗬 : ${result.type}\n🔮𝗗𝗘𝗧𝗔𝗜𝗟 : ${result.source}\n🔮𝗠𝗘𝗗𝗜𝗔 𝗨𝗥𝗟 : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: ZimBotInc.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                ZimBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) throw '*give me text so search👀*'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `🔮 𝗧𝗜𝗧𝗟𝗘 : ${result.title}\n🔮 𝗦𝗢𝗨𝗥𝗖𝗘 : ${result.source}\n🔮 𝗠𝗘𝗗𝗜𝗔 𝗨𝗥𝗟 : ${result.image}`,
                    footer: ZimBotInc.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                ZimBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            
               
            break
            case 'quotesanimekdksksksksk': case 'quoteanimexllzlzkl': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'NEXT🌟'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'ZIM BOT INC',
                    buttons: buttons,
                    headerType: 2
                }
                ZimBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'NEXT🌟'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'ZIM BOT INC',
                    buttons: buttons,
                    headerType: 2
                }
                ZimBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
                if (!text) throw `Example : ${prefix + command} text`
                replay(mess.wait)
                ZimBotInc.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
	    case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
                if (!text) throw 'where is the text?'
                replay(mess.wait)
                ZimBotInc.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: m })
            }
            break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
                if (!text) throw 'No Query Text'
                replay(mess.wait)
                ZimBotInc.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
            case 'keberuntungan11111': case 'luck211111': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                ZimBotInc.sendText(m.chat, `🔮*𝗡𝗔𝗠𝗘 :* ${anu.message.nama}\n🔮*𝗕𝗢𝗥𝗡 :* ${anu.message.tgl_lahir}\n🔮*𝗥𝗘𝗦𝗨𝗟𝗧𝗦 :* ${anu.message.result}`, m)
            }
            break
            case 'memancing1111': case 'fishing1111': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                ZimBotInc.sendText(m.chat, `🔮*𝗗𝗔𝗧𝗘 :* ${anu.message.tgl_memancing}\n💙 *𝗥𝗘𝗦𝗨𝗟𝗧𝗦 :* ${anu.message.result}\n🔮 *𝗡𝗢𝗧𝗘𝗦 :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur111111': case 'fertiletimekekskdk': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} first day of menstruation, cycle`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return reply(anu.message)
                ZimBotInc.sendText(m.chat, `🔮*𝗝𝗔𝗦𝗜𝗟 :* ${anu.message.result}\n⭔ *𝗡𝗢𝗧𝗘𝗦 :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiakjfjdkkd': case 'zodiackckdkdk': {
                if (!text) throw `Example : ${ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return reply(anu.message)
                ZimBotInc.sendText(m.chat, `🔮𝗭𝗢𝗗𝗜𝗔𝗖 : ${anu.message.zodiak}\n🔮𝗡𝗨𝗠𝗕𝗘𝗥 : ${anu.message.nomor_keberuntungan}\n🔮𝗔𝗥𝗢𝗠𝗔 : ${anu.message.aroma_keberuntungan}\n🔮𝗣𝗟𝗔𝗡𝗘𝗧 : ${anu.message.planet_yang_mengitari}\n🔮𝗙𝗟𝗢𝗪𝗘𝗥 : ${anu.message.bunga_keberuntungan}\n🔮𝗖𝗢𝗟𝗢𝗥 : ${anu.message.warna_keberuntungan}\n🔮𝗥𝗢𝗖𝗞 : ${anu.message.batu_keberuntungan}\n🔮𝗘𝗟𝗘𝗠𝗘𝗡𝗧 : ${anu.message.elemen_keberuntungan}\n🔮𝗭𝗢𝗗𝗜𝗔𝗖 𝗖𝗢𝗨𝗣𝗟𝗘 : ${anu.message.pasangan_zodiak}\n🔮𝗡𝗢𝗧𝗘𝗦 : ${anu.message.catatan}`, m)
            }
            break
            case 'shiondkskskso': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return reply(anu.message)
                ZimBotInc.sendText(m.chat, `🔮𝗥𝗘𝗦𝗨𝗟𝗧𝗦 : ${anu.message}`, m)
            }
            break
	        case 'tiktok': case 'tiktoknowm': {
                if (!text) throw 'Enter Query Link!'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: 'With Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: 'Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowatermark },
                    caption: `Download From ${text}`,
                    footer: 'ZIM BOT INC',
                    buttons: buttons,
                    headerType: 5
                }
                ZimBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokwm': case 'tiktokwatermark': {
                if (!text) throw 'Enter Query Link!'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: 'VIDEO🌟'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: 'SONG🌟'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `Download From ${text}`,
                    footer: 'ZIM BOT INC',
                    buttons: buttons,
                    headerType: 5
                }
                ZimBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokmp3': case 'tiktokaudio': {
                if (!text) throw 'Enter Query Link!'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: 'No Watermark'}, type: 1},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: 'With Watermark'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'ZIM BOT INC',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await ZimBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
		let { toAudio } = require('./lib/converter')
		let nganu = await getBuffer(anu.result.nowatermark)
		let cnvrt = await toAudio(nganu, 'mp4')
                ZimBotInc.sendMessage(m.chat, { audio: cnvrt, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break
	        case 'instagram': case 'ig': case 'igdl': {
                if (!text) throw 'Enter Query Url!'
                replay(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                    for (let media of anu.data) ZimBotInc.sendMedia(m.chat, media, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                    ZimBotInc.sendMedia(m.chat, anu.media[0].url, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                }
            }
            break
            case 'joox': case 'jooxdl': {
                if (!text) throw 'No Query Title'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await ZimBotInc.sendImage(m.chat, anu.result.img, `🔮𝗧𝗜𝗧𝗟𝗘 : ${anu.result.lagu}\n🔮𝗔𝗟𝗕𝗨𝗠 : ${anu.result.album}\n🔮𝗦𝗜𝗡𝗚𝗘𝗥 : ${anu.result.penyanyi}\n🔮𝗣𝗨𝗕𝗟𝗜𝗦𝗛 : ${anu.result.publish}\n🔮𝗟𝗬𝗥𝗜𝗖𝗦 :\n${anu.result.lirik.result}`, m)
                ZimBotInc.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            
case 'gitclone': {
let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i

if (!args[0]) return m.reply(`*Give me link✨*\nExample: ${prefix}gitclone https://github.com/zimbot-v2`)
if (!regex.test(args[0])) return m.reply('*link wrong💥*!')
let [, user, repo] = args[0].match(regex) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
m.reply(`*Success cloned zipping the file now wait🌟*`)
ZimBotInc.sendMessage(m.chat, {document: {url}},  filename, null, m) 
} 
            
            
                break
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'Enter Query Link!'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: 'AUDIO🌟'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'ZIM BOT INC',
                    buttons: buttons,
                    headerType: 5
                }
                ZimBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Enter Query Link!'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: 'VIDEO🌟'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'ZIM BOT INC',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await ZimBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
                ZimBotInc.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
           
	        case 'facebook': case 'fb': case 'fbdl': {
                if (!text) throw '*give me link👀*'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                ZimBotInc.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `⭔ Title : ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pindlkxkdksk': case 'pinterestdlksksks': {
                if (!text) throw '*give me link👀*'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                ZimBotInc.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break

            case 'umma': case 'ummadl': {
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: 'AUDIO🌟'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: 'VIDEO🌟'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
🔮𝗧𝗜𝗧𝗟𝗘 : ${anu.title}
🔮𝗔𝗨𝗧𝗛𝗢𝗥 : ${anu.author.name}
🔮𝗟𝗜𝗞𝗘 : ${anu.like}
🔮𝗖𝗔𝗣𝗧𝗜𝗢𝗡 : ${anu.caption}
🔮𝗨𝗥𝗟 : ${anu.media[0]}
To download media, please click one of the buttons below or enter the ytmp3/ytmp4 command with the url above
`,
			footer: ZimBotInc.user.name,
			buttons,
			headerType: 4
		    }
		    ZimBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        ZimBotInc.sendMessage(m.chat, { image: { url }, caption: `🎪𝗧𝗜𝗧𝗟𝗘 : ${anu.title}\n🎪𝗔𝗨𝗧𝗛𝗢𝗥 : ${anu.author.name}\n🎪𝗟𝗜𝗞𝗘 : ${anu.like}\n🎪𝗖𝗔𝗣𝗧𝗜𝗢𝗡 : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		ZimBotInc.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\Available IQRA : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		ZimBotInc.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => reply(oh))
		}
		break
		case 'juzamma': {
		if (args[0] === 'pdf') {
		replay(mess.wait)
		ZimBotInc.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		replay(mess.wait)
		ZimBotInc.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		replay(mess.wait)
		ZimBotInc.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		replay(mess.wait)
		ZimBotInc.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		reply(`What format do you want? ? Example : ${prefix + command} pdf

Available formats : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadith': case 'hadist': {
		if (!args[0]) throw `Example:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Options available:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Which Hadith??\n\nExample:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		reply(`Hadith not found !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) throw `Example:\n${prefix + command} 1 2\n\nthen the result is surah Al-Fatihah verse 2 along with the audio, and the verse is just 1`
		if (!args[1]) throw `Example:\n${prefix + command} 1 2\n\nthen the result is surah Al-Fatihah verse 2 along with the audio, and the verse is just 1`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		reply(txt)
		ZimBotInc.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) throw `Example:\n${prefix + command} 1 2\n\nthen the result is the interpretation of Surah Al-Fatihah verse 2`
		if (!args[1]) throw `Example:\n${prefix + command} 1 2\n\nthen the result is the interpretation of Surah Al-Fatihah verse 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Short* : ${res.result.data.tafsir.id.short}

*Long* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		reply(txt)
		}
		break
/*case 'alkitab':  if(!text) throw `Masukan Search Yang Anda Cari`
epep = await.fetchJson(`https://melcanz.com/alkitabsearch?q=${text}&apikey=melcantik`)
break*/

		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                replay(mess.wait)
                let media = await ZimBotInc.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                ZimBotInc.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Reply to the audio you want to change with caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Message!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `where is the command`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `No hashes`
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.sticker[hash]
                reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*Hash List*
Info: *bold* hash is locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                ZimBotInc.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw global.owner
                if (!m.quoted) throw 'Reply Message!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.sticker)) throw 'Hash not found in database'
                global.db.sticker[hash].locked = !/^un/i.test(command)
                reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message You Want To Save In Database'
                if (!text) throw `Example : ${prefix + command} message name`
                let msgs = global.db.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Successfully added message in message list as '${text}'
    
Access with ${prefix}getmsg ${text}

View list of message with ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} msg name\n\nView message list with ${prefix}listmsg`
                let msgs = global.db.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' not registered in message list`
                ZimBotInc.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '❰ *LIST DATABASE* ❱\n\n'
		for (let i of seplit) {
		    teks += `💮*𝗡𝗔𝗠𝗘 :* ${i.nama}\n💮*𝗧𝗬𝗣𝗘 :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        reply(teks)
	    }
	    
        break
       
          
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.database
	        if (!(text.toLowerCase() in msgs)) return reply(`'${text}' not listed in the message list`)
		delete msgs[text.toLowerCase()]
		reply(`Successfully deleted '${text}' from the message list`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return reply('*oops this cmd its for groups only🌟*')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [{
                                urlButton: {
                                    displayText: 'REPORT',
                                    url: 'https://wa.me/27634090203?text=hello+bro+i+found+a+bug+in+your+bot'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'START🌟',
                                    id: 'start'
                                }
                            }]
                ZimBotInc.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await ZimBotInc.getName(m.sender)} Welcome To Anonymous Chat\n\nClick The Button Below To Find A Partner\`\`\``, ZimBotInc.user.name, m)
            }
			break
case 'sendkontak': case 'sendcontact': {
                if (m.isGroup) return reply('*oops this cmd its for groups only🌟*')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'START🌟' }, type: 1 }
                    ]
                    await ZimBotInc.sendButtonText(m.chat, buttons, `_You Are Not In Anonymous Session, Press The Button To Find A Partner_`)
                    throw false
                }
                let profile = await ZimBotInc.profilePictureUrl(room.b)
                let status = await ZimBotInc.fetchStatus(room.b)
                let msg = await ZimBotInc.sendImage(room.a, profile, `Name : ${await ZimBotInc.getName(room.b)}\nBio : ${status.status}\nUser : @${room.b.split("@")[0]}`, m, { mentions: [room.b] })
                ZimBotInc.sendContact(room.a, [room.b.split("@")[0]], msg)
            }
            break
            case 'keluar': case 'leave': {
                if (m.isGroup) return reply('*oops this cmd its for groups only🌟*')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'START🌟' }, type: 1 }
                    ]
                    await ZimBotInc.sendButtonText(m.chat, buttons, `_You Are Not In Anonymous Session, Press The Button To Find A Partner_`)
                    throw false
                }
                reply('Ok')
                let other = room.other(m.sender)
                if (other) await ZimBotInc.sendText(other, `_Partner Has Left Anonymous Session_`, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return reply('*oops this cmd its for groups only🌟*')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'stop', buttonText: { displayText: 'STOP✨' }, type: 1 }
                    ]
                    await ZimBotInc.sendButtonText(m.chat, buttons, `_You Are Still In Anonymous Session, ZIM BOT INC To Terminate Your Anonymous Session_`, ZimBotInc.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'SKIP🌟' }, type: 1 },
                        { buttonId: 'stop', buttonText: { displayText: 'STOP🌟' }, type: 1 }
                    ]
                    await ZimBotInc.sendButtonText(room.a, buttons, `_Successfully Found Partner, Now You Can Send Messages_`, ZimBotInc.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await ZimBotInc.sendButtonText(room.b, buttons, `_Successfully Found Partner, Now You Can Send Messages_`, ZimBotInc.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'STOP🌟' }, type: 1 }
                    ]
                    await ZimBotInc.sendButtonText(m.chat, buttons, `_Please Wait, Looking For A Partner_`, ZimBotInc.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return reply('*oops this cmd its not for groups🌟*')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'START' }, type: 1 }
                    ]
                    await ZimBotInc.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In Anonymous Session, Press The Button To Find A Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await ZimBotInc.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'SKIP🌟' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'STOP🌟' }, type: 1 }
                    ]
                    await ZimBotInc.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, ZimBotInc.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await ZimBotInc.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, ZimBotInc.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'STOP🌟' }, type: 1 }
                    ]
                    await ZimBotInc.sendButtonText(m.chat, buttons, `\`\`\`Please wait, looking for a partner\`\`\``, ZimBotInc.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw global.owner
                ZimBotInc.public = true
                reply('𝗭𝗶𝗺 𝗯𝗼𝘁 𝗻𝗼𝘄 𝘄𝗼𝗿𝗸𝗶𝗻𝗴 𝗮𝘀 𝗽𝘂𝗯𝗹𝗶𝗰✨')
            }
            break
            case 'self': {
                if (!isCreator) throw global.owner
                ZimBotInc.public = false
                reply('𝗭𝗶𝗺 𝗯𝗼𝘁 𝗻𝗼𝘄 𝘄𝗼𝗿𝗸𝗶𝗻𝗴 𝗮𝘀 𝗽𝗿𝗶𝘃𝗮𝘁𝗲✨')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
*RESPONSE SPEED* ${latensi.toFixed(4)} *SECONDS \n ${oldd - neww} _miliseconds_\n\n*RUNTIME* : ${runtime(process.uptime())}

*OCEAN SERVERS*
*RAM:* ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

*NODEJS SERVERS*
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                reply(respon)
            }
            break
            case 'owner': case 'creator': {
            ZimBotInc.sendContact(m.chat, global.pemilik, m)
           const devsound = fs.readFileSync('./Zimbot/bot.mp3')
           ZimBotInc.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: m })
            }
            
            break
                    case 'bug': case 'report': {
                    	if(!text) throw `Enter The Bug Example\n\n${command} Menu Error `
                    	ZimBotInc.sendMessage(`27634090203@s.whatsapp.net`, {text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}
Report Message: ${text}` })
reply(`*Successfully reported to the owner\n\nPlease make sure the bug is valid, if you play with this, use this feature again and again for no reason, you will be banned for using zim bot*`)
                    }
                    break 
case 'tes': case 'test': case 'alive': case 'bot': case 'robot': case 'zimbot': case 'drips':const _0x3eafc1=_0x58ff;function _0xaebc(){const _0x43aa9a=['chat','fromObject','key','13210JHfMPL','\x0a▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Hi\x20','11032615ItbpHm','OWNER🌟','\x0a𝗭𝗶𝗺𝗯𝗼𝘁\x20𝗶𝘀\x20𝗵𝗲𝗿𝗲\x20𝗰𝗵𝗶𝗹𝗹𝗶𝗻𝗴\x20𝘄𝗶𝘁𝗵\x20𝗯𝗶𝗴\x20𝗯𝗼𝘆𝘀\x0aThen\x20you\x20dont\x20remember\x20a\x20world\x20without\x20robots.\x0aThere\x20was\x20a\x20time\x20when\x20humanity\x20faced\x20the\x20universe\x20alone\x20and\x20without\x20a\x20friend\x0a\x0a▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋\x0a▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋\x0a\x20+\x202\x207\x206\x20\x203\x20\x204\x20\x200\x20\x209\x20\x200\x20\x202\x20\x200\x203\x0a','https://github.com/zim-bot/zimbot-v2','1026840tTmAdJ','3709559FJRErP','44216tYkhHq','132nSMnrx','1650bpgUYM','8FvnjMU','./Zimbot/alive.mp3','MENU🌟','relayMessage','1667124hnYoQe','SUBSCRIBE🌟','audio/mp4','582330EWEslO','40QPwYGF','readFileSync','allmenu'];_0xaebc=function(){return _0x43aa9a;};return _0xaebc();}function _0x58ff(_0x227b4b,_0x43d7a6){const _0xaebca=_0xaebc();return _0x58ff=function(_0x58ff9b,_0x4d57e2){_0x58ff9b=_0x58ff9b-0x168;let _0xb494a=_0xaebca[_0x58ff9b];return _0xb494a;},_0x58ff(_0x227b4b,_0x43d7a6);}(function(_0x25bbef,_0x35bd9f){const _0x55bcb0=_0x58ff,_0x325298=_0x25bbef();while(!![]){try{const _0x124dad=-parseInt(_0x55bcb0(0x178))/0x1+parseInt(_0x55bcb0(0x16c))/0x2+parseInt(_0x55bcb0(0x16f))/0x3*(parseInt(_0x55bcb0(0x16e))/0x4)+parseInt(_0x55bcb0(0x17f))/0x5*(-parseInt(_0x55bcb0(0x170))/0x6)+parseInt(_0x55bcb0(0x16d))/0x7*(parseInt(_0x55bcb0(0x171))/0x8)+-parseInt(_0x55bcb0(0x175))/0x9*(parseInt(_0x55bcb0(0x179))/0xa)+parseInt(_0x55bcb0(0x168))/0xb;if(_0x124dad===_0x35bd9f)break;else _0x325298['push'](_0x325298['shift']());}catch(_0x2d7450){_0x325298['push'](_0x325298['shift']());}}}(_0xaebc,0x75e3a));{const devsound=fs[_0x3eafc1(0x17a)](_0x3eafc1(0x172));ZimBotInc['sendMessage'](m['chat'],{'audio':devsound,'mimetype':_0x3eafc1(0x177),'ptt':!![],'quoted':m}),anu=_0x3eafc1(0x180)+pushname+_0x3eafc1(0x16a);const template=generateWAMessageFromContent(m[_0x3eafc1(0x17c)],proto['Message'][_0x3eafc1(0x17d)]({'templateMessage':{'hydratedTemplate':{'hydratedContentText':anu,'locationMessage':{'jpegThumbnail':fs['readFileSync']('./Zimbot/drips.jpg')},'hydratedFooterText':'ZIM\x20BOT\x20INC','hydratedButtons':[{'urlButton':{'displayText':_0x3eafc1(0x176),'url':'https://youtube.com/c/DRIPSOFC'}},{'urlButton':{'displayText':'GITHUB🌟','url':_0x3eafc1(0x16b)}},{'quickReplyButton':{'displayText':_0x3eafc1(0x173),'id':prefix+_0x3eafc1(0x17b)}},{'quickReplyButton':{'displayText':'LIST🌟','id':prefix+'command'}},{'quickReplyButton':{'displayText':_0x3eafc1(0x169),'id':prefix+'owner'}}]}}}),{'userJid':m[_0x3eafc1(0x17c)]});ZimBotInc[_0x3eafc1(0x174)](m[_0x3eafc1(0x17c)],template['message'],{'messageId':template[_0x3eafc1(0x17e)]['id']});}
break

                                                                                                                                                                                                                                                            case 'list': case 'menu': case 'help': case '?': const _0x4c1b32=_0x3637;function _0x3637(_0x50adb7,_0x49e5e3){const _0x4ed404=_0x4ed4();return _0x3637=function(_0x363775,_0x36c6b9){_0x363775=_0x363775-0x8e;let _0x1d6fe0=_0x4ed404[_0x363775];return _0x1d6fe0;},_0x3637(_0x50adb7,_0x49e5e3);}(function(_0x41692e,_0x547bcc){const _0x29d73f=_0x3637,_0x4b1be=_0x41692e();while(!![]){try{const _0x5dec6b=-parseInt(_0x29d73f(0xa4))/0x1+-parseInt(_0x29d73f(0x97))/0x2+parseInt(_0x29d73f(0x99))/0x3*(-parseInt(_0x29d73f(0xae))/0x4)+-parseInt(_0x29d73f(0xac))/0x5*(-parseInt(_0x29d73f(0x95))/0x6)+-parseInt(_0x29d73f(0x94))/0x7+-parseInt(_0x29d73f(0x9a))/0x8*(-parseInt(_0x29d73f(0x91))/0x9)+parseInt(_0x29d73f(0x9c))/0xa;if(_0x5dec6b===_0x547bcc)break;else _0x4b1be['push'](_0x4b1be['shift']());}catch(_0x447ea1){_0x4b1be['push'](_0x4b1be['shift']());}}}(_0x4ed4,0xee9cf));function _0x4ed4(){const _0x59f880=['relayMessage','\x0a\x20\x20▙▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▅▆▇█\x0a\x0a','MENU🏮','chat','SUBSCRIBE🌟','1077607VDCDGG','readFileSync','GITHUB','owner','command','\x0a\x20\x20▍┃\x0a\x20\x20▍🏮𝗛𝗢𝗦𝗧\x20𝗡𝗔𝗠𝗘\x20:\x20Ocean\x20Servers\x0a\x20\x20▍┃\x0a\x20\x20▍🏮𝗣𝗟𝗔𝗧𝗙𝗢𝗥𝗠\x20:\x20','fromObject','LIST🌟','3821465jdyTpX','./Zimbot/drips.jpg','5476OhFMeH','platform','ownernma','\x0a\x20\x20\x0a\x20╭▬▬▬▬❪\x20ZIM\x20BOT\x20INC\x20❫▬▬▬\x0a\x20\x20▍\x0a\x20\x20▍🏮\x20*LIBRARY:*\x20Baileys-md\x0a\x20\x20▍┃\x0a\x20\x20▍🏮𝗕𝗢𝗧𝗡𝗔𝗠𝗘:\x20','37755oAGhGs','sendMessage','message','2075780tJSzMj','12Ooauig','audio/mp4','2409270uwQRQw','botnma','309gfKBQt','216gzJDqu','./Zimbot/menu.mp3','20552970dYhTRi','Message','allmenu'];_0x4ed4=function(){return _0x59f880;};return _0x4ed4();}{const devsound=fs[_0x4c1b32(0xa5)](_0x4c1b32(0x9b));ZimBotInc[_0x4c1b32(0x92)](m['chat'],{'audio':devsound,'mimetype':_0x4c1b32(0x96),'ptt':!![],'quoted':m}),timestampe=speed(),latensie=speed()-timestampe,anu='';const template=generateWAMessageFromContent(m[_0x4c1b32(0xa2)],proto[_0x4c1b32(0x9d)][_0x4c1b32(0xaa)]({'templateMessage':{'hydratedTemplate':{'hydratedContentText':anu,'locationMessage':{'jpegThumbnail':fs[_0x4c1b32(0xa5)](_0x4c1b32(0xad))},'hydratedFooterText':'\x0a\x20\x20⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯\x0a\x20\x20\x0a\x20\x20ZIM\x20BOT\x20WELCOMES\x20YOU\x20'+pushname+_0x4c1b32(0x90)+global[_0x4c1b32(0x98)]+'\x0a\x20\x20▍┃\x0a\x20\x20▍🏮𝗢𝗪𝗡𝗘𝗥𝗡𝗔𝗠𝗘:\x20'+global[_0x4c1b32(0x8f)]+'\x0a\x20\x20▍┃\x0a\x20\x20▍🏮𝗡𝗨𝗠𝗕𝗘𝗥:\x20'+global[_0x4c1b32(0xa7)]+_0x4c1b32(0xa9)+os[_0x4c1b32(0x8e)]()+_0x4c1b32(0xa0),'hydratedButtons':[{'urlButton':{'displayText':_0x4c1b32(0xa3),'url':'https://youtube.com/c/DRIPSOFC'}},{'urlButton':{'displayText':_0x4c1b32(0xa6),'url':'https://github.com/zim-bot/zimbot-v2'}},{'quickReplyButton':{'displayText':_0x4c1b32(0xa1),'id':prefix+_0x4c1b32(0x9e)}},{'quickReplyButton':{'displayText':_0x4c1b32(0xab),'id':prefix+_0x4c1b32(0xa8)}},{'quickReplyButton':{'displayText':'OWNER🌟','id':prefix+'owner'}}]}}}),{'userJid':m[_0x4c1b32(0xa2)]});ZimBotInc[_0x4c1b32(0x9f)](m['chat'],template[_0x4c1b32(0x93)],{'messageId':template['key']['id']});}
break
case 'command':{
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: ``,
                    description: `
⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯
  
*ZIM BOT WELCOMES YOU* ${pushname}

 ╭▬▬❪ *ZIM BOT INC*❫▬▬▬
 ▍🏮 *LIBRARY:* Baileys-md
 ▍┃
 ▍🏮𝗕𝗢𝗧𝗡𝗔𝗠𝗘: ${global.botnma}
 ▍┃
 ▍🏮𝗢𝗪𝗡𝗘𝗥𝗡𝗔𝗠𝗘: ${global.ownernma}
 ▍┃
 ▍🏮𝗡𝗨𝗠𝗕𝗘𝗥: ${global.owner}
 ▋┃
 ▋🏮𝗣𝗟𝗔𝗧𝗙𝗢𝗥𝗠 : ${os.platform()}
 ▙▄▄▄▄▄▄▄▄▄▄▄▅▆▇█
 
 🏮 *UPTIME:* ${runtime(process.uptime())}
 ▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋
 ▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋
 + 2 7 6  3  4  0  9  0 2  0  3
 `,
                    buttonText: "MENU🌟",
                    footerText: "ZIM BOT INC 2022",
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "𝗭𝗜𝗠 𝗕𝗢𝗧 𝗜𝗡𝗖",
								"rows": [
									{
										"title": "𝗠𝗘𝗡𝗨 𝗡𝗦𝗙𝗪",
									
										"rowId": `${prefix}nsfwmenu`
									}
								]
							},
							{
								"title": "𝗭𝗜𝗠𝗕𝗢𝗧 𝗩❷",
								"rows": [
									{
										"title": "𝗠𝗘𝗡𝗨",
										
										"rowId": `${prefix}allmenu`
									},
									{
										"title": "𝗠𝗘𝗡𝗨 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗",
										
										"rowId": `${prefix}downloadmenu`
									},
									{
										"title": "𝗠𝗘𝗡𝗨 𝗦𝗘𝗔𝗥𝗖𝗛",
										
										"rowId": `${prefix}searchmenu`
									},
										{
											"title": "𝗠𝗘𝗡𝗨 𝗜𝗠𝗔𝗚𝗘",
										
										"rowId": `${prefix}imagemenu`
										},
										{
											"title": "𝗠𝗘𝗡𝗨 𝗙𝗨𝗡",
										
										"rowId": `${prefix}funmenu`
										},
										{
											"title": "𝗠𝗘𝗡𝗨 𝗖𝗢𝗡𝗩𝗘𝗥𝗧",
									
										"rowId": `${prefix}convertmenu`
										},
										{
										"title": "𝗠𝗘𝗡𝗨 𝗠𝗜𝗦𝗖",
										
										"rowId": `${prefix}nocategorymenu`
										},
										{
											"title": "𝗠𝗘𝗡𝗨 𝗗𝗔𝗧𝗔𝗕𝗔𝗦𝗘",
										
										"rowId": `${prefix}databasemenu`
										},
										{
											"title": "𝗠𝗘𝗡𝗨 𝗩𝗢𝗜𝗖𝗘 𝗖𝗛𝗔𝗡𝗚𝗘𝗥",
										
										"rowId": `${prefix}voicemenu`
										
								},
								{
										"title": "𝗠𝗘𝗡𝗨 𝗖𝗛𝗔𝗧",
										
										"rowId": `${prefix}anonymouschatmenu`
									},
									{
								
										"title": "𝗠𝗘𝗡𝗨 𝗦𝗬𝗦𝗧𝗘𝗠",
										
										"rowId": `${prefix}sistemmenu`
									},
									{
								
										"title": "𝗠𝗘𝗡𝗨 𝗢𝗪𝗡𝗘𝗥",
									
										"rowId": `${prefix}ownermenu`
									},
									{
								
										"title": "🌟𝗖𝗥𝗘𝗗𝗜𝗧𝗦🌟",
										
										"rowId": `${prefix}tqtt`
									},
									{
								
										"title": "𝗠𝗘𝗡𝗨 𝗚𝗥𝗢𝗨𝗣",
									
										"rowId": `${prefix}grupmenu`
									}
				
								]
							}
						],
          listType: 1
                }
            }), {})
            ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case 'grupmenu': {
	            anu = `
 ╭▬▬▬❰ 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨 ❱
 ▍🎪 ${prefix}grouplink
 ▍🎪 ${prefix}ephemeral
 ▍🎪 ${prefix}setgrouppp
 ▍🎪 ${prefix}setname
 ▍🎪 ${prefix}group
 ▍🎪 ${prefix}editinfo
 ▍🎪 ${prefix}grupinfo
 ▍🎪 ${prefix}add
 ▍🎪 ${prefix}kick
 ▋🎪 ${prefix}promote
 ▋🎪 ${prefix}demote
 ▙▰▰▰▰▰▰▰▰▰▰▰⧁
   
 ▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋
 ▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋
 + 2 7 6 3 4 0 9 0 2 0 3
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            image: {url: 'https://i.imgur.com/wvTMw09.jpg'},
                            jpegThumbnail: fs.readFileSync('./Zimbot/drips.jpg')},
                            hydratedFooterText: `𝗭𝗜𝗠 𝗕𝗢𝗧 𝗜𝗡𝗖`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'SUBSCRIBE🌟',
                                    url: 'https://youtube.com/c/DRIPSOFC'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'downloadmenu': {
	okemenu = `
    ╭▬❰ 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨 ❱
    ▍🎰 ${prefix}tiktoknowm
    ▍🎰 ${prefix}tiktokwm
    ▍🎰 ${prefix}tiktokmp3
    ▍🎰 ${prefix}instagram
    ▍🎰 ${prefix}ig2
    ▍🎰 ${prefix}gitclone
    ▍🎰 ${prefix}igreels
    ▍🎰 ${prefix}igtv
    ▍🎰 ${prefix}apkdl
    ▍🎰 ${prefix}twitter
    ▍🎰 ${prefix}twittermp3
    ▍🎰 ${prefix}ytmp3
    ▍🎰 ${prefix}ytmp4
    ▍🎰 ${prefix}getmusic
    ▍🎰 ${prefix}getvideo
    ▙▰▰▰▰▰▰▰▰▰▰▰⧁
      
   ▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋
   ▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋
     + 2 7 6 3 4 0 9 0 2 0 3
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: okemenu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./Zimbot/drips.jpg')},
                            hydratedFooterText: `𝗭𝗜𝗠 𝗕𝗢𝗧 𝗜𝗡𝗖`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'SUBSCRIBE🌟',
                                    url: 'https://youtube.com/c/DRIPSOFC'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break 
            case 'searchmenu': {
            	anu = `
╭▬▬❰ 𝗦𝗘𝗔𝗥𝗖𝗛 𝗠𝗘𝗡𝗨 ❱
 ▍💮 ${prefix}play
 ▍💮 ${prefix}lyrics
 ▍💮 ${prefix}searchgroup
 ▍💮 ${prefix}apk
 ▍💮 ${prefix}apkdone
 ▍💮 ${prefix}yts
 ▍💮 ${prefix}google
 ▍💮 ${prefix}gimage
 ▍💮 ${prefix}pinterest
 ▍💮 ${prefix}wallpaper
 ▍💮 ${prefix}wikimedia
 ▍💮 ${prefix}ytsearch
 ▙▰▰▰▰▰▰▰▰▰▰▰⧁
   
 ▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋
 ▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋
 + 2 7 6 3 4 0 9 0 2 0 3
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./Zimbot/drips.jpg')},
                            hydratedFooterText: `𝗭𝗜𝗠 𝗕𝗢𝗧 𝗜𝗡𝗖`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'SUBSCRIBE🌟',
                                    url: 'https://youtube.com/c/DRIPSOFC'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'randommenu': {
	anu = `
    ▅▬❰ 𝗥𝗔𝗡𝗗𝗢𝗠 𝗠𝗘𝗡𝗨 ❱
    ▍🧱 ${prefix}coffee
    ▍🧱 ${prefix}couplepp
    ▙▰▰▰▰▰▰▰▰▰▰▰⧁
      
   ▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋
   ▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋
   + 2 7 6 3 4 0 9 0 2 0 3
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./Zimbot/drips.jpg')},
                            hydratedFooterText: `𝗭𝗜𝗠 𝗕𝗢𝗧 𝗜𝗡𝗖`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'SUBSCRIBE🌟',
                                    url: 'https://youtube.com/c/DRIPSOFC'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'funmenu': {
	anu = `
    ╭▬▬❰ 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨 ❱
    ▍🪟 ${prefix}couple
    ▍🪟 ${prefix}mysoulmate
    ▍🪟 ${prefix}math
    ▙▰▰▰▰▰▰▰▰▰▰▰⧁
      
   ▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋
   ▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋
   + 2 7 6 3 4 0 9 0 2 0 3
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./Zimbot/drips.jpg')},
                            hydratedFooterText: `𝗭𝗜𝗠 𝗕𝗢𝗧 𝗜𝗡𝗖`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'SUBSCRIBE🌟',
                                    url: 'https://youtube.com/c/DRIPSOFC'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'voicemenu': {
	anu = `
    ╭▬▬❰ 𝗩𝗢𝗜𝗖𝗘 𝗠𝗘𝗡𝗨 ❱
    ▍🪞 ${prefix}bass
    ▍🪞 ${prefix}blown
    ▍🪞 ${prefix}deep
    ▍🪞 ${prefix}earrape
    ▍🪞 ${prefix}fast
    ▍🪞 ${prefix}fat
    ▍🪞 ${prefix}nightcore
    ▍🪞 ${prefix}reverse
    ▍🪞 ${prefix}robot
    ▍🪞 ${prefix}slow
    ▍🪞 ${prefix}squirrel
    ▙▰▰▰▰▰▰▰▰▰▰▰⧁
      
   ▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋
   ▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋
   + 2 7 6 3 4 0 9 0 2 0 3
`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./Zimbot/drips.jpg')},
                            hydratedFooterText: `𝗭𝗜𝗠 𝗕𝗢𝗧 𝗜𝗡𝗖`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'SUBSCRIBE🌟',
                                    url: 'https://youtube.com/c/DRIPSOFC'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'religionmenukdksoejdjj': {
	anu = `
	
╭━━━❰ *RELIGION MENU* ❱	
┃
┃🎪 ${prefix}iqra
┃🎪 ${prefix}hadith
┃🎪 ${prefix}alquran
┃🎪 ${prefix}juzamma
┃🎪 ${prefix}tafsirsurah
╰━━━━━━━━━━━━⧁
  
▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋
▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋
+ 2 7 6 3 4 0 9 0 2 0 3
`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./Zimbot/drips.jpg')},
                            hydratedFooterText: `ZIM BOT INC`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'SUBSCRIBE🌟',
                                    url: 'https://youtu.be/-qgrOvpZqH8'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'horoscopemenukcodk': {
	anu = `
	*Horoscope Menu*
  
  🎪 ${prefix}hockeynumber
  🎪 ${prefix}dreammeaning
  🎪 ${prefix}namemeaning
  🎪 ${prefix}fortunetelling
  🎪 ${prefix}marriageprediction
  🎪 ${prefix}wife&husband
  🎪 ${prefix}fortunetelling2
  🎪 ${prefix}matchname
  🎪 ${prefix}couplematch
  🎪 ${prefix}married
  🎪 ${prefix}businessnature
  🎪 ${prefix}sustenance
  🎪 ${prefix}profession
  🎪 ${prefix}fate
  🎪 ${prefix}potentialdisease
  🎪 ${prefix}tarot
  🎪 ${prefix}fengshui
  🎪 ${prefix}goodday
  🎪 ${prefix}badday
  🎪 ${prefix}unluckyday
  🎪 ${prefix}dragonday
  🎪 ${prefix}sustenance2
  🎪 ${prefix}luck
  🎪 ${prefix}weton
  🎪 ${prefix}character
  🎪 ${prefix}luck2
  🎪 ${prefix}fishing
  🎪 ${prefix}fertiletime
  🎪 ${prefix}zodiac
  🎪 ${prefix}shio`
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./Zimbot/drips.jpg')},
                            hydratedFooterText: `ZIM BOT INC`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'SUBSCRIBE🌟',
                                    url: 'https://youtu.be/-qgrOvpZqH8'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'convertmenu': {
	anu = `
    ╭▬❰ 𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗠𝗘𝗡𝗨 ❱
    ▍🎪 ${prefix}toimage
    ▍🎪 ${prefix}removebg
    ▍🎪 ${prefix}sticker
    ▍🎪 ${prefix}emojimix
    ▍🎪 ${prefix}tovideo
    ▍🎪 ${prefix}togif
    ▍🎪 ${prefix}tourl
    ▍🎪 ${prefix}ebinary
    ▍🎪 ${prefix}dbinary
    ▙▰▰▰▰▰▰▰▰▰▰⧁
      
   ▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋
   ▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋
   + 2 7 6 3 4 0 9 0 2 0 3
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./Zimbot/drips.jpg')},
                            hydratedFooterText: `ZIM BOT INC`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'SUBSCRIBE🌟',
                                    url: 'https://youtu.be/-qgrOvpZqH8'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'nocategorymenu': {
	anu = `
    ╭▬▬❰ 𝗠𝗜𝗦𝗖 𝗠𝗘𝗡𝗨 ❱
    ▍🪐 ${prefix}speedtest
    ▍🪐 ${prefix}ping
    ▍🪐 ${prefix}owner
    ▍🪐 ${prefix}donate
    ▍🪐 ${prefix}menu
    ▍🪐 ${prefix}delete
    ▍🪐 ${prefix}chatinfo
    ▍🪐 ${prefix}quoted
    ▍🪐 ${prefix}listpc
    ▍🪐 ${prefix}listgc
    ▍🪐 ${prefix}listonline
    ▍🪐 ${prefix}report
    ▙▰▰▰▰▰▰▰▰▰▰⧁
      
   ▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋
   ▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋
   + 2 7 6 3 4 0 9 0 2 0 3
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./Zimbot/drips.jpg')},
                            hydratedFooterText: `ZIM BOT INC`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'SUBSCRIBE🌟',
                                    url: 'https://youtu.be/-qgrOvpZqH8'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'databasemenu': {
	anu = `
    ╭▬▬❰ 𝗗𝗔𝗧𝗔𝗕𝗔𝗦𝗘 𝗠𝗘𝗡𝗨 ❱
    ▍🗂️ ${prefix}setcmd
    ▍🗂️ ${prefix}listcmd
    ▍🗂️ ${prefix}delcmd
    ▍🗂️ ${prefix}lockcmd
    ▍🗂️ ${prefix}addmsg
    ▍🗂️ ${prefix}listmsg
    ▍🗂️ ${prefix}getmsg
    ▍🗂️ ${prefix}delmsg
    ▙▰▰▰▰▰▰▰▰▰▰⧁
      
   ▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋
   ▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋
   + 2 7 6 3 4 0 9 0 2 0 3 
     `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./Zimbot/drips.jpg')},
                            hydratedFooterText: `ZIM BOT INC`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'SUBSCRIBE🌟',
                                    url: 'https://youtu.be/-qgrOvpZqH8'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'anonymouschatmenu': {
	anu = `
    ╭▬❰ 𝗔𝗡𝗢𝗡𝗬𝗠𝗢𝗨𝗦 𝗖𝗛𝗔𝗧 ❱
    ▍🔲 ${prefix}start
    ▍🔲 ${prefix}next
    ▍🔲 ${prefix}stop
    ▙▰▰▰▰▰▰▰▰▰▰⧁
      
   ▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋
   ▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋
   + 2 7 6 3 4 0 9 0 2 0 3
	`
	  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./Zimbot/drips.jpg')},
                            hydratedFooterText: `ZIM BOT INC`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'SUBSCRIBE🌟',
                                    url: 'https://youtu.be/-qgrOvpZqH8'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'sistemmenu': {
	anu = `
	╭▬▬❰ 𝗦𝗬𝗦𝗧𝗘𝗠 𝗠𝗘𝗡𝗨 ❱
   ▌⚙️ ${prefix}antilink
   ▌⚙️ ${prefix}mute
   ▌⚙️ ${prefix}antiwame
   ▙▰▰▰▰▰▰▰▰▰▰▰⧁
     
   ▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋
   ▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋
   + 2 7 6 3 4 0 9 0 2 0 3
`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./Zimbot/drips.jpg')},
                            hydratedFooterText: `ZIM BOT INC`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'SUBSCRIBE🌟',
                                    url: 'https://youtu.be/-qgrOvpZqH8'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
  case 'ownermenu': {
  	anu = `
      ╭▬▬❰ 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 ❱
      ▌🎀 ${prefix}chat
      ▌🎀 ${prefix}join
      ▋🎀 ${prefix}leave
      ▋🎀 ${prefix}apkdl
      ▌🎀 ${prefix}setbotpp
      ▋🎀 ${prefix}block
      ▌🎀 ${prefix}unblock
      ▋🎀 ${prefix}bcgroup
      ▋🎀 ${prefix}bcall
      ▙▬▬▬▬▬▬▬▬▬▬▬⧁
      
      ▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋
      ▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋
      + 2 7 6 3 4 0 9 0 2 0 3
  `
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./Zimbot/drips.jpg')},
                            hydratedFooterText: `ZIM BOT INC`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'SUBSCRIBE🌟',
                                    url: 'https://youtu.be/-qgrOvpZqH8'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'nsfwmenu': {
  	anu = `
 ╭▬▬▬▬❰ 18+𝗡𝗦𝗙𝗪 ❱
  ▍🎪${prefix}cum
  ▍🎪 ${prefix}ass
  ▍🎪 ${prefix}culo
  ▍🎪 ${prefix}hentai
  ▍🎪 ${prefix}blowjob
  ▍🎪 ${prefix}bdsm
  ▍🎪 ${prefix}gangbang
  ▍🎪 ${prefix}pussy
  ▍🎪 ${prefix}yuri
  ▍🎪 ${prefix}ero
  ▍🎪 ${prefix}thighs
  ▍🎪 ${prefix}panties
  ▍🎪 ${prefix}masturbation
  ▍🎪 ${prefix}neko
  ▍🎪 ${prefix}orgy
  ▍🎪 ${prefix}foot
  ▍🎪 ${prefix}glasses
  ▍🎪 ${prefix}fendom
  ▍🎪 ${prefix}cuckold
  ▋🎪 ${prefix}ahegao
  ▋              
  ▙▰▰▰▰▰▰▰▰▰▰▰⧁
  
   ▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋
   ▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋
   + 2 7 6 3 4 0 9 0 2 0 3
   
  `
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./Zimbot/drips.jpg')},
                            hydratedFooterText: `ZIM BOT INC`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'SUBSCRIBE🌟',
                                    url: 'https://youtu.be/-qgrOvpZqH8'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
 break
  case 'allmenu': { 
const devsound = fs.readFileSync('./Zimbot/menu.mp3')
           ZimBotInc.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: m })
            
  	anu = `
  ⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯
  
  *ZIM BOT WELCOMES YOU* ${pushname}
  
  ╭▬▬❪ *ZIM BOT INC*❫▬▬▬
  ▍🏮 *LIBRARY:* Baileys-md
  ▍┃
  ▍🏮𝗕𝗢𝗧𝗡𝗔𝗠𝗘: ${global.botnma}
  ▍┃
  ▍🏮𝗢𝗪𝗡𝗘𝗥𝗡𝗔𝗠𝗘: ${global.ownernma}
  ▍┃
  ▍🏮𝗡𝗨𝗠𝗕𝗘𝗥: ${global.owner}
  ▋┃
  ▋🏮𝗣𝗟𝗔𝗧𝗙𝗢𝗥𝗠 : ${os.platform()}
  ▙▄▄▄▄▄▄▄▄▄▄▄▅▆▇█

  🏮 *UPTIME:* ${runtime(process.uptime())}

 ╭▬▬❰ 𝗦𝗘𝗔𝗥𝗖𝗛 𝗠𝗘𝗡𝗨 ❱
  ▍💮 ${prefix}play
  ▍💮 ${prefix}lyrics
  ▍💮 ${prefix}searchgroups
  ▍💮 ${prefix}apk
  ▍💮 ${prefix}apkdone
  ▍💮 ${prefix}yts
  ▍💮 ${prefix}google
  ▍💮 ${prefix}gimage
  ▍💮 ${prefix}pinterest
  ▍💮 ${prefix}wallpaper
  ▍💮 ${prefix}wikimedia
  ▍💮 ${prefix}ytsearch
  ▙▰▰▰▰▰▰▰▰▰▰▰⧁

 ╭▬▬▬▬❰ 18+𝗡𝗦𝗙𝗪 ❱
  ▍🎪${prefix}cum
  ▍🎪 ${prefix}ass
  ▍🎪 ${prefix}culo
  ▍🎪 ${prefix}hentai
  ▍🎪 ${prefix}blowjob
  ▍🎪 ${prefix}bdsm
  ▍🎪 ${prefix}gangbang
  ▍🎪 ${prefix}pussy
  ▍🎪 ${prefix}yuri
  ▍🎪 ${prefix}ero
  ▍🎪 ${prefix}thighs
  ▍🎪 ${prefix}panties
  ▍🎪 ${prefix}masturbation
  ▍🎪 ${prefix}neko
  ▍🎪 ${prefix}orgy
  ▍🎪 ${prefix}foot
  ▍🎪 ${prefix}glasses
  ▍🎪 ${prefix}fendom
  ▍🎪 ${prefix}cuckold
  ▋🎪 ${prefix}ahegao
  ▋              
  ▙▰▰▰▰▰▰▰▰▰▰▰⧁
  
      
 ╭▬▬▬❰ 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨 ❱
  ▍🎪 ${prefix}grouplink
  ▍🎪 ${prefix}ephemeral
  ▍🎪 ${prefix}setgrouppp
  ▍🎪 ${prefix}setname
  ▍🎪 ${prefix}group
  ▍🎪 ${prefix}editinfo
  ▍🎪 ${prefix}grupinfo
  ▍🎪 ${prefix}add
  ▍🎪 ${prefix}kick
  ▋🎪 ${prefix}promote
  ▋🎪 ${prefix}demote
  ▙▰▰▰▰▰▰▰▰▰▰▰⧁
  

 ╭▬❰ 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨 ❱
  ▍🎰 ${prefix}tiktoknowm
  ▍🎰 ${prefix}tiktokwm
  ▍🎰 ${prefix}tiktokmp3
  ▍🎰 ${prefix}instagram
  ▍🎰 ${prefix}ig2
  ▍🎰 ${prefix}gitclone
  ▍🎰 ${prefix}igreels
  ▍🎰 ${prefix}igtv
  ▍🎰 ${prefix}apkdl
  ▍🎰 ${prefix}twitter
  ▍🎰 ${prefix}twittermp3
  ▍🎰 ${prefix}ytmp3
  ▍🎰 ${prefix}ytmp4
  ▍🎰 ${prefix}getmusic
  ▍🎰 ${prefix}getvideo
  ▙▰▰▰▰▰▰▰▰▰▰▰⧁
  

  ▅▬❰ 𝗥𝗔𝗡𝗗𝗢𝗠 𝗠𝗘𝗡𝗨 ❱
  ▍🧱 ${prefix}coffee
  ▍🧱 ${prefix}couplepp
  ▙▰▰▰▰▰▰▰▰▰▰▰⧁
  
  
 ╭▬▬❰ 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨 ❱
  ▍🪟 ${prefix}couple
  ▍🪟 ${prefix}mysoulmate
  ▍🪟 ${prefix}math
  ▙▰▰▰▰▰▰▰▰▰▰▰⧁
  

 ╭▬▬❰ 𝗩𝗢𝗜𝗖𝗘 𝗠𝗘𝗡𝗨 ❱
  ▍🪞 ${prefix}bass
  ▍🪞 ${prefix}blown
  ▍🪞 ${prefix}deep
  ▍🪞 ${prefix}earrape
  ▍🪞 ${prefix}fast
  ▍🪞 ${prefix}fat
  ▍🪞 ${prefix}nightcore
  ▍🪞 ${prefix}reverse
  ▍🪞 ${prefix}robot
  ▍🪞 ${prefix}slow
  ▍🪞 ${prefix}squirrel
  ▙▰▰▰▰▰▰▰▰▰▰▰⧁



  ╭▬❰ 𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗠𝗘𝗡𝗨 ❱
   ▍🎪 ${prefix}toimage
   ▍🎪 ${prefix}removebg
   ▍🎪 ${prefix}sticker
   ▍🎪 ${prefix}emojimix
   ▍🎪 ${prefix}tovideo
   ▍🎪 ${prefix}togif
   ▍🎪 ${prefix}tourl
   ▍🎪 ${prefix}ebinary
   ▍🎪 ${prefix}dbinary
   ▙▰▰▰▰▰▰▰▰▰▰⧁



  ╭▬❰ *RANDOM ANIME* ❱
   ▍🐦 ${prefix}loli
   ▍🐦 ${prefix}neko
   ▍🐦 ${prefix}waifu
   ▍🐦 ${prefix}shinobu
   ▍🐦 ${prefix}megumin
   ▍🐦 ${prefix}bully
   ▍🐦 ${prefix}cuddle
   ▍🐦 ${prefix}cry
   ▍🐦 ${prefix}hug
   ▍🐦 ${prefix}awoo
   ▍🐦 ${prefix}kiss
   ▍🐦 ${prefix}lick
   ▍🐦 ${prefix}pat
   ▍🐦 ${prefix}smug
   ▍🐦 ${prefix}bonk
   ▍🐦 ${prefix}yeet
   ▍🐦 ${prefix}blush
   ▍🐦 ${prefix}smile
   ▍🐦 ${prefix}wave
   ▍🐦 ${prefix}highfive
   ▍🐦 ${prefix}handhold
   ▍🐦 ${prefix}nom
   ▍🐦 ${prefix}bite
   ▍🐦 ${prefix}glomp
   ▍🐦 ${prefix}slap
   ▍🐦 ${prefix}kill
   ▍🐦 ${prefix}happy
   ▍🐦 ${prefix}wink
   ▍🐦 ${prefix}poke
   ▍🐦 ${prefix}dance
   ▍🐦 ${prefix}cringe
   ▙▰▰▰▰▰▰▰▰▰▰⧁
   
   
  ╭▬▬❰ 𝗠𝗜𝗦𝗖 𝗠𝗘𝗡𝗨 ❱
   ▍🪐 ${prefix}speedtest
   ▍🪐 ${prefix}ping
   ▍🪐 ${prefix}owner
   ▍🪐 ${prefix}donate
   ▍🪐 ${prefix}menu
   ▍🪐 ${prefix}delete
   ▍🪐 ${prefix}chatinfo
   ▍🪐 ${prefix}quoted
   ▍🪐 ${prefix}listpc
   ▍🪐 ${prefix}listgc
   ▍🪐 ${prefix}listonline
   ▍🪐 ${prefix}report
   ▙▰▰▰▰▰▰▰▰▰▰⧁
   
   
  ╭▬▬❰ 𝗗𝗔𝗧𝗔𝗕𝗔𝗦𝗘 𝗠𝗘𝗡𝗨 ❱
   ▍🗂️ ${prefix}setcmd
   ▍🗂️ ${prefix}listcmd
   ▍🗂️ ${prefix}delcmd
   ▍🗂️ ${prefix}lockcmd
   ▍🗂️ ${prefix}addmsg
   ▍🗂️ ${prefix}listmsg
   ▍🗂️ ${prefix}getmsg
   ▍🗂️ ${prefix}delmsg
   ▙▰▰▰▰▰▰▰▰▰▰⧁
   

  ╭▬❰ 𝗔𝗡𝗢𝗡𝗬𝗠𝗢𝗨𝗦 𝗖𝗛𝗔𝗧 ❱
   ▍🔲 ${prefix}start
   ▍🔲 ${prefix}next
   ▍🔲 ${prefix}stop
   ▙▰▰▰▰▰▰▰▰▰▰⧁
   
   
  ╭▬▬❰ 𝗧𝗘𝗫𝗧 𝗣𝗥𝗢 𝗠𝗘𝗡𝗨 ❱
   ▍⚽ ${prefix}3dchristmas
   ▍⚽ ${prefix}3ddeepsea
   ▍⚽ ${prefix}americanflag
   ▍⚽ ${prefix}3dscifi
   ▍⚽ ${prefix}3drainbow
   ▍⚽ ${prefix}3dwaterpipe
   ▍⚽ ${prefix}halloweenskeleton
   ▍⚽ ${prefix}sketch
   ▍⚽ ${prefix}bluecircuit
   ▍⚽ ${prefix}space
   ▍⚽ ${prefix}metallic
   ▍⚽ ${prefix}fiction
   ▍⚽ ${prefix}greenhorror
   ▍⚽ ${prefix}transformer
   ▍⚽ ${prefix}berry
   ▍⚽ ${prefix}thunder
   ▍⚽ ${prefix}magma
   ▍⚽ ${prefix}3dcrackedstone
   ▍⚽ ${prefix}3dneonlight
   ▍⚽ ${prefix}impressiveglitch
   ▍⚽ ${prefix}naturalleaves
   ▍⚽ ${prefix}fireworksparkle
   ▍⚽ ${prefix}matrix
   ▍⚽ ${prefix}dropwater
   ▍⚽ ${prefix}harrypotter
   ▍⚽ ${prefix}foggywindow
   ▍⚽ ${prefix}neond
   ▍⚽ ${prefix}christmasholiday
   ▍⚽ ${prefix}3dgradient
   ▍⚽ ${prefix}blackpink
   ▍⚽ ${prefix}gluetext
   ▙▰▰▰▰▰▰▰▰▰▰▰⧁
   
   
  ╭▬▬❰ 𝗘𝗣𝗛𝗢𝗧𝗢 𝗠𝗘𝗡𝗨 ❱
   ▍❶ ${prefix}ffcover
   ▍❷ ${prefix}crossfire
   ▍❸ ${prefix}galaxy
   ▍❹ ${prefix}glass
   ▋❺ ${prefix}neon
   ▌❻ ${prefix}beach
   ▌❼ ${prefix}blackpink
   ▌❽ ${prefix}igcertificate
   ▌❾ ${prefix}ytcertificate
   ▙▰▰▰▰▰▰▰▰▰▰⧁
   
   
  ╭▬▬❰ 𝗦𝗬𝗦𝗧𝗘𝗠 𝗠𝗘𝗡𝗨 ❱
   ▌⚙️ ${prefix}antilink
   ▌⚙️ ${prefix}mute
   ▌⚙️ ${prefix}antiwame
   ▙▰▰▰▰▰▰▰▰▰▰▰⧁
   
   
  ╭▬▬❰ 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 ❱
   ▌🎀 ${prefix}chat
   ▌🎀 ${prefix}join
   ▋🎀 ${prefix}leave
   ▋🎀 ${prefix}apkdl
   ▌🎀 ${prefix}setbotpp
   ▋🎀 ${prefix}block
   ▌🎀 ${prefix}unblock
   ▋🎀 ${prefix}bcgroup
   ▋🎀 ${prefix}bcall
   ▋🎀 ${prefix}xp
   ▋🎀 ${prefix}sendvideo
   ▋🎀 ${prefix}sendimage
   ▋🎀 ${prefix}upsw
   ▋🎀 ${prefix}statusbot
   ▋🎀 ${prefix}sendcontact
   ▋🎀 ${prefix}bcall
   ▋🎀 ${prefix}bcall
   ▋🎀 ${prefix}xp
   ▋🎀 ${prefix}ttc
   ▋🎀 ${prefix}tt
   ▋🎀 ${prefix}mine
   ▋🎀 ${prefix}hunt
   ▋🎀 ${prefix}sel
   ▋🎀 ${prefix}buy
   ▋🎀 ${prefix}profile
   ▙▬▬▬▬▬▬▬▬▬▬▬⧁
   
   ▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋
   ▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋
   + 2 7 6  3  4  0  9  0  2  0  3
   `
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./Zimbot/drips.jpg')},
                            hydratedFooterText: `ZIM BOT INC`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'SUBSCRIBE🌟',
                                    url: 'https://youtube.com/c/DRIPSOFC'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'tqtt': 
reply(`
▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋
 
   *Thanks for choosing ZIM BOT INC
SUBSCRIBE🌟* https://youtube.com/c/DRIPSOFC *DRIPS OFC*

▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋
▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋
 + 2 7 6 3  4  0  9  0  2  0  3
`)
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(global.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(global.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(global.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.database
		    if (!(budy.toLowerCase() in msgs)) return
		    ZimBotInc.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
