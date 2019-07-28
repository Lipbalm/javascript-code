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
const getTotalPrice = (q, p) => q * p
//Number(input).toLocaleString('지역') 인자로 들어온 지역 값에 따른 숫자 표기 방식을 적용하여, 문자열로 반환하는 역할 date 표기 시에도 사용 가능.
const getCurrencyUnit = (input) => input === "" ? "" : Number(input).toLocaleString('en')

const setTableByObject = (table, ary = []) => {
    let combineBody = [];
    let combineHead = [];
    let headIdx = 0;

    //head 만드는 부분...
    for (let [key, value] of Object.entries(ary[0].product)) {
        let th = ""
        combineHead[headIdx] = getTagName("th", key)
        headIdx +=1
    }
    combineHead[headIdx + 1] = getTagName("th", "Total Price");

    //body 만드는 부분...
    ary.forEach((v, i) => {
        const { name, price, quntity } = v.product
        let td = ""
        td = `${td}${getTagName("td", name)}`;
        td = `${td}${getTagName("td", quntity)}`;
        td = `${td}${getTagName("td", getCurrencyUnit(price))}`;
        td = `${td}${getTagName("td", getCurrencyUnit(getTotalPrice(quntity, price)))}`

        combineBody[i] = getTagName("tr", td);
    });

    table.innerHTML = getTagName("thead", combineHead.reduce((av, cv) => av + cv )) + getTagName("tbody", combineBody.reduce((av, cv) => av + cv ));
}

let getData = () => {
    return [
        {
            product: {
                name: 'apple',
                price: 1000,
                quntity: 200
            }
        },
        {
            product: {
                name: 'strawbery',
                price: 150,
                quntity: 300
            }
        },
        {
            product: {
                name: 'banana',
                price: 500,
                quntity: 300
            }
        },
        {
            product: {
                name: 'kiwi',
                price: 800,
                quntity: 400
            }
        },
        {
            product: {
                name: 'orange',
                price: 1000,
                quntity: 300
            }
        },
        {
            product: {
                name: 'watermelon',
                price: 10000,
                quntity: 20
            }
        },
        {
            product: {
                name: 'tomato',
                price: 600,
                quntity: 250
            }
        }
    ];
}

init();