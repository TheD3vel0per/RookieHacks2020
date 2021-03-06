import React from 'react';
import {
    Button,
    Row,
    Container,
    Col,
    InputGroup,
    FormControl,
    ToggleButtonGroup,
    ToggleButton,
    Form
} from 'react-bootstrap';
import {
    Redirect
} from 'react-router';


class DonatePage extends React.Component {

    hideRadio (event) {
        document.getElementById("amount").style.visibility = "hidden";
    }

    showRadio (event) {
        document.getElementById("amount").style.visibility = "visible";
    }

    handleSubmit (event) {
      const form = event.currentTarget;
      
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      else {
        alert("Thank you for donating!");
      }
      localStorage.setItem("donation-posted", true);
    }

    /* code snippet to authenticate user on page. 
    If not logged in returns Null, None, or empty or something*/

    /* localStorage.getItem('token) =*/ 
    // var user_state = localStorage.getItem('token');
    
    render() {
        if (localStorage.getItem('donation-posted'))
        {
            localStorage.removeItem('donation-posted');
            return <Redirect to="/"/>
        }
        else
            return (
                <>
                <Form noValidate validated={localStorage.getItem('donation-posted')} onSubmit={this.handleSubmit}>
                    <Container>
                            <Form.Row>
                                <Col style={{
                                    marginTop: '20%',
                                    marginBottom: '5%',
                                    textAlign: 'center'
                                }}
                                ><h2 style={{
                            
                                    color: '#141114',
                                    fontWeight: 'bold',
                                    fontSize: '4em',
                                    textShadow: '4px 4px 5px gray'   
                                }}>Donate Now</h2>
                                </Col>
                            </Form.Row>

                            <p></p>
                    
                    <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                        <ToggleButton variant="outline-dark" id ="1" value={1} onChange={this.hideRadio} >$5</ToggleButton>
                        <ToggleButton variant="outline-dark" id ="2" value={2} onChange={this.hideRadio} >$10</ToggleButton>
                        <ToggleButton variant="outline-dark" id ="3" value={3} onChange={this.hideRadio} >$20</ToggleButton>
                        <ToggleButton variant="outline-dark" id ="4" value={4} onChange={this.hideRadio} >$50</ToggleButton>
                        <ToggleButton variant="outline-dark" id ="5" value={5} onChange={this.hideRadio}>$100</ToggleButton>
                        <ToggleButton variant="outline-dark" id ="6" value={6} onClick={this.showRadio}>Other</ToggleButton>
                    </ToggleButtonGroup>
                
                    <Form.Row>
                            <Form.Group as={Col} md="12" controlId="validationCustom03" 
                                                        style= {{marginBottom: 30 }} >
                            
                                <Form.Control 
                                            id = "amount"
                                            style={{marginBottom: '5%',
                                                marginTop: '5%',
                                                        visibility: 'hidden'}} 
                                            type="number" placeholder="CAD $"  />
                                
                            </Form.Group>
                    </Form.Row>
                    <Form.Group>
                            <Form.Check
                                required
                                label="Agree to Terms of Use"
                                feedback="You must agree before submitting."
                                />
                    </Form.Group>

                        <Button variant="success" size="lg" type="number submit"> Donate </Button>
                    
                    </Container>
                </Form>

                
                </>
            );
    }
}

export default DonatePage;