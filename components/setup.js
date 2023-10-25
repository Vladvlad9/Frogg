const canvas = document.getElementById('canvas1')
const context1 = canvas.getContext("2d")
canvas.width = 600;
canvas.height = 600;


const canvas2 = document.getElementById('canvas2')
const context2 = canvas2.getContext("2d")
canvas2.width = 600;
canvas2.height = 600;


const canvas3 = document.getElementById('canvas3')
const context3 = canvas3.getContext("2d")
canvas3.width = 600;
canvas3.height = 600;


const canvas4 = document.getElementById('canvas4')
const context4 = canvas4.getContext("2d")
canvas4.width = 600;
canvas4.height = 600;


const canvas5 = document.getElementById('canvas5')
const ctx5 = canvas5.getContext("2d")
canvas5.width = 600;
canvas5.height = 800;

// const canvas6 = document.getElementById('canvas6')
// const ctx6 = canvas6.getContext("2d")
// canvas6.width = 600;
// canvas6.height = 600;


const grid = 80
let keys = []
let score = 0
let collisionCount = 0
let frame = 0
let gameSpeed = 1
let save = false

const particlesArray = []
const maxParticle = 300
const ripplesArray = []
const carsArray = []
const logsArray = []

const backgroundCanvas = new Image()
backgroundCanvas.src = 'img/background_lvl2.png'

const grassCanvas = new Image()
grassCanvas.src = 'img/grass.png'

const collisionImg = new Image()
collisionImg.src = 'img/collisions.png'

const turtleImg = new Image()
turtleImg.src = 'img/turtles.png'

const carsImg = new Image()
carsImg.src = 'img/cars5.png'
let numberCars = 5

const logImg = new Image()
logImg.src = 'img/log.png'

const froggerImg = new Image()
froggerImg.src = 'img/frog_spritesheet.png'
