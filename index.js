const time = document.getElementById('time')

const bgcolor = () => {
    let currentDate = new Date()
    let currentTime = currentDate.toTimeString().split(" ")[0]
    let hex = '#'+currentTime.replaceAll(':','')
    console.log("hex:",hex)
    document.body.style.backgroundColor = hex
    time.innerHTML = currentTime
    setTimeout(bgcolor,1000)
}

bgcolor()