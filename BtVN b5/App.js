// Base class
class Base {
    // common methods here
}

// SignUp class
class SignUp extends Base {
    constructor(name, email, password, confirmPassword) {
        super();
        this.name = name;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }

    validate() {
        // check email and password validity using regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        if (!emailRegex.test(this.email)) {
            alert("Invalid email address");
            return false;
        }
        if (!passwordRegex.test(this.password)) {
            alert("Password must contain at least 8 characters, 1 number, 1 lowercase letter, and 1 uppercase letter");
            return false;
        }
        if (this.password !== this.confirmPassword) {
            alert("Passwords do not match");
            return false;
        }
        return true;
    }

    handleSignUp() {
        if (this.validate()) {
            // save sign up info to local storage
            localStorage.setItem("name", this.name);
            localStorage.setItem("email", this.email);
            localStorage.setItem("password", this.password);
            alert("Sign up successful!");
        }
    }
}

// Importing SignUp class to use in Sign In page
import { SignUp } from "./Singuo";

// Exporting SignUp class to allow importing in Sign In page
export { SignUp };