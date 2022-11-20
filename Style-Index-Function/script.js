console.log('Hello, Earthlings!');
// Make sure to look for monthly (not yearly) costs in the return from clicking the submit button

$(document).ready(onReady);

////////////////////////////////////////////////onReady////////////////////////////////////////////////

function onReady() {
    console.log('in onReady ~(_:(1)');
    $('#submitBtn').on('click', addEmployee);
    // need an .on 'click' created for the submitbtn
    // need an .on 'click' created for the deletebtn
} // end onReady function

//////////////////////////////////////////////addEmployee//////////////////////////////////////////////

function addEmployee() {
    console.log('in addEmployee!');
    // need to append the information from the boxes to the end of the table in the DOM.
    // will end up removing the table I previously entered in the dom and enter it here instead.
    let firstName = $('#firstNameIn').val();
    let lastName = $('#lastNameIn').val();
    let idNum = $('#idIn').val();
    let position = $('#jobTitleIn').val();
    let salary = $('#annualSalaryIn').val();

    $('#employeeTable').append(`
        <tr style="height: 50px">
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${idNum}</td>
            <td>${position}</td>
            <td>$${salary}</td>
            <td><button class="delete">Delete</button></td>
        </tr>`
    );
} // end addEmployee

// Don't forget to clear the input boxes after you add the employee