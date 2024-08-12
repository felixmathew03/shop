
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
    document.getElementById("h2a").innerHTML=`${product.title}`
    document.getElementById("pa").innerHTML=`${product.description}`
    document.getElementById("h3a").innerHTML=`Category: ${product.category}`
    document.getElementById("price").innerHTML=`<h3 >$${product.price}</h3> <h4 ><strike>${product.discountPercentage}</strike>%off</h4>`
    document.getElementById("pb").innerHTML=`<span class="r">Rating: ${product.rating}</span><br><br>Stock: ${product.stock}<br><br> Availibility: <span class="avail">${product.availabilityStatus}</span>`
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