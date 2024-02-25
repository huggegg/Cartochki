
// const array = [1, 2, 3, 5, 20, 111]


// const arrayString =  ["a", "bv", "dsa", null, 123]


// // console.log(array.length)

// console.log(array[array.length - 1])

// array[0] = "Rifd!"
// console.log(array)
// array[array.length] = "becon"

const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

// console.log(inputElement.value)
createBtn.onclick = function () {
    if (inputElement.value.length == 0) {
        return
    }
    const newNote = {
        title: inputElement.value,
        completed: false,
    }
    notes.push(newNote)
    render()
    inputElement.value = ''
}

listElement.onclick = function (event) {
    if(event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type
    

    if (type == 'toggle') {
        notes[index].completed = !notes[index].completed
    } else if (type == 'remove') {
        notes.splice(index, 1)
    }
    }

    render()
}

function getNoteTemplate(note, index) {
    return `
        <div class="flex my-5 justify-center ">
        <li class="w-[907px] py-14 pl-10 pr-80 bg-[#D9D9D9] rounded-2xl ${note.completed ? 'line-through' : ''}  placeholder:text-[#333] placeholder:font-bold transition-all border">${note.title}</li>
        <button class="py-12 px-10 bg-[#C3A28A] rounded-2xl relative right-5 ${note.completed ? 'warning' : 'succes'} ">
        <a class="cursor-pointer p-3 bg-[#d6df59] rounded-2xl text-[#fff]" data-index="${index}" data-type="toggle">done<a>
        |
        <a class="cursor-pointer" data-index="${index}" data-type="remove">delete<a></button>
        <button class="relative -top-10 right-0"><img src="assets/svg/ic_outline-edit.svg" alt=""></button>
        </div>
    `
}


// 
// const person = {
//     firstName: 'Timur',
//     lastName: 'Kulev',
//     year: 2006,
//     languages: ['ru', 'en', 'ch'],
//     getFullName: function() {
//         console.log(person.firstName,person.lastName)
//         return
//     }
// }
// // console.log(typeof person)

// console.log(person.getFullName())

const notes = [{
    title: 'сходить за водой',
    completed: false,
} ,
{
        title: 'пересказ',
        completed: true,
}
]

function render() {
    listElement.innerHTML = ''
    if (notes.length == 0) {
        listElement.innerHTML = '<h1>Нет заметок</h2>'
    }
    for (let i = 0; i < notes.length; i++) {
    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))

    }


   
}

render()
