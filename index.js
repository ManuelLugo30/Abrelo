const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Grasias')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover',function () {
    alert('PUES CHINGA TU COLA IGUAL')
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProponerty('top',randomY+'%');
    noBtn.style.setProponerty('left',randomX+'%');
    noBtn.style.setProponerty('transform',`translate(-${randomX}%,-${randomY}%)`);
});