/**
 * Created by Suraj on 03/16/2017.
 */


document.addEventListener('DOMContentLoaded', function(){

    document.getElementById("fn").innerHTML             = localStorage.getItem("fn2");
    document.getElementById("ln").innerHTML             = localStorage.getItem("ln2");

    document.getElementById("prodImg").src              = localStorage.getItem("prodImg");
    document.getElementById("pProdInfoID").innerHTML    = localStorage.getItem("pProdInfoID");
    document.getElementById("pProdInfoDesc").innerHTML  = localStorage.getItem("pProdInfoDesc");
    document.getElementById("pProdInfoPrice").innerHTML = localStorage.getItem("pProdInfoPrice");
    document.getElementById("pProdInfoStock").innerHTML = localStorage.getItem("pProdInfoStock");
    document.getElementById("pShipInfo").innerHTML      = localStorage.getItem("pShipInfo");
    document.getElementById("fNameID2").innerHTML       = localStorage.getItem("fn2");
    document.getElementById("lNameID2").innerHTML       = localStorage.getItem("ln2");
    document.getElementById("emailID2").innerHTML       = localStorage.getItem("email2");
    document.getElementById("add1ID2").innerHTML        = localStorage.getItem("add12");
    document.getElementById("add2ID2").innerHTML        = localStorage.getItem("add22");
    document.getElementById("cityID2").innerHTML        = localStorage.getItem("city2");
    document.getElementById("zipID2").innerHTML         = localStorage.getItem("zip2");
    document.getElementById("countryID2").innerHTML     = localStorage.getItem("country2");
    document.getElementById("stateID2").innerHTML       = localStorage.getItem("state2");
    document.getElementById("phoneID2").innerHTML       = localStorage.getItem("phone2");

    document.getElementById("btnGoBack").addEventListener('click',function () {
        window.location.href = "./index.html";
    })

});