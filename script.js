const aboutMeBtn = document.querySelector('.about-me-btn');
const contactBtn = document.querySelector('.contact-btn');
const socialBtn = document.querySelector('.social-btn');
const infoContainer = document.querySelector('.info-container');
const infoText = document.querySelector('.info-text');

const aboutMeText = "Hi! I'm a web developer who loves creating cool and interactive websites.";
const contactText = "You can reach me at oliverigel08@gmail.com";
const socialText = "Follow me on social media linked in my discord!";

function showInfo(text) {
	infoText.textContent = text;
	infoContainer.classList.add('active');
}

aboutMeBtn.addEventListener('click', () => showInfo(aboutMeText));
contactBtn.addEventListener('click', () => showInfo(contactText));
socialBtn.addEventListener('click', () => showInfo(socialText));

infoContainer.addEventListener('click', () => {
	infoContainer.classList.remove('active');
	infoText.textContent = "";
});
