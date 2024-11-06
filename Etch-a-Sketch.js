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

document.querySelectorAll(".box").forEach((item) => {
    item.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "black";
       })
});

document.querySelector(".newGrid").addEventListener("click", () => {
    document.querySelectorAll(".box").forEach((item) => {
        item.remove();
    })
})
