import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';


function App() {
  return (
    <div className="App">
      {/* navbar */}
      <Navbar className="bg-body-tertiary justify-content-between">
      <Form inline>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Form>
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
    {/* heading */}
    <div className='heading'>
      <h1>Fruits</h1>
    </div>
    {/* cards */}
    <div className='carta'>
      {/* card 1 */}
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/1020px-Banana-Single.jpg" alt="Image Alt Text" />
          <Card.Body>
            <Card.Title>Banana</Card.Title>
            <Card.Text>
            Sweet and nutritious tropical fruit, rich in potassium, ideal for snacking and adding to smoothies.
            </Card.Text>
            <Button variant="primary">Choose</Button>
          </Card.Body>
        </Card>
      </div>
      {/* card 2 */}
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/298px-Red_Apple.jpg" alt="Image Alt Text" />
          <Card.Body>
            <Card.Title>Apple</Card.Title>
            <Card.Text>
            Crunchy, versatile fruit available in various varieties, a healthy and convenient snack choice.
            </Card.Text>
            <Button variant="primary">Choose</Button>
          </Card.Body>
        </Card>
      </div>
      {/* card 3 */}
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXZUrlonB8rZOMlvsArGCKU5adJFAsdzqSYA&usqp=CAU" alt="Image Alt Text" height="260px" />
          <Card.Body>
            <Card.Title>Orange</Card.Title>
            <Card.Text>
            Citrus fruit, packed with vitamin C, known for its refreshing, tangy flavor and juiciness.
            </Card.Text>
            <Button variant="primary">Choose</Button>
          </Card.Body>
        </Card>
      </div>
      </div>
    </div>
  );
}

export default App;
