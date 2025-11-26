const body = document.querySelector("body");
const cover = document.querySelector("#cover")
const presentArea = document.querySelector("#presentArea")



cover.addEventListener("click", ()=>{
    cover.classList.add("fall");
    setTimeout(() => {
        presentArea.classList.add("roll")
    },900);
});
