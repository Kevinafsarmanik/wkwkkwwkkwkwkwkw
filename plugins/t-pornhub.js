const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)
  
let handler  = async (m, { conn, usedPrefix, command, args, text }) => {
  if (!text) return m.reply('¿Donde esta el texto?? ')
    let [l, r] = text.split`|`
  if (!l) l = ''
  if (!r) r = ''
  apikeys = ['jAICsHSF','HsfUcTFC','mVxSgrfA','kN99U7dX','bBaPNMf7','A85dVx8b','oLfitSmT','EiEr76KW','xqGysIm2','2o4XWgTa','aSQkEYvl','wEyxHNtS','9lmpClQs','Jq7Ema8P','VyJA28kT','iEFPEC54','dLnRSVij','cXuE2QiG','RarjiwMZ','xm2wbMvA','edqQMbF9','5Zj8CAyC','hJhR3dAj','yVVKo9Nj','GHimzwCh']
  const apialpha = apikeys[Math.floor(Math.random() * apikeys.length)]

  let link = (`https://api-alphabot.herokuapp.com/api/textpro/pornhub?text=${l}&text2=${r}&apikey=${apialpha}`)
  if (!link) return m.reply('Lo siento ocurrió un error!')
  let sell = `
*───「 TEXTPRO 」───*

➤ *PornHub*
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
handler.help = ['pornhub'].map(v => v + ' <texto>|<texto>')
handler.tags = ['logos']
handler.command = /^(pornhub)$/i

module.exports = handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}