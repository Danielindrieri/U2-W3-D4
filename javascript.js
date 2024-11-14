const API_KEY = '55WkoNdf4RhNd9TKlbDYC1QxdbaBDYmsItxf9OJcnKLhhKWlrFIecMjG'

const LoadButton = document.getElementsByClassName('btn')
const imgChange = document.querySelectorAll('img')

fetch('https://api.pexels.com/v1/search?query=panda&per_page=9', {
  method: 'GET',
  headers: {
    Authorization: API_KEY,
  },
})
  .then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('Non è stato possibile trovare i dati')
    }
  })
  .then((panda) => {
    console.log(panda)
    const object_panda = panda
    console.log(object_panda.photos[0].src.landscape)
    return object_panda.photos[0].src.landscape
  })
  .then((new_img) => {
    const imgLoop = function () {
      for (let i = 0; i < imgChange.length; i++) {
        const element = imgChange[i]
        imgChange[i].setAttribute('src', `${new_img}`)
      }
    }
    LoadButton[0].addEventListener('click', imgLoop)
  })
  .catch((error) => {
    console.error('Errore:', error)
    imgLoop()
  })
