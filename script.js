const body = document.querySelector("body");
const cover = document.querySelector("#cover")
const presentArea = document.querySelector("#presentArea")

const totFilm = 1;
const totPhoto = 10;




cover.addEventListener("click", ()=>{
    cover.classList.add("blur");
    setTimeout(() => {
        presentArea.classList.add("roll")
        roll();
    },900);
});

function roll(){
    for(let i = 1; i <= totFilm; i++){
        const filmSample = document.createElement("span")
        filmSample.id = "film_" + i;
        filmSample.classList.add("film")
        for(let j = 1; j <= totPhoto; j++) {
            const imageSample = document.createElement("img");
            imageSample.classList.add("photo")
            imageSample.src = "assets/films/film_" + i + "/image" + j + ".jpg"
            filmSample.appendChild(imageSample)
        }
        presentArea.appendChild(filmSample)
    }
}
