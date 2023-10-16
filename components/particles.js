class Particles{
    constructor(x, y) {
        this.x = x + 25;
        this.y = y + 25;
        this.radius = Math.random() * 20 + 1;
        this.opacity = 1;
        this.directionX = Math.random() * 1 - 0.5;
        this.directionY = Math.random() * 1 - 0.5;
    }
    draw(){
        context3.fillStyle = 'rgba(150, 150, 150, ' + this.opacity + ')'
        context3.beginPath()
        context3.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        context3.fill()
        context3.closePath()
    }

    drawRipples(){
        context1.strokeStyle = 'rgba(255, 255, 255, ' + this.opacity + ')'
        context1.beginPath()
        context1.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        context1.stroke()
        context1.closePath()
    }

    update(){
        this.x += this.directionX
        this.y += this.directionY

        if (this.opacity > 0.1)
            this.opacity -= 0.9

        if (this.radius > 0.15)
            this.radius -= 0.14
    }

    ripple(){
        if (this.radius < 50){
            this.radius += 0.7;
            this.x -= 0.03;
            this.y -= 0.03;
        }

        if (this.radius > 0)
            this.radius -= 0.02
    }

}

function handleParticles(){
    for (let i = 0; i < particlesArray.length; i++){
        particlesArray[i].update()
        particlesArray[i].draw()
    }
    if (particlesArray.length > maxParticle){
        for (let i = 0; i < 30; i++){
            particlesArray.pop()
        }
    }

    if (((keys[37] || keys[38] || keys[39] || keys[40])) && frogger.y > 250 && particlesArray.length < maxParticle + 10){
        for (let i = 0; i < 10; i++){
            particlesArray.unshift(new Particles(frogger.x, frogger.y))
        }
    }
}

function handleRipples(){
    for (let i = 0; i < ripplesArray.length; i++){
        ripplesArray[i].ripple()
        // ripplesArray[i].drawRipples()
    }
    if (ripplesArray.length > 20){
        for (let i = 0; i < 2; i++){
            ripplesArray.pop()
        }
    }

    if (((keys[37] || keys[38] || keys[39] || keys[40])) && frogger.y < 250 && frogger.y > 100){
        for (let i = 0; i < 20; i++){
            ripplesArray.unshift(new Particles(frogger.x, frogger.y))
        }
    }
}