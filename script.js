const fingerprintImg = document.querySelector('.fingerprint-img')
const fingerprintChangeImg = document.querySelector('.fingerprint-change-img ')
const authorization = document.querySelector('.authorization')
const fingerprintText = document.querySelector('.fingerprint-text ')
const player = document.querySelector('iframe')

const youtubeLink = 'https://www.youtube.com/embed/BU0FiHUkR2w?'
const youtubeAutoplay = 'autoplay=1'

const addScanningAnimation = () => {
	fingerprintChangeImg.classList.add('addScanningAnimation')
	setTimeout(() => {
		fingerprintImg.style.display = 'none'
		fingerprintChangeImg.style.display = 'none'
		fingerprintText.style.display = 'none'
		authorization.style.display = 'block'
		authorization.classList.add('blinkingAnimation')
	}, 1000)
	
}

fingerprintImg.addEventListener('click', addScanningAnimation)
