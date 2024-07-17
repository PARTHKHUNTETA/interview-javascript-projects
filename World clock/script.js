

function updateClock() {
    const now = new Date();
    console.log(now)
    // offset for the users location
    const offset = new Date().getTimezoneOffset() / 60;

    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    
    const timeString = `${hours}: ${minutes}: ${seconds}`

    const timeElement = document.getElementById("India");

    timeElement.value = timeString;


    const cities = [
        { name: "New York", offset: -5 },
        { name: "London", offset: 0 },
        { name: "Sydney", offset: 10 },
        { name: "Tokyo", offset: 9 },

    ]

    cities.forEach(
        (city) => {

            const date = new Date(now.getTime() + (city.offset + offset) * 60 * 60 * 1000);
            const hours = date.getUTCHours().toString().padStart(2, "0");
            const minutes = date.getUTCMinutes().toString().padStart(2, "0");
            const seconds = date.getUTCSeconds().toString().padStart(2, "0");

            const timeString = `${hours}: ${minutes}: ${seconds}`

            const timeElement = document.getElementById(city.name);

            timeElement.value = timeString;
        }
    )

}

setInterval(updateClock, 1000);