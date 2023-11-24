document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('wow').addEventListener('click', async() => {
        let response = await fetch('https://localhost:3000');
        console.log(response);
    })






})