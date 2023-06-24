document.addEventListener('DOMContentLoaded', () => {
	// Маска для телефонного номера
	const telInput = document.querySelector('#phone')
	const telMaskOptions = {
		mask: '+998 00 000 00 00',
	}
	new IMask(telInput, telMaskOptions)

	// Модальное окно
	const modal = document.querySelector('.modal')
	const openModalBtn = document.querySelector('.brochure-button')
	const closeModalBtn = document.querySelector('.modal-close')

	const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

	// TOOD: style togirlash kk
	const toggleModal = async () => {
		if (modal.style.display === 'none') {
			modal.style.opacity = '0'
			modal.style.display = 'flex'
			await wait(50)
			modal.style.opacity = '1'
		} else {
			modal.style.opacity = '0'
			await wait(500)
			modal.style.display = 'none'
		}
	}

	openModalBtn.onclick = toggleModal
	closeModalBtn.onclick = toggleModal

	// Photo Sphere viewer
	// new PhotoSphereViewer.Viewer({
	// 	container: document.querySelector('#viewer'),
	// 	panorama: '../../img/sphere-images/3.jpg',
	// })

	// Viewer Buttons
	const viewerButtons = document.querySelectorAll('.viewer-button')
	const viewerModal = document.querySelector('.viewer')
	const closeViewerButton = document.querySelector('.viewer-close')

	const toggleViewerModal = async () => {
		if (viewerModal.style.display === 'none') {
			viewerModal.style.opacity = '0'
			viewerModal.style.display = 'flex'
			await wait(50)
			viewerModal.style.opacity = '1'
		} else {
			viewerModal.style.opacity = '0'
			await wait(500)
			viewerModal.style.display = 'none'
		}
	}

	// const image1 = '../../img/sphere-images/1.jpg'
	// const image2 = '../../img/sphere-images/2.jpg'
	// const image3 = '../../img/sphere-images/3.jpg'
	// const image4 = '../../img/sphere-images/4.jpg'
	// const image5 = '../../img/sphere-images/5.jpg'

	viewerButtons.forEach((button) => {
		button.onclick = toggleViewerModal
	})

	closeViewerButton.onclick = toggleViewerModal
})
