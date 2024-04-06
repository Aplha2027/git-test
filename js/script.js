//Variables
const txt1 = "Es cierto que es grande la distancia, pero también se que aún queda mucho camino, y aunque no sé a dónde nos llevará; de lo q si estoy seguro, es que nos cruzaremos en él...";
const txt2 = "Cuando eso pase, disfrutaré del viaje, ¡muchísimo!, tal y como he hecho hasta ahora...\nCaminando a tu lado";
const txt3 = "TE AMO PRINCESA";
const txt4 = "Oh, lo lamento, es una lástima dado el amor y empeño que puse al hacerlo";
const act = document.getElementById('actually');
const ids = document.getElementById('body').querySelectorAll('.showing');
const lock = function(event) {
    event.preventDefault();
}

//Objetos
const obs = new IntersectionObserver(entr => {
    entr.forEach(en => {
        if (en.isIntersecting) {
            en.target.classList.add('show');
        }
    });
}, {root: null, threshold: 0.8});

const ofoot = new IntersectionObserver(entr => {
    entr.forEach(en => {
        if (en.isIntersecting) {
            document.addEventListener('touchmove', lock, {passive: false});
            document.addEventListener('wheel', lock, {passive: false});
            act.style.opacity = '0';
            setTimeout(goBack(), 5000);
            ofoot.unobserve(en.target);
        }
    });
}, {root: null, threshold: 0.9});

//Funciones
function init() {
    document.getElementById('body').querySelectorAll('.showing').forEach(element => {
        obs.observe(element);
    });
}

function yes() {
    init()
    act.style.opacity = '1';
    document.getElementById('question').style.display = 'none';
    document.removeEventListener('touchmove', lock);
    document.removeEventListener('wheel', lock);
}

function not() {
    act.getElementsByTagName('img')[0].src =  "";
    act.getElementsByTagName('h2')[0].innerText = "";
    act.getElementsByTagName('p')[0].innerText = txt4;
    act.getElementsByTagName('p')[1].innerText = "";
    act.style.opacity = '1';
    document.getElementById('question').style.display = 'none';
}

function goBack() {
    act.scrollIntoView({behavior: "smooth"});
    setTimeout(() => {
        act.getElementsByTagName('img')[0].src =  './img/way.webp';
        act.getElementsByTagName('h2')[0].innerText = txt3;
        act.getElementsByTagName('p')[0].innerText = txt1;
        act.getElementsByTagName('p')[1].innerText = txt2;
        act.style.opacity = '1';
        document.removeEventListener('touchmove', lock);
        document.removeEventListener('wheel', lock);
    }, 800);
}

//Acciones
ofoot.observe(document.getElementById('footer'));
document.addEventListener('touchmove', lock, {passive: false});
document.addEventListener('wheel', lock, {passive: false});
