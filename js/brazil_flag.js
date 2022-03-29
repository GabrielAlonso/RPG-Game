
var screen = document.querySelector('#screen_canvas');
var brush = screen.getContext('2d');

brush.fillStyle = 'green';
brush.fillRect(0, 0, 600, 400);

brush.fillStyle = 'yellow';
brush.beginPath();
brush.moveTo(300,20);
brush.lineTo(580,200);
brush.lineTo(300,380);
brush.lineTo(20,200);
brush.fill();

brush.fillStyle = 'darkblue';
brush.beginPath();
brush.arc(300,200, 120, 0, 2 * 3.14);
brush.fill();