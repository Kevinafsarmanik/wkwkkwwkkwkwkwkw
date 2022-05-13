let handler = async (m, { conn, text }) => {
  let id = m.chat
  conn.math = conn.math ? conn.math : {}
  if (id in conn.math) {
    clearTimeout(conn.math[id][3])
    delete conn.math[id]
    m.reply('Hmmm... trampa?')
  }
  let val = text
    .replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/π|pi/gi, 'Math.PI')
    .replace(/e/gi, 'Math.E')
    .replace(/\/+/g, '/')
    .replace(/\++/g, '+')
    .replace(/-+/g, '-')
  let format = val
    .replace(/Math\.PI/g, 'π')
    .replace(/Math\.E/g, 'e')
    .replace(/\//g, '÷')
    .replace(/\*×/g, '×')
  try {
    console.log(val)
    let result = (new Function('return ' + val))()
    if (!result) throw result
    conn.reply(m.chat, `*${format}* = _${result}_`, m)
  } catch (e) {
    if (e == undefined) throw 'Contenido?'
    throw 'Formato incorrecto, solo se admiten 0-9 y símbolos -, +, *, /, ×, , , e, (, )'
  }
}
handler.help = ['calcular <pregunta>']
handler.tags = ['herramientas']
handler.command = /^(calc(ular))?|kalk(ulator)?)$/i
handler.exp = 5
handler.register = false
module.exports = handler