console.log('Hello, Earthlings!');
// Make sure to look for monthly (not yearly) costs in the return from clicking the submit button

$(document).ready(onReady);

////////////////////////////////////////////////onReady////////////////////////////////////////////////

function onReady() {
    console.log('in onReady ~(_:(1)');
    $('#submitbtn').on('click', addEmployee);
    // need an .on 'click' created for the submitbtn
    // need an .on 'click' created for the deletebtn


} // end onReady function

function addEmployee() {
    console.log('inside addEmployee!');

} // end addEmployee