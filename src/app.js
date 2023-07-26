const canvas = document.getElementById("backgroundCnv");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth
canvas.height = window.innerHeight


class Particle {
    constructor(x, y, size, speed, color) {
        this.x = x
        this.y = y
        this.size = size
        this.speed = speed
        this.color = color
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI*2, false);
        ctx.fillStyle = this.color
        ctx.fill()
    }
    update(){
        if (this.y < 0){
            this.y = canvas.height
            this.x = (Math.random() * canvas.width)
            let e = Math.random()*100
            if(e<1){
                this.color = "#00E7FF" // 00E7FF
            }else if (e > 99){
                this.color = "#FF002F" // FF002F
            }else {
                color = "#FFF"
            }
        }else {
            this.y -= this.speed
        }
        this.draw()
    }
}


function init(){
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    particlesArray = []
    let particlesNumber = Math.floor((canvas.height*canvas.width)/ 8000)
    for (let i = 0; i < particlesNumber; i++){
        let size = (Math.random()*0.5) + 0.5
        let x = (Math.random() * ((innerWidth - size * 2)- (size*2))+ size*2);
        let y = (Math.random() * ((innerHeight - size * 2)- (size*2))+ size*2);
        let e = Math.random()*100
        let speed = (Math.random()) +0.25
        let color
        if(e<1){
            color = "#00E7FF" // 00E7FF
            console.log(e)
        }else if (e > 99){
            console.log(e)
            color = "#FF002F" // FF002F
        }else {
            color = "#FFF"
        }
        particlesArray.push(new Particle(x, y, size, speed, color))
    }
    console.log(`particles : ${particlesNumber}`)
}

function animate(){
    requestAnimationFrame(animate)
    ctx.clearRect(0,0,innerWidth, innerHeight)
    for (let i = 0; i < particlesArray.length; i++){
        particlesArray[i].update()
    }
}

init()
animate()