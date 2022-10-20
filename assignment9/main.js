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

const imgArray = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const alternatives = {'pic1.jpg':'eyeball', 'pic2.jpg':'rock','pic3.jpg':'flower','pic4.jpg':'history','pic5.jpg':'butterfly', }
/* Declaring the alternative text for each image file */

/* Looping through images */
for(const i of imgArray){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'imgArray/${image}');
    newImage.setAttribute('alt', alts[i]);
    thumbBar.appendChild(newImage);
    thumbBar.addEventListener('click', dis => { displayedImage.src = dis.target.src; displayedImage.alt = dis.target.alt;});
}


/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {const bClass = btn.getAttribute('class');
    if(bClass === 'dark'){
        btn.setAttribute("bClass", "light");
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
    else{
        btn.setAttribute("bClass", "dark");
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }

});