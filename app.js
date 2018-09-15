const employeeList = [
  {
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];

const print = function () {
  $('#content').empty();
  $('#input').empty();
  $('#input2').empty();
  $('#board').empty();
  $('#board2').empty();
  for (let i = 0; i < employeeList.length; i++) {
    $('#content').append(
      `<p>${employeeList[i].name}</p>
      ${employeeList[i].officeNum}</br>
      ${employeeList[i].phoneNum}</br>
      <br></br>`)
  }
}

const verifyInput = function () {
  $('#content').empty();
  $('#input').empty();
  $('#input2').empty();
  $('#board').empty();
  $('#board2').empty();
  $('#input').append(`
  <input type="text" id="verify-input" placeholder="Enter Name" autocomplete="off" />
  <button id="verifyButton">Verify</button>`);
  $('#verifyButton').on('click', verify);
}

const verify = function () {
  $('#board2').empty();
  const input = $('#verify-input').val();
  let msg = 'Employee Not Found'
  for (let i = 0; i < employeeList.length; i++) {
    if (input.toLowerCase() === employeeList[i].name.toLowerCase()) {
      msg = 'Employee Found'
    }
  }
  $('#board2').append(msg)
}

const lookupInput = function () {
  event.preventDefault();
  $('#content').empty();
  $('#input').empty();
  $('#input2').empty();
  $('#board').empty();
  $('#board2').empty();
  $('#input').append(`
      <input type="text" id="lookup-input" placeholder="Enter Name" autocomplete="off" />
      <button id="lookupButton">Lookup</button>`);
  $('#lookupButton').on('click', lookup);
}

const lookup = function () {
  $('#board2').empty();
  const input = $('#lookup-input').val();
  let msg = 'Employee Not Found'
  for (let i = 0; i < employeeList.length; i++) {
    if (input.toLowerCase() === employeeList[i].name.toLowerCase()) {
      msg = `<p>${employeeList[i].name}</p>
          ${employeeList[i].officeNum}</br>
          ${employeeList[i].phoneNum}</br>
          <br></br>`}
  }
  $('#board2').append(msg)
}

const containsInput = function () {
  event.preventDefault();
  $('#content').empty();
  $('#input').empty();
  $('#input2').empty();
  $('#board').empty();
  $('#board2').empty();
  $('#input').append(`
        <input type="text" id="contains-input" placeholder="Enter Name" autocomplete="off" />
        <button id="containsButton">Contains</button>`);
  $('#containsButton').on('click', contains);
}

const contains = function () {
  $('#board').empty();
  const input = $('#contains-input').val();
  let msg = 'Employee Not Found'
  for (let i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name.toLowerCase().includes(input.toLowerCase())) {
      msg = `<p>${employeeList[i].name}</p>
      ${employeeList[i].officeNum}</br>
      ${employeeList[i].phoneNum}</br>
      <br></br>`
    }
  }
  $('#board').append(msg)
}

const updateInput = function () {
  event.preventDefault();
  $('#content').empty();
  $('#input').empty();
  $('#input2').empty();
  $('#board').empty();
  $('#board2').empty();
  $('#input2').append(`
        Name    <input type="text" id="update-name" placeholder="Enter Name" autocomplete="off" /><br><br><br>
        Number  <input type="text" id="update-office" placeholder="Enter Office Number" autocomplete="off" /><br><br><br>
        Phone   <input type="text " id="update-phone" placeholder="Enter Phone Number" maxlength="10" autocomplete="off" /><br><br><br><br>
        <button id="updateButton">Update</button>`);
  $('#updateButton').on('click', update);
}

const update = function () {
  $('#board').empty();
  const employeeName = $('#update-name').val();
  const officeNum = $('#update-office').val();
  const phoneNum = $('#update-phone').val();
  


  var updateEmployee = {
    name: employeeName,
    officeNum: officeNum,
    phoneNum: phoneNum,
  }
  employeeList.push(updateEmployee);
  let msg = 'Employee Not Found'
  for (let i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name.toLowerCase() === updateEmployee.name){
  $('#board2').append(
    `<p>${updateEmployee.name}</p>
    ${updateEmployee.officeNum}</br>
    ${updateEmployee.phoneNum}</br>
    <br></br>`)
  }
}
$('#board2').append(msg)
}

const addInput = function () {
  event.preventDefault();
  $('#content').empty();
  $('#input').empty();
  $('#input2').empty();
  $('#board').empty();
  $('#board2').empty();
  $('#input2').append(`
        Name    <input type="text" id="add-name" placeholder="Enter Name" autocomplete="off" /><br><br><br>
        Number  <input type="text" id="add-office" placeholder="Enter Office Number" autocomplete="off" /><br><br><br>
        Phone   <input type="text" id="add-phone" placeholder="Enter Phone Number" maxlength="10" autocomplete="off" /><br><br><br><br>
        <button id="addButton">Add</button>`);
  $('#addButton').on('click', add);
}

const add = function () {
  $('#board').empty();
  const employeeName = $('#add-name').val();
  const officeNum = $('#add-office').val();
  const phoneNum = $('#add-phone').val();


  var newEmployee = {
    name: employeeName,
    officeNum: officeNum,
    phoneNum: phoneNum,
  }
  employeeList.push(newEmployee);


  $('#board2').append(
    `<p>${newEmployee.name}</p>
                  ${newEmployee.officeNum}</br>
                  ${newEmployee.phoneNum}</br>
                  <br></br>`)
}

const deleteInput = function () {
  event.preventDefault();
  $('#content').empty();
  $('#input').empty();
  $('#input2').empty();
  $('#board').empty();
  $('#board2').empty();
  $('#input').append(`
              <input type="text" id="delete-input" placeholder="Enter Name" autocomplete="off" />
              <button id="deleteButton">Delete</button>`);
  $('#deleteButton').on('click', deleteEmployee);
}

const deleteEmployee = function () {
  $('#board2').empty();
  const input = $('#delete-input').val();
  let msg = 'Employee Not Found'
  for (let i = 0; i < employeeList.length; i++) {
    if (input.toLowerCase() === employeeList[i].name.toLowerCase()) {
      msg = 'Employee Deleted'
    }
  }
  $('#board2').append(msg)
}

$('#print').on('click', print);
$('#verify').on('click', verifyInput);
$('#lookup').on('click', lookupInput);
$('#contains').on('click', containsInput);
$('#update').on('click', updateInput);
$('#add').on('click', addInput);
$('#delete').on('click', deleteInput);