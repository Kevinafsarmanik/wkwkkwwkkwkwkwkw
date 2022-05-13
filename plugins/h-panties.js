const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)
let fs = require('fs')
let handler  = async (m, { conn, usedPrefix, command, args, text }) => {
        var resulte = [
    "https://media.discordapp.net/attachments/560547733463891968/682403255481139200/sabhvzadjcj41.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/680073378232664111/1f5db4a.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/680051738849705993/79fbdb8.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/679870595038576650/436acfd.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/678733751106273290/5852b4c.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/675588124931391498/image0.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/669977521306992641/48606479_p0_master1200.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/669548017401069568/77467429_p0_master1200.png",
    "https://media.discordapp.net/attachments/560547733463891968/669547945011445761/77160918_p0_master1200.png",
    "https://media.discordapp.net/attachments/560547733463891968/669547894482927618/78323666_p0_master1200.png",
    "https://media.discordapp.net/attachments/560547733463891968/669547817211265024/71801336_p0_master1200.png",
    "https://media.discordapp.net/attachments/560547733463891968/669546843931279390/75196301_p0_master1200.png",
    "https://media.discordapp.net/attachments/560547733463891968/669111973665046528/41b86ae56c6d7b6430ee356cb2026986-anime-poses-anime-sexy.png",
    "https://media.discordapp.net/attachments/560547733463891968/669111934154571776/ee776a835316754be36d05843abec84f.png",
    "https://media.discordapp.net/attachments/560547733463891968/669111852843663373/images.png",
    "https://media.discordapp.net/attachments/560547733463891968/669111788079415316/2dd67c85df75f5994f2f6f0db2b2aa91.png",
    "https://media.discordapp.net/attachments/560547733463891968/669111705418334228/Konachan.png",
    "https://media.discordapp.net/attachments/560547733463891968/669111657020129293/1c4jc1kruuj31.png",
    "https://media.discordapp.net/attachments/560547733463891968/668921698409644062/Seikon_no_Qwaser_-_Ekaterina_Kurae_Render_1_MG_Renders.png",
    "https://media.discordapp.net/attachments/560547733463891968/668494271636307968/sample_761abb2c1d64f05af168950018275175.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/666129167762456596/image0.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/665670971616919572/image0.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/665631148709249035/image2.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/665631148218777600/image0.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/665258747496628224/d6cb5ca7de98e299ed7418fa738ccefb.jpeg",
    "https://media.discordapp.net/attachments/560547733463891968/664593228745539585/image0.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/664591914305191966/image0.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/661132581026267137/image1.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/656736383053987858/image0.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/656221644322242589/image0.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/650507617780629514/image0.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/649789924773462018/TagoVanTor-693073-Panties.png",
    "https://media.discordapp.net/attachments/560547733463891968/644959708964192257/image0.png",
    "https://media.discordapp.net/attachments/560547733463891968/643476385746255882/image0.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/641681776330145832/image0.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/641678702949826580/image0.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/641149108953939988/image0.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/639255354219429915/image0.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/638793186348630036/image0.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/638472375012425729/image0.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/637294979097690123/image0.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/637017399882940417/image0.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/636754337275576331/image0.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/636747221865594932/image0.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/636746463677906977/image0.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/634793584218079268/image0.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/634638771324715008/image0.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/634633535055200331/image0.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/631305708146655252/image0.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/631301505764425729/image0.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/630038371678289950/image0.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/630038328573427723/image0.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/630036480403701780/image0.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/628608349822255114/image0.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/627193266466717716/atago_and_atago_azur_lane_drawn_by_angelo_gomahangetsu__b6e2465b399593471a5a219d793210d7.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/627193201479909377/st_louis_azur_lane_drawn_by_sendrawz__sample-2488de8d30d97b95efd096f6a0d4ddbb.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/627193202671091787/harusame_kantai_collection_drawn_by_ringo_sui__sample-2389cb8eb3426b1d7b0d629b36413c89.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/626880900805820437/unknown.png",
    "https://media.discordapp.net/attachments/560547733463891968/622731561414033410/image0.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/622730616689000478/image0.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/622730479501705216/image0.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/622166587780235285/image0.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/618828070182191104/Screenshot_2019-09-04-18-18-21.png",
    "https://media.discordapp.net/attachments/560547733463891968/618797392992665600/meaf8Ggaaaamh3lE9mW6iuhDjw_Fz4.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/617043058609094667/image0.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/602959588836376587/image0.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/602956173540589618/image0.png",
    "https://media.discordapp.net/attachments/560547733463891968/601041764681252864/image1_18.jpg",
    "https://media.discordapp.net/attachments/323403793272143873/600806471428603925/image0.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/600441867460673546/72311596_p0_.png",
    "https://media.discordapp.net/attachments/560547733463891968/596448669012721839/image0.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/596448620878888960/image0.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/596441883866300467/D9Hxf73XsAEnPzD.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/593075940352065537/image0.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/592824669837590558/image3.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/592822495602671629/Konachan.com_-_284038_sample.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/592822487671242761/Konachan.com_-_279681_black_hair_blue_eyes_blush_bow_ginhaha_panties_seifuku_skirt_spread_legs_ssss..jpg",   
    "https://media.discordapp.net/attachments/560547733463891968/592822464665485423/Konachan.com_-_283275_blush_breasts_brown_hair_fingering_green_eyes_long_hair_nipples_no_bra_open_sh.jpg",   
    "https://media.discordapp.net/attachments/560547733463891968/592822455136157727/Konachan.com_-_271047_anus_ass_ass_grab_blue_hair_close_cropped_hadou_nejire_long_hair_panties_panty.jpg",   
    "https://media.discordapp.net/attachments/560547733463891968/580953191772979201/74133668_p0_master1200.png",
    "https://media.discordapp.net/attachments/560547733463891968/578871784242282497/c287f1e5fe54ef76adfa23045283e8e3.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/578302338046099456/image0.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/578302297663340545/image0.png",
    "https://media.discordapp.net/attachments/560547733463891968/578302259075612682/image0.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/576709809316036618/45f3fbe.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/576114663650230324/image0.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/571811752354906153/Screenshot_20190427-173508.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/567108234595532852/yande.re_431336_sample_breast_hold_cameltoe_lingerie_loli_pantsu_rikorin_thighhighs_wallpaper.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/564613922150285343/af52542cadc5b640d40889015926c4d2.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/564479233317928960/21e1b20b9519117bb480cc748bd0f86c.png",
    "https://media.discordapp.net/attachments/560547733463891968/564479183523414039/sample_74349dc4029580636cc81844402838af.png",
    "https://media.discordapp.net/attachments/560547733463891968/563072289248247831/ccee7247c73ce8ac75d8e7265e084ca5.png",
    "https://media.discordapp.net/attachments/560547733463891968/562872606135681058/FB_IMG_1554269396247.jpg",
    "https://media.discordapp.net/attachments/560547733463891968/562799105450180608/4RVYeV7sYgvgZjVDrcQh-jmYTDtIx0Nq6GgfiGm__U0.png",
    "https://media.discordapp.net/attachments/560547733463891968/562655411040157719/Konachan.png",
    "https://media.discordapp.net/attachments/560547733463891968/562340668446474241/110fc8l.png",
    "https://media.discordapp.net/attachments/560547733463891968/562340609730412654/11bhe.png",
    "https://media.discordapp.net/attachments/560547733463891968/562336332203032620/tumblr_pcs8erIHP61uga7ufo9_1280.png",
    "https://media.discordapp.net/attachments/560547733463891968/562336312955502613/2dd45d4f08f2ea072afc2fa715e29daa.png",
    "https://media.discordapp.net/attachments/560547733463891968/562334765219577857/sample_7b4c10aadaf84397bdc818d0a291a2ef.png",
    "https://media.discordapp.net/attachments/560547733463891968/562328604130672640/26b92da0a5c14659cb66286989eb641e.png",
    "https://media.discordapp.net/attachments/560547733463891968/562328449935605760/pvMjqAG.png",
    "https://media.discordapp.net/attachments/560547733463891968/562325637117902879/sample_959b9122f77897ba51dd8d3779031b5e.png",
    "https://media.discordapp.net/attachments/560547733463891968/562325357798096976/9Cloud.png",
    "https://media.discordapp.net/attachments/560547733463891968/562006098249252880/sample_fde15903e2310be58cf14d953b1a3ba0.png",
    "https://media.discordapp.net/attachments/560547733463891968/561974000411213834/Konachan.png",
    "https://media.discordapp.net/attachments/560547733463891968/561971515550072872/N88EUa3.png",
    "https://media.discordapp.net/attachments/560547733463891968/561970493691789312/4HDmBV1.png",
    "https://media.discordapp.net/attachments/560547733463891968/561969586887589892/c8433685a794bf8a0b421d6617e344b9.png",
    "https://media.discordapp.net/attachments/560547733463891968/561969495183196181/22d8fb394b7b20ca42f634f26f7e1cd8.png",
    "https://media.discordapp.net/attachments/560547733463891968/561969438895898625/07978a024a733a23d4aa7cbc40273d60.png",
    "https://media.discordapp.net/attachments/560547733463891968/561969123504947221/1b5bf7cfbb24eeac2eba60b5272dcddf.png",
    "https://media.discordapp.net/attachments/560547733463891968/561953014026600482/29ac6feec3d85d8a79397768f24128e8.png",
    "https://media.discordapp.net/attachments/560547733463891968/561949215975145472/da67b5a.png",
    "https://media.discordapp.net/attachments/560547733463891968/561943685940641813/REBGOlm6Bil66s6w-OD-mys9Gxks1iA1yyUwP_rH_hs.png",
    "https://media.discordapp.net/attachments/560547733463891968/561938845835198499/BYJWrVr3JeTml2Rkba0KtABlzvLrXmBpTDnqpWaS9is.png",
    "https://media.discordapp.net/attachments/560547733463891968/561938238084874240/Kl1aEZXl.png",
    "https://media.discordapp.net/attachments/560547733463891968/561935182463238189/tumblr_pghlzzlTc21r3yew1o1_r1_540.png",
    "https://media.discordapp.net/attachments/560547733463891968/561929867638079490/174m1.png",
    "https://media.discordapp.net/attachments/560547733463891968/561765977730318348/110fc8l.png",
    "https://media.discordapp.net/attachments/560547733463891968/561765875565461520/117iu.png",
    "https://media.discordapp.net/attachments/560547733463891968/561765734896631818/5rDiOqa.png",
    "https://media.discordapp.net/attachments/560547733463891968/561756008016379925/Konachan.png",
    "https://media.discordapp.net/attachments/560547733463891968/561749800912158740/6b98e6b20906f2c5d258b7424abf2821.png",
    "https://media.discordapp.net/attachments/560547733463891968/561747956978417683/138q1.png",
    "https://media.discordapp.net/attachments/560547733463891968/561743576393056258/d4fe31ad2fd41ffad49de9fe3130ab3b.png",
    "https://media.discordapp.net/attachments/560547733463891968/561743150415085568/komc5cr.png",
    "https://media.discordapp.net/attachments/560547733463891968/561624963115909120/Konachan.png",
    "https://konachan.com/sample/d85db565ce195e5fbc3fcc4045f80fe0/Konachan.com%20-%20313418%20sample.jpg",
    "https://cdn.discordapp.com/attachments/770948564947304448/770989069110607912/Hentai_nation_2.jpg"
]

        let link = resulte[Math.floor(Math.random() * resulte.length)];
  if (!link) return m.reply('Lo siento ocurrió un error!')
  let sell = `
*───「 🔞HENTAI🔞 」───*

➤ *Panties*
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
handler.help = ['panties']
handler.tags = ['hentai']
handler.command = /^(panties)$/i

module.exports = handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}