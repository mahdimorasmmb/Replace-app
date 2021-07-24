const replaceInput = document.querySelector("#replaceInput");
const SearchInput = document.querySelector("#SearchInput")
const Text = document.querySelector("#text");


const finde = () => {
    let reg;
    let strSearch;
    let stokText = Text.innerHTML;
    if (SearchInput.value) {
        strSearch = SearchInput.value;
        reg = new RegExp(`${strSearch}`, "gi");
        Text.innerHTML = Text.innerHTML.replace(reg, `<mark>${strSearch}</mark>`);
        if(stokText === Text.innerHTML){
            alert("Not found string")
        } else{
            setTimeout(()=>{
                reg = new RegExp(`<mark>${strSearch}</mark>`, "gi");
                Text.innerHTML = Text.innerHTML.replace(reg,`${strSearch}`)
            },20000)
        }
    } else {
        alert("Please enter a search term")
    }
   
}

const replace = () => {
    let strreplace;
    if (replaceInput.value) {
        strreplace = replaceInput.value
    } else {
        alert("Please enter a replac text")
    }
    Text.innerHTML = Text.innerHTML.replace(reg, strreplace)
}
