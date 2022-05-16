import React,{ useState} from "react";
import './LoginForm.css';


function LoginForm({ Login, error}) {
    const [details, setDetails] = useState({password: ""});

    const submitHandler = e => {
        e.preventDefault();  

        Login(details);
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <div className="form-h1">
                <h1>Na zobrazenie stránky je potrebné sa prihlásiť</h1>
                </div>
                <div className="form-group">
                {(error !== "") ? (<div className="error">{error}</div>) : ""}

                    <p>Prosím zadajte heslo</p>
                    <label htmlFor="password">Heslo:</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} />
                
                <input type="submit" value="Prihlásiť sa" className="Logout-form"></input>
                </div>
            </div>
        </form>
        

    );
}

export default LoginForm