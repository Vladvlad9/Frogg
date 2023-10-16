class Obstacles{
    constructor(x, y, width, height, speed, type) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.type = type;
        this.frameX = 0;
        this.frameY = 0;
        this.randomise = Math.floor(Math.random() * 30 + 30);
        this.carType = (Math.floor(Math.random() * numberCars))
    }
    draw(){
        if (this.type === "turtle"){
            if (frame % this.randomise === 0){
                if (this.frameX >= 1)
                    this.frameX = 0
                else
                    this.frameX++
            }
            context1.drawImage(turtleImg, this.frameX * 70, this.frameY * 70, 70, 70, this.x, this.y, this.width, this.height)
        }else if (this.type === 'log'){
            context1.drawImage(logImg, this.x, this.y, this.width, this.height)
        }
        else {
            context2.drawImage(carsImg, this.frameX * this.width, this.carType * this.height, grid * 2, grid, this.x, this.y, this.width, this.height)
        }
    }
    update(){
        this.x += this.speed * gameSpeed

        if (this.speed > 0){
            if (this.x > canvas.width + this.width){
                this.x = 0 - this.width
                this.carType = (Math.floor(Math.random() * numberCars))
            }
        }else {
            this.frameX = 1
            if (this.x < 0 - this.width){
                this.x = canvas.width + this.width
                this.carType = (Math.floor(Math.random() * numberCars))
            }
        }
    }
}

function driving(distance, location, speed){
    for(let car = 0; car < 2; car++){
        let x = car * distance
        carsArray.push(new Obstacles(x, canvas.height - grid * location - 20, grid * 2, grid, speed, 'car')
        );
    }
}

function  initObstacles(){

    driving(350, 2, 1)
    driving(300, 3, -2)
    driving(400, 4, 2)

    for(let log = 0; log < 2; log++){
        let x = log * 400
        logsArray.push(new Obstacles(x, canvas.height - grid * 5 - 20, grid * 2, grid, -2, 'log')
        );
    }

    for(let turtle = 0; turtle < 3; turtle++){
        let x = turtle * 200
        logsArray.push(new Obstacles(x, canvas.height - grid * 6 - 20, grid, grid, 1, 'turtle')
        );
    }
}
initObstacles()

function handleObstacles(){
    for(let car = 0; car < carsArray.length; car++){
        carsArray[car].update()
        carsArray[car].draw()
    }

    for(let log = 0; log < logsArray.length; log++){
        logsArray[log].update()
        logsArray[log].draw()
    }

    for (let i = 0; i < carsArray.length; i++){
        if (collision(frogger, carsArray[i])){
            context4.drawImage(collisionImg, 0, 100, 100, 100, frogger.x, frogger.y, 50, 50)
            resetGame()
        }
    }

    if (frogger.y < 200 && frogger.y > 100){
        save = false
        for (let i = 0; i < logsArray.length; i++){
            if (collision(frogger, logsArray[i])){
                frogger.x += logsArray[i].speed
                save = true
            }
        }

        if (!save){
            for (let i = 0; i < 30; i++){
                ripplesArray.unshift(new Particles(frogger.x, frogger.y))
            }

            resetGame()
        }
    }
}