var c = document.getElementById('house');
var ctx = c.getContext('2d');

ctx.fillStyle = "#D38435";
ctx.rotate(45 * Math.PI / 180);
ctx.fillRect(150,-80,150,150);

ctx.fillStyle = "#A4D7E7";
ctx.setTransform(1, 0, 0, 1, 0, 0);
ctx.fillRect(57,156, 212, 220);

ctx.fillStyle = "#C9C9C9";
ctx.fillRect(74,172, 50, 50);

ctx.fillStyle = "#C9C9C9";
ctx.fillRect(201,172, 50, 50);

ctx.fillStyle = "#C9C9C9";
ctx.fillRect(138,280, 50,96);
