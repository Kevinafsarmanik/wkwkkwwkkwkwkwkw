let handler = async (m, { conn }) => {
	let emot = conn.pickRandom(["🗿", "👍", "💨", "🩱", "🐷", "🐒", "🌝", "💩", "👻", "🔥", "🖕"])
    conn.sendMessage(m.chat, {
    	react: {
    		text: emot,
    		key: m.key
    	}
    })	
}
handler.customPrefix = /(sexo?|ban?|cum?|pene?lsexo|ban|p|uwu?|holi)?(t|d)?|ola|puto?|brayan)/i
handler.command = new RegExp

module.exports = handler