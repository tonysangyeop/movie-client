import React from "react";
import PropTypes from "prop-types";
// import Ionicon from "react-ionicons";
import FacebookLogin from "react-facebook-login";
import formStyles from "shared/formStyles.scss";

const SignupForm = (props, context) => (
    <div className={formStyles.formComponent}>
        <h3 className={formStyles.signupHeader}>
            Sign up to see photos and videos from your friends.
    </h3>
        <FacebookLogin
            appId="337933546941657"
            autoLoad={false}
            fields="name,email,picture"
            callback={props.handleFacebookLogin}
            cssClass={formStyles.button}
            icon="fa-facebook-official"
            textButton={context.t("Log in with Facebook")}
        />
        <span className={formStyles.divider}>or</span>
        <form className={formStyles.form} onSubmit={props.handleSubmit}>
            <input 
                type="email" 
                placeholder={context.t("Email")} 
                className={formStyles.textInput} 
                name="email"
                value={props.email}
                onChange={props.handleInputChange}
            />
            <input 
                type="text" 
                placeholder={context.t("Full Name")} 
                className={formStyles.textInput} 
                name="name"
                value={props.name}
                onChange={props.handleInputChange}
            />
            <input
                type="username"
                placeholder={context.t("Username")}
                className={formStyles.textInput}
                name="username"
                value={props.username}
                onChange={props.handleInputChange}
            />
            <input
                type="password"
                placeholder={context.t("Password")}
                className={formStyles.textInput}
                name="password"
                value={props.password}
                onChange={props.handleInputChange}
            />
            <input 
                type="submit" 
                value="Sign up" 
                className={formStyles.button} 
                name="submit"
                onChange={props.handleInputChange}
            />
        </form>
        <p className={formStyles.terms}>
            By signing up, you agree to our <span>Terms & Privacy Policy</span>.
    </p>
    </div>
);

SignupForm.propTypes = {
    emailValue: PropTypes.string.isRequired,
    nameValue: PropTypes.string.isRequired, 
    usernameValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleFacebookLogin: PropTypes.func.isRequired 
}

SignupForm.contextTypes = {
    t: PropTypes.func.isRequired
}

export default SignupForm;