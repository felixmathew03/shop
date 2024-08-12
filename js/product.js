
let product;
async function fetchProduct(){
    const urlParams=new URLSearchParams(window.location.search)
    id=urlParams.get("id");
    const res=await fetch(`https://dummyjson.com/products/${id}`);
    product=await res.json();
    document.getElementById("img").src=product.thumbnail;
    str1=``;
    product.images.map((i)=>{
        str1+=`<img onmouseover="changeImage('${i}')" src="${i}" alt="" >`;
    })
    document.getElementById("pdl1").innerHTML=str1;
    document.getElementById("h2a").innerHTML=`<span class="title">${product.title}</span><span class="categ">(${product.category})</span>`
    document.getElementById("pa").innerHTML=`<span class="r">${product.rating}<img src="../img/star_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png" alt=""></span>${product.description}`
    cost=product.price-(product.price*product.discountPercentage/100);
    c=cost.toString();
    
    document.getElementById("price").innerHTML=`<h2 class="p1">$${c.substring(0,5)}</h2> <h3 class="p2"><strike>$${product.price}</strike></h3>`
    document.getElementById("pb").innerHTML=`Stock: ${product.stock}<br><br> Availibility: <span class="avail">${product.availabilityStatus}</span>`
    document.getElementById("det").innerHTML=`
                                        <p><b>Brand: </b>${product.brand}</p>
                                        <p><b>sku: </b>${product.sku}</p>
                                        <p><b>Warranty Information: </b>${product.warrantyInformation}</p>
                                        <p><b>Shipping Information: </b>${product.shippingInformation}</p>`
    str=``
    product.reviews.map((i)=>{
        str+=`<div class="review">
                    <p><b>${i.reviewerName}</b>:${i.comment}</p>
                </div>`
    })
    document.getElementById("rev").innerHTML=str;
    document.getElementById("pc").innerHTML=`<p > <b>Return Policy:</b>${product.returnPolicy}</p>
    <p><b>Minimum Order Quantity</b>${product.minimumOrderQuantity}</p>`;
    document.getElementById("img2").src=`${product.meta.qrCode}`
    document.getElementById
} 
fetchProduct();
function changeImage(img){
    document.getElementById("img").src=img;
}
function addToCart(){
    // console.log(product)
    localStorage.setItem(product.id,JSON.stringify(product));
    window.location.href="../html/cart.html";
}