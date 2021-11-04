function myfunction() {
    let variable;
    let master = false;

    variable = "Welcome!";
    alert(variable);

    let age = prompt("Please enter your age");
    age = Number(age)         //convert from string to number

    let name = prompt("Please enter your name", "");
    alert("Your name is " + name);

    function masterUser() {
        alert("You have admin controls")
    }

    if (((name == "Jaden") || (name == "jaden")) && (age == 18)) {       // || - or, && - and, ! - not
        alert("Welcome master")
        master = true
        masterUser()
    } else {
        alert("Welcome user")
    }
}

function btn1Click() {
    alert("Button Clicked!")
}

function btn2Click() {
    window.close();
    window.open("https://www.w3schools.com");
}