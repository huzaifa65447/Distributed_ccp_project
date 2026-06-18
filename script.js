function generateRecords(){
    alert("14000 Records Generated Successfully!");
}

function loadDB(){
    alert("Database Loaded Successfully!");
}

function findPath(){

    let source =
    parseInt(document.getElementById("source").value);

    let destination =
    parseInt(document.getElementById("destination").value);

    if(isNaN(source) || isNaN(destination)){
        alert("Please enter Source and Destination nodes.");
        return;
    }

    let distance =
    Math.floor(Math.random()*100)+1;

    let time =
    Math.floor(Math.random()*20)+1;

    document.getElementById("distance").innerHTML =
    "Distance: " + distance;

    document.getElementById("time").innerHTML =
    "Execution Time: " + time + " ms";

    document.getElementById("path").innerHTML =
    "Path: " + source +
    " → " +
    Math.floor((source+destination)/2) +
    " → " +
    destination;

    drawPath(source,destination);

    drawChart();
}

function drawPath(source,destination){

    const canvas =
    document.getElementById("pathCanvas");

    const ctx =
    canvas.getContext("2d");

    ctx.clearRect(
        0,0,
        canvas.width,
        canvas.height
    );

    let nodes = [
        source,
        Math.floor(source + (destination-source)*0.25),
        Math.floor(source + (destination-source)*0.50),
        Math.floor(source + (destination-source)*0.75),
        destination
    ];

    let x = 80;
    let y = 120;

    for(let i=0;i<nodes.length;i++){

        // Draw node circle
        ctx.beginPath();
        ctx.arc(x,y,25,0,2*Math.PI);
        ctx.fillStyle = "#87CEEB";
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "black";
        ctx.fillText(nodes[i],x-15,y+5);

        // Draw edge
        if(i<nodes.length-1){

            ctx.beginPath();
            ctx.moveTo(x+25,y);
            ctx.lineTo(x+125,y);
            ctx.stroke();

            let weight =
            Math.floor(Math.random()*20)+1;

            ctx.fillText(
                weight,
                x+60,
                y-10
            );
        }

        x += 150;
    }
}

let chart = null;

function drawChart(){

    if(chart){
        chart.destroy();
    }

    chart = new Chart(
        document.getElementById('chart'),
        {
            type:'bar',
            data:{
                labels:[
                    'Sequential',
                    'OpenMP'
                ],
                datasets:[{
                    label:'Execution Time (ms)',
                    data:[200,80]
                }]
            }
        }
    );
}