createGrid(16)

function createGrid (param){
    let colNum = param;
    let rowNum = param;

    let rowCount = 1;

    for (let i = 1; i <= colNum; i++){
        const colDiv = document.createElement("div");
        colDiv.className = `column num${i}`;
        document.querySelector(".boxCont").appendChild(colDiv);
        
            for (let j = 1; j <= rowNum; j++){
                const rowDiv = document.createElement("div");
                rowDiv.className = `row ${rowCount}`;
                document.querySelector(`.num${i}`).appendChild(rowDiv);
                rowCount++
            }
        }



document.querySelectorAll(".row").forEach((item) => {
    item.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "black";
        event.target.style.opacity = "100%";
        })
})


document.querySelector(".Rainbow").addEventListener("click", () => {
    document.querySelectorAll(".row").forEach((item) => {
        item.addEventListener("mouseover", (event) => {

            let r = (Math.random() * 255).toFixed(0);

            let g = (Math.random() * 255).toFixed(0);

            let b = (Math.random() * 255).toFixed(0);

            event.target.style.backgroundColor = `rgb(${r},${g},${b}`;
            event.target.style.opacity = "100%";
            })
    });

})

document.querySelector(".Black").addEventListener("click", () => {
    document.querySelectorAll(".row").forEach((item) => {
        item.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "black";
            event.target.style.opacity = "100%"
            })
    });

})

document.querySelector(".shading").addEventListener("click", () => {
    document.querySelectorAll(".row").forEach((item) => {
        let opacity = 0;
        item.addEventListener("mouseover", (event) => {
            event.target.style.opacity = `${opacity}%`
            opacity += 10;
            })
    })
})
}

document.querySelector(".newGrid").addEventListener("click", () => {
    let boxNum = prompt("How wide do you want your grid?")


    if(boxNum <= 100){
        document.querySelectorAll(".row").forEach((item) => {
            item.remove();
        })
        document.querySelectorAll(".column").forEach((item) => {
            item.remove();
        })    
        createGrid(boxNum);} else if(boxNum === null) {
            createGrid(16)} else if(boxNum > 100){
                alert("Grid too large! Pick a number between 1-100!")
                } else {
                    alert("Pick a number between 1-100!")}

})
      





