// Ude Import export (MANDATORY)
import {navbar} from "../components/navbar.js";
var div=document.querySelector("#navbar");
div.innerHTML=navbar();
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


var data=JSON.parse(localStorage.getItem("news"));

if(data != undefined){
  append(data);
}



document.querySelector("#search_input").addEventListener("keypress",search);

function search(e){
    
    if(e.key==="Enter")
    {
        
        // window.location.href="search.html"
        searchNews();
    }
}


 async function searchNews(){
    var query=document.querySelector("#search_input").value

    const url=`https://masai-mock-api.herokuapp.com/news?q=${query}`

      var res=await fetch(url);
      var data= await res.json();
      append(data.articles);

      localStorage.setItem("news",JSON.stringify(data.articles));
           
       

    // console.log(data)
}

function append(data){
    document.querySelector("#results").innerHTML=null;
    data.map(function(elem){
        var div1=document.createElement("div");
        div1.style.display="flex;"
        var div2=document.createElement("div");

        var image=document.createElement("img");
           image.src=elem.urlToImage;
           div2.append(image)

           image.style.width="10%";
           image.style.height="40px"

        var name=document.createElement("h3");
        name.innerText=elem.title;

        var para=document.createElement("p");
        para.innerText=elem.description;

        div1.append(div2,name,para);

        document.querySelector("#results").append(div1);


    })
}



// news

