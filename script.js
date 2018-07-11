var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");
// Drapeau
// ctx.fillStyle = "black";
// ctx.fillRect(50, 125, 100, 150);
// ctx.fillStyle = "yellow";
// ctx.fillRect(150, 125, 100, 150);
// ctx.fillStyle = "red";
// ctx.fillRect(250, 125, 100, 150);

// pikachu
ctx.beginPath();

// jaune
ctx.fillStyle = "yellow";
ctx.strokeStyle = "yellow";
ctx.moveTo(132, 48);
ctx.lineTo(144, 48);
ctx.lineTo(144, 60);
ctx.lineTo(156, 60);
ctx.lineTo(156, 72);
ctx.lineTo(180, 72);
ctx.lineTo(180, 84);
ctx.lineTo(192, 84);
ctx.lineTo(192, 96);
ctx.lineTo(216, 96);
ctx.lineTo(216, 108);
ctx.lineTo(240, 108);
ctx.lineTo(240, 96);
ctx.lineTo(288, 96);
ctx.lineTo(288, 108);
ctx.lineTo(312, 108);
ctx.lineTo(312, 96);
ctx.lineTo(336, 96);
ctx.lineTo(336, 84);
ctx.lineTo(348, 84);
ctx.lineTo(348, 72);
ctx.lineTo(372, 72);
ctx.lineTo(372, 60);
ctx.lineTo(384, 60);
ctx.lineTo(384, 48);
ctx.lineTo(396, 48);
ctx.lineTo(396, 120);
ctx.lineTo(384, 120);
ctx.lineTo(384, 132);
ctx.lineTo(372, 132);
ctx.lineTo(372, 144);
ctx.lineTo(360, 144);
ctx.lineTo(360, 168);
// fin oreille
ctx.lineTo(372, 168);
ctx.lineTo(372, 216);
ctx.lineTo(384, 216);
ctx.lineTo(384, 252);
ctx.lineTo(372, 252);
ctx.lineTo(372, 264);
ctx.lineTo(360, 264);
ctx.lineTo(360, 276);
ctx.lineTo(336, 276);
ctx.lineTo(336, 288);
ctx.lineTo(300, 288);
ctx.lineTo(300, 300);
ctx.lineTo(228, 300);
ctx.lineTo(228, 288);
// fin menton
ctx.lineTo(192, 288);
ctx.lineTo(192, 276);
ctx.lineTo(168, 276);
ctx.lineTo(168, 264);
ctx.lineTo(156, 264);
ctx.lineTo(156, 252);
ctx.lineTo(144, 252);
ctx.lineTo(144, 216);
ctx.lineTo(156, 216);
ctx.lineTo(156, 168);
ctx.lineTo(168, 168);
ctx.lineTo(168, 144);
ctx.lineTo(156, 144);
ctx.lineTo(156, 132);
ctx.lineTo(144, 132);
ctx.lineTo(144, 120);
ctx.lineTo(132, 120);
ctx.lineTo(132, 48);

ctx.fill();
// ctx.stroke();
ctx.closePath();

ctx.beginPath();
// noir
ctx.fillStyle = "black";
// oreilles
ctx.fillRect(96, 24, 24, 72);
ctx.fillRect(120, 36, 12, 84);

ctx.fillRect(396, 36, 12, 84);
ctx.fillRect(408, 24, 12, 72);
ctx.fillRect(420, 24, 12, 60);

// contour
ctx.fillRect(132, 36, 12, 12);
ctx.fillRect(144, 48, 12, 12);
ctx.fillRect(156, 60, 24, 12);
ctx.fillRect(180, 72, 12, 12);
ctx.fillRect(192, 84, 24, 12);
ctx.fillRect(216, 96, 24, 12);
ctx.fillRect(240, 84, 48, 12);
ctx.fillRect(288, 96, 24, 12);
ctx.fillRect(312, 84, 24, 12);
ctx.fillRect(336, 72, 12, 12);
ctx.fillRect(348, 60, 24, 12);
ctx.fillRect(372, 48, 12, 12);
ctx.fillRect(384, 36, 12, 12);
ctx.fillRect(384, 120, 12, 12);
ctx.fillRect(372, 132, 12, 12);
ctx.fillRect(360, 144, 12, 24);
ctx.fillRect(372, 168, 12, 48);
ctx.fillRect(384, 216, 12, 36);
ctx.fillRect(372, 252, 12, 12);
ctx.fillRect(360, 264, 12, 12);
ctx.fillRect(336, 276, 24, 12);
ctx.fillRect(300, 288, 36, 12);
ctx.fillRect(228, 300, 72, 12);
ctx.fillRect(192, 288, 36, 12);
ctx.fillRect(168, 276, 24, 12);
ctx.fillRect(156, 264, 12, 12);
ctx.fillRect(144, 252, 12, 12);
ctx.fillRect(132, 216, 12, 36);
ctx.fillRect(144, 168, 12, 48);
ctx.fillRect(156, 144, 12, 24);
ctx.fillRect(144, 132, 12, 12);
ctx.fillRect(132, 120, 12, 12);

ctx.fillRect(168, 132, 12, 12);

ctx.fillRect(348, 132, 12, 12);

ctx.fillRect(252, 228, 24, 24);
ctx.fillRect(276, 240, 12, 36);
ctx.fillRect(288, 228, 12, 12);
ctx.fillRect(252, 276, 24, 12);
ctx.fillRect(240, 240, 12, 36);
ctx.fillRect(228, 228, 12, 12);
ctx.fillRect(252, 204, 24, 12);

ctx.fillRect(180, 180, 48, 24);
ctx.fillRect(192, 168, 24, 48);

ctx.fillRect(300, 180, 48, 24);
ctx.fillRect(312, 168, 24, 48);

ctx.fill();

ctx.closePath();

ctx.beginPath();
// rouge
ctx.fillStyle = "red";

ctx.fillRect(156, 228, 48, 24);
ctx.fillRect(168, 216, 24, 48);

ctx.fillRect(324, 228, 48, 24);
ctx.fillRect(336, 216, 24, 48);

ctx.fillRect(252, 252, 24, 24);

ctx.fill();
ctx.closePath();

ctx.beginPath();
// blanc
ctx.fillStyle = "white";

ctx.fillRect(192, 180, 12, 12);
ctx.fillRect(312, 180, 12, 12);

ctx.fill();
ctx.closePath();

// ctx.beginPath();
// ctx.fillStyle = "red";
// bezierCurveTo(550, 100, 600, 50, 650, 100);
// ctx.fill();
// ctx.closePath();
// var d = document.getElementById("mon_canvas2");
// var dtx = d.getContext("2d");
// // pokeball
// // red
// dtx.beginPath();
//
// dtx.fillStyle = "red";
// dtx.strokeStyle = "black";
// dtx.lineWidth = 10;
//
// dtx.arc(600, 140, 120, 0, Math.PI, true);
//
//
// dtx.stroke();
// dtx.fill();
// dtx.line();
// dtx.closePath();
//
// // white
// dtx.beginPath();
//
// dtx.fillStyle = "white";
// dtx.strokeStyle = "black";
// // ctx.lineWidth = 10;
//
// dtx.arc(620, 160, 120, 0, Math.PI, false);
// dtx.stroke();
// dtx.fill();
// dtx.line();
// dtx.closePath();


// bateau
ctx.beginPath();
ctx.fillStyle = "blue";
ctx.strokeStyle = "black";
ctx.moveTo(200, 300);
ctx.lineTo(300, 400);
ctx.lineTo(200, 400);
ctx.lineTo(200, 300);
ctx.fill();
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.strokeStyle = "brown";
ctx.moveTo(200, 400);
ctx.lineTo(200, 450);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.fillStyle = "brown";
ctx.strokeStyle = "brown";
ctx.moveTo(50, 450);
ctx.lineTo(350, 450);
ctx.lineTo(300, 500);
ctx.lineTo(100, 500);
ctx.lineTo(50, 450);
ctx.stroke();
ctx.fill();
ctx.closePath();


// maison
ctx.beginPath();
ctx.fillStyle = "#842E1B";
ctx.moveTo(300, 550);
ctx.lineTo(400, 650);
ctx.lineTo(200, 650);
ctx.lineTo(300, 550);
ctx.fill();
ctx.closePath();
ctx.fillStyle = "yellow";
ctx.fillRect(200, 650, 200, 200);
ctx.beginPath();
ctx.fillStyle = "#2F1B0C";
ctx.fillRect(325, 775, 40, 75);
ctx.fillStyle = "#c0c0c0";
ctx.arc(355, 825, 3, 0, Math.PI * 2, false);
ctx.fill();
ctx.closePath();