const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)
let fs = require('fs')
let handler  = async (m, { conn, usedPrefix, command, args, text }) => {
           let resulte = [
    "https://konachan.com/image/e5d8cdf95933ac0965562974b5420dc0/Konachan.com%20-%20318834%20bikini_top%20blush%20breasts%20choker%20cleavage%20cropped%20cross%20fang%20gray_hair%20green_eyes%20katana%20long_hair%20navel%20original%20pink%20skirt%20sword%20thighhighs%20weapon.png",
    "https://konachan.com/image/1ea1cb824046f8804048aa01fafaf7e0/Konachan.com%20-%20310941%20amano_don%20blush%20breasts%20brown_eyes%20brown_hair%20long_hair%20necklace%20original%20phone%20spread_legs%20thighhighs%20zettai_ryouiki.jpg",
    "https://konachan.com/image/81887a167a92e2618ff875448b004543/Konachan.com%20-%20253342%20ass%20breasts%20brown_eyes%20chain%20cum%20gloves%20gray_hair%20green_eyes%20headband%20jack_dempa%20long_hair%20male%20military%20open_shirt%20twintails%20uniform%20white_hair.png",
    "https://konachan.com/image/a7345fd96f102eeebe36e866f454f500/Konachan.com%20-%20317205%20bicolored_eyes%20blush%20boots%20choker%20game_cg%20gray_hair%20hat%20hulotte%20ikegami_akane%20kuzunoha_chitose%20long_hair%20shorts%20thighhighs%20zettai_ryouiki.png",
    "https://konachan.com/image/d360ce64842e9fe071a9b99217b4cec7/Konachan.com%20-%20317229%20ass%20atelier%20atelier_ryza%20book%20brown_eyes%20brown_hair%20hat%20reisalin_stout%20short_hair%20shorts%20tosaka0002%20zettai_ryouiki.jpg",
    "https://konachan.com/image/22991bbce656ba5c5ca2e15258dc26d4/Konachan.com%20-%20317732%20black_hair%20blush%20bra%20breasts%20cat_smile%20choker%20cleavage%20fang%20necklace%20open_shirt%20original%20purple_eyes%20shirt%20short_hair%20skirt%20thighhighs%20underwear.png",
    "https://konachan.com/image/de44f7ff2bf404d244eac41bca630921/Konachan.com%20-%20316751%20amano_kusatsu%20animal_ears%20azur_lane%20blue_eyes%20breasts%20butterfly%20cleavage%20foxgirl%20gray_hair%20moon%20multiple_tails%20skirt%20tail%20zettai_ryouiki.jpg",
    "https://konachan.com/image/10bd0d170d582f9de66c2bc08aac500c/Konachan.com%20-%20318752%20animal%20animal_ears%20azur_lane%20ball%20blush%20brown_hair%20doll%20fox%20foxgirl%20loli%20lolikaku%20long_hair%20navel%20panties%20see_through%20thighhighs%20underwear%20yellow_eyes.png",
    "https://konachan.com/image/36eb69bbd410bccb7b2769074cc42cf7/Konachan.com%20-%20318310%20anus%20apron%20ass%20blush%20breasts%20censored%20cleavage%20close%20gin00%20headdress%20long_hair%20maid%20nude%20pussy%20red_hair%20skirt%20upskirt%20waitress%20white%20wink%20wristwear.jpg",
    "https://konachan.com/image/0b01dcf1a95e9cd83773d49fda592bc4/Konachan.com%20-%20317396%20arknights%20breasts%20cleavage%20dress%20gradient%20horns%20long_hair%20purple_eyes%20red_hair%20surtr_%28arknights%29%20tuzhate%20zettai_ryouiki.jpg",
    "https://konachan.com/image/6f8770b9b281f47b3297296b78193a7f/Konachan.com%20-%20316461%20black_hair%20breasts%20cameltoe%20long_hair%20original%20panties%20purple_eyes%20sideboob%20skirt%20skirt_lift%20spread_legs%20thighhighs%20twintails%20underwear%20upskirt%20white.png",
    "https://konachan.com/image/346ce22adbf3be5f6a112755e7cb2342/Konachan.com%20-%20299688%20black_hair%20blush%20cqingwei%20kimetsu_no_yaiba%20kochou_shinobu%20navel%20purple_eyes%20pussy_juice%20school_uniform%20short_hair%20skirt%20thighhighs%20zettai_ryouiki.png",
    "https://konachan.com/image/741b28b2dd56b727c024fe4d00091e19/Konachan.com%20-%20316652%20aqua_hair%20choker%20glasses%20kitasaya_ai%20navel%20original%20purple_eyes%20short_hair%20skirt%20thighhighs%20zettai_ryouiki.jpg",
    "https://konachan.com/image/b6a48a333e16efb0c617e0ba1ec730b0/Konachan.com%20-%20318309%20apron%20ass%20bikini%20blush%20breasts%20cleavage%20close%20gin00%20headdress%20idolmaster%20long_hair%20maid%20red_hair%20skirt%20swimsuit%20upskirt%20waitress%20white%20wink%20wristwear.jpg",
    "https://konachan.com/image/1130e46f37ac262ccaa9390d31c4c4d3/Konachan.com%20-%20316616%20black_hair%20butterfly%20gradient%20japanese_clothes%20lolita_fashion%20long_hair%20original%20panties%20shirosei_mochi%20skirt%20underwear%20zettai_ryouiki.jpg",
    "https://konachan.com/image/0b50b929accb37ef84a4dee136c29df1/Konachan.com%20-%20318566%202girls%20black_hair%20blue_eyes%20blush%20breasts%20cleavage%20demon%20hoodie%20horns%20long_hair%20original%20pink_eyes%20short_hair%20succubus%20tail%20thighhighs%20zettai_ryouiki.jpg",
    "https://danbooru.donmai.us/data/f955747797d0809a80aeb256ea87ce82.jpg",
    "https://konachan.com/image/7af3be9a3af68f2d654d7909b73799f5/Konachan.com%20-%20316563%20azur_lane%20blush%20bow%20brown_hair%20choker%20doll%20hat%20logo%20long_hair%20panties%20pop_kyun%20purple_eyes%20red_eyes%20skirt%20thighhighs%20twintails%20underwear%20white_hair.jpg",
    "https://konachan.com/image/34ba2874e30bc04cf0b6f31d10120401/Konachan.com%20-%20316328%20armor%20blonde_hair%20blush%20cherry_blossoms%20fate_%28series%29%20flowers%20gabiran%20katana%20kimono%20signed%20sword%20thighhighs%20weapon%20yellow_eyes%20zettai_ryouiki.jpg",
    "https://konachan.com/image/187c7bd04c023a2a56336205a67f5aea/Konachan.com%20-%20316547%20azur_lane%20black_hair%20breast_hold%20breasts%20cleavage%20dress%20garter_belt%20long_hair%20panties%20red_eyes%20sakamotono%20stockings%20underwear%20zettai_ryouiki.jpg",
    "https://konachan.com/image/c27383d966cb3821c8a5a02633712a40/Konachan.com%20-%20318589%20alpha_%28ypalpha79%29%20aqua_eyes%20bed%20blush%20dress%20gray_hair%20long_hair%20original%20pointed_ears%20thighhighs%20zettai_ryouiki.png",
    "https://konachan.com/image/7830101f2847d2147117213a4a118238/Konachan.com%20-%20318235%20animal%20blush%20boots%20braids%20brown_eyes%20bubbles%20corset%20fish%20gloves%20gun%20hat%20ponytail%20red_hair%20shorts%20thighhighs%20underwater%20water%20weapon%20x2%3A_eclipse.jpg",
    "https://konachan.com/image/644170e4d14320400031bbe74c0b728d/Konachan.com%20-%20317559%20breasts%20cleavage%20drink%20gray_hair%20kaguya_luna%20long_hair%20purple_eyes%20the_moon_studio%20thighhighs%20twintails%20water%20yuyu_%28piko01%29%20zettai_ryouiki.png",
    "https://konachan.com/image/6e111fdd270964428417fe159364b70f/Konachan.com%20-%20317410%202girls%20blue_eyes%20bow%20braids%20breasts%20cleavage%20collar%20garter_belt%20gloves%20gray_hair%20necomi%20original%20red_eyes%20ribbons%20shorts%20stars%20stockings%20thighhighs.jpg",
    "https://konachan.com/image/9eb476a724dedf0718947043bdd0619c/Konachan.com%20-%20308925%202girls%20angel%20blue_eyes%20demon%20gray_hair%20halo%20horns%20long_hair%20navel%20original%20red_eyes%20shimmer%20shirt_lift%20short_hair%20skirt%20tail%20thighhighs%20wink%20yuri.jpg",
    "https://konachan.com/image/32e198d6a6e656695be74ba9b1b18111/Konachan.com%20-%20317188%20aliasing%20apron%20aqua_eyes%20blush%20breasts%20catgirl%20choker%20cleavage%20cropped%20headband%20maid%20original%20otokuyou%20short_hair%20tail%20thighhighs%20white%20white_hair.png",
    "https://konachan.com/image/8e78212267bd9b18642862a6900f3773/Konachan.com%20-%20231206%20blush%20breasts%20cum%20fang%20fellatio%20fingering%20foxgirl%20navel%20nipples%20no_bra%20open_shirt%20panties%20penis%20pubic_hair%20red_hair%20ricegnat%20tail%20underwear%20undressing.png",
    "https://konachan.com/image/57e4e2025aef4a1acaf1fce240435035/Konachan.com%20-%20308776%20apron%20ass%20blush%20breasts%20chowbie%20cleavage%20dress%20gloves%20headband%20horns%20long_hair%20no_bra%20original%20panties%20sideboob%20signed%20sword%20underwear%20weapon%20wings.png",
    "https://img2.gelbooru.com/images/f6/90/f6900d24dc8c6c5cfd1113d29ec9fa22.jpeg",
    "https://konachan.com/image/f54277a230a4627f38f5506c8d1f8e35/Konachan.com%20-%20316601%20bed%20dangan-ronpa%20food%20game_console%20nanami_chiaki%20open_shirt%20pink_eyes%20pink_hair%20r_o_ha%20school_uniform%20skirt%20thighhighs%20zettai_ryouiki.png",
    "https://img2.gelbooru.com/samples/c9/63/sample_c963d7731b353319881d486101909b96.jpg",
    "https://safebooru.org/images/3141/5eaff305ba0979ae03516b633b27a9482dfcc4f2.jpg",
    "https://konachan.com/image/8931952db52aeb162bc48092b5a1b5e3/Konachan.com%20-%20316817%20animal_ears%20blush%20braids%20brown_hair%20catgirl%20crying%20long_hair%20momoko_%28momopoco%29%20original%20red_eyes%20skirt%20tail%20thighhighs%20zettai_ryouiki.png",
    "https://safebooru.org/images/3141/d2299bf73b642974da83583c3ca2a894f8780ebf.jpg",
    "https://konachan.com/image/ddcc4b7734345d2de572ceb8661300a1/Konachan.com%20-%20316653%20aqua_eyes%20blush%20couch%20navel%20original%20skirt%20soyubee%20thighhighs%20wink%20zettai_ryouiki.jpg",
    "https://konachan.com/image/923d59da46653e7484cb9f692fc318c0/Konachan.com%20-%20313795%20aqua_eyes%20blush%20bow%20breasts%20cake%20cleavage%20fang%20food%20fruit%20long_hair%20original%20ponytail%20scallion15%20strawberry%20tears%20thighhighs%20vibrator%20wristwear.png",
    "https://img2.gelbooru.com/images/df/99/df9994ecb9918218571c862575f0ae85.png",
    "https://konachan.com/image/ab81fd459fd92908f60ddd3d687e4381/Konachan.com%20-%20213532%20ass%20blue_eyes%20flowers%20gray_hair%20higashi_tarou%20loli%20long_hair%20original%20pussy%20reflection%20see_through%20thighhighs%20uncensored%20zettai_ryouiki.jpg",
    "https://safebooru.org/images/3141/2a1e21c21519905055bf99524ea8eb9e310d8d7b.png",
    "https://danbooru.donmai.us/data/983c61b3a4a5924ceef5a897a33858d8.jpg",
    "https://konachan.com/image/2a46ca08fc2d01430c07d84f3669b46e/Konachan.com%20-%20318005%20animal%20animal_ears%20bear%20gradient%20halloween%20hat%20long_hair%20navel%20original%20panda%20pumpkin%20red_eyes%20red_hair%20skirt%20thighhighs%20tsunako%20wings%20witch_hat.png",
    "https://konachan.com/image/1aa74988c74b06241675a4b6e2d3879a/Konachan.com%20-%20316562%20animal_ears%20aqua_eyes%20azur_lane%20breasts%20butterfly%20cleavage%20foxgirl%20kamehito%20long_hair%20multiple_tails%20tail%20thighhighs%20white_hair%20zettai_ryouiki.png",
    "https://konachan.com/image/93ff5151cecb28b48cd727954331062c/Konachan.com%20-%20287919%20breasts%20gloves%20goggles%20hat%20n.g.%20nipples%20one_piece%20orange_hair%20pussy%20short_hair%20thighhighs%20third-party_edit%20uncensored%20white%20zettai_ryouiki.png",
    "https://img2.gelbooru.com/images/e2/83/e2838ea03c7caf5f5e0692a031dced14.jpg",
    "https://konachan.com/image/ad81ab93a13e0f08fb5bc344e054231f/Konachan.com%20-%20315799%20blush%20book%20bow%20food%20garter%20gloves%20gray_hair%20hat%20headband%20hololive%20long_hair%20murasaki_shion%20navel%20skirt%20sleeping%20thighhighs%20witch_hat%20zettai_ryouiki.png",
    "https://konachan.com/image/33deb00662a216ee8d276c422efcf8fa/Konachan.com%20-%20318819%20animal%20asahi_kuroi%20bird%20blonde_hair%20bubbles%20headdress%20long_hair%20maid%20original%20thighhighs%20twintails%20yellow_eyes%20zettai_ryouiki.jpg",
    "https://konachan.com/image/fe05b596a5f85d77e17fc63a7746e5f4/Konachan.com%20-%20316322%20blue_eyes%20bow%20braids%20cage%20food%20fruit%20garter%20gray_hair%20long_hair%20naru_0%20original%20ribbons%20shirt%20signed%20skirt%20strawberry%20tattoo%20thighhighs.png",
    "https://konachan.com/image/bd2b3d59f677e7375aea5918c4794d02/Konachan.com%20-%20316900%20anthropomorphism%20aqua_eyes%20azur_lane%20braids%20breasts%20brown_hair%20cleavage%20elbow_gloves%20gloves%20navel%20short_hair%20signed%20skirt%20thighhighs%20zettai_ryouiki.png",
    "https://konachan.com/image/8dc8bd8d27dbbceabd6749aab8d4ad8a/Konachan.com%20-%20311055%202girls%20bandage%20bed%20blush%20breasts%20collar%20crossover%20dress%20gloves%20gray_hair%20hug%20kokkoro%20megumin%20nipples%20no_bra%20open_shirt%20red_eyes%20short_hair%20thighhighs.png",
    "https://konachan.com/image/e8bf61ae63a1abc677e9c92ddac05305/Konachan.com%20-%20312503%20bell%20black_hair%20blush%20bow%20cameltoe%20catgirl%20eluthel%20gloves%20headband%20idolmaster%20panties%20ribbons%20short_hair%20signed%20tail%20tie%20twintails%20underwear%20upskirt.jpg",
    "https://konachan.com/image/46d27c3bdf813aec4164534b11e39ca2/Konachan.com%20-%20317758%20black_hair%20bra%20breasts%20choker%20cleavage%20fang%20necklace%20open_shirt%20original%20purple_eyes%20shirt%20short_hair%20skirt%20thighhighs%20underwear%20waifu2x.png"
] 
       let link = resulte[Math.floor(Math.random() * resulte.length)];
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
handler.tags = ['anime']
handler.command = /^(hentai)$/i

module.exports = handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}