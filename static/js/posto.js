var num = 1

const nivelBattery = document.getElementById("nivelBattery")

if( num < 4 ){
    setInterval(()=>{
        nivelBattery.innerHTML = '<i class="bi bi-battery-half"></i>'
    }, 5000)
    setInterval(()=>{
        nivelBattery.innerHTML = '<i class="bi bi-battery"></i>'
    }, 10000)
}