const cover = document.querySelector("#cover")
const presentingArea = document.querySelector("#presentingArea")


function roll(){
    
}

cover.addEventListener("click", ()=>{
    cover.classList.add("blur");
    setTimeout(() => {
        presentingArea.classList.add("roll")
    roll();    
    }, 2200);
});