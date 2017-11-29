import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';

import Cubes from './components/Cubes.vue';

// Configure Vue to ignore the element name when defined outside of Vue.
Vue.config.ignoredElements = [
  'cubes'
];

Vue.use(vueCustomElement);

Vue.customElement('iso-cubes', Cubes, {});
