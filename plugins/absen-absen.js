let handler = async (m, { conn }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) {
        await conn.sendButton(m.chat, `No se ah realizado!`, wm, 'comenzar revisión', `.mulaiabsen`, m)
        throw 0
    }

    let absen = conn.absen[id][1]
    const wasVote = absen.includes(m.sender)
    if (wasVote) throw 'Ya habias votado!'
    absen.push(m.sender)
    let d = new Date
    let date = d.toLocaleDateString('es', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
    })
    let list = absen.map((v, i) => `├ ${i + 1}. ${db.data.users[v].name}`).join('\n')
    let caption = `
${date}
${conn.absen[id][2]}

┌「 Presentes 」
├ total: ${absen.length}
${list}
└────`.trim()
    await conn.send2Button(m.chat, caption, wm, 'Presentes', `.absen`, 'chequeo', `.cekabsen`, m, { mentions: [m.sender] })
}
handler.help = ['absen']
handler.tags = ['absen']
handler.command = /^(absen|hadir|presence)$/i

module.exports = handler