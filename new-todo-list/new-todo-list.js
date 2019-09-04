// const manageElement = () => {
//     let elements = [];

//     const
// }

function manageItems(){
    let items = [];

    function getItems() {
        const keys = Object.keys(localStorage);

        keys.forEach(k => {
            items.push(JSON.parse(localStorage.getItem(k)));
        });

        return items;
    }

    const addItem = (value, check, date) => {
        let item = {
            item: {
                key: manageItems.getMaxKey(),
                value: value,
                check: check,
                date: date
            }
        };

        items.push(item);
        localStorage.setItem(JSON.stringify(item));
    }

    const removeItem = (key) => {
        items.forEach((v, i, a) => {
            if (v.item.key === String(key)) {
                items = a.filter((v, j) => i !== j);
            }
        });
    }

    const getMaxKey = () => {
        let maxKey = 0;
        items.forEach((v) => {
            maxKey = v.item.key > maxKey ? v.item.key : maxKey;
        });

        return maxKey;
    }

    const setCheckItem = (key) => {
        items.forEach((v) => {
            if (v.item.key === String(key)) {
                if (v.item.check === "Y") {
                    v.item.check === "N";
                } else {
                    v.item.check === "Y";
                }
            }
        });
    }
}

const init = () => {

}
init();
