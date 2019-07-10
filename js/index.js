/*  1. Ask how to dynamically toggle icons instead of 'toc' and 'toc-hover'
    2. Post an array of components
      2.5. Make the icons appear correctly */


/* ----- VUE ----- */
Vue.component('header-button', {
  props: {idName: String, icon: String, hover: String}, // idName and icon are edited from within the HTML component
  methods: {
    toggleHover: function() {
      props.icon = props.hover;
    }
  },
  // Header button template; Toggles icon between hover and unhover based on mouse position
  template: `
    <input class="hdr-button" type="image"
    @mouseover="toggleHover">
  `
});

new Vue({
  el: '#contents-container',
  data: {
    posts: [ // Passes values into the component
      {key: 1, idName: 'table-of-contents-button', icon: 'toc', hover: 'toc-hover'},
      {key: 2, idName: 'search-button', icon: 'magnifier', hover: 'magnifier-hover'}
    ]
  },
});



/* ----- JQUERY ----- */

// var $hdrbuttons = [
//   {id: 'table-of-contents-button', src: './images/toc.png'},
//   {id: 'search-button', src: './images/magnifier.png'}
// ];

// jQuery(document).ready(function($){

//   for($hdrbutton in $hdrbuttons) { // Creates a new header-button element based on
//     var element = $hdrbuttons[$hdrbutton];
//     var $newInput = document.createElement('input');
//     for($attr in element) {
//       var x = element[$attr];
//       console.log(element);
//     }

//   };
// });