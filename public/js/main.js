const about = document.querySelector("#about");
const donate = document.querySelector("#donate-btn");
const contact = document.querySelector("#contact");
const services = document.querySelector("#services");
const openSource = document.querySelector("#open-source");

const formContent = document.querySelector("#form-content");
const aboutContent = document.querySelector("#about-content");
const contactContent = document.querySelector("#contact-content");
const servicesContent = document.querySelector("#services-content");
const openSourceContent = document.querySelector("#open-source-content");

about.addEventListener("click", () => {
	const aboutBox = new WinBox({
		title: "About Me",
		width: "300px",
		height: "400px",
		top: 50,
		right: 10,
		bottom: 50,
		left: 10,
		mount: aboutContent,
		onfocus: function() {
			this.setBackground("#00ff00");
		},
		onblur: function() {
			this.setBackground("#777");
		}
	});
});

contact.addEventListener("click", () => {
	const contactBox = new WinBox({
		title: "Contact Me",
		width: "300px",
		height: "300px",
		top: 50,
		right: 10,
		bottom: 50,
		left: 10,
		mount: contactContent,
		onfocus: function() {
			this.setBackground("#00ff00");
		},
		onblur: function() {
			this.setBackground("#777");
		}
	});
});

services.addEventListener("click", () => {
	const servicesBox = new WinBox({
		title: "Services",
		width: "300px",
		height: "400px",
		top: 50,
		right: 10,
		bottom: 50,
		left: 10,
		mount: servicesContent,
		onfocus: function() {
			this.setBackground("#00ff00");
		},
		onblur: function() {
			this.setBackground("#777");
		}
	});
});

openSource.addEventListener("click", () => {
	const openSourceBox = new WinBox({
		title: "Open Source Projects",
		width: "300px",
		height: "400px",
		top: 50,
		right: 10,
		bottom: 50,
		left: 10,
		mount: openSourceContent,
		onfocus: function() {
			this.setBackground("#00ff00");
		},
		onblur: function() {
			this.setBackground("#777");
		}
	});
});

donate.addEventListener("click", () => {
	const donateBox = new WinBox({
		title: "Buy me a cup of coffee",
		width: "300px",
		height: "400px",
		top: 50,
		right: 10,
		bottom: 50,
		left: 10,
		mount: formContent,
		onfocus: function() {
			this.setBackground("#00ff00");
		},
		onblur: function() {
			this.setBackground("#777");
		}
	});
});
