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
	
	slidesElements.push(liElement)
}

// Selezione .arrow-prev ed .arrow-next tramite querySelector
const nextSlide = document.querySelector('.arrow-next')
const prevSlide = document.querySelector('.arrow-prev')


// Creo evento click su nextSlide 
nextSlide.addEventListener('click', function(){

	const activeSlide = slidesElements[slidesPosition]
	activeSlide.classList.remove('active')

	const nextSlide = slidesElements[slidesPosition + 1]
	nextSlide.classList.add('active')

	slidesPosition++
})

prevSlide.addEventListener('click', function(){

	const activeSlide = slidesElements[slidesPosition]
	activeSlide.classList.remove('active')

	const nextSlide = slidesElements[slidesPosition - 1]
	nextSlide.classList.add('active')

	slidesPosition--

})


console.log(slidesPosition)
