fetch("https://raw.githubusercontent.com/siraly1636/siraly1636.github.io/main/elefant/assets/json/elefant.json")
.then(x => x.json())
.then(y => elefantJson(y));

function elefantJson(adatok){
    //console.log(adatok);

    var sz="";
    for (elem of adatok){
        sz+="<div class='col-sm-4 text-center box'><h4 class='elefant-neve'>"+elem.name+"</h4>";
        sz+="<a target='_blank' href='"+elem.image+"'><img src='"+elem.image+"' class='img-size'></a>";
        sz+="<p class='link'><a target='_blank' href='"+elem.wikilink+"'>Wiki</a></p></div>" 
    }
    document.getElementById("elefantok").innerHTML=sz;
}