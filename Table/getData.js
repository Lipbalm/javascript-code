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
const data = getData();
// data.forEach((v,a,i) => {
//     for(let [key,value] of Object.entries(v)){
//         for(let [k,val] of Object.entries(value)){
//             console.log(`${k} : ${val}`);
//         }
//     }
// });

for (let [key, value] of Object.entries(data[0].product)) {
    console.log( key);
}
