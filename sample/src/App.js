import React, {Component} from "react";
import Login from "../../lib/components/login/Login";
import Create from "../../lib/components/crudl/create/Create";
import { Grid, Row, Col } from 'react-bootstrap';

class App extends Component {
    constructor() {
        super();
    }

    handleLogin(username, password){
        console.log(username + ' ' + password);
    }

    handleCreate(object){
        console.log(object)
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col mdOffset={2} md={6}>
                        <h1>react-components framework sample</h1>
                        <p>this is the sample of all components in the framework</p>
                    </Col>
                </Row>
                <Row>
                    <Col mdOffset={2} md={5}>
                        <Login handleLogin={this.handleLogin}/>
                    </Col>
                    <Col md={5}>
                        <Create handleCreate={this.handleCreate} model={{username: '', password: '', checkedAGBs: false}} />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default App;
