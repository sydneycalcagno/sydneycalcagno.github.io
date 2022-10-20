const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
// const imgArray = [];
// imgArray.push('pic1.jpg');
// imgArray.push('pic2.jpg');
// imgArray.push('pic3.jpg');
// imgArray.push('pic4.jpg');
// imgArray.push('pic5.jpg');

const imgArray = ['pic1.png', 'pic2.jpeg', 'pic3.webp', 'pic4.webp', 'pic5.jpeg'];
const alternatives = {'pic1.png':'eyeball', 'pic2.jpeg':'rock','pic3.webp':'flower','pic4.webp':'history','pic5.jpeg':'butterfly'}
/* Declaring the alternative text for each image file */

/* Looping through images */
for(const i of imgArray){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `img/${i}`);
    newImage.setAttribute('alt', alternatives[i]);
    thumbBar.appendChild(newImage);
    thumbBar.addEventListener('click', dis => { displayedImage.src = dis.target.src; displayedImage.alt = dis.target.alt;});
}


/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {const bClass = btn.getAttribute('class');
    if(bClass === 'dark'){
        btn.setAttribute('bClass', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
    else{
        btn.setAttribute('bClass', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }

});