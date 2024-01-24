// let word = document.getElementById('para')
// word.innerHTML = "kese ho!";
// word.style.backgroundColor = "yellow"


// console.log(word);

let elem = document.getElementById('second');
elem.textContent= "ASAD!"
elem.style.backgroundColor = "cyan"
elem.style.textAlign = "center"
elem.style.padding = "20px"
elem.classList.add('two')
elem.classList.add('three')
elem.classList.remove('three')
elem.id = "hello!"

let myDiv = document.getElementsByClassName('container')
myDiv[0].innerHTML = "xyz"
myDiv[0].style.backgroundColor = "RED"
myDiv[0].style.color = "cyan"
myDiv[0].classList.add("world")
myDiv[0].style.fontSize = "40px"
myDiv[0].id = "pencil"


let newElem = document.createElement('p');
myDiv[0].appendChild(newElem);
newElem.innerHTML = "wow!"


let pencil = document.createElement('img')
newElem.appendChild(pencil);

pencil.src = "https://www.samaa.tv/images/sa-34.jpg"



