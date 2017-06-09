/**
 * Created by Suraj on 03/13/2017.
 */
var i = 0;
var guitar = [];

document.addEventListener('DOMContentLoaded', function () {

    var prodImg         =   document.getElementById("prodImg");
    var pProdInfoID     =   document.getElementById("pProdInfoID");
    var pProdInfoDesc   =   document.getElementById("pProdInfoDesc");
    var pProdInfoPrice  =   document.getElementById("pProdInfoPrice");
    var pProdInfoStock  =   document.getElementById("pProdInfoStock");
    var pShipInfo       =   document.getElementById("pShipInfo");
    var pShipReview     =   document.getElementById("pShipReview");

    var ajx = new XMLHttpRequest();

    ajx.open('GET','./guitardata.json',true);
    ajx.send();
    ajx.onreadystatechange = function() {

        if (ajx.readyState === 4 && ajx.status === 200){

            jsonObj = JSON.parse(ajx.responseText);
            guitar = jsonObj.allProducts;

            data(i);

        } /*else {
         divID.innerHTML = 'An error occurred during your request: ' +  ajx.status + ' ' + ajx.statusText;
         }*/
    };


    function data(i) {

        prodImg.src              =   guitar[i].image_path;
        pProdInfoID.innerHTML    =   guitar[i].product_id;
        pProdInfoDesc.innerHTML  =   guitar[i].product_description;
        pProdInfoPrice.innerHTML =   guitar[i].price;
        pProdInfoStock.innerHTML =   guitar[i].no_of_items;
        pShipInfo.innerHTML      =   guitar[i].shipping_details;
        pShipReview.innerHTML    =   guitar[i].customer_reviews;

    }

    document.getElementById("prevBtn").addEventListener('click',function () {

        if ( i > 0 ){
            i--;
        }else{
            i = guitar.length - 1;
        }

        data(i);

    });

    document.getElementById("nextBtn").addEventListener('click',function () {

        if ( i < guitar.length - 1 ){
            i++;
        }else{
            i = 0;
        }

        data(i);

    });

    document.getElementById("btnBuyID").addEventListener('click', function () {

        localStorage.setItem("prodImg", guitar[i].image_path);
        localStorage.setItem("pProdInfoID", guitar[i].product_id);
        localStorage.setItem("pProdInfoDesc", guitar[i].product_description);
        localStorage.setItem("pProdInfoPrice", guitar[i].price);
        localStorage.setItem("pProdInfoStock", guitar[i].no_of_items);
        localStorage.setItem("pShipInfo", guitar[i].shipping_details);
        localStorage.setItem("pShipReview", guitar[i].customer_reviews);

        window.location.href = "./details.html";

    });


});
