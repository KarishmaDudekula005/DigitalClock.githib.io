setInterval(()=>{

let hours=document.querySelector("#hour_section h1")
let min=document.querySelector("#minutes_section h1")
let sec=document.querySelector("#seconds_section h1")

// console.log(hours);
// console.log(min);
// console.log(sec);

let hourValue = new Date().getHours()
let minValue = new Date().getMinutes()
let secValue = new Date().getSeconds()

// secValue<10 ? sec.innerHTML=`0${secValue}` : sec.innerHTML=secValue
// minValue<10 ? min.innerHTML=`0${minValue}` : min.innerHTML=secValue
// hourValue<10 ? hours.innerHTML=`0${hourValue}` : hours.innerHTML=secValue

// hourValue>12? hours.innerHTML=hourValue-12 : hours.innerHTML=hourValue

if(secValue < 10){
    sec.innerHTML=`0${secValue}`
}else{
    sec.innerHTML=secValue
}

if(minValue < 10){
    min.innerHTML=`0${minValue}`
}else{
    min.innerHTML=minValue
}

if(hourValue < 10){
    hours.innerHTML=`0${hourValue}`
}else{
    hours.innerHTML=hourValue
}



},1000)
