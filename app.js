const replaceInput = document.querySelector("#replaceInput");
const SearchInput = document.querySelector("#SearchInput")
const Text = document.querySelector("#text");
let result= []
let reg 

const finde = () => {
   
    let strSearch;
    if(SearchInput.value){
        strSearch = SearchInput.value;
    } else {
        alert("Please enter a search term")
    }
    reg = new RegExp(`${strSearch}`,"gi")
    Text.innerHTML = Text.innerHTML.replace(reg,`<mark>${strSearch}</mark>`)
    
}

const replace =() => { 
    let strreplace ;
    if(replaceInput.value){
        strreplace = replaceInput.value
    } else {
        alert("Please enter a replac text")
    }
    Text.innerHTML = Text.innerHTML.replace(reg,strreplace)
}
