let totalItemList = [];
//const getTagNm = (text, name) => `<${name}>${text}</${name}>`;
const getObj = (k, v, f) => {
    return { itemObj: { key: k, value: v, fin: f } };
};
const getHtmlObjKey = obj => obj.id.split("_")[1];
const addData = (list, k, v) => list.push(getObj(k, v, "n"));

const getChildElementById = (parent, tofind) => {
    for (let i = 0; i <= parent.children.length; i++) {
        if (parent.children[i].id === tofind) {
            return parent.children[i];
        }
    }
};

const getMaxKey = (list = []) => {
    let res = 0;
    list.forEach(v => {
        if (v.itemObj.key > res) {
            res = v.itemObj.key;
        }
    });
    return res;
};
const getAllStorage = (list = []) => {
    const keys = Object.keys(localStorage);
    let obj;
    keys.forEach(k => {
        obj = JSON.parse(localStorage.getItem(k));
        const { key, value, fin } = obj.itemObj;
        //list.push(getObj(Number(k) ,)); //type string -> number;
        list.push(getObj(key, value, fin));
    });
    return list;
};
const createItem = (key, value, fin) => {
    let innerDiv = createDiv(`div_${key}`, "item_div");
    let itemli = document.createElement("li");
    let finishButton = document.createElement("button");
    let deleteButton = document.createElement("button");

    //set Id
    let checkBox = createInputBox("checkBox", `checkBox_${key}`);
    itemli.id = `li_${key}`;
    finishButton.id = `finishBtn_${key}`;
    deleteButton.id = `deleteBtn_${key}`;

    itemli.innerText = value;

    if (fin === "f") {
        itemli.classList.add("finish");
    }

    finishButton.innerText = "완료";
    deleteButton.innerText = "삭제";

    //add button event
    finishButton.addEventListener("click", finishTodo);
    deleteButton.addEventListener("click", deleteTodo);

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
    return div;
};

const createInputBox = (type, id) => {
    let res = document.createElement("input");
    res.id = id;
    res.setAttribute("type", type);
    return res;
};

const addItem = event => {
    if (event.keyCode === 13) {
        let inputBox = document.getElementById("inputBox");

        if (inputBox.value !== "") {
            let mainDiv = document.getElementById("main_div");
            const maxKey = getMaxKey(totalItemList) + 1; //new SeqNo
            const currentItem = createItem(maxKey, inputBox.value, "n");
            //appendHtml(currentItem);
            addData(totalItemList, maxKey, inputBox.value);

            if (mainDiv.firstChild === null) {
                mainDiv.appendChild(currentItem);
            } else {
                mainDiv.insertBefore(currentItem, mainDiv.firstChild);
            }
            inputBox.value = "";
        }
    }
};

const appendHtml = htmlObj => {
    const htmlBody = document.querySelector("body");
    let docfrag = document.createDocumentFragment();
    docfrag.appendChild(htmlObj);
    htmlBody.appendChild(docfrag);
};

const init = () => {
    let inputBox = createInputBox("input", "inputBox");
    let mainDiv = createDiv("main_div", "main_div");
    let submission = document.createElement("button");

    //enter
    inputBox.addEventListener("keypress", addItem);
    appendHtml(inputBox);

    //submit
    submission.innerText = "저장";
    submission.id = "submission";
    submission.addEventListener("click", submitData);
    appendHtml(submission);

    totalItemList = getAllStorage(totalItemList);
    totalItemList.forEach(v => {
        const { key, value, fin } = v.itemObj;
        mainDiv.appendChild(createItem(key, value, fin));
    });
    appendHtml(mainDiv);
};

//finish click
const finishTodo = event => {
    const itemKey = Number(getHtmlObjKey(event.srcElement));
    const mainDiv = document.getElementById("main_div");
    let selectionli = getChildElementById(
        getChildElementById(mainDiv, `div_${itemKey}`),
        `li_${itemKey}`
    );

    //insert line to repli...
    if (selectionli.classList.contains("finish")) {
        selectionli.classList.remove("finish");
        totalItemList.forEach(v => {
            if (v.itemObj.key === itemKey) {
                v.itemObj.fin = "n";
            }
        });
    } else {
        selectionli.classList.add("finish");
        totalItemList.forEach(v => {
            if (v.itemObj.key === itemKey) {
                v.itemObj.fin = "f";
            }
        });
    }
};

//delete click
const deleteTodo = event => {
    const itemKey = Number(getHtmlObjKey(event.srcElement));
    const mainDiv = document.getElementById("main_div");
    let selectionDiv = getChildElementById(mainDiv, `div_${itemKey}`);

    selectionDiv.remove();
};

const submitData = () => {
    localStorage.clear();

    totalItemList.forEach(v => {
        localStorage.setItem(v.itemObj.key, JSON.stringify(v));
    });
};

init();
