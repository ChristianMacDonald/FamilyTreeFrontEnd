import { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink,} from 'reactstrap';
import classnames from 'classnames';

import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

function LoginPage(props) {
    const [activeTab, setActiveTab] = useState('1');
    
    const toggle = tab => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    }
    return (
        <div id="login-page">
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => {toggle('1');}}
                    >
                        Login
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => {toggle('2');}}
                    >
                        Register
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <LoginForm/>
                </TabPane>
                <TabPane tabId="2">
                    <RegisterForm/>
                </TabPane>
            </TabContent>
        </div>
    );
}

export default LoginPage;