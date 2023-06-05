// Function to fetch users based on role filter
function fetchUsers(roleFilter) {
  $.ajax({
    url: "./php/fetch_users.php",
    type: "GET",
    data: { roleFilter: roleFilter },
    success: function (response) {
      var users = JSON.parse(response);
      var userList = $("#userList");
      userList.empty();

      users.forEach(function (user) {
        var userInfo = "<p>" + user.name + " - " + user.role + "</p>";
        userList.append(userInfo);
      });

      // Display the current role filter
      $("#roleFilter").val(roleFilter);
    },
  });
}

// Function to lookup a user by name
function lookupUser(name) {
  $.ajax({
    url: "./php/lookup_user.php",
    type: "GET",
    data: { name: name },
    success: function (response) {
      var user = JSON.parse(response);
      var userDetails = $("#userDetails");
      userDetails.empty();

      if (user) {
        var userInfo = "<p>Name: " + user.name + "</p>";
        userInfo += "<p>Username: " + user.username + "</p>";
        // Display other user information

        userDetails.html(userInfo);
      } else {
        userDetails.html("User not found.");
      }
    },
  });
}

// Function to add a new user
function addUser(name, username, password, role) {
  $.ajax({
    url: "./php/add_user.php",
    type: "POST",
    data: {
      role: role,
      name: name,
      username: username,
      password: password,
    },
    success: function (response) {
      $("#addResult").html(response);
    },
  });
}

// Function to update an existing user
function updateUser(username, password) {
  $.ajax({
    url: "./php/update_user.php",
    type: "POST",
    data: { username: username, password: password },
    success: function (response) {
      $("#updateResult").html(response);
    },
  });
}

// Function to delete a user
function deleteUser(username) {
  $.ajax({
    url: "./php/remove_user.php",
    type: "POST",
    data: { username: username },
    success: function (response) {
      $("#deleteResult").html(response);
    },
  });
}
