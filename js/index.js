const main = document.getElementById('main');
const searchButton = () => {
    const input = document.getElementById('input-value')
    const errorMessege = document.getElementById('error');
    inputText = input.value;
    input.value = '';

    if (inputText.length > 0) {
        // main.innerHTML = '';
        errorMessege.innerText = "Sorry not available "


    }

    else {

        const url = `https://openapi.programming-hero.com/api/phones?search=${inputText}`

        fetch(url)
            .then(res => res.json())
            .then(data => phoneDisplay(data.data))
    }
}
// for (const phone of info) 
const phoneDisplay = info => {
    console.log(info);
    info.forEach(phone => {
        console.log(phone.slug);
        const div = document.createElement('div')
        div.className = ('col col-lg-4');
        div.className = ('mb-5');
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
  <img src="${phone.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${phone.phone_name}</h5>
    <h4 class='card-title'>${phone.brand}</h4>
    <button onclick="phoneDetails('${phone.slug}')" class="btn btn-primary">See Details</button>
  </div>
</div>
        `;
        main.appendChild(div)
    })

}


const phoneDetails = id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.data[0]))
}

