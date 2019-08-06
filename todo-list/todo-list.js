let totalItemList = [];
const getTagNm = (text, name) => `<${name}>${text}</${name}>`;
const getObj = (k, v) => {return {key : k, value : v}};
const getHtmlObjKey = (obj) => obj.id.split("_")[1];
const getChildElementById = (parent, tofind) =>{
    parent.children.forEach( element => {
       if(v.id === tofind){
           return v;
       } 
    });
};
const addData = (list, k, v) => {
    localStorage.setItem(k,v);
    return list.push(getObj(k,v));
};
const getMaxKey = (list = []) => {
    let res = 0;
    list.forEach(v => {
        if(v.key > res){
            res = v.key;
        }
    })
    return res;
};
const getAllStorage = (list = []) => {
    const keys = Object.keys(localStorage);
    keys.forEach(k => {
        list.push(getObj(Number(k) ,localStorage.getItem(k))); //type string -> number;
    });
    return list;
};
const createItem = (key,item) => {
    let innerDiv = createDiv(`div_${key}`, "item_div");
    let itemli = document.createElement("li");
    let finishButton = document.createElement("button");
    let deleteButton = document.createElement("button");

    //set Id
    let checkBox = createInputBox("checkBox", `checkBox_${key}`);
    itemli.id = `li_${key}`;
    finishButton.id = `finishBtn_${key}`;
    deleteButton.id = `deleteBtn_${key}`;

    itemli.innerText = item;
    finishButton.innerText = "Finish";
    deleteButton.innerText = "Delete";

    //add button event
    finishButton.addEventListener("click",finishTodo);
    deleteButton.addEventListener("click",deleteTodo);

    innerDiv.appendChild(checkBox);
    innerDiv.appendChild(itemli);
    innerDiv.appendChild(finishButton);
    innerDiv.appendChild(deleteButton);

    return innerDiv;
};

const createDiv = (id, attCls) => {
    let div = document.createElement("div");
    div.id = id;
    div.classList.add(attCls);
    return div
};

const createInputBox = (type, id) => {
    let res = document.createElement("input");
    res.id = id;
    res.setAttribute("type", type);
    return res;
};

const addItem = (event) => {
    if (event.keyCode === 13) {
        let inputBox = document.getElementById("inputBox");

        if (inputBox.value !== "") {
            let mainDiv = document.getElementById("main_div");
            const maxKey = getMaxKey(totalItemList) + 1;//new SeqNo
            const currentItem = createItem(maxKey, inputBox.value);
            //appendHtml(currentItem);
            mainDiv.insertBefore(currentItem, mainDiv.firstChild);
            addData(totalItemList, maxKey, inputBox.value);
            inputBox.value = "";
        }
    }
};

const appendHtml = (htmlObj) => {
    const htmlBody = document.querySelector("body");
    let docfrag = document.createDocumentFragment();
    docfrag.appendChild(htmlObj);
    htmlBody.appendChild(docfrag);
};

const init = () => {
    let inputBox = createInputBox("input", "inputBox");
    //let docfrag = document.createDocumentFragment();
    let mainDiv = createDiv("main_div", "main_div");

    //enter  
    inputBox.addEventListener("keypress", addItem);
    appendHtml(inputBox);
 
    //add locaStorage...
    totalItemList = getAllStorage(totalItemList);
    totalItemList.forEach(v => {
        mainDiv.appendChild(createItem(v.key, v.value));
    });
    appendHtml(mainDiv);
};

//finish click
const finishTodo = (event) => {
    const itemKey = getHtmlObjKey(event.srcElement);
    const mainDiv = document.getElementById("main_div");
    const repli =  getChildElementById(getChildElementById(mainDiv, `div_${itemKey}`),`li_${itemKey}`);
    
    //insert <del> to repli...
    
};   

//delete click
const deleteTodo = (event) =>{

};

init();