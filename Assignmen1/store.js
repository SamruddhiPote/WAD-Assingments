$(document).ready(function() {
  
  $("#submit").click(function() {
    
    const user = {
      name: $("#name").val(),
      email: $("#email").val(),
      pass: $("#password").val(),
    };

    let users = JSON.parse(localStorage.getItem('users')) || [];

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    alert("User Registered Successfully");
    $("#myForm")[0].reset();
  });

  $("#delete").click(function() {
    
    const emailToDelete = $("#email").val(); 
    const passwordToDelete = $("#password").val();

    let users = JSON.parse(localStorage.getItem('users')) || [];
    users = users.filter(user => user.email !== emailToDelete);
    users = users.filter(user => user.password !== passwordToDelete);

    localStorage.setItem("users", JSON.stringify(users));

    alert("User Deleted Successfully");
    $("#myForm")[0].reset();
  });
});
