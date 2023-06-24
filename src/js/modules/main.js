document.addEventListener('DOMContentLoaded', () => {
	// Маска для телефонного номера
	const telInput = document.querySelector('#phone')
	const telMaskOptions = {
		mask: '+998 00 000 00 00',
	}
	new IMask(telInput, telMaskOptions)

	// Модальное окно
	const modal = document.querySelector('.modal')
	const modalContent = document.querySelector('.modal-content')
	const openModalBtn = document.querySelector('.brochure-button')
	const closeModalBtn = document.querySelector('.modal-close')

	const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

	const openModal = async () => {
		modal.style.opacity = '0'
		modal.style.display = 'flex'
		await wait(50)
		modal.style.opacity = '1'
	}

	const closeModal = async () => {
		modal.style.opacity = '0'
		await wait(500)
		modal.style.display = 'none'
	}

	openModalBtn.onclick = openModal
	closeModalBtn.onclick = closeModal

	// Photo Sphere viewer
	// new PhotoSphereViewer.Viewer({
	// 	container: document.querySelector('#viewer'),
	// 	panorama: '../../img/sphere-images/3.jpg',
	// })

	// Viewer Buttons
	const viewerButtons = document.querySelectorAll('.viewer-button')

	const image1 = '../../img/sphere-images/1.jpg'
	const image2 = '../../img/sphere-images/2.jpg'
	const image3 = '../../img/sphere-images/3.jpg'
	const image4 = '../../img/sphere-images/4.jpg'
	const image5 = '../../img/sphere-images/5.jpg'

	viewerButtons.forEach((button) => {
		button.onclick = openModal
	})
})
