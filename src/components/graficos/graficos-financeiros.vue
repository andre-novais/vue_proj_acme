<template>
    <div id="container" style="width : 60vw; height : 50vh; max-width: 500px; max-height: 400px;">
        
    </div>
</template>


<script>

var anychart = require('anychart')


var list = [{label: "Chocolate" , y:5},{label: "Rhubarb compote" , y:2},{label: "Crêpe Suzette" , y:2},{label: "American blueberry" , y:2},{label: "Buttermilk" , y:1}]
var result = []
alert(JSON.stringify(list))
list.map(
    json => result.push(
        {
            "x": json["label"],
            "value": json["y"]
        }
    )
)
alert(JSON.stringify(list))
alert(JSON.stringify(result))
  anychart.onDocumentLoad(function () {
    // create an instance of a pie chart
    var chart = anychart.pie();
    // set the data
    chart.data(result.filter(x=> x["value"]>=2));
    // set chart title
    chart.title("Top 5 pancake fillings");
    // set the container element 
    chart.container("container");
    // initiate chart display
    chart.draw();
  });
</script>