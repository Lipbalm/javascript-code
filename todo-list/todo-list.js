const getTagNm = (text, name) => `<${name}>${text}</${name}>`;
const htmlBody = document.querySelector("body");

const createAddList = (item) => {
    let innerDiv = document.createElement("div");
    let textli = document.createElement("li");
    let completeButton = document.createElement("button");
    let deleteButton = document.createElement("button");
    let checkBox  = createInput("checkBox",`${item}_checkBox`);

    innerDiv.classList.add("item_div");
    textli.innerText = item;
    completeButton.innerText = "Complete";
    deleteButton.innerText = "Delete";

    innerDiv.appendChild(checkBox);
    innerDiv.appendChild(textli);
    innerDiv.appendChild(completeButton);
    innerDiv.appendChild(deleteButton);

    return innerDiv;
};
const createInput = (type, id) =>{
    let res = document.createElement("input");
    res.id = id;
    res.setAttribute("type",type);
    return res;
};

const submitTodoItem = (event) =>{
    console.log(event.prototype);
};

const init = () =>{
    let docfrag = document.createDocumentFragment();
    let inputText = createInput("input", "inputBox");
    docfrag.appendChild(inputText);
    inputText.addEventListener("submit",submitTodoItem);
    
    // for(var i = 1;  i <=10; i++){
    //     docfrag.appendChild(createAddList(`item_${i}`));
    // }
    // htmlBody.appendChild(docfrag);
};

init();