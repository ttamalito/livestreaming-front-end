
import '../styles/authenticationForm.css';

/**
 * Creates the Login Page
 * @return {JSX.Element}
 * @constructor
 */
export default function Login() {

    // fetch if the user put an invalid credential
    const invalidCredentials = false;
    // fetch if the user put an invalid password
    const invalidPassword = false;
    const loginHeader = <h1>Login</h1>
    // login form
    const loginForm = <form >

        <div className={'authentication-form-label-input'}>

            <input type="text" id="username" name="username" placeholder={'Username'}/>
        </div>
        <div className={'authentication-form-label-input'}>
            <input type="password" id="password" name="password" minLength="6" placeholder={'Password'} />
        </div>
        <button className="btn">Login</button>
        <p>
            <a href="/changePassword">Forgot Password</a>
        </p>
        <p id="switch-form">
            <a href="/signup">Create an account instead</a>
        </p>
    </form>

    return (<div id={'login-form'} className={'authentication-form'}>
        {loginHeader}
        {loginForm}
    </div>)
}