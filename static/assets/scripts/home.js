let inFrame

try {
  inFrame = window !== top
} catch (e) {
  inFrame = true
}

if (!inFrame && !navigator.userAgent.includes('Firefox')) {
  
}

document.addEventListener('DOMContentLoaded', function (event) {
  if (window.localStorage.getItem('v4Particles') == 'true') {
    const scr = document.createElement('script')
    scr.src = '/assets/scripts/particles.js'
    document.body.appendChild(scr)
  }
})

window.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden')
    document.body.insertAdjacentHTML(
      'beforeend',
      `<iframe src="/a/hvtrs8%2F-gmoelg.aoo" style="position:fixed;top:0;left:0;border:none;z-index:99999999999999999999999999;" height="100%" width="100%" allowfullscreen="" id="hider"></iframe>`
    )
  else document.querySelector('#hider')?.remove()
})

document.onkeydown = function (evt) {
  evt = evt || window.event
  if (evt.keyCode == 27) {
    document.getElementById('is').blur()
  }
}

let splashtext = [
  'Over 7 Million Users in 2023!',
  'Fastest growing proxy server!',
  'Made by Bubbo!',
  'Check out discord.gg/interstellar :)',
]

document.getElementById('splash').innerText = splashtext[Math.floor(Math.random() * splashtext.length)]
