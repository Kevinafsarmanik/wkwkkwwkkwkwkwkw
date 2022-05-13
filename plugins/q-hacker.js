let handler = async (m, { conn, usedPrefix, command }) => {
  let hekerr = pickRandom(global.heker)
  conn.sendButton(m.chat, hekerr, wm, `Hacker`, `${usedPrefix + command}`, m)
}
handler.help = ['hacker']
handler.tags = ['frases']
handler.command = /^(heker|hacker|hekel)$/i
module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.heker = [
"Querida, está escrito en mi página de desfiguración, ¿cuándo serás mi novia?",
"Estoy dispuesto a ser un procesador caliente, siempre y cuando seas el disipador de calor que pueda enfriarme en cualquier momento",
"No tienes que buscar un espacio xss, porque cuando haces clic en mi corazón, aparece una ventana emergente con tu nombre",
"Con suerte, después de iniciar sesión en su corazón, no habrá ningún botón de cierre y mi sesión nunca caducará",
"Cuando tengo que usar la técnica de derivación de enlace simbólico para abrir la carpeta de su corazón que está habilitada para open_basedir.",
"Tú y yo somos como PHP y MySQL que aún no están conectados",
"No solo inyecte el corazón, sino que también debe poder parcharlo. Para que no haga trampa con otros piratas informáticos",
"Soy un programador de PHP, pero de todos modos no te enviaré php",
"Eneeeng. | ¿Apache? | Eres la mujer más Unix que he conocido |",
"Cariño, ¿está activado el bloqueo de mayúsculas? | No, ¿por qué? | Porque tu nombre está escrito tan grande en mi corazón | ¡zzz! sonríe",
"Me acerqué a ti solo para redirigir al corazón de tu amigo",
"Dominios pueden estacionar, mi amor no puede estacionar en tu corazón?",
"¿Puedo ser tu novia? | 400 (Solicitud incorrecta) | ¿Puedo besarte? | 401 (Requiere autorización) | Te quitaré la camisa, está bien | 402 (Pago requerido) triste",
"Sabe que no hay diferencia entre usted y la sintaxis de PHP, la sintaxis de PHP es difícil de memorizar, es difícil de olvidar",
"¿Qué escuela vocacional tomaste? | Ingeniería en Computación de Redes | Entonces, ¿qué puedes hacer ahora? | Capturar tu corazón a través de mi computadora",
"Si el amor es una matriz, entonces, mi amor por ti nunca está vacío si no está configurado ()",
"SQLI (inyección de amor de consulta estructurada)",
"Quiero que rm -rf todos los ex en tu cerebro, yo soy la raíz de tu corazón",
"Tu sonrisa es como un enfriador que enfría mi corazón cuando está overclockeado",
"Eres la terminal, donde paso mi tiempo escribiendo miles de líneas de código de amor para tu sonrisa",
"Me gusta pasar el rato en la zona-h, porque ahí es donde archivo varios sitios web con fotos tuyas",
"Mi corazón es como un vps solo para ti, no un alojamiento compartido que puede acumular varios dominios de amor",
"No soy un servidor VNC sin autenticación que pueda monitorear en cualquier momento",
"No arranques mi corazón contigo",
"Mi amor, Ctrl + A, luego Ctrl + C y Ctrl + V justo en la carpeta del sistema de tu corazón",
"KDE perdido en belleza, GNOME perdido en términos simples, FluxBox perdido en luz, básicamente todas las DE pierden para ti",
"Tu amor es como TeamViewer siempre controlando mi corazón",
"¡¡Nuestro amor no puede separarse sin importar qué tan grueso sea el cortafuegos...!!"]
