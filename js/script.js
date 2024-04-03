txt1 = "Es cierto que es grande la distancia, pero también se que aún queda mucho camino, y aunque no sé a dónde nos llevará; de lo q si estoy seguro, es que nos cruzaremos en él...";
txt2 = "Cuando eso pase, disfrutaré del viaje, ¡muchísimo!, tal y como he hecho hasta ahora...\nCaminando a tu lado";
txt3 = "TE AMO PRINCESA";
const act = document.getElementById('actually');
ids = document.getElementById('body').querySelectorAll('.showing');
const lock = function(event) {
    event.preventDefault();
}

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
            setTimeout(goBack(), 10000);
            ofoot.unobserve(en.target);
        }
    });
}, {root: null, threshold: 0.9});

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
    
}

function goBack() {
    window.scrollTo({top: 500, behavior: "smooth"});
    setTimeout(() => {
        act.getElementsByTagName('img')[0].src =  './img/way.png';
        act.getElementsByTagName('h2')[0].innerText = txt3;
        act.getElementsByTagName('p')[0].innerText = txt1;
        act.getElementsByTagName('p')[1].innerText = txt2;
        act.style.opacity = '1';
        document.removeEventListener('touchmove', lock);
        document.removeEventListener('wheel', lock);
    }, 800);
}

ofoot.observe(document.getElementById('footer'));

if (window.innerWidth > 1200) {
    let sect = document.getElementById('main').getElementsByTagName('section');

    for(let i = 0; i < sect.length; i++){
        if (i % 2 != 0) {
            sect[i].appendChild(sect[i].getElementsByTagName('img')[0]);
        }
    }
}

document.addEventListener('touchmove', lock, {passive: false});
document.addEventListener('wheel', lock, {passive: false});