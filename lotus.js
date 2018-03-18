let colors = ['rgba(255, 255, 255, 0.3)', 'rgba(255, 248, 220, 0.5)', 'rgba(224, 255, 255, 0.4)', 'rgba(218, 172, 214, 0.2)', 'rgba(230, 230, 250, 0.6)', 'rgba(255, 192, 203, 0.3)', 'rgba(193, 250, 204, 0.3)', 'rgba(255, 150, 255, 0.2)', 'rgba(255, 182, 193, 0.4)', 'rgba(255, 255, 224, 0.3)'];

let int1;

let leaveColor = [];
for (let i = 0; i < 27; i++) {
    leaveColor[i] = colors[Math.floor(Math.random()*10)];
}


function draw() {

    let laukelis = document.getElementById('laukelis');
    let ctx = laukelis.getContext('2d');
    let radius = laukelis.width / 2;
    ctx.clearRect(0,0,radius*2,radius*2);
    let grd;

    let cx = radius;
    let cy = radius*1.5;


    // ketvirtas vainikas

    let angle = Math.PI * 1 ;
    let angle2 = Math.PI * 2 - 4*Math.PI/8;
    let colorToChange = Math.floor(Math.random()*7);
    let vainikas = 4;

    for (let i = 0; i < 5; i++) {

        let x1 = cx + radius * Math.sin(angle);
        let y1 = cy + radius * Math.cos(angle);
        let x2 = cx + radius * Math.sin(angle2);
        let y2 = cy + radius * Math.cos(angle2);

        angle -= Math.PI/8;
        angle2 -= Math.PI/8;

        ctx.beginPath();
        ctx.arc(x1, y1, radius, Math.PI*0.5+(i)*Math.PI/8, Math.PI*0.5+(i+4)*Math.PI/8, false);
        ctx.arc(x2, y2, radius, Math.PI*1.5+i*Math.PI/8, Math.PI*1.5+(i+4)*Math.PI/8, false);

        if (i == colorToChange) {
            colorIndex = Math.floor(Math.random()*10);
            leaveColor[21+i] = colors[colorIndex];
        }
        grd=ctx.createLinearGradient(cx,cy,Math.PI*0.5+(i+4)*Math.PI/8, Math.PI*0.5+(i)*Math.PI/8);
        grd.addColorStop(1, "lavender");
        grd.addColorStop(0, leaveColor[21+i]);
        ctx.fillStyle = grd;
        ctx.strokeStyle = "lavender";
        ctx.fill();
        ctx.stroke();
    }

    //trecias vainikas

    angle = Math.PI * 1 ;
    angle2 = Math.PI * 2 - 3*Math.PI/8;
    colorToChange = Math.floor(Math.random()*7);

    for (let i = 0; i < 6; i++) {

        let x1 = cx + radius * Math.sin(angle);
        let y1 = cy + radius * Math.cos(angle);
        let x2 = cx + radius * Math.sin(angle2);
        let y2 = cy + radius * Math.cos(angle2);

        angle -= Math.PI/8;
        angle2 -= Math.PI/8;

        ctx.beginPath();
        ctx.arc(x1, y1, radius, Math.PI*0.5+(i)*Math.PI/8, Math.PI*0.5+(i+3)*Math.PI/8, false);
        ctx.arc(x2, y2, radius, Math.PI*1.5+i*Math.PI/8, Math.PI*1.5+(i+3)*Math.PI/8, false);

        if (i == colorToChange) {
            colorIndex = Math.floor(Math.random()*10);
            leaveColor[15+i] = colors[colorIndex];
        }
        ctx.fillStyle = leaveColor[15+i];
        ctx.fill();
        ctx.stroke();

    }

    //antras vainikas

    angle = Math.PI * 1 ;
    angle2 = Math.PI * 2 - 2*Math.PI/8;
    colorToChange = Math.floor(Math.random()*8);

    for (let i = 0; i < 7; i++) {

        let x1 = cx + radius * Math.sin(angle);
        let y1 = cy + radius * Math.cos(angle);
        let x2 = cx + radius * Math.sin(angle2);
        let y2 = cy + radius * Math.cos(angle2);

        angle -= Math.PI/8;
        angle2 -= Math.PI/8;

        ctx.beginPath();
        ctx.arc(x1, y1, radius, Math.PI*0.5+(i)*Math.PI/8, Math.PI*0.5+(i+2)*Math.PI/8, false);
        ctx.arc(x2, y2, radius, Math.PI*1.5+i*Math.PI/8, Math.PI*1.5+(i+2)*Math.PI/8, false);

        if (i == colorToChange) {
            colorIndex = Math.floor(Math.random()*10);
            leaveColor[8+i] = colors[colorIndex];
        }
        ctx.fillStyle = leaveColor[8+i];
        ctx.fill();
        ctx.stroke();

    }

    // pirmas vainikas

    angle = Math.PI * 1;
    angle2 = Math.PI * 2 - Math.PI/8;
    colorToChange = Math.floor(Math.random()*9);

    for (let i = 0; i < 8; i++) {

        let x1 = cx + radius * Math.sin(angle);
        let y1 = cy + radius * Math.cos(angle);

        let x2 = cx + radius * Math.sin(angle2);
        let y2 = cy + radius * Math.cos(angle2);

        angle -= Math.PI/8;
        angle2 -= Math.PI/8;

        ctx.beginPath();
            ctx.arc(x1, y1, radius, Math.PI*0.5+i*Math.PI/8, Math.PI*0.5+(i+1)*Math.PI/8, false);
            ctx.arc(x2, y2, radius, Math.PI*1.5+i*Math.PI/8, Math.PI*1.5+(i+1)*Math.PI/8, false);
        if (i == colorToChange) {
            colorIndex = Math.floor(Math.random()*10);
            leaveColor[i] = colors[colorIndex];
        }
        ctx.fillStyle = leaveColor[i];
        ctx.fill();
        ctx.stroke();

    }

    clearInterval(int1);
    let wait = 500+Math.floor(Math.random()*2500);
    int1 = setInterval(draw, wait);
}



function pradzia() {
    int1 = setInterval(draw, 20);
}





function pradziaCircle() {

    var laukelis = document.getElementById('laukelis');
    var ctx = laukelis.getContext('2d');

    let radius = laukelis.width / 2;

    let cx = radius;
    let cy = radius * 2;
    let angle = Math.PI * 1;

    for (let i = 0; i < 17; i++) {

        let x = cx + radius * Math.sin(angle);
        let y = cy + radius * Math.cos(angle);
        angle += Math.PI/8;

        console.log("i: " + i + " x: " + x + " y: " + y);

        ctx.beginPath();
        if (i < 8) {
            ctx.arc(x, y, radius, Math.PI*0.5, Math.PI*1.5, true);
            ctx.arc(200, 200, radius, Math.PI*1.5-(Math.PI/8*i), Math.PI*0.5, false);
        } else {
            ctx.arc(x, y, radius, Math.PI*0.5, Math.PI*1.5, false);
            ctx.arc(200, 200, radius, Math.PI*1.5-(Math.PI/8*i), Math.PI*0.5, false);
        }
        ctx.stroke();
    }
}
