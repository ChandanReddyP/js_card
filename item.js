let item_1={id:101,
    img:"https://5.imimg.com/data5/ANDROID/Default/2020/8/YO/GL/HR/111346107/product-jpeg.jpg",
    name:"US POLO",
    price:1500,
    qty:1};

let item_2={id:102,
    img:"https://5.imimg.com/data5/ANDROID/Default/2020/8/YO/GL/HR/111346107/product-jpeg.jpg",
    name:"US POLO",
    price:2000,
    qty:2};

let item_3={id:103,
    img:"https://5.imimg.com/data5/ANDROID/Default/2020/8/YO/GL/HR/111346107/product-jpeg.jpg",
    name:"US POLO",
    price:3600,
    qty:2};

let item_4={id:104,
    img:"https://5.imimg.com/data5/ANDROID/Default/2020/8/YO/GL/HR/111346107/product-jpeg.jpg",
    name:"US POLO",
    price:2500,
    qty:2};

let items=[item_1,item_2,item_3,item_4];



function displayProducts(item)
{
    if(items.length>=1)
    {
        let eachItem=``;
        for(let item of items)
        {
            eachItem+=`<div class="col-md-3">
            <div class="card">
                <div class="card-header">
                    <img src="${item.img}" alt="" class="img-fluid">
                </div>
                <div class="card-body text-center">
                    <h3>${item.name}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <h6>${item.price}&#8377;</h6>
                    <i class="fa fa-minus-circle" onclick="decQty(${item.id})"></i>
                    <span id="qty">${item.qty}</span>
                    <i class="fa fa-plus-circle" onclick="incQty(${item.id})"></i><br>
                    <small style="color:limegreen;">
                        Stock Is Available
                    </small>
                </div>
            </div>
        </div>`;
        }
        document.getElementById('display').innerHTML=eachItem;
    }
}
displayProducts(products);