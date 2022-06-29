const controlTab = document.querySelectorAll('.control-tab');
const controlContent = document.querySelector('.control-product-content-container');
const controlCircles = document.querySelectorAll('.control-circles');
const controlImage = document.querySelector('.control-product-image img');
const controlLink = document.querySelector('.control-product-content-container a');
const controlTitle = document.querySelector('.control-product-content h2');
const controlText = document.querySelector('.control-product-content p');
const closeControl = document.querySelector('.close-control-content');

controlTab.forEach(tab => {
    tab.addEventListener('click', e => {
        if(e.target.textContent === 'Tri-Rated Cable') {
            e.target.classList.toggle('control-tab-orange');
            controlCircles.forEach(circle => {
                if(circle.classList.contains('tri-rated-circles')) {
                    circle.classList.toggle('show-circle');
                }
            });
        } else if(e.target.textContent === 'Panel Trunking') {
            e.target.classList.toggle('control-tab-yellow');
            controlCircles.forEach(circle => {
                if(circle.classList.contains('panel-trunking-circles')) {
                    circle.classList.toggle('show-circle')
                }
            });
        } else if(e.target.textContent === 'Heat Shrink Cable Markers') {
            e.target.classList.toggle('control-tab-green');
            controlCircles.forEach(circle => {
                if(circle.classList.contains('heat-shrink-markers-circles')) {
                    circle.classList.toggle('show-circle')
                }
            });
        }
    });
});

controlCircles.forEach(circle => {
    circle.addEventListener('click', () => {
        if(circle.classList.contains('tri-rated-circles')) {
            controlLink.href = 'https://www.cablecraft.co.uk/tri-rated-cable';
            controlImage.src = 'https://www.cablecraft.co.uk/media/wysiwyg/Tr-rated-Cable-Bundle.png';
            controlTitle.textContent = 'Tri-Rated Cable';
            controlText.textContent = 'Our range of tri-rated comes in a wide range of colours and sizes, it also meets the standards of all three standard setting bodies';
        } else if(circle.classList.contains('panel-trunking-circles')) {
            controlLink.href = 'https://www.cablecraft.co.uk/betaduct#trunking-range';
            controlImage.src = 'https://www.cablecraft.co.uk/media/catalog/product/b/e/betaduct_open_slot_pvc_trunking_grey_500x500.jpg';
            controlTitle.textContent = 'Cable Trunking';
            controlText.textContent = 'Betaduct PVC cable trunking is the ideal solution for general applications where cable management is required, and cable protection is essential';
        } else if(circle.classList.contains('heat-shrink-markers-circles')) {
            controlLink.href = 'https://www.cablecraft.co.uk/heatshrink-sleeves';
            controlImage.src = 'https://www.cablecraft.co.uk/media/catalog/product/r/p/rps_heatshrink_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=';
            controlTitle.textContent = 'Heat Shrink Cable Markers';
            controlText.textContent = 'Available in a range of sizes, colours and specifications including Halogen Free';
        }
        controlContent.classList.add('show-control-content');
    });
});

closeControl.addEventListener('click', () => {
    controlContent.classList.remove('show-control-content');
});