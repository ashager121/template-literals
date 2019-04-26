parseDogs()

function parseDogs() {
    fetch('https://raw.githubusercontent.com/gabe1331/dog-api/master/db.json')
        .then((res) => res.json())
        .then((dogs) => {
            console.log(dogs)
            dogs.forEach(function (dog) {
                let dogsInfo = `<div class="box">
                <div>
                <h3>${dog.bread_for}</h3>
                    <p>${dog.breed}</p>
                    <img src=${dog.image}>
                    <p>${dog.lifespan}</p>
                    <p>${dog.height + " " + dog.weight}</p>
                </div>
                </div>`
                document.querySelector("#dogsWrapper").innerHTML += dogsInfo
                console.log(dogsInfo)
            })
        })
}
