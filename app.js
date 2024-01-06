const btn = document.getElementById("btn")
let name = document.getElementById("name")
let price = document.getElementById("price")
let model = document.getElementById("model")
let col = document.querySelector(".col-2")
let btns = document.querySelectorAll("button")

btn.addEventListener("click", e=>{
    e.preventDefault()
    sendData()
})


function sendData(){
    productData = {
        productModel : model.value,
        productPrice : price.value,
    }

    fetch('https://infinityshop-1-default-rtdb.firebaseio.com/products.json', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(productData)
    })
    .then(res => {
       alert("عملیات با موفقیت انجام شد");
        clearData()
    })
    .catch(err => alert(err))

   
}

function clearData(){
    price.value = ""
}


