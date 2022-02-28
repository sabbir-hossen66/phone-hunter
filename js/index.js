
const searchButton = () => {
    const input = document.getElementById('input-value')
    inputText = input.value;
    input.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchButton}`

    fetch(url)
        .then(res => res.json())
        .then(data => allPhones(data.data))
}

const allPhones = info => {
    const phoneContainer = document.getElementById('phone-container')
    console.log(phoneContainer);
    phoneContainer.textContent = '';

    // show error messege..
    if (info.length === 0) {
        const errorMessege = document.getElementById('error');
        errorMessege.innerText = "Sorry not available "
    }

}