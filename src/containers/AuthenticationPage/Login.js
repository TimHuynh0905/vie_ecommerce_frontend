import React, { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";
import FormInput from '../../components/FormInput/FormInput';
import { auth, signInWithGoogle } from '../../firebase/firebase';
import { SpinnerContainer } from '../../components/Spinner/Spinner';

class LoginForm extends Component {

    state = {
        email: "",
        password: "",
        isLoading: false,
    }

    setLoading = (boolean) => { this.setState({ isLoading: boolean })}

    render() {
        const validateForm = () => {
            return (
                this.state.email.length > 0 &&
                this.state.password.length > 0
            );
        }

        const handleSubmit = async (event) => {
            event.preventDefault();
            this.setLoading(true);
            const { email, password } = this.state;
            
            if (!validateForm()) return;

            try {
                await auth.signInWithEmailAndPassword(email, password);
                this.setState({ email: '', password: '' })
                this.setLoading(false);
            } catch(e) {
                console.log(e);
                this.setLoading(false);
            }
        }

        const handleChange = (event) => {
            const { value, name } = event.target
            this.setState({ [name] : value })
        }

        const renderForm = () => {
            return (
                <div>
                    <h3 className="register_title mb-3">
                        LOGIN HERE
                    </h3>
                    <h6>Already registered? Login in here!</h6>
                    <form onSubmit={handleSubmit} className="register_form" >
                        <FormInput 
                            label='Email'
                            name='email'
                            type='email'
                            value={this.state.email}
                            handleChange={handleChange}
                            required
                        />
                        <FormInput 
                            label='Password'
                            name='password'
                            type='password'
                            value={this.state.password}
                            handleChange={handleChange}
                            required
                        />
                        <Row className="login-btn-group">
                            <Col lg={4} md={4} sm={4}>
                                <Button
                                    className="register_form_box mb-3"
                                    block
                                    type="submit"
                                    variant="outline-dark"
                                    bssize="large"
                                    disabled={!validateForm()}
                                >
                                    Login
                                </Button>
                            </Col>
                            <Col lg={8} md={8} sm={8}>
                                <Button
                                    className="register_form_box mb-3"
                                    block
                                    variant="outline-primary"
                                    bssize="large"
                                    onClick={signInWithGoogle}
                                >
                                    Login with Google
                                </Button>
                            </Col>
                        </Row>
                    </form>
                </div>
                
            );
        }

        return (
            <div className="register">
                {this.state.isLoading? (
                    <SpinnerContainer/>
                ) : (
                    renderForm()
                )}
            </div>
        );           
    }
}

export default LoginForm;