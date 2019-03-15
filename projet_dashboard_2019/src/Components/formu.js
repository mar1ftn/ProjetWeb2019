import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



class Formu extends Component{

  render(){
    return (
      <div className="form">

        <br></br><br></br>

        <FormGroup row>
          <Label for="exampleSelect" sm={2}>Select</Label>
          <Col sm={10}>
            <Input type="select" name="select" id="exampleSelect" >
						<option>Alpes</option>
						<option>Pyrénées</option>
						<option>Massif central</option>
						<option>Jura</option>
						<option>Vosges</option>
						<option>Corse</option>
						</Input>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleText" sm={2}>Nom de la station</Label>
          <Col sm={10}>
            <Input type="textarea" name="text" id="exampleText" />
          </Col>
        </FormGroup>
				
        <FormGroup row>
          <Label for="exampleText" sm={2}>Domaine skiable</Label>
          <Col sm={10}>
            <Input type="textarea" name="text" id="exampleText" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>Nombre de remontées</Label>
          <Col sm={10}>
            <Input type="textarea" name="text" id="exampleText" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>Km de pistes</Label>
          <Col sm={10}>
            <Input type="textarea" name="text" id="exampleText" />
          </Col>
        </FormGroup>
				
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>

      </div>
    )
  }
}

export default Formu;

