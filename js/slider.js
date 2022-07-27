// Creo array con stringhe che contengono il path delle immagin
const slides = [
	'./img/01.jpg',
	'./img/02.jpg',
	'./img/03.jpg',
	'./img/04.jpg',
	'./img/05.jpg',
]

const slidesElements = []

// Creo variabile per segnare posizione all'interno dell'array
let slidesPosition = 0

// Seleziono elemento .slides-wrapper tramite querySelector
const slidesWrapper = document.querySelector('.slides-wrapper');




// Creo ciclo for per creare le varie slide
for (i = 0; i < slides.length; i++) {

	slideNumb = slides[i]

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
	imgElement.src = slideNumb
	// Utilizzo append si liElement per inserire img al suo interno
	liElement.append(imgElement)

	// Utilizzo append per inserire liElement all'interno di slidesWrapper
	slidesWrapper.append(liElement)
	// Pusho liElement all'interno di slidesElements
	slidesElements.push(liElement)
}

// Selezione .arrow-prev ed .arrow-next tramite querySelector
const nextSlide = document.querySelector('.arrow-next')
const prevSlide = document.querySelector('.arrow-prev')


// Creo evento click su nextSlide 
nextSlide.addEventListener('click', function(){

	const lastIndex = slidesElements.length-1

	// Creo una varibile per associare la poszione all'interno dell'array così da poter irmuovere la casse
	const activeSlide = slidesElements[slidesPosition]
	activeSlide.classList.remove('active')

	if (slidesPosition < lastIndex){
		slidesPosition++
	} else {
		slidesPosition = 0
	}

	// Creo una varibile per associare la poszione all'interno dell'array così da poter aggiungere la classe al prossimo elemento
	const nextSlide = slidesElements[slidesPosition]
	nextSlide.classList.add('active')

	// incremento slideposition
	
})

// Creo evento click su prevSlide
prevSlide.addEventListener('click', function(){

	const lastIndex = slidesElements.length-1

	// Creo una varibile per associare la poszione all'interno dell'array così da poter irmuovere la casse
	const activeSlide = slidesElements[slidesPosition]
	activeSlide.classList.remove('active')

	if (slidesPosition > 0){
		slidesPosition--
	} else {
		slidesPosition = lastIndex
	}

	// Creo una varibile per associare la poszione all'interno dell'array così da poter aggiungere la classe al prossimo elemento
	const nextSlide = slidesElements[slidesPosition]
	nextSlide.classList.add('active')

})