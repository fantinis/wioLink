var canvas = document.getElementById('myChart');
var temperatureData = [];
var label = [];

var xmlHttp = new XMLHttpRequest();
var url = 'http://localhost:3000/temperatures/'
    
var request = createCORSRequest("get", url);
if (request){
    request.onload = function(){
        prepareData(JSON.parse (request.responseText));
    };
    request.send();
}

function createCORSRequest(method, url){
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr){
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined"){
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
}


function prepareData(body) {
    for (var prop in body) {
        
        temperatureData.push(body[prop].temperature);
        label.push(body[prop].createdAt);
        
    }
}

var data = {
    labels: label,
    datasets: [
        {
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: temperatureData,
        }
    ]
};

var myLineChart = Chart.Line(canvas,{
    data:data
});






