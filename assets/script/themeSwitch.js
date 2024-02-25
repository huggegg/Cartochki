export default function switchTheme() {
    const app = document.getElementById('app')


    if (app.classList.contains('dark')) {
        app.classList.remove('dark')
    }
    else {
        app.classList.add('dark')
    }
}