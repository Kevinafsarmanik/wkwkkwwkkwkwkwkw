const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)
let fs = require('fs')
let handler  = async (m, { conn, usedPrefix, command, args, text }) => {
           let link = (`https://hadi-api.herokuapp.com/api/hentai`)      
  if (!link) return m.reply('Lo siento ocurrió un error!')
  let sell = `
*───「 🔞HENTAI🔞 」───*

➤ *Random Hentai*
➤ *Mary Bot-MD*
`
  let message = await prepareWAMessageMedia({ image: await(await fetch(link)).buffer()}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
      templateMessage: {
            hydratedTemplate: {
                imageMessage: message.imageMessage,
                hydratedContentText: sell,
                hydratedFooterText: wm,
                hydratedButtons: [{
                  index: 0,
                   urlButton: {
                        displayText: `🖼 link`,
                        url: `${link}`
                    }
                }]
            }
        }
    }), { userJid: m.participant || m.key.remoteJid, quoted: m });
    return await conn.relayMessage(
        m.key.remoteJid,
        template.message,
        { messageId: template.key.id }
    )
  }
handler.help = ['hentai']
handler.tags = ['hentai']
handler.command = /^(hentai)$/i

module.exports = handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}