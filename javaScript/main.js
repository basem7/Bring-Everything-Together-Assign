var firstNameInput = document.getElementById("firstNameInput");
var lastNameInput = document.getElementById("lastNameInput");
var maleRadio = document.getElementById("maleRadio");
var femaleRadio = document.getElementById("femaleRadio");

var userTable = document.getElementById("userTable");
function addUser() {
    
    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value;
    var gender = maleRadio.checked ? "Male" : "Female"; // ??

    // INSERT NEW ROW , YOU MUST DECLARE!
    var newRow = userTable.insertRow(-1); // .insertRow(-1 so we insert it to the last row)
 
    //INCERTCELL !!!
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    cell1.innerHTML = firstName; // inneerHtml to write an html tag
    cell2.innerHTML = lastName;
    cell3.innerHTML = gender;

}


