const init = () => {
    const tableId = createHtmlObject("table", "div"); //생성된 table.Id 
    let table = document.getElementById(tableId);
    setTableByObject(table, getData())
    table.classList.add(".table")

    return true;
}

const createHtmlObject = (element, containerdiv) => {
    let div = document.getElementById(containerdiv);
    let createHtmlElement = document.createElement(element);
    createHtmlElement.id = `${containerdiv}_${createHtmlElement}`;
    div.appendChild(createHtmlElement);
    return createHtmlElement.id;
}

const getTagName = (name, innerText) => `<${name}>${innerText}</${name}>`
const getTag = (name) => document.createElement(name);

const setTableByObject = (table,ary = []) => {
    
    let thead = getTag("thead");
    let tbody = getTag("tbody");
    let th = getTag("th");
    let tr = getTag("tr");
    let td = getTag("td");

    //head 만드는 부분...
    ary[0].forEach(v => {
        for(let [key,value] of Object.etries(v)){
            th.
        }
    }); 

    ary.forEach()

    ary.forEach((v, i, a) => {
        
    });
}

let getData = () => {
    return [
        {
            name: 'apple',
            price: 1000,
            quntity: 200
        },
        {
            name: 'strawbery',
            price: 150,
            quntity: 300

        },
        {
            name: 'banana',
            price: 500,
            quntity: 300
        },
        {
            name: 'kiwi',
            price: 800,
            quntity: 400
        },
        {
            name: 'orange',
            price: 1000,
            quntity: 300
        },
        {
            name: 'watermelon',
            price: 10000,
            quntity: 20
        },
        {
            name: 'tomato',
            price: 600,
            quntity: 250
        }
    ];
}

init();