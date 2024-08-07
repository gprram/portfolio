var name2=prompt("ENTER YOUR NAME")
let container = document.getElementById("img-c")
console.log(container)
let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")
let dbox=document.getElementById("dailogue-box")
let wcm = document.getElementById("welcome-message2")
let img3 =document.getElementById("im1")
let img4=document.getElementById("im2")
let img5=document.getElementById("im3")

let unl = document.querySelectorAll('li')
let tgl = document.querySelector('.toggle')
let unl2 = document.querySelector('ul')
unl.forEach((item)=>{
    item.addEventListener('mouseover',()=>{
        item.classList.add("bg-info")
    })
    item.addEventListener('mouseleave',()=>{
        item.classList.remove("bg-info")
    })
})
tgl.addEventListener('click',()=>{
    unl2.classList.toggle("upwards")
    mcont.classList.toggle("blur")
})
let mcont=document.querySelector('.container1')





function firstpage(){
    container.addEventListener('mouseover',()=>{
    console.log('hai')
    img1.classList.add('hv')
    img2.classList.add('hv')
    dbox.classList.add('db')
    wcm.innerText=name2
    
})
container.addEventListener('mouseleave',()=>{
    console.log('hai')
    img1.classList.remove('hv')
    img2.classList.remove('hv')
    dbox.classList.remove('db')
})
}
firstpage()
img3.addEventListener('mouseover',()=>{
    det1.classList.add('det')
})
img4.addEventListener('mouseover',()=>{
    det2.classList.add('det')
    
})
img5.addEventListener('mouseover',()=>{
    det3.classList.add('det')
})

img3.addEventListener('mouseleave',()=>{
    det1.classList.remove('det')
})
img4.addEventListener('mouseleave',()=>{
    det2.classList.remove('det')
    
})
img5.addEventListener('mouseleave',()=>{
    det3.classList.remove('det')
})
img3.addEventListener('click',()=>{
    det1.classList.toggle('dl')
})
img4.addEventListener('click',()=>{
    det2.classList.toggle('dl')
})
img5.addEventListener('click',()=>{
    det3.classList.toggle('dl')
})



/*page 3 */

let container3 = document.querySelector('.cont-img')
for(i=1;i<=10;i++){
    let container = document.getElementById('ab'+i)
    let coursenm=document.getElementById('h1'+i)
    
    container.addEventListener('mouseover',()=>{
        console.log(container)
        container.classList.add('blur')
        coursenm.classList.add('move')
    })
    container.addEventListener('mouseleave',()=>{
        console.log(container)
        container.classList.remove('blur')
        coursenm.classList.remove('move')
    })
    
    
}


/* gsap 
gsap.to(".details",{
    duration :1,
    autoAlpha:1, 

})*/


