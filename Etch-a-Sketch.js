// createGrid(16)

// function createGrid (param) {
//     for (let i = 1; i <= param; i++){
//     for (let i = 1; i <= param; i++){
//         const div = document.createElement("div");
//         div.className = `box`
//         document.querySelector(".boxCont").appendChild(div);
//     }

//     const div = document.createElement("div");
//         div.className = "break"
//         document.querySelector(".boxCont").appendChild(div);
// }}

// document.querySelectorAll(".box").forEach((item) => {
//     item.addEventListener("mouseover", (event) => {
//         event.target.style.backgroundColor = "black";
//        })
// });

// document.querySelector(".newGrid").addEventListener("click", () => {
//     let boxNum = prompt("How wide do you want your grid?")

//     document.querySelectorAll(".box").forEach((item) => {
//         item.remove();
//     })
//     document.querySelectorAll(".break").forEach((item) => {
//         item.remove();
//     })

//     if(boxNum <= 100){
//     createGrid(boxNum);} else if(boxNum === null) {
//         createGrid(16)} else if(boxNum > 100){
//             alert("Grid too large! Pick a number between 1-100!")
//             } else {
//                 alert("Pick a number between 1-100!")}
// })

let colNum = 10;
let rowNum = 10;

for (let i = 1; i <= colNum; i++){
const colDiv = document.createElement("div");
colDiv.className = `column num${i}`;
document.querySelector(".boxCont").appendChild(colDiv);

    for (let j = 1; j <= rowNum; j++){
        const rowDiv = document.createElement("div");
        rowDiv.className = `row ${i}`;
        document.querySelector(`.num${i}`).appendChild(rowDiv);
    }
}

