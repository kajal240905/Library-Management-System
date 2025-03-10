document.addEventListener("DOMContentLoaded", function () {
    const studentBox = document.querySelector(".boxbox1");
    const adminBox = document.querySelector(".boxbox2");
    const loginButton = document.querySelector(".Secondpage .btn button"); 
    const userName = document.querySelector(".Secondpage .inputField input[type=text]");
    const sections = document.querySelectorAll("section");

    function displaySection(sectionClass) {
        sections.forEach(section => {
            section.style.display = "none"; 
        });

        const targetSection = document.querySelector(sectionClass);
        if (targetSection) {
            if (sectionClass === ".Secondpage") {
                targetSection.style.display = "flex"; 
                targetSection.style.justifyContent = "center";
                targetSection.style.alignItems = "center";
            } else {
                targetSection.style.display = "block";
            }
        } else {
            console.error(`Section ${sectionClass} not found`);
        }
    }

    
    displaySection(".Firstpage");

    
    studentBox.addEventListener("click", function () {
        displaySection(".Secondpage");
    });

    adminBox.addEventListener("click", function () {
        displaySection(".Secondpage");
    });

    
    loginButton.addEventListener("click", function () {
        if (!userName) {
            console.error("Username input field not found.");
            return;
        }

        const username = userName.value.trim();

        if (username === "") {
            alert("Please enter your username.");
            return;
        }

        const adminPattern = /^librarian\d+@nituk$/i;
        const studentPattern = /^BT\d{2}CSE\d{3}$/;

        console.log("Username entered:", username);

        if (studentPattern.test(username)) {
            displaySection(".Fourthpage");
        } else if (adminPattern.test(username)) {
            displaySection(".Thirdpage");
        } else {
            alert("Invalid credentials. Please enter a valid Student ID or Admin username.");
        }
    });

   

});
