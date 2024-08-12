function getCart(){
    // console.log(localStorage.length);
    str=``;
    for(i=0;i<localStorage.length;i++){
        const key=localStorage.key(i);
        // console.log(key);
        const value=JSON.parse(localStorage.getItem(key));
        // console.log(value);
        str+=`<div class="cart">
            <div class="img">
                <img src="${value.thumbnail}" alt="">
            </div>
            <h2>${value.title}</h2>
            <div class="btn">
                <button onclick="removeCart('${value.id}')">Remove</button>
            </div>
        </div>`
    }
    document.getElementById("carts").innerHTML=str;
    document.getElementById("count").innerHTML=`${localStorage.length}`
}
getCart();
function removeCart(id){
    // console.log(id);
    localStorage.removeItem(id);
    getCart();
}
