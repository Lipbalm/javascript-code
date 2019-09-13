let items = [];
let elements = [];

const regexp = {
    setPattern: (pattern) => new RegExp(pattern)
    , isMatch: (pattern, value) => {
        return regexp.setPattern(pattern).test(value);
    }
    , Replace: (value, pattern, replacement) => {
        return regexp.setPattern(pattern).replace(value, replacement);
    }
    , MatchCollection: (pattern, value) => {
        return regexp.setPattern(pattern).exec(value);
    }
}
const mngElem = {
    getTags: (tag) => `<${tag}></${tag}>`
    , getAttrRegex: (param) => `${param} = \"[a-zA-Z0-9_ ]*\"`
    , addAttr: (item, attrName, value) => {
        let matValue;
        if (regexp.isMatch(attrName, item)) {
            matValue = regexp.MatchCollection(getAttrRegex(attrName), item)[0];
            return regexp.Replace(item, matValue, `${matValue} ${value}`);
        } else {
            return `${item} ${attrName} = "${value}"`
        }
    }
    , removeAttr: (item, attrName, value) => {
        let matValue;
        matValue = regexp.MatchCollection(getAttrRegex(attrName), item)[0];
        return regexp.replace(item, matValue, regexp.replace(matValue, value, ''));
    }
    , addHtml: (...list) => {

    }
}

const mngItems = {
    getItems: () => {
        const keys = Object.keys(localStorage);
        items = [];
        keys.forEach(k => {
            items.push(JSON.parse(localStorage.getItem(k)));
        });
        return items;
    }
    //, addItem: (items, key, value, check, date) => items.push({ key: key, value: value, check: check, date: date })
    //, removeItem: (items, key) => items.filter((v) => v.key !== key)
    , getMaxKey: (items) => {
        let maxKey = 0;
        items.forEach((v) => {
            maxKey = v.key > maxKey ? v.key : maxKey;
        });
        return maxKey + 1;
    }
    , setCheckItem: (items, key) => {
        items.forEach((v) => {
            const { check, key } = v;
            if (v.key === String(key)) {
                if (v.check === true) {
                    v.check === false;
                } else {
                    v.check === true;
                }
                return items;
            }
        });
    }
}

const initItem = (elemNm, id, cls) => {
    let tmpElem;
    tmpElem = mngElem.getTags(elemNm);
    tmpElem = mngElem.addAttr(tmpElem, 'id', id);
    tmpElem = mngElem.addAttr(tmpElem, 'class', cls);

    return tmpElem;
}
const init = () => {
    items = mngItems.getItems();

    items.forEach((v) => {
        const { key, value, check, date } = v;
        let div = initItem('div', `item_div_${key}`, 'item_div')
        let li = initItem('li', `item_li_${key}`, 'item_li')
        let btnCom = initItem('button', `item_btnCom_${key}`, 'fas fa-check fa-2x')
        let btnDel =initItem('button', `item_btnDel_${key}`, 'fas fa-minus fa-2x')

        

    });
}
init();
