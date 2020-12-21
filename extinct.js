function getAnimals() {
    try {
        fetch(`http://localhost:1338/Extinct`)
            .then(animalResponse => {
                return animalResponse.json();
            }).then(displayAnimals);
    } catch {
        alert('City Not Found')
    }
}

function displayAnimals(animals) {
    console.log(animals)
}

