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
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(newNote))

    inputElement.value = ''
}

function getNoteTemplate(note) {
    return `
        <div class="flex my-5 justify-center ">
        <li class="w-[907px] py-14 pl-10 pr-80 bg-[#D9D9D9] rounded-2xl ${note.completed ? 'line-through' : ''}  placeholder:text-[#333] placeholder:font-bold transition-all border">${note.title}</li>
        <button class="py-12 px-10 bg-[#C3A28A] rounded-2xl relative right-5 ${note.completed ? 'warning' : 'succes'} ">Deleate</button>
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

    // for (let i = 0; i < notes.length; i++) {
    // listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))

    // }


    for (let note of notes) {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
    }

}

render()
