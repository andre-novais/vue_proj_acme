var lodash = require('lodash')

export function sum_categoria(arr,unique_arr){

    let categoria = unique_arr[0];
    let categoria_objetivo = unique_arr[1];
    let obj_soma = unique_arr[2];

    let new_arr = []
    lodash.uniqBy(arr,'occured_at').forEach(json => new_arr.push({'x':json['occured_at']}));
    new_arr.forEach((json)=>{
        json['value'] = lodash.sumBy(arr.filter((elem)=>{
            return ((elem['occured_at'] == json['x'])&&(elem[categoria] == categoria_objetivo))
        }),obj_soma)
    })
    return new_arr
}