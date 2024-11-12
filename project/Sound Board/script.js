const sounds = ['clap', 'game', 'keyboard', 'rocket', 'sneez', 'thunder']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopsongs()

        document.getElementById(sound).play()
    })

    document.getElementById('buttons'). appendChild(btn)

})

function stopsongs() {
    sounds.forEach(sound => {
        const song =document.getElementById(sound)

        song.pause()
        song.currentTime=0,
    })
}