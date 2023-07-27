const canvas = document.getElementById("backgroundCnv");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth
canvas.height = window.innerHeight
document.getElementById("dialog1").show()

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
                this.color = "#FFF"
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
        }else if (e > 99){
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
    ctx.clearRect(0,0,canvas.width, canvas.height)
    for (let i = 0; i < particlesArray.length; i++){
        particlesArray[i].update()
    }
}

init()
animate()





/*      TAG                 TAG                 TAG     */
let activeTag = [-1]
function toggleTag(tag) {
    if (tag != -1) {
        if (activeTag.find(el => el === -1)) {
            activeTag.splice(activeTag.indexOf(-1), 1)
            document.getElementById(`itemTag-1`).classList.remove("selected")
        }
    }
    if (activeTag.find(el => el === tag)) {
        activeTag.splice(activeTag.indexOf(tag), 1)
        document.getElementById(`itemTag${tag}`).classList.remove("selected")
    }else{
        activeTag.push(tag)
        document.getElementById(`itemTag${tag}`).classList.add("selected")
    }
    if (activeTag[0] == null){
        activeTag.push(-1)
        document.getElementById(`itemTag-1`).classList.add("selected")
    }
    if (activeTag.find(el => el === -1)){
        let e = document.querySelector(".imgList").children
        for (let u = 0; u < e.length; u++) {
            e[u].classList.remove("hiden")
        }
    }else{
        console.log(`search for the folowing tags : ${activeTag}`)
        let e = document.querySelector(".imgList").children
        for (let u = 0; u < e.length; u++) {
            let act = false
            activeTag.forEach(tag => {
                if(e[u].classList.contains(`T${tag}`)) {
                    act = true
                }
            })
            if(act == false){e[u].classList.add("hiden")}else{e[u].classList.remove("hiden")}
        }
    }
}



function Navigate(location){
    window.location.hash = location
    document.querySelectorAll(".content").forEach(el => {el.classList.remove("active")})
    switch(location){
        case "#Home":
            document.getElementById("home").classList.add("active")
        break;
        case "#Gallery":
            document.getElementById("gallery").classList.add("active")
            document.getElementById("gallery").classList.remove("viewing")
        break;
        case "#TOS":
            document.getElementById("tos").classList.add("active")
        break;
        case "#Prices":
            document.getElementById("prices").classList.add("active")
        break;
        case "#Contact":
            document.getElementById("contact").classList.add("active")
        break;
        case "#img1":
            document.getElementById("img1").classList.add("active")
            document.getElementById("gallery").classList.add("viewing")
        break
        case "#img2":
            document.getElementById("img2").classList.add("active")
            document.getElementById("gallery").classList.add("viewing")
        break
        case "#img3":
            document.getElementById("img3").classList.add("active")
            document.getElementById("gallery").classList.add("viewing")
        break
        case "#img4":
            document.getElementById("img4").classList.add("active")
            document.getElementById("gallery").classList.add("viewing")
        break
    }
}
let hash = ["#Home", "#Gallery", "#TOS", "#Prices", "#Contact"]
if (window.location.hash){
    let e = window.location.hash
    if (hash.includes(e)) {Navigate(e)}
}