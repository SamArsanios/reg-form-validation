const validate = () => {
    const user_id = document.getElementById("user_id");
    const pass = document.getElementById("password");
    const name = document.getElementById("name");
    const address = document.getElementById("address");
    const country = document.getElementById("country");
    const zip = document.getElementById("zip");
    const email = document.getElementById("email");
    // const name = document.getElementById("name");
    // const name = document.getElementById("name");


    if(user_id.value == ""){   
        alert("Required and must be of length 5 to 12");
        //Why????
        user_id.style.border = "1px solid red";
    }
}