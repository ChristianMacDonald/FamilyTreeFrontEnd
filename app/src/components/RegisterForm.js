import { useState } from 'react';
import { connect } from 'react-redux';
import { register } from '../actions';

function RegisterForm(props) {
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    return (
        <form id="register-form" onSubmit={e => {
            e.preventDefault();
            props.register({ username, password });
        }}>
            <label>
                Username
                <br/>
                <input type="text" onChange={e => {
                    setUsername(e.target.value);
                }}/>
            </label>
            <br/>
            <label>
                Password
                <br/>
                <input type="password" onChange={e => {
                    setPassword(e.target.value);
                }}/>
            </label>
            <br/>
            <input type="submit"/>
        </form>
    );
}

export default connect(state => ({}), { register })(RegisterForm);