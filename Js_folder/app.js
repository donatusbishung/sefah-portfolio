const cards = document.querySelectorAll('.card')
		const theButton = document.querySelector('#the-button')

		cards.forEach(card => {
			card.addEventListener('click', () => {
				// Disable the button
				// theButton.setAttribute('disabled', 'true')

				// Remove the selected class from all cards
				cards.forEach(cardSec => {
					cardSec.classList.remove('selected')
				})

				// Add the selected class to the card we clicked on
				card.classList.add('selected')

				// theButton.removeAttribute('disabled')
			})
		})