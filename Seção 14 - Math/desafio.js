const getRandomNumber = (min = 0, max = 10, intenger = true) => {
    let result = Math.random() * (max - min + 1) + min
    intenger ? result = parseInt(result) : ''
    return console.log(result)
}

getRandomNumber()
