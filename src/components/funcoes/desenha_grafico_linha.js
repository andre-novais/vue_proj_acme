
var anychart = require('anychart')

export function desenha (data){  

    var result = [];

    data.map(
        json => result.push(
            {
                "x": json["occured_at"].toString(),
                "value": json["vl_valor"]
            }
        )
    )
        var chart = anychart.line();
        chart.data(result);

        chart.title("Top 5 pancake fillings");

        chart.container("container");

        chart.draw();
    
}