const currentTime = () =>{
    const clock = document.querySelector("h1");

    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = hh < 10 ? `0${hh}` : hh;
    mm = mm < 10 ? `0${mm}` : mm;
    ss = ss < 10 ? `0${ss}` : ss;

    let time = `${hh}h:${mm}:${ss}`
    clock.innerText = time;
}

currentTime();
setInterval(currentTime, 1000);

    // DATA CORRENTE

    const calender = document.querySelector("h2");

    let data = new Date();
    let dia = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][data.getDay()];
    let day = String(data.getDay() + 17).padStart(2,'0')
    let mes = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ][data.getMonth()];
    let ano = data.getFullYear();
    let fullData = `${dia}  ${mes} ${day}, ${ano}`;

    calender.innerHTML = fullData;
