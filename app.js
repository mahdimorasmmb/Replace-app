const finde = () => {
    const SearchInput = document.querySelector("#SearchInput")
    const Text = document.querySelector("#text");
    let result= []
    let strSearch;
    if(SearchInput.value){
        strSearch = SearchInput.value;
    } else {
        alert("Please enter a search term")
    }
    let reg  = new RegExp(`${strSearch}`,"gi")
    Text.innerHTML = Text.innerHTML.replace(reg,`<mark>${strSearch}</mark>`)
    
    
    
    

}