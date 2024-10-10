/* Your Code Here */ 
// Create an employee record from an array
function createEmployeeRecord(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    };
}

// Create multiple employee records from an array of arrays
function createEmployeeRecords(arrayOfArrays) {
    return arrayOfArrays.map(createEmployeeRecord);
}

// Create a time-in event
function createTimeInEvent(dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    const timeInEvent = {
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date
    };
    this.timeInEvents.push(timeInEvent);
    return this; // Return the updated record
}

// Create a time-out event
function createTimeOutEvent(dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    const timeOutEvent = {
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date
    };
    this.timeOutEvents.push(timeOutEvent);
    return this; // Return the updated record
}

// Calculate hours worked on a specific date
function hoursWorkedOnDate( date) {
    const timeIn = this.timeInEvents.find(event => event.date === date);
    const timeOut = this.timeOutEvents.find(event => event.date === date);
    if (timeIn && timeOut) {
        return (timeOut.hour - timeIn.hour) / 100;
    }
    return 0; // Return 0 if no hours worked on that date
} 



// Calculate wages earned on a specific date
function wagesEarnedOnDate(date) {
    const hours = hoursWorkedOnDate.call(this, date);
    return hours * this.payPerHour;
}



// Find an employee by their first name
function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName);
}

// Calculate total payroll for all employees
function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((total, record) => total + allWagesFor.call(record), 0);
}


//  We're giving you this function. Take a look at it, you might see some usage
//  that's new and different. That's because we're avoiding a well-known, but
//  sneaky bug that we'll cover in the next few lessons!

//  As a result, the lessons for this function will pass *and* it will be available
//  for you to use if you need it!
//  */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}



