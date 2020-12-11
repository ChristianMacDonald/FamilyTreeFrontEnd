import { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function LoginForm(props) {
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    return (
        <Form>
            <FormGroup>
                <Label for="username">Username</Label>
                <Input
                    type="text"
                    name="username"
                    id="username"
                    onChange={e => {
                        setUsername(e.target.value);
                    }}
                />
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input
                    type="password"
                    name="password"
                    id="password"
                    onChange={e => {
                        setPassword(e.target.value);
                    }}
                />
            </FormGroup>
            <Button
                onClick={() => {
                    props.login({ username, password });
                }}
            >
                Submit
            </Button>
        </Form>
    );
}

export default connect(state => ({
    pending: state.login.pending
}), {login})(LoginForm);