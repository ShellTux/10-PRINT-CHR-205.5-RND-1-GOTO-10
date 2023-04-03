let canvas, context;
let x = 0, y = 0;
const color = 0;
let intervalMiliseconds = 10;
let spacing = 10;
let iterations = 5;
let probability = 0.5;

// Custom Function
const getURLParam = (parameter, def, convertFunction = Number) => convertFunction(new URL(document.URL).searchParams.has(parameter) ? new URL(document.URL).searchParams.get(parameter) : def);

window.onload = () => main();

const main = () => {
	canvas = document.querySelector('canvas');
	context = canvas.getContext('2d');
	context.fillStyle = 'black';
	context.fillRect(0, 0, canvas.width, canvas.height);

	intervalMiliseconds = getURLParam('intervalMiliseconds', 10);
	spacing = getURLParam('spacing', 50);
	iterations = getURLParam('iterations', 5);
	probability = getURLParam('probability', .5);

	// Resize canvas according to the window
	context.canvas.width = window.innerWidth;
	context.canvas.height = window.innerHeight;

	context.fillStyle = 'blue';
	context.strokeStyle = 'white';
	draw();
};

const draw = () => {
	for (let i = 0; i < iterations; i++) {
		context.fillRect(x, y, spacing, spacing);

		let r = Math.random() > probability;

		// Line
		context.beginPath();
		context.moveTo(x + spacing * r, y);
		context.lineTo(x + spacing * !r, y + spacing);
		context.stroke();

		// Move
		x += spacing;
		if (x >= canvas.width) {
			x = 0;
			y += spacing;
			if (y >= canvas.height) y = 0;
		}
	}

	setTimeout(draw, intervalMiliseconds);
}
