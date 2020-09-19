function loveCalculator() {
    // Storing Values in Variable
    var loveName = document.querySelector(".lovedOne");
    var yourName = document.querySelector(".yourName");

    // Checking for errors 
   

    if (loveName == "" || loveName < 3){
        alert("Please dont leave it blank");
    }else if (yourName == "" || yourName < 3 ){
        alert("Please Enter your Name");
    }else {
        // Executing main program
        var percent = Math.floor(Math.random() * 100);
        alert("Your Love percent is " + percent + "%");
    }
    
}

