const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)
  
let handler  = async (m, { conn, usedPrefix, command, args, text }) => {
  if (!text) return m.reply('¿Donde esta el texto?? ')
  apikeys = ['jAICsHSF','HsfUcTFC','mVxSgrfA','kN99U7dX','bBaPNMf7','A85dVx8b','oLfitSmT','EiEr76KW','xqGysIm2','2o4XWgTa','aSQkEYvl','wEyxHNtS','9lmpClQs','Jq7Ema8P','VyJA28kT']
  const apialpha = apikeys[Math.floor(Math.random() * apikeys.length)]
  let [l, r] = text.split`|`
  if (!l) l = ''
  if (!r) r = ''

  let link = (`https://api-alphabot.herokuapp.com/api/ephoto360/textonglass?text=${l}&text2=${r}&apikey=${apialpha}`)
  if (!link) return m.reply('Lo siento ocurrió un error!')
  let sell = `
*───「 Ephoto 360 」───*

➤ *Glass*
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
handler.help = ['glass'].map(v => v + ' <texto>|<texto>')
handler.tags = ['logo']
handler.command = /^(glass)$/i

module.exports = handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}