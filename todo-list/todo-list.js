const getTagNm = (text, name) => `<${name}>${text}</${name}>`;
let totalItemList = [];

const getMaxKey = (list = []) => {
    let res = 1;
    for(let i = 0;  i <= list.length - 1; i++){
        if(list[i].key >= res){
            res += 1;
        }
    }
    return res;
};

const addItemData = (list = [], value) => {
    let data = { key: getMaxKey(list), value: value };
    list.push(data);
};

const createAddList = (item) => {
    let innerDiv = document.createElement("div");
    let itemli = document.createElement("li");
    let completeButton = document.createElement("button");
    let deleteButton = document.createElement("button");
    let checkBox = createInput("checkBox", `${item}_checkBox`);

    innerDiv.classList.add("item_div");
    itemli.innerText = item;
    completeButton.innerText = "Complete";
    deleteButton.innerText = "Delete";

    innerDiv.appendChild(checkBox);
    innerDiv.appendChild(itemli);
    innerDiv.appendChild(completeButton);
    innerDiv.appendChild(deleteButton);

    return innerDiv;
};
const createInput = (type, id) => {
    let res = document.createElement("input");
    res.id = id;
    res.setAttribute("type", type);
    return res;
};

const addItem = (event) => {
    if (event.keyCode === 13) {
        let inputBox = document.getElementById("inputBox");

        if (inputBox.value !== "") {
            const currentItem = createAddList(inputBox.value);
            addHtmlObject(currentItem);
            addItemData(totalItemList, inputBox.value);
            inputBox.value = "";
        }
    }
};

const addHtmlObject = (htmlObj) => {
    const htmlBody = document.querySelector("body");
    let docfrag = document.createDocumentFragment();
    docfrag.appendChild(htmlObj);
    htmlBody.appendChild(docfrag);
};

const init = () => {
    let inputBox = createInput("input", "inputBox");
    inputBox.addEventListener("keypress", addItem);
    addHtmlObject(inputBox);
    //add locaStorage data...
    // for(var i = 1;  i <=10; i++){
    //     docfrag.appendChild(createAddList(`item_${i}`));
    // }
};

init();