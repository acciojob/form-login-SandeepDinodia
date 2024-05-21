// function getFormvalue() {
//     // Get the form element by its ID
//     var form = document.getElementById('form1');
    
//     // Retrieve the values of the first and last name input fields
//     var firstName = form.elements['fname'].value;
//     var lastName = form.elements['lname'].value;
    
//     // Combine the first and last name into a single string
//     var fullName = firstName + ' ' + lastName;
    
//     // Display the full name using alert
//     alert(fullName);
// }
function getFormvalue(){
	var form=document.getElementById("form1")

	var firstName=form.element("fname").value;
	var=lastName=form.element("lname").value;

	var fullName=firstName+" "+lastName;

	alert(fullName);
}