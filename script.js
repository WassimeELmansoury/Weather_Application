const input = document.getElementById("input")
const 


async function getdata(city) {
    if(city == "") { 
        alert ("city not found!")
    return }


    const key = "db3d97685669742b838edd4a800c54cf";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

    
    }

