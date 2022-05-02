// Ude Import export (MANDATORY)
import {navbar} from "../components/navbar.js";
var div=document.querySelector("#navbar");
div.innerHTML=navbar();

document.querySelector("#search_input").addEventListener("keypress",search);

function search(e){
    
    if(e.key==="Enter")
    {
        
        window.location.href="search.html"
        searchNews();
    }
}


 async function searchNews(){
    var query=document.querySelector("#search_input").value

    const url=`https://masai-mock-api.herokuapp.com/news?q=${query}`

      var res=await fetch(url);
      var data= await res.json();
      console.log(data)

      localStorage.setItem("news",JSON.stringify(data.articles));
           
       

    // console.log(data)
}
