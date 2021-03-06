/* initial error handler */
document.getElementById('error').style.display = 'none'
const main = document.getElementById('main');
const searchButton = () => {
    const input = document.getElementById('input-value')
    const errorMessege = document.getElementById('error');
    inputText = input.value;
    input.value = '';
    /* Error handler */
    if (parseFloat(inputText) < 0) {

        errorMessege.innerText = "Sorry not available ";
        input.value = '';
        main.innerHTML = '';


    }

    else {
        main.innerHTML = '';

        /* phone search url */
        const url = `https://openapi.programming-hero.com/api/phones?search=${inputText}`

        fetch(url)
            .then(res => res.json())
            .then(data => phoneDisplay(data.data.slice(0, 20)))
    }
}
// for (const phone of info) 
const phoneDisplay = info => {
    console.log(info);
    /* error handler */
    if (info.length == 0) {
        document.getElementById('error').style.display = 'block'


    }



    info.forEach(phone => {
        document.getElementById('error').style.display = 'none'
        // console.log(phone.slug);
        const div = document.createElement('div');
        div.className = ('col-lg-4 mb-5');

        div.innerHTML = `
        <div class="card" style="width: 18rem;">
  <img src="${phone.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${phone.phone_name}</h5>
    <h4 class='card-title'>${phone.brand}</h4>
    <button onclick="phoneDetails('${phone.slug}')" class="btn btn-warning">See Details</button>
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
        .then(data => displayPhoneDetails(data.data))


}


const displayPhoneDetails = data => {
    console.log(data);
    const rate = () => {
        const newName = data.mainFeatures.sensors.map(sensor => sensor)
        return newName;
    }




    const onePhone = document.getElementById('one-phone');
    const div = document.createElement('div');
    main.innerHTML = '';
    div.classList.add('card');
    div.innerHTML = `
        <div class=" bg-dark">
      <img src="${data.image}" class="card-img-top w-50" alt="...">
      <div class="card-body">
        <h5 class="card-title">Phone-name: ${data.name}</h5>
        <p class="card-title">Brand: ${data.brand}</p>
        <p class="card-text">Relase: ${data.releaseDate}</p>
        <p class="card-text">Slug: ${data.slug}</p>        
        <p class="card-text">Storage: ${data.mainFeatures.storage}</p>        
        <p class="card-text">Chipset: ${data.mainFeatures.chipSet}</p>        
        <p class="card-text">Display: ${data.mainFeatures.displaySize}</p>
        <p class="card-text">Sensor: ${data.mainFeatures.sensors}</p>
       
        
        <p>${rate()}</p>
        <a href="https://www.applegadgetsbd.com/" class="btn btn-danger">Buy Now</a>
      </div>
      </div>


        `;
    onePhone.appendChild(div);






    // !!!....THE END....!!!

}
