// Creo array con stringhe che contengono il path delle immagin
const slides = [
	'./img/01.jpg',
	'./img/02.jpg',
	'./img/03.jpg',
	'./img/04.jpg',
	'./img/05.jpg',
]

// Seleziono elemento .slides-wrapper tramite querySelection
const slidesWrapper = document.querySelector('.slides-wrapper');
console.log(slidesWrapper);

// Creo ciclo for per creare le varie slide
for (i = 0; i < slides.length; i++) {

	// Creo variabile per segnare posizione all'interno dell'array
	const slidesPosition = slides[i]

	// Utilizzo create.elemet per crare un li
	const liElement = document.createElement('li');
	liElement.className = 'slide' 

	// SE i = 0 inserisco classe active in liElement
	if (i === 0) {
		liElement.classList.add('active')
	}
	
	// utilizzo create.elemt per creare img
	const imgElement = document.createElement('img');
	// Associo slidePosition ad src 
	imgElement.src = slidesPosition
	// Utilizzo append si liElement per inserire img al suo interno
	liElement.append(imgElement)

	// Utilizzo append per inserire liElement all'interno di slidesWrapper
	slidesWrapper.append(liElement)
}

