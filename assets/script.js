const eleGrid = document.querySelector('.grid');

for (let i = 1; i <= 100; i++) {

	if (i % 15 == 0) {
		console.log('fizzbuzz');
		eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell">fizzbuzz</div>`;
	}
	
	else if (i % 5 == 0) {
		console.log('buzz');
		eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell">buzz</div>`;

	}
	
	else if (i % 3 == 0) {
		console.log('fizz');
		eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell">fizz</div>`;

	}
	
	else   {
		console.log(i);
		eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell">${i}</div>`;
	}
} 


