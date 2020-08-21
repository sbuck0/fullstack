console.log("Bye");

function sending() {
  console.log("Hello");
  firstname = document.getElementById("firstname").value;
  console.log(firstname);
  lastname = document.getElementById("lastname").value;
  console.log(lastname);
  dob = document.getElementById("dob").value;
  console.log(dob);
  date = document.getElementById("date").value;
  console.log(date);
  bp = document.getElementById("bp").value;
  console.log(bp);
  console.log(firebase.database.ref());
  // firebase.database().ref("User").set({
  //   firstname: firstname,
  //   lastname: lastname,
  //   dob: dob,
  //   date: date,
  //   bp: bp,
  // });
}
