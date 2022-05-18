let levelling = require('../lib/levelling')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
const defaultMenu = {
  before: `
*╭═┅〘 𝑀𝑎𝑟𝑦 𝐵𝑜𝑡 - By kevin 〙═╮*
*║┊:* 🙂𝗛𝗶, %name!
*║┊:* ⃟ ⃟  ━ೋ๑————๑ೋ━* ⃟ ⃟ *      
*║┊:◄✜┢┅ீ͜ৡৢ͜͡✦━━◇━━ீ͜ৡৢ͜͡✦┅┧✜►*
*║┊:* ✨ *%exp XP*
*║┊:* ⚠𝗟𝗶𝗺𝗶𝘁 *%limit Limit*
*║┊:*
*║┊:* 📆Tanggal weton: *%weton, %date*
*║┊:* ⌚Time: *%time*
*║┊:*
*║┊:* 🕐 Aktif selama: *%uptime*
*║┊:* 💻Dav *%muptime*
*║┊:* 📁𝗗𝗮𝘁𝗮𝗯𝗮𝘀𝗲: %totalreg cuentas
*║┊:* 👑 Instagram
*║┊:* https://Instagram.com/kevinafsar_
*║┊:* 𝑇ℎ𝑎𝑛𝑘𝑠 𝑡𝑜 
*║┊:* Kevin dkk
*╰═┅ৡৢ͜͡✦═══╡𝗖𝗼𝗻𝗳𝘂𝗠𝗼𝗱𝘀╞═══┅ৡৢ͜͡✦═╯*
%readmore
*╭═┅〘🛑 Peraturan 🛑〙*
*▌║✙*❌Jangan telfon bot📲
*▌║✙*❌Jangan spam bot☢
*▌║✙*❌Jangan culik bot♻
*▌║✙*✅follow Instagram ku🙂
%readmore`.trim(),
  header: '*╭═┅〘␗ %category ␗〙═╮*',
  body: '*▌║✙* %cmd%islimit %isPremium',
  footer: '*╰═┅ৡৢ͜͡✦═══╡🔥╞═══┅ৡৢ͜͡✦═╯*\n',
  after: `
*%npmname@^%version*
${'```%npmdesc```'}
`,
}



let handler = async (m, { conn, usedPrefix: _p, args, command }) => {

  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'games', 'xp', 'sticker', 'kerangajaib', 'frases', 'admin', 'grupos', 'premiun', 'internet', 'anonymous', 'logos', 'descargas', 'herramientas', 'fun', 'database', 'quran', 'audio', 'hentai', 'info', 'anime', 'tanpakategori', 'owner']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
    'main': 'PRINCIPAL',
    'games': 'Games',
    'anime': 'Animes',
    'xp': 'Exp & Limit',
    'sticker': 'Sticker',
    'frases': 'Frases',
    'grupos': 'Grupos',
    'premiun': 'Premiun',
    'internet': 'Internet',   
    'logos': 'Logos',
    'descargas': 'Descargas',
    'herramientas': 'Herramientas',
    'hentai': 'Hentai',
    'database': 'Database',
    'info': 'Info',
  }
  if (teks == 'games') tags = {
    'games': 'Game',
    'rpg': 'RPG'
  }
  if (teks == 'anime') tags = {
    'anime': 'Animes'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'sticker') tags = {
    'sticker': 'Sticker'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'frases') tags = {
    'frases': 'Frases'
  }
  if (teks == 'grupos') tags = {
    'grupos': 'Grupps'
  }
  if (teks == 'premiun') tags = {
    'premiun': 'Premiun'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'logos') tags = {
    'logos': 'Logos'
  }
  if (teks == 'descargas') tags = {
    'descargas': 'Descargas'
  }
  if (teks == 'herramientas') tags = {
    'herramientas': 'Herramientas'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
    if (teks == 'hentai') tags = {
    'hentai': 'Hentai'
}
  if (teks == 'vote') tags = {
    'vote': 'Voting',
    'absen': 'Absen'
  }
  if (teks == 'quran') tags = {
    'quran': 'Al Qur\'an'
  }
  if (teks == 'audio') tags = {
    'audio': 'Pengubah Suara'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
    /*  if (teks == 'textpro') tags = {
    'textpro': 'TextPro'
}*/
  if (teks == 'tanpakategori') tags = {
    '': 'Tanpa Kategori'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }



  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, age, money, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let umur = `*${age == '-1' ? 'No registrado*' : age + '* Thn'}`
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'es'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Viernes', 'Lunes', 'Martes', 'Miercoles', 'Jueves'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    global.jam = time
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    if (teks == '404') {
      let judul = `${ucapan()}, ${name}`.trim()
      const sections = [
      {
        title: 'List Menu ' + namabot,
        rows: [
          { title: 'Menu Completo', rowId: `${_p}? all` },
          { title: 'Animes', rowId: `${_p}? anime` },
          { title: 'Games', rowId: `${_p}? games` },
          { title: 'XP', rowId: `${_p}? xp` },
          { title: 'Sticker', rowId: `${_p}? sticker` },
          { title: 'Frases', rowId: `${_p}? frases` },
          { title: 'Grupos', rowId: `${_p}? grupos` },
          { title: 'Premiun', rowId: `${_p}? premiun` },
          { title: 'Internet', rowId: `${_p}? internet` },
          { title: 'Logos', rowId: `${_p}? logos` },
          { title: 'Descargas', rowId: `${_p}? descargas` },
          { title: 'Herramientas', rowId: `${_p}? herramientas` },
          { title: 'Database', rowId: `${_p}? database` },
          { title: 'Hentai', rowId: `${_p}? hentai` },
          { title: 'Info', rowId: `${_p}? info` },
          { title: 'Owner', rowId: `${_p}? owner` },
        ]
      }
    ]
    const listMessage = {
      text: judul,
      footer: wm,
      mentions: await conn.parseMention(judul),
      title: '',
      buttonText: "Click",
      sections
    }
    return conn.sendMessage(m.chat, listMessage, { quoted: m, mentions: await conn.parseMention(judul), contextInfo: { forwardingScore: 99999, isForwarded: true }})
    
    }

    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Presentado por https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Preparado para *${_p}levelup*` : `${max - exp} XP de nuevo para subir de nivel`,
      github: package.homepage ? package.homepage.url || package.homepage : '[URL desconocida]',
      level, limit, name, umur, money, age, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    await conn.send3TemplateButtonImg(m.chat, fla + teks, text.trim(), wm, `🏅Owner`, `${_p}owner`, `🎖Créditos`, `${_p}tqto`, `🎗  Donaciones  🎗`, `${_p}infobot`)
  } catch (e) {
    conn.reply(m.chat, 'Lo siento, ha ocurrido un error. He enviado un informe a ConfuMods.', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(m(enu)?|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('America/Santiago').format('HH')
  res = "Buenas Tardes"
  if (time >= 4) {
    res = "Buenos Dias"
  }
  if (time > 10) {
    res = "Buenos Dias"
  }
  if (time >= 15) {
    res = "Buenas Tardes"
  }
  if (time >= 18) {
    res = "Buenas Noches"
  }
  return res
}
