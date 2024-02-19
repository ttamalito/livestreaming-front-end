

//style
import '../styles/authenticationForm.css';

/**
 * Creates the /signup page
 * @constructor
 */
export default function Signup() {

    const signupHeader = <h1>Create a New Account</h1>
    const signupForm = <form >

        <div className={'authentication-form-label-input'}>

            <input type="text" id="username" name="username" placeholder={'Username'}/>
        </div>

        <div className={'authentication-form-label-input'}>

            <input type="password" id="password" name="password" minLength="6" placeholder={'Password'} />
        </div>


        <button >Create Account</button>
        <p id="switch-form">
            <a href="/login">Login instead</a>
        </p>
    </form>

    return (<div id={'signup-form'} className={'authentication-form'}>
        {signupHeader}
        {signupForm}
    </div>)
}
