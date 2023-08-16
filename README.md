# ice-cream

This project I made to master skills:

![](https://img.shields.io/badge/-HTML-7FFF00)
![](https://img.shields.io/badge/-CSS-FFFF00)
![](https://img.shields.io/badge/-SVG-FF00FF)
![](https://img.shields.io/badge/-popups-FFA500)
![](https://img.shields.io/badge/-positions-FB6D3A)
![](https://img.shields.io/badge/-slider-FFFF00)
![](https://img.shields.io/badge/-background%20layers-FB6D3A)
![](https://img.shields.io/badge/-java%20Script-FF00FF)
![](https://img.shields.io/badge/-media%20queries-DC143C)
![](https://img.shields.io/badge/-maps%20and%20videos%20in%20HTML-FB6D3A)
![](https://img.shields.io/badge/-Flexbox-FFFF00)


![screenshot](/Screenshot_ice-cream.jpg)

## My code

```

<div class="section-2__ice-cream-catalog">
                <div class="ice-cream__sort" id="ice-cream_sort-1">
                    <img src="/images/section-2__ice-cream-1.png" alt="just typical ice-cream" class="ice-cream-1 big-circle">
                    <div class="background-big-circle circle-typical big-circle"></div>
                    <div class="ice-cream__sort-item typical">
                        <h3>ice cream</h3>
                        <p class="about-sorts">Soft ice cream with a delicaice-cream-1te taste. Made with milk, cream, sugar and natural stabilizer</p>
                        <span class="arrow-black"></span>
                    </div>
                </div>

```

```

const comments = document.querySelectorAll('.comments');
const dots = document.querySelectorAll('.dots');
const sliderLine = document.querySelector('.comments-slider-line');
let offset = 0;

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const index = dot.getAttribute('data-index');
        const slider = document.querySelector(".slider");
        const sliderWidth = parseInt(window.getComputedStyle(slider).width) + 5;
        showComment(index);
    
offset = index * sliderWidth;
    sliderLine.style.left = -offset + 'px';

```
