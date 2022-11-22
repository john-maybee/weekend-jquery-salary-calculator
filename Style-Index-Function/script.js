console.log('Hello, Earthlings!');
// Make sure to look for monthly (not yearly) costs in the return from clicking the submit button

$(document).ready(onReady);


////////////////////////////////////////////////onReady////////////////////////////////////////////////
let employees = [];

function onReady() {
    console.log('in onReady ~(_:(1)');
    // need an .on 'click' created for the submitbtn
    $('#submitBtn').on('click', addEmployee);
    // need an .on 'click' created for the deletebtn
} // end onReady function


//////////////////////////////////////////////addEmployee//////////////////////////////////////////////

function addEmployee() {
    console.log('in addEmployee!');
    // need to append the information from the boxes to the end of the table in the DOM.
    // will end up removing the table I previously entered in the dom and enter it here instead.
    let enteredEmployee = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        idNum: $('#idIn').val(),
        position: $('#jobTitleIn').val(),
        salary: $('#annualSalaryIn').val(),
    } // end of creating enteredEmployee
    employees.push(enteredEmployee); // push new employee into array to access later

    $('#employeeTable').append(`
    <tr style="height: 50px">
    <td>${enteredEmployee.firstName}</td>
    <td>${enteredEmployee.lastName}</td>
    <td>${enteredEmployee.idNum}</td>
    <td>${enteredEmployee.position}</td>
    <td>$${enteredEmployee.salary}</td>
    <td><button class="deleteButton">Delete</button></td>
    </tr>`
    );
    $('#firstNameIn').val('');  // clear input
    $('#lastNameIn').val('');  // clear input
    $('#idIn').val('');  // clear input
    $('#jobTitleIn').val('');  // clear input
    $('#annualSalaryIn').val('');  // clear input
    
    calculateMonthlyOut(); // once this client is added we want it to calculate the monthly out
} // end addEmployee

// let selectedColor = $(this).data('color');


///////////////////////////////////////////calculateMonthlyOut/////////////////////////////////////////////

function calculateMonthlyOut() {
    let totalSalary = 0;
    console.log('in monthlyOut');
    for (let i=0; i<employees.length; i++) {
        totalSalary += Number(employees[i].salary);
    } // loop through to collect the salaries complete
    console.log('Yearly Salary: ', totalSalary); // got it working through this point.
    const monthlySalary = totalSalary / 12;
    console.log('Monthly Salary: ',monthlySalary);
    // display the monthly Salary on the Dom
    let el = $('#totalMonthlyOut');
    el.empty();
    el.append(monthlySalary);
    monthlyCostCeiling();
} // end of calculateMonthlyOut


function monthlyCostCeiling() {
    console.log('In monthlyCostCeiling');
}


////////////////////////////////////////////////notes/////////////////////////////////////////////////


// Don't forget to clear the input boxes after you add the employee

//     let yearlyCost = 0;
//     let employeeTable = $('#employeeTable');
//     for (let i=0; i<employeeTable.length; i++){
//         // for each employee, divide their salary by 12 and add up the total of all 1/12 salaries
//         yearlyCost += employeeTable[i].salary;
//     } 
//     console.log(yearlyCost); // log the result in the console for reference
//     const monthlyCost = yearlyCost;
//     let el = $('#totalMonthlyOut'); 
//     el.empty(); // remove any number that was previously listed as the monthly cost
//     el.append(monthlyCost); // append the monthly cost to the DOM
//
// }

// Placeholder code I was using in the HTML as I was forming the page.
{/* <tr style="height: 50px">
                    <td>first name</td>
                    <td>last name</td>
                    <td>id#</td>
                    <td>position</td>
                    <td>$</td>
                    <td></td>
                </tr>
                <tr style="height: 50px">
                    <td>first name</td>
                    <td>last name</td>
                    <td>id#</td>
                    <td>position</td>
                    <td>$</td>
                    <td></td>
                </tr>
                <tr style="height: 50px">
                    <td>first name</td>
                    <td>last name</td>
                    <td>id#</td>
                    <td>position</td>
                    <td>$</td>
                    <td></td>
                </tr> */}
// Code I was using for a blank row at the bottom originally.
{/* <tr style="height: 50px">
                </tr> */}