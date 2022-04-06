window.addEventListener("load",init);
function init(){
    let szamok = document.getElementById("szamok");
    var szam = "";
    var kszam = 0;
    for (let index = 0; index < 10; index++) {
    szam += "<button>"
    szam += index
    szam += "</button>"    
    }
    document.getElementById("szamok").innerHTML = szam;
    const szamok_tomb = document.querySelectorAll(".szamok button")
    for (let index = 0; index < szamok_tomb.length; index++) {
        szamok_tomb[index].addEventListener("click",function(){
            console.log(event.target.innerHTML)
            document.getElementById("kijelzo").innerHTML = event.target.innerHTML
        })
        
    }
   
    

}
