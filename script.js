// TO DO
// local storage --> it overwrites item each time
// checkbox style
// maybe add drag and drop

//toggle light/dark switch
let darkModeBtn = document.getElementById('dark-mode-btn')


darkModeBtn.addEventListener('click', function changeColor(){
    let body = document.body
    body.classList.toggle("dark-mode");
 
  
})

//assigning variables
let addTaskInput = document.getElementById('add-task-input')
let addButton = document.getElementById('add-button')
let incompleteUl = document.getElementById('incomplete-ul')
let completeUl = document.getElementById('complete-ul')

// date heading
let dateHeading = new Date()
let weekday = dateHeading.getDay()
let date = dateHeading.getDate()
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
let month = months[dateHeading.getMonth()]
let year = dateHeading.getFullYear()

switch (weekday) {
    case 0:
    document.getElementById('h1').innerHTML = "Sunday, "
    break
    case 1:
    document.getElementById('h1').innerHTML = "Monday, "
    break
    case 2:
    document.getElementById('h1').innerHTML = "Tuesday, "
    break
    case 3:
    document.getElementById('h1').innerHTML = "Wednesday, "
    break
    case 4:
    document.getElementById('h1').innerHTML = "Thursday, "
    break
    case 5:
    document.getElementById('h1').innerHTML = "Friday, "
    break
    default:
    document.getElementById('h1').innerHTML = "Saturday, "
}

document.getElementById('h1').innerHTML += date + ' ' + month + ' ' + year

// add task to to do list
let counter = 1;
let date1 = new Date();
let milliseconds = date1.getMilliseconds();
addButton.addEventListener('click', function add(){

let listItemContainer = document.createElement('div')
let listItem = document.createElement('li')
let listCheckbox = document.createElement('input')
listCheckbox.setAttribute("type", "checkbox")
let listLabel = document.createElement('label')
let deleteButton = document.createElement('button')
let binImage = document.createElement('img')
binImage.src = './bin2.png'
deleteButton.appendChild(binImage)
deleteButton.style.backgroundColor = "transparent"
deleteButton.style.padding = "0"
binImage.style.width = "17px"
listLabel.style.marginRight = "10px"

let nodes = [listItemContainer, listItem, listCheckbox, listLabel, deleteButton]

    for (let i=0; i<nodes.length; i++){
        incompleteUl.appendChild(nodes[i])
        listLabel.innerHTML = addTaskInput.value
        let localStorageName = `item${counter}${milliseconds}`;
        localStorage.setItem(`item${counter}${milliseconds}`, addTaskInput.value)
        // listLabel.innerHTML = localStorage.getItem('item')
        }
        counter++
        addTaskInput.value = ""


// Get all items from local storage
function getAllItemsFromLocalStorage() {
  var items1 = [];

  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    items1.push({ key: key, value: value });
  }

  return items1;
}

// Usage example
var allItems = getAllItemsFromLocalStorage();

// Display the retrieved items
// allItems.forEach(function (item) {
//   console.log("Key:", item.key);
//   console.log("Value:", item.value);
  
// });

// move completed tasks between completed and incompleted UL
    listCheckbox.addEventListener('click', function tickOff(){
        if (listCheckbox.value = this.checked){
            for (let i=0; i<nodes.length; i++){
                completeUl.appendChild(nodes[i])
                listLabel.style.color = "rgb(139, 94, 38)"
                listLabel.style.textDecorationLine = "line-through"
                }
            } else {
            for (let i=0; i<nodes.length; i++){
                incompleteUl.appendChild(nodes[i])
                listLabel.style.color = "var(--text-color)"
                listLabel.style.textDecorationLine = "none"
                }
            }
    }) 
    
// delete task when clicking delete button
    deleteButton.addEventListener('click', function(){
        for (let j=0; j<nodes.length; j++){
            nodes[j].remove()
        }
    })
})

// enter button adds tasks
 document.addEventListener('keypress', (event)=>{
    let keyCode = event.keyCode ? event.keyCode : event.which;
    if(keyCode === 13) {
    addButton.click();
    }
});






// let storageItems = []
// let k = 0

// do {
//             localStorage.setItem('item', addTaskInput.value)
//             storageItems[k] = localStorage.getItem('item')
//             k++
//         }
//         while (addTaskInput.value == true)



// let storageItems = []
//   for (k=0; k<=storageItems.length;k++){
//             localStorage.setItem('item', addTaskInput.value)
//             storageItems.push(k) = localStorage.getItem('item')
//         }

