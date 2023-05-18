import './main.scss';

import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';


const slider = document.getElementById('slider');
const priceFrom = document.getElementById('js-price-from');
const priceTo = document.getElementById('js-price-to');

console.log(priceFrom.value, priceTo)

noUiSlider.create(slider, {
  start: [0, 80],
  connect: true,
  range: {
    'min': 0,
    'max': 100
  },
  step: 10,
});

priceFrom.addEventListener('input', (evt) => {
   slider.noUiSlider.set([evt.target.value, null]);
})
priceTo.addEventListener('input', (evt) => {
  slider.noUiSlider.set([null, evt.target.value]);
})

slider.noUiSlider.on('set.one', function () {
  let [newValueFrom, newValueTo] = slider.noUiSlider.get();
  priceFrom.value = Math.round(newValueFrom);
  priceTo.value = Math.round(newValueTo);

});