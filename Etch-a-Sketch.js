for (let i = 1; i <= 16; i++){
    for (let i = 1; i <= 16; i++){
        const div = document.createElement("div");
        div.className = `box`
        document.querySelector(".boxCont").appendChild(div);
    }

    let div = document.createElement("div");
        div.className = "break"
        document.querySelector(".boxCont").appendChild(div);
}

let boxes = document.querySelectorAll(".box");

boxes.forEach(createListeners);

function createListeners (item){
   item.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "black";
   }) 
}