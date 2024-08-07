const shoppingList = [
    {
        "name": "sugar",
        "price": 45.90,
        "image": "https://imgs.search.brave.com/yNG1jbwaHmoyOGNp1X20u1dXVvX1PcPIQgVkrran2Fk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saDMu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL0xw/WWpxNlJRT3dNMGVX/UHNCNmxzRENOckJL/UnZxNC0zdmJacXlw/Vnh0Sk4yZTV3Wklf/YWNpUHl2SjRvQlFD/cS10bVVmSVU3S2xT/Y1dxWmJiM25hYXZE/MkNEbzU3eXlwRHVX/Y2dRSmhzPXM3NTA",
        "purchased": false
    },
    {
        "name": "Tea",
        "price": 250,
        "image": "https://imgs.search.brave.com/fOvWAT__fFR7SrgcNYdC_BLsIrwkxjmTb3ABLbDiVgQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxQlZsQWZ1WE1M/LmpwZw",
        "purchased": false
    }
]

display();


function display() {
    let div_for_items = document.getElementById('card-list');

    div_for_items.innerHTML = '';

    shoppingList.forEach((el, index) => {
        div_for_items.innerHTML += `
    
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img class="rounded-t-lg" src="${el.image}" alt="item image" />
    <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${el.name}</h5>
        <p  id="card-p-${index}" class="mb-3 font-normal text-white dark:text-gray-400 bg-blue-500 text-center w-1/2 rounded">Price: ${el.price}</p>
        <button id="card-button-${index}" onclick="mark_purchased(${index})" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Mark Purchased
        </button>
    </div>
</div>

    
    `
    })
}



function addItem(event) {
    event.preventDefault();

    let itemname = document.getElementById('name').value;
    let itemprice = parseInt(document.getElementById('price').value);
    let itemimage = document.getElementById('image').value;

    let newItem = {
        name: itemname,
        price: itemprice,
        image: itemimage
    }

    shoppingList.push(newItem);

    display();

    // Clear the input fields for another input
    document.getElementById('myform').reset();


}


function mark_purchased(index) {
    shoppingList[index].purchased = true;


    let card_body = document.getElementById(`card-p-${index}`);
    card_body.style = `
        background-color: red;
    `
    let btn = document.getElementById(`card-button-${index}`);

    btn.style.backgroundColor = "red";
    btn.innerText = 'Purchased';


}
