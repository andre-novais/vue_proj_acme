var anychart = require('anychart');
var moment =require('moment');

export class Grafico {
    constructor(nome){
        this.chart = anychart.column();
        this.chart.title(nome);
    }
    setSeries(data,x,value,legenda, tipo){
        var result = [];
        data.map(
            
            json => result.push(
                {
                    "x": json[x].toString(),
                    "value": json[value]
                }
            )
        )
        if (tipo == 'line'){
            var series = this.chart.line(result);
            series.name(legenda);
        } else if (tipo == 'bar'){
            var series = this.chart.column(result);
            series.name(legenda);
        } else if (tipo == 'area'){
            var series = this.chart.area(result);
            series.name(legenda);
        } else if (tipo == 'bubble'){
            var series = this.chart.bubble(result);
            series.name(legenda);
        }
        
        if(x=='occured_at'){
            this.chart.xAxis(0).labels().format(function(){
            var value = this.value;
            value = moment(value.slice(-2),'MM').format('MMMM');
            return value;
            });
            this.chart.xAxis(0).labels().width(40);
        }
    }
    setSeriesByFunc(data,func, legenda, tipo,x, ...params){
        var result = func(data,params);
        if (tipo == 'line'){
            var series = this.chart.line(result);
            series.name(legenda);
        } else if (tipo == 'bar'){
            var series = this.chart.column(result);
            series.name(legenda);
        } else if (tipo == 'area'){
            var series = this.chart.area(result);
            series.name(legenda);
        } else if (tipo == 'bubble'){
            var series = this.chart.bubble(result);
            series.name(legenda);
        }
        if(x=='occured_at'){
            this.chart.xAxis(0).labels().format(function(){
            var value = this.value.toString();
            value = moment(value.slice(-2),'MM').format('MMMM');
            return value;
            });
            this.chart.xAxis(0).labels().width(40);
        }
    }    
    desenha(container_id){
        this.chart.container(container_id);
        this.chart.legend(true);
        this.chart.draw();
    }
}