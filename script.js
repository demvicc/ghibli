const movies = document.getElementById('movies')
const scrollBlock = document.querySelector('.scroll-block')

function scroll(){
    movies.scrollIntoView({block: "start",behavior: "smooth"})
}

scrollBlock.addEventListener('click', scroll)