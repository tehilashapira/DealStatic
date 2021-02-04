function convertActionTypeToName(actionType) {
    return actionType.toLowerCase().replace(/_(\w)/g, v => v[1].toUpperCase());
}

export function createReducer(state, action, handlers) {
    const key = convertActionTypeToName(action.type);
    const handler = handlers[key];
    if (handler) {
        handler(state, action);
    }
}

// export function sumData(sumProject){

    //  ;
    // בדיקה האם המערך שהגיע ריק
    // if(data.length>0){
    //       if(data[0].sumContactOptions){
    //           let sumConcat=[];
    //           sumConcat=data.map(contactOption => JSON.parse(contactOption.sumContactOptions))
    //           return sumConcat.reduce(function(prev, contactOption) {
    //           let sum= Object.keys(contactOption).reduce((sum,key)=>sum+parseFloat(contactOption[key]||0),0);
    //           return prev + sum;
    //     },0);

    // }

    // עבור viewers ו- submitioms
//     else{
//     return data.reduce(function(sum, obj) {
//         return sum + obj.amount;
//     },0);
//    }}
//    return 0;
// }