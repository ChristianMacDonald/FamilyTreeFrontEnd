import { useState } from 'react';
import { connect } from 'react-redux';
import { register } from '../actions';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function RegisterForm(props) {
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    return (
        <Form>
            <FormGroup>
                <Label for="username">Username</Label>
                <Input
                    type="text"
                    name="username"
                    id="register-username"
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
                    id="register-password"
                    onChange={e => {
                        setPassword(e.target.value);
                    }}
                />
            </FormGroup>
            <Button
                onClick={() => {
                    props.register({ username, password });
                }}
            >
                Submit
            </Button>
        </Form>
    );
}

export default connect(state => ({}), { register })(RegisterForm);