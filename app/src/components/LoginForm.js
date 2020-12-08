import { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

function LoginForm(props) {
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    return (
        <form id="login-form" onSubmit={e => {
            e.preventDefault();
            props.login({ username, password });
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

export default connect(state => ({
    pending: state.login.pending
}), {login})(LoginForm);