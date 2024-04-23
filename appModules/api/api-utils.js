let getData = async (url ) => {
    try {
        let responce = await fetch(url)
        let data = await responce.json()
        return data
    } catch (error){
        console.log(error)
    };
};

function getRandomGame(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  } 

module.exports = {getData, getRandomGame};