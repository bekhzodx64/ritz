document.addEventListener('DOMContentLoaded', () => {
	// Маска для телефонного номера
	const telInput = document.querySelector('#phone')
	const telMaskOptions = {
		mask: '+998 00 000 00 00',
	}
	new IMask(telInput, telMaskOptions)

	// Модальное окно формы
	const modal = document.querySelector('.modal')
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

	// Viewer Photosphere Modal
	const viewerButtons = document.querySelectorAll('.viewer-button')
	const viewerModal = document.querySelector('.viewer')
	const viewerContent = document.querySelector('.viewer-content')
	const closeViewerButton = document.querySelector('.viewer-close')
	const viewerTitle = document.querySelector('.viewer-title')

	let viewer = null

	const openViewerModal = async (event) => {
		const imageSrc = event.target.dataset.image
		const title = event.target.querySelector('span:first-child').textContent
		const subtitle = event.target.querySelector('span:last-child').textContent

		const titleSpan = document.createElement('span')
		const subtitleSpan = document.createElement('span')

		titleSpan.textContent = title
		subtitleSpan.textContent = subtitle

		viewerTitle.innerHTML = ''
		viewerTitle.appendChild(titleSpan)
		viewerTitle.appendChild(subtitleSpan)

		if (viewer) {
			viewer.destroy()
		}

		viewer = new PhotoSphereViewer.Viewer({
			container: viewerContent,
			panorama: imageSrc,
		})

		viewerModal.style.opacity = '0'
		viewerModal.style.display = 'flex'
		await wait(50)
		viewerModal.style.opacity = '1'
	}

	const closeViewerModal = async () => {
		viewerModal.style.opacity = '0'
		await wait(500)
		viewerModal.style.display = 'none'
	}

	viewerButtons.forEach((button) => {
		button.onclick = openViewerModal
	})

	closeViewerButton.onclick = closeViewerModal
})
