const OPERATION = {
    sum: '+',
    substract: '-',
    multipy: '*',
    divison: '/'
};

function calculator({a,b, operation}){
    let result = null

    switch (operation) {
        case OPERATION.sum:
           result = sum(a ,b);
            break;

        case OPERATION.substract:
            result = substract(a, b);
                break;

        case OPERATION.multipy:
            result = multiply(a ,b)
            break;

        case OPERATION.divison:
            result = divison(a, b)
            break;

        default:
            break;
    }

    return result
}