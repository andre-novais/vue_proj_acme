var moment = require('moment')

export function epoch_to_month (arr){
    function epoch_to_mes(item){
        item["occured_at"] = parseInt(moment(parseInt(item["occured_at"])).format("YYYYMM"))
        return item
        }
    let new_arr = arr.map(epoch_to_mes);
    return new_arr}