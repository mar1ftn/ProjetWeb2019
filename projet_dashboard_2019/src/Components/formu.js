import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



class Formu extends Component{

  render(){
    return (
      <div className="form">

      <Row>
      <Col xs="12" sm="6" lg="4"> 

        <br></br><br></br>

        <h3>AJOUT MASSIF</h3>
        <br></br>

        <FormGroup row>
            <Label for="exampleText" sm={12}>Entrez massif à enregistrer</Label>
            <Col sm={10}>
              <Input type="textarea" name="text" id="exampleText" />
            </Col>
          </FormGroup>

        <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button>Submit</Button>
            </Col>
          </FormGroup>

      
        </Col>

        <Col xs="12" sm="6"  lg="4"> 
                  <br></br><br></br>

                  <h3>AJOUT STATION</h3>
                  <br></br>

          <FormGroup row>
            <Label for="exampleSelect" sm={12}>Massif montagneux</Label>
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
            <Label for="exampleText" sm={12}>Nom de la station</Label>
            <Col sm={10}>
              <Input type="textarea" name="text" id="exampleText" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleText" sm={12}>Domaine skiable</Label>
            <Col sm={10}>
              <Input type="textarea" name="text" id="exampleText" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleText" sm={12}>Nombre de remontées</Label>
            <Col sm={10}>
              <Input type="textarea" name="text" id="exampleText" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleText" sm={12}>Km de pistes</Label>
            <Col sm={10}>
              <Input type="textarea" name="text" id="exampleText" />
            </Col>
          </FormGroup>

          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button>Submit</Button>
            </Col>
          </FormGroup>
        </Col>

        <Col xs="12" sm="6"  lg="4"> 
                  <br></br><br></br>

                  <h3>AJOUT HORS PISTE</h3>
                  <br></br>

                  <FormGroup row>
            <Label for="exampleSelect" sm={12}>Station</Label>
            <Col sm={10}>
              <Input type="select" name="select" id="exampleSelect" >
              <option>Tignes</option>
              <option>La Clusaz</option>
              <option>Méribel</option>
              <option>Val Thorens</option>
              <option>La Plagne</option>
              <option>Les Arcs</option>
              </Input>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleSelect" sm={12}>Niveau de difficulté</Label>
            <Col sm={10}>
              <Input type="select" name="select" id="exampleSelect" >
              <option>Attention au gros mur !</option>
              <option>Hardos</option>
              <option>Bon niveau requis</option>
              <option>Easy baby</option>
              </Input>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleText" sm={12}>Description</Label>
            <Col sm={10}>
              <Input type="textarea" name="text" id="exampleText" />
            </Col>
          </FormGroup>

          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button>Submit</Button>
            </Col>
          </FormGroup>
        </Col>
        </Row>

      </div>
    )
  }
}

export default Formu;

