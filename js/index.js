
const searchButton = () => {
    const input = document.getElementById('input-value')
    inputText = input.value;
    input.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchButton}`

    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.data))
}