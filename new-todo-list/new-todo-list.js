let items = [];
let elements = [];

const regexp = {
    input: regexp.setRegexp(pattern)
    ,setRegexp: (pattern) => new RegExp(pattern)
    ,isMatch: (value, pattern = "") => {
        let temp;
        if(pattern === ""){
            temp = regexp.input;
        }else{
           temp = regexp.setRegexp(pattern);
        }
    }
}

const manageElement = {
    getTags: (tag) => `<${tag}></${tag}>`
    , addAttribute: (attributeName, value) => {

    }
    , removeAttribute: (attributeName, value) => {

    }
    , addHtml: (obj) => {

    }
}

const manageItems = {
    getItems: (items) => {
        const keys = Object.keys(localStorage);
        items = [];
        keys.forEach(k => {
            items.push(JSON.parse(localStorage.getItem(k)));
        });

        return items;
    }
    , addItem: (items, value, check, date) => {
        let todo = {
            item: {
                key: manageItems.getMaxKey(items),
                value: value,
                check: check,
                date: date
            }
        };
        localStorage.setItem(todo.item.key, JSON.stringify(todo));
        return todo;
    }
    , removeItem: (items, key) => {
        let tmpItems = [];
        items.forEach((v, i, a) => {
            if (v.item.key === key) {
                localStorage.removeItem(String(key));
                tmpItems = a.filter((v, j) => i !== j);
            }
        });
        return tmpItems;
    }
    , getMaxKey: (items) => {
        let maxKey = 0;
        items.forEach((v) => {
            maxKey = v.item.key > maxKey ? v.item.key : maxKey;
        });

        return maxKey + 1;
    }
    , setCheckItem: (items, key) => {
        items.forEach((v) => {
            if (v.item.key === String(key)) {
                if (v.item.check === true) {
                    v.item.check === false;
                } else {
                    v.item.check === true;
                }
                return items;
            }
        });
    }
}

const init = () => {

}
init();
