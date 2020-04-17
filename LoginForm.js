function validate() {
    alert(" inside validate() fn")
    var x = document.form1.tb1.value;
    var y = document.form1.tb2.value

    if (x.length == 0 || y.length == 0) {
        window.location.href = 'Failure.html';

        alert(" UN / PW cannot be empty!");



        //return false; // validation fails
    } else {
        window.location.href = 'Success.html';
        alert("(validatio) UN = " + x);
        alert("(validation) PASS= " + y);

        //return true;// validation passed
    }

}