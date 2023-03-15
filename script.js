const movies = document.getElementById('movies')
const scrollBlock = document.querySelector('.scroll-block')

const card1 = document.querySelector('.grid :nth-child(1)')
const card2 = document.querySelector('.grid :nth-child(2)')
const card3 = document.querySelector('.grid :nth-child(3)')
const card4 = document.querySelector('.grid :nth-child(4)')
const card5 = document.querySelector('.grid :nth-child(5)')

const cards = document.querySelectorAll('.card')

var pics = [
    "img/back-pics/totoro.jpg",
    "img/back-pics/kiki.jpg",
    "img/back-pics/spirited-away2.jpg",
    "img/back-pics/howl.jpg",
    "img/back-pics/wind-rises2.jpg"
]

function scroll(){
    movies.scrollIntoView({block: "start",behavior: "smooth"})
}

scrollBlock.addEventListener('click', scroll)

//                    CARDS

function bckgrnd(_num){
    movies.style.background = `linear-gradient(90deg, rgba(26,39,28,1) 0%, rgba(26,39,28,0.7) 100%), url(${pics[_num - 1]}) no-repeat`
    movies.style.backgroundSize = "cover"
    console.log(_num)
}
function rev_bckgrnd(){
    movies.style.background = "#1a271c";
}

card1.addEventListener("mouseover", (evt) => bckgrnd(1))
card1.addEventListener("mouseout", (evt) => rev_bckgrnd())

cards[1].addEventListener("mouseover", (evt) => bckgrnd(2))
cards[1].addEventListener("mouseout", (evt) => rev_bckgrnd())

/*card2.addEventListener("mouseover", (evt) => bckgrnd(2))
card2.addEventListener("mouseout", (evt) => rev_bckgrnd())*/

card3.addEventListener("mouseover", (evt) => bckgrnd(3))
card3.addEventListener("mouseout", (evt) => rev_bckgrnd())

card4.addEventListener("mouseover", (evt) => bckgrnd(4))
card4.addEventListener("mouseout", (evt) => rev_bckgrnd())

card5.addEventListener("mouseover", (evt) => bckgrnd(5))
card5.addEventListener("mouseout", (evt) => rev_bckgrnd())