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


function DonatePage() {

    const [validated, setValidated] = React.useState(false);

    const checkRadio = (event) => {
        alert("Other");

        document.getElementById("amount").style.visibility = "visible";    
                      
    };

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      else {
        alert("Thank you for donating! ");
      }
      setValidated(true);
    };

    /* code snippet to authenticate user on page. 
    If not logged in returns Null, None, or empty or something*/

    /* localStorage.getItem('token) =*/ 
    var user_state = localStorage.getItem('token');
    

    return (
        <>
            
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Container>
                    <Form.Row>
                        <Col style={{
                            marginTop: '15%',
                            marginBottom: 50,
                            textAlign: 'center'
                        }}
                        ><h2 style={{
                    
                            color: '#141114',
                            fontWeight: 'bold',
                            fontSize: '4em',
                            textShadow: '5px 8px 10px #696969',                       
                        }}>Donate Now</h2>
                        </Col>
                    </Form.Row>
                    {/* 
                    <Form.Row >
                        <Col style={{
                            width: 'inherit'
                        }}><Button style={{
                                            border: '1px solid #8f8f8f', 
                                            boxShadow: '2px 5px 10px #888888'}} block variant="primary"> $5 </Button>{' '}</Col>
                        <Col><Button style={{border: '1px solid #8f8f8f', 
                                            boxShadow: '2px 5px 10px #888888'}} block variant="primary"> $10 </Button>{' '}</Col>
                        <Col><Button style={{border: '1px solid #8f8f8f', 
                                            boxShadow: '2px 5px 10px #888888'}} block variant="primary"> $20 </Button>{' '}</Col>
                        <Col><Button style={{border: '1px solid #8f8f8f', 
                                            boxShadow: '2px 5px 10px #888888'}} block variant="primary"> $50 </Button>{' '}</Col>
                        <Col style={{
                            marginBottom: '10%'
                        }}><Button style={{border: '1px solid #8f8f8f', 
                        boxShadow: '2px 5px 10px #888888'}} block variant="primary"> $100 </Button>{' '}</Col>

                    </Form.Row> 
                    */}
                    <p></p>
            
            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                 <ToggleButton id ="1" value={1}>$5</ToggleButton>
                <ToggleButton id ="2" value={2}>$10</ToggleButton>
                <ToggleButton id ="3" value={3}>$20</ToggleButton>
                <ToggleButton id ="4" value={4}>$50</ToggleButton>
                <ToggleButton id ="5" value={5}>$100</ToggleButton>
                <ToggleButton id ="6" value={6} onClick={checkRadio}>Other</ToggleButton>
            </ToggleButtonGroup>
           
            <Form.Row>
                    <Form.Group as={Col} md="12" controlId="validationCustom03" style= {{marginBottom: 30 }} >
                    {/*<Form.Label>Other Amount</Form.Label>*/}
                        <Form.Control id = "amount"
                                    style={{marginBottom: 50,
                                                visibility: 'hidden'}} 
                                    type="text" placeholder="CAD $"  />
                    </Form.Group>
            </Form.Row>
            <Form.Group>
                    <Form.Check
                        required
                        label="Agree to Terms of Use"
                        feedback="You must agree before submitting."
                        />
            </Form.Group>

                <Button size="lg" type="number submit"> Donate </Button>
            
            </Container>
        </Form>

        
        </>
    );
}

export default DonatePage;