const cointainter = document.createElement("div")
cointainter.classList.add("#js-test")
document.body.appendChild(cointainter)

const contentp = document.createElement("p")
contentp.classList.add("#js-test__p")
contentp.setAttribute("style", "color: red")
contentp.textContent = "Hey I’m red!"
cointainter.appendChild(contentp);

const contenth3 = document.createElement("h3")
contenth3.classList.add("#js-test__h3")
contenth3.setAttribute("style", "color: blue")
contenth3.textContent = "I'm a blue h3"
cointainter.appendChild(contenth3);

const newDiv = document.createElement("div")
const newDivH1 = document.createElement("H1")
const newDivP = document.createElement("p")
newDiv.classList.add("#newDiv")
newDivH1.classList.add("#newDiv__H1")
newDivH1.textContent = "I'm in a div"
newDivP.classList.add("#newDiv__p")
newDivP.textContent = "ME TOO!"
newDiv.setAttribute("style", "border: 4px solid black; background: pink;")
newDiv.appendChild(newDivH1)
newDiv.appendChild(newDivP)
cointainter.appendChild(newDiv);
