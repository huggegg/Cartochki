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

const notes = ['записать блок про массивы', 'сходить за водой']

function render() {

    // for (let i = 0; i < notes.length; i++) {
    // listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))

    // }


    for (let note of notes) {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
    }
    
}

render()

createBtn.onclick = function () {
    if (inputElement.value.length == 0) {
        return
    }

        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(inputElement.value))

    inputElement.value = ''
}

function getNoteTemplate(title) {
    return `
        <div class="flex my-5 justify-center ">
        <li  class="w-[907px] py-14 pl-10 pr-80 bg-[#D9D9D9] rounded-2xl placeholder:text-[#333] placeholder:font-bold transition-all border">${title}</li>
        <button class="py-12 px-10 bg-[#C3A28A] rounded-2xl relative right-5">Deleate</button>
        <button class="relative -top-10 right-0"><img src="assets/svg/ic_outline-edit.svg" alt=""></button>
        </div>
    `
}


// 
const person = {}
console.log(typeof person)