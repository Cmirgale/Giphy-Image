
const btn=document.getElementById("btn").addEventListener('click',imageFinder);
function imageFinder(){
    const search=document.querySelector('.search').value;
    const img = document.querySelector('img')
    const refresh=document.getElementById('refresh').addEventListener('click',imageFinder)
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=bb2006d9d3454578be1a99cfad65913d&s=${search}`, {mode: 'cors'})
    .then(function(response) {
      return response.json()
    })
    .then(function(response) {
      img.src = response.data.images.original.url
    })
    .catch(e => {
      console.log(e)
    })
}