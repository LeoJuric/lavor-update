const selector1 = document.querySelector('#kuhinja')
const selector2 = document.querySelector('#kupaonica')
const selector3 = document.querySelector('#dnevni')
const selector4 = document.querySelector('#eksterijer')
const selector5 = document.querySelector('#posebni')
selector1.addEventListener('click', () => {
    selector1.classList.toggle('active');
});
selector2.addEventListener('click', () => {
    selector2.classList.toggle('active');
});
selector3.addEventListener('click', () => {
    selector3.classList.toggle('active');
});
selector4.addEventListener('click', () => {
    selector4.classList.toggle('active');
});
selector5.addEventListener('click', () => {
    selector5.classList.toggle('active');
});

const gumb1 = document.getElementById("button1")
gumb1.addEventListener('click', e => {
    lightbox.classList.remove('active')
})

const gumb2 = document.getElementById("button2")
gumb2.addEventListener('click', e => {
    lightbox.classList.remove('active')
})

const gumb3 = document.getElementById("button3")
gumb3.addEventListener('click', e => {
    lightbox.classList.remove('active')
})

const gumb4 = document.getElementById("button4")
gumb4.addEventListener('click', e => {
    lightbox.classList.remove('active')
})

const gumb5 = document.getElementById("button5")
gumb5.addEventListener('click', e => {
    lightbox.classList.remove('active')
})

const gumb6 = document.getElementById("button6")
gumb6.addEventListener('click', e => {
    lightbox.classList.remove('active')
})

const gumb7 = document.getElementById("button7")
gumb7.addEventListener('click', e => {
    lightbox.classList.remove('active')
})

const gumb8 = document.getElementById("button8")
gumb8.addEventListener('click', e => {
    lightbox.classList.remove('active')
})

const gumb9 = document.getElementById("button9")
gumb9.addEventListener('click', e => {
    lightbox.classList.remove('active')
})

const gumb11 = document.getElementById("button11")
gumb11.addEventListener('click', e => {
    lightbox.classList.remove('active')
})

const gumb12 = document.getElementById("button12")
gumb12.addEventListener('click', e => {
    lightbox.classList.remove('active')
})

const gumb13 = document.getElementById("button13")
gumb13.addEventListener('click', e => {
    lightbox.classList.remove('active')
})

const gumb14 = document.getElementById("button14")
gumb14.addEventListener('click', e => {
    lightbox.classList.remove('active')
})

const gumb15 = document.getElementById("button15")
gumb15.addEventListener('click', e => {
    lightbox.classList.remove('active')
})

/* stolovi */
const stolovibtn = document.querySelector('#stoloviup')
stolovibtn.addEventListener('click', e => {
    lightbox.classList.add('active')
    const upit = document.querySelector('#stolovi-lightbox')
    upit.style.display = 'block'
    upit.src = upit.src
    while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(upit)
})

const plohebtn = document.querySelector('#ploheup')
plohebtn.addEventListener('click', e => {
    lightbox.classList.add('active')
    const upit = document.querySelector('#plohe-lightbox')
    upit.style.display = 'block'
    upit.src = upit.src
    while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(upit)
})

const zidnebtn = document.querySelector('#zidneup')
zidnebtn.addEventListener('click', e => {
    lightbox.classList.add('active')
    const upit = document.querySelector('#zidne-lightbox')
    upit.style.display = 'block'
    upit.src = upit.src
    while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(upit)
})

const umivaonicibtn = document.querySelector('#umivaoniciup')
umivaonicibtn.addEventListener('click', e => {
    lightbox.classList.add('active')
    const upit = document.querySelector('#umivaonici-lightbox')
    upit.style.display = 'block'
    upit.src = upit.src
    while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(upit)
})

const policebtn = document.querySelector('#policeup')
policebtn.addEventListener('click', e => {
    lightbox.classList.add('active')
    const upit = document.querySelector('#police-lightbox')
    upit.style.display = 'block'
    upit.src = upit.src
    while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(upit)
})

const zidne2btn = document.querySelector('#zidne2up')
zidne2btn.addEventListener('click', e => {
    lightbox.classList.add('active')
    const upit = document.querySelector('#zidne2-lightbox')
    upit.style.display = 'block'
    upit.src = upit.src
    while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(upit)
})

const kaminibtn = document.querySelector('#kaminiup')
kaminibtn.addEventListener('click', e => {
    lightbox.classList.add('active')
    const upit = document.querySelector('#kamini-lightbox')
    upit.style.display = 'block'
    upit.src = upit.src
    while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(upit)
})

const stolicibtn = document.querySelector('#stoliciup')
stolicibtn.addEventListener('click', e => {
    lightbox.classList.add('active')
    const upit = document.querySelector('#stolici-lightbox')
    upit.style.display = 'block'
    upit.src = upit.src
    while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(upit)
})

const bazenibtn = document.querySelector('#bazeniup')
bazenibtn.addEventListener('click', e => {
    lightbox.classList.add('active')
    const upit = document.querySelector('#bazeni-lightbox')
    upit.style.display = 'block'
    upit.src = upit.src
    while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(upit)
})

const klupcicebtn = document.querySelector('#klupciceup')
klupcicebtn.addEventListener('click', e => {
    lightbox.classList.add('active')
    const upit = document.querySelector('#klupcice-lightbox')
    upit.style.display = 'block'
    upit.src = upit.src
    while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(upit)
})

const stepenistabtn = document.querySelector('#stepenistaup')
stepenistabtn.addEventListener('click', e => {
    lightbox.classList.add('active')
    const upit = document.querySelector('#stepenista-lightbox')
    upit.style.display = 'block'
    upit.src = upit.src
    while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(upit)
})

const pladnjevibtn = document.querySelector('#pladnjeviup')
pladnjevibtn.addEventListener('click', e => {
    lightbox.classList.add('active')
    const upit = document.querySelector('#pladnjevi-lightbox')
    upit.style.display = 'block'
    upit.src = upit.src
    while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(upit)
})

const stalcibtn = document.querySelector('#stalciup')
stalcibtn.addEventListener('click', e => {
    lightbox.classList.add('active')
    const upit = document.querySelector('#stalci-lightbox')
    upit.style.display = 'block'
    upit.src = upit.src
    while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(upit)
})

const teglebtn = document.querySelector('#tegleup')
teglebtn.addEventListener('click', e => {
    lightbox.classList.add('active')
    const upit = document.querySelector('#tegle-lightbox')
    upit.style.display = 'block'
    upit.src = upit.src
    while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(upit)
})

