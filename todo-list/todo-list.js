const getTagNm = (text, name) => `<${name}>${text}</${name}>` 
const div = document.querySelector("div");
const createAddList = (item) => {
    let res = '';
    res = [
         getTagNm(item,"li"),
         getTagNm("Complete","button"),
         getTagNm("Delete", "button")
    ].join('');

    return getTagNm(res,"div");
}

const init = () =>{
    let itemlist = [];
    for(var i = 1;  i <=10; i++){
        itemlist.push(createAddList(`item_${i}`));
    }
    div.innerHTML = itemlist.reduce((av, cv) => av + cv);
}

init();