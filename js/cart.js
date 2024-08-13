
let qu
function getCart(){
    // console.log(localStorage.length);
    str=``;
    for(i=0;i<localStorage.length;i++){
        const key=localStorage.key(i);
        // console.log(key);
        const value=JSON.parse(localStorage.getItem(key));
        // console.log(value);
        str+=`<div class="cart">
                <div class="imge">
                    <img src="../img/c22c9fc4-0555-4460-8401-bf5c28d7ba29.webp" alt="">
                </div>
                <div class="content">
                    <h4>${value.title}</h4>
                    <h3>${value.price}</h3>
                    <p>${value.description}</p>
                    <p>Quantity</p>
                    <p>
                        <span class="qnty" onclick="minus()"><img src="../img/remove_16dp_FFFFFF_FILL0_wght400_GRAD0_opsz20.png" alt=""></span>
                        <span class="txt">1</span>
                        <span class="qnty" onclick="javascript:alert('event has been triggered');"><img src="../img/add_16dp_FFFFFF_FILL0_wght400_GRAD0_opsz20.png" alt=""></span>
                    </p>
                </div>           
                <div class="bun">
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
function minus(){

}
