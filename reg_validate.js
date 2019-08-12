const borderColour = (theField, theStyle) => {
	theField.style.border = theStyle;
}


const validate = () => {
    
    const address = document.getElementById("address");
    
    // const name = document.getElementById("name");
    // const name = document.getElementById("name");

    //
    const user = document.getElementById("user_id");
    
    user.addEventListener("input", () => {
    	let userRegex =  /^\w{5,12}$/;

    	if(userRegex.test(user.value) == false){
    		console.log("Sitting bull");
    		borderColour(user,"1px solid red");
    	}
    	else {
    		console.log("crazy horse");
    		borderColour(user,"1px solid");
    	}
    });

    const pass = document.getElementById("password");
    
    pass.addEventListener("input", () => {
    	let pwdRegex =  /^\w{7,12}$/;
    	if(pwdRegex.test(pass.value) == false){
    		borderColour(pass,"1px solid red");
    	}
    	else {
    		borderColour(pass,"1px solid");
    	}
    });

    const name = document.getElementById("name");
    name.addEventListener("input", () => {
    	let nameRegex =  /^[A-Za-z]+$/;
    	if(nameRegex.test(name.value) == false){
    		borderColour(name,"1px solid red");
    	}
    	else {
    		borderColour(name,"1px solid");
    	}
    });

    const country = document.getElementById("country");
    country.addEventListener("input", () => {
    	if (country.value == "" || country.value == null) {
    		borderColour(country,"1px solid red");
    	}
    	else {
    		borderColour(country,"1px solid");
    	}
    });

    const zip = document.getElementById("zip");
    zip.addEventListener("input", () => {
    	zipRegex = /^\d+$/;
    	if(zipRegex.test(zip.value) == false){
    		borderColour(zip,"1px solid red");
    	}
    	else {
    		borderColour(zip,"1px solid");
    	}
    });

    const email = document.getElementById("email");
    email.addEventListener("input", () => {
    	emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/s;
    	if(emailRegex.test(email.value) == false){
    		borderColour(email,"1px solid red");
    	}
    	else {
    		borderColour(email,"1px solid");
    	}
    });


}


validate()