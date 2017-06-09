 /**
 * Created by Suraj on 03/09/2017.
 */

document.getElementById("purchaseForm").addEventListener("submit",function () {
    var rv =    document.getElementById("reviewDivID");
    var pd =    document.getElementById("purchaseDivID");

    var fn  =   document.getElementById("fNameID");
    var ln  =   document.getElementById("lNameID");
    var email = document.getElementById("emailID");
    var add1 =  document.getElementById("add1ID");
    var add2 =  document.getElementById("add2ID");
    var city =  document.getElementById("cityID");
    var zip =   document.getElementById("zipID");
    var country= document.getElementById("countryID");
    var state = document.getElementById("stateID");
    var phone = document.getElementById("phoneID");



    var fn2 =   document.getElementById("fNameID2");
    var ln2 =   document.getElementById("lNameID2");
    var email2= document.getElementById("emailID2");
    var add12 = document.getElementById("add1ID2");
    var add22 = document.getElementById("add2ID2");
    var city2 = document.getElementById("cityID2");
    var zip2 =  document.getElementById("zipID2");
    var country2 = document.getElementById("countryID2");
    var state2 = document.getElementById("stateID2");
    var phone2 = document.getElementById("phoneID2");

    /* fetching the display property of reviewDivID */
    let rvDisplay = window.getComputedStyle(
        rv
    ).getPropertyValue("display");

    if(rvDisplay == "none"){
        rv.style.display = "block";
    }

    fn2.innerHTML       =   fn.value;
    ln2.innerHTML       =   ln.value;
    email2.innerHTML    =   email.value;
    add12.innerHTML     =   add1.value;
    add22.innerHTML     =   add2.value;
    city2.innerHTML     =   city.value;
    zip2.innerHTML      =   zip.value;
    country2.innerHTML  =   country.value;
    state2.innerHTML    =   state.value;
    phone2.innerHTML    =   phone.value;

    let pdivDisplay = window.getComputedStyle(pd).getPropertyValue("display");
    if(pdivDisplay == "block"){
        pd.style.display = "none";
    }

});

document.getElementById("editBtnID").addEventListener("click",function () {

    var pd =    document.getElementById("purchaseDivID");

    let pdivDisplay = window.getComputedStyle(pd).getPropertyValue("display");
    if(pdivDisplay == "none"){
        pd.style.display = "block";
    }

});

 document.getElementById("btnBuyID").addEventListener("click",function () {

     localStorage.setItem("fn2", fNameID2.innerHTML );
     localStorage.setItem("ln2", lNameID2.innerHTML );
     localStorage.setItem("email2", emailID2.innerHTML );
     localStorage.setItem("add12", add1ID2.innerHTML );
     localStorage.setItem("add22", add2ID2.innerHTML );
     localStorage.setItem("city2", cityID2.innerHTML );
     localStorage.setItem("zip2", zipID2.innerHTML );
     localStorage.setItem("country2", countryID2.innerHTML );
     localStorage.setItem("state2", stateID2.innerHTML );
     localStorage.setItem("phone2", phoneID2.innerHTML );

     window.location.href = "./confirm.html";

 });