// onionring.js is made up of four files - onionring-widget.js, onionring-index.js, onionring-variables.js (this one!), and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (蒜) house, last updated 2020-11-24

// === ONIONRING-VARIABLES ===
//this file contains the stuff you edit to set up your specific webring

//the full URLs of all the sites in the ring
var sites = [
    'https://www.southampton.ac.uk/~jjsh1g20',
    'https://www.southampton.ac.uk/~ajl1g20',
    'https://www.southampton.ac.uk/~sf1u20'
];

//the name of the ring
var ringName = 'Southampton Uni';

/* the unique ID of the widget. two things to note:
 1) make sure there are no spaces in it - use dashes or underscores if you must
 2) remember to change 'webringid' in the widget code you give out and all instances of '#webringid' in the css file to match this value!*/
var ringID = 'sotonugmlwr'; //southampton undergraduate molive webring

//should the widget include a link to an index page?
var useIndex = false;
//the full URL of the index page. if you're not using one, you don't have to specify anything here
var indexPage = 'https://southampton.ac.uk/~jjsh1g20/webring/index.html';

//should the widget include a random button?
var useRandom = true;