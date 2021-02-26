const bogota = document.getElementById('bogota');
const botonBogota = document.getElementById(
	'bogotaListPlaces'
);
const icon_1 = document.getElementById('open-1')

const palmira = document.getElementById('palmira');
const botonPalmira = document.getElementById(
	'palmiraListPlaces'
);
const icon_2 = document.getElementById('open-2')

const pasto = document.getElementById('pasto');
const botonPasto = document.getElementById(
	'pastoListPlaces'
);
const icon_3 = document.getElementById('open-3')

const dosquebradas = document.getElementById(
	'dosquebradas'
);
const icon_4 = document.getElementById('open-4')
const botonDosquebradas = document.getElementById(
	'dosquebradasListPlaces'
);


const isVisible = (element, button, icon) => {
	let flag = false;
	button.onclick = () => {
		flag = !flag;
		if (flag) {
			element.style.display = 'block';
      icon.classList.remove('close');
      icon.classList.add('open');
		} else {
			element.style.display = 'none';
      icon.classList.remove('open');
      icon.classList.add('close');
		}
	};
};

isVisible(bogota, botonBogota, icon_1);
isVisible(palmira, botonPalmira, icon_2);
isVisible(pasto, botonPasto, icon_3);
isVisible(dosquebradas, botonDosquebradas, icon_4);
