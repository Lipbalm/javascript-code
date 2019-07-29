const init = () => {
    const tableId = createHtmlObject('table', 'div'); //생성된 table.Id
    let table = document.getElementById(tableId);
    setTableByObject(table, getData());
    table.classList.add('.table');
    return true;
};

const createHtmlObject = (element, containerdiv) => {
    let div = document.getElementById(containerdiv);
    let createHtmlElement = document.createElement(element);
    createHtmlElement.id = `${containerdiv}_${createHtmlElement}`;
    div.appendChild(createHtmlElement);
    return createHtmlElement.id;
};

const getTagName = (name, innerText) => `<${name}>${innerText}</${name}>`;
const getTotalPrice = (q, p) => q * p;
const getCurrencyUnit = input =>
    input === '' ? '' : Number(input).toLocaleString('en');

const setTableByObject = (table, ary = []) => {
    let combineBody = [];
    let combineHead = [];
    let headIdx = 0;

    for (let [key] of Object.entries(ary[0].product)) {
        combineHead[headIdx] = getTagName('th', key);
        headIdx += 1;
    }

    combineHead[headIdx + 1] = getTagName('th', 'Total Price');

    ary.forEach((v, i) => {
        const { name, price, quntity } = v.product;
        let res = '';
        res = [
            getTagName('td', name),
            getTagName('td', quntity),
            getTagName('td', getCurrencyUnit(price)),
            getTagName('td', getCurrencyUnit(getTotalPrice(quntity, price)))
        ].join('');
        combineBody[i] = getTagName('tr', res);
    });

    table.innerHTML =
        getTagName('thead', combineHead.reduce((av, cv) => av + cv)) +
        getTagName('tbody', combineBody.reduce((av, cv) => av + cv));
};

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
};

init();
