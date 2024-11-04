let canvas = document.getElementById('world');
let ctx = canvas.getContext('2d');

//kepala
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(100, 300);
ctx.lineTo(300, 300);
ctx.lineTo(300, 100);
ctx.lineTo(100, 100);
ctx.closePath();
ctx.strokeStyle = "red";
ctx.stroke();
ctx.fillStyle = "yellow";
ctx.fill();


//bagian coklat baju
ctx.beginPath();
ctx.moveTo(100, 300);
ctx.lineTo(100, 350);
ctx.lineTo(300, 350);
ctx.lineTo(300, 300);
ctx.lineTo(100, 300);
ctx.closePath();
ctx.strokeStyle = "green";
ctx.stroke();
ctx.fillStyle = "brown";
ctx.fill();


//bagian putih baju
ctx.beginPath();
ctx.moveTo(100, 350);
ctx.lineTo(100, 400);
ctx.lineTo(300, 400);
ctx.lineTo(300, 350);
ctx.lineTo(100, 350);
ctx.closePath();
ctx.strokeStyle = "green";
ctx.stroke();
ctx.fillStyle = "white";
ctx.fill();

//bolongan sponge
ctx.beginPath();
ctx.arc(135,120,20,0,Math.PI*2);
ctx.strokeStyle = "yellow";
ctx.fillStyle = "orange";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(215,120,20,0,Math.PI*2);
ctx.strokeStyle = "yellow";
ctx.fillStyle = "orange";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(270,130,20,0,Math.PI*2);
ctx.strokeStyle = "yellow";
ctx.fillStyle = "orange";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(270,230,20,0,Math.PI*2);
ctx.strokeStyle = "yellow";
ctx.fillStyle = "orange";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(155,190,20,0,Math.PI*2);
ctx.strokeStyle = "yellow";
ctx.fillStyle = "orange";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(145,250,20,0,Math.PI*2);
ctx.strokeStyle = "yellow";
ctx.fillStyle = "orange";
ctx.fill();
ctx.stroke();

//bagian putih mata kiri
ctx.beginPath();
ctx.arc(150,150,20,0,Math.PI*2);
ctx.strokeStyle = "black";
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();

//bagian pupil mata kiri
ctx.beginPath();
ctx.arc(150,150,10,0,Math.PI*2);
ctx.fillStyle = "black";
ctx.stroke();
ctx.fill();

//bagian putih mata kanan
ctx.beginPath();
ctx.arc(250,150,20,0,Math.PI*2);
ctx.strokeStyle = "black";
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();

//bagian pupil mata kanan
ctx.beginPath();
ctx.arc(250,150,10,0,Math.PI*2);
ctx.fillStyle = "black";
ctx.stroke();
ctx.fill();

//mulut
ctx.beginPath();
ctx.arc(200,250,30,0,Math.PI,false);
ctx.strokeStyle = "black";
ctx.fillStyle = "#8B0000";
ctx.fill();
ctx.stroke();

//hidung
ctx.beginPath();
ctx.moveTo(190, 180);
ctx.lineTo(190, 230);
ctx.lineTo(210, 230);
ctx.lineTo(210, 180);
ctx.closePath();
ctx.strokeStyle = "black";
ctx.stroke();
ctx.fillStyle = "yellow";
ctx.fill();

//dasi
ctx.beginPath();
ctx.moveTo(150, 300);
ctx.lineTo(250, 300);
ctx.lineTo(170, 350);
ctx.lineTo(200, 400);
ctx.lineTo(232, 350)
ctx.closePath();
ctx.strokeStyle = "black";
ctx.stroke();
ctx.fillStyle = "orange";
ctx.fill();