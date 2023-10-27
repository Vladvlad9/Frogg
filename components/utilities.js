function animate(){
    context1.clearRect(0, 0, canvas.width, canvas.height)
    context2.clearRect(0, 0, canvas.width, canvas.height)
    context3.clearRect(0, 0, canvas.width, canvas.height)
    context4.clearRect(0, 0, canvas.width, canvas.height)
    ctx5.clearRect(0, 0, canvas.width, canvas.height)

    handleRipples()
    context2.drawImage(backgroundCanvas, 0, 0, canvas.width, canvas.height)
    handleParticles()
    frogger.draw()
    frogger.update()

    handleObstacles()
    handleScore()
    context4.drawImage(grassCanvas, 0, 0, canvas.width, canvas.height)
    frame++
    requestAnimationFrame(animate)
}
animate()


window.addEventListener('keydown', (e) =>{
    keys = []
    keys[e.keyCode] = true

    if ( keys[37] || keys[38] || keys[39] || keys[40]){
        frogger.jump()
    }
})

window.addEventListener('keyup', (e) => {
    delete keys[e.keyCode]
    frogger.moving = false
    frogger.frameX = 0
})

function scored(){
    score++
    gameSpeed += 0.5

    frogger.x = canvas.width / 2 - frogger.width / 2;
    frogger.y = canvas.height - frogger.height - 40;
}

function handleScore(){
    context4.fillStyle = 'black'
    context4.strokeStyle = 'black'
    context4.font = '15px Verdana'
    context4.strokeText('Счет', 270, 15)

    context4.font = '60px Verdana'
    context4.fillText(score, 270, 65)

    context4.font = '15px Verdana'
    context4.strokeText('Столкновения: ' + collisionCount, 10, 175)
    context4.strokeText('Скорость: ' + gameSpeed.toFixed(1), 10, 195)
}

function collision(frogger, objects){
    return !(
        frogger.x > objects.x + objects.width ||
            frogger.x + frogger.width < objects.x ||
            frogger.y > objects.y + objects.height ||
            frogger.y + frogger.height < objects.y
    )
}

function resetGame(){
    frogger.x = canvas.width / 2 - frogger.width / 2;
    frogger.y = canvas.height - frogger.height - 40;
    score = 0;
    collisionCount++;
    gameSpeed = 1;
}