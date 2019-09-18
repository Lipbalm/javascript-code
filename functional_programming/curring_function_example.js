const curried = (...mParams) => {
    if(mParams.length === 10){
        return mParams.reduce((p,c) => p = c + p);
    }
    return (...sParams) => {
        let rParams = mParams.concat(sParams);
        //console.log(rParams);
        return curried(...rParams);
    }
}

const first = curried(10)(20);
const second = first(30)(40)(50)(60)(70)(80)(90)(100);

//console.log(first);
//console.log(second);