import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';



class Formu extends Component{
    
    state = {
        //afficher les massifs
        massifliste: [],
        
        //afficher les stations
        stationliste: [],
        
        //créer un massif
        inputMassifName: '',
        
        //créer une station
        inputStationName:'',
        inputDomaineName:'',
        inputNbRemonte:'',
        inputKmPiste:'',
        selectedMassifName:'',
        
        //créer un hors piste
        selectedStationName:'',
        selectedLevel:'',
        inputDescription:'',
        inputHPnom:'',
        
        
    }

    //récuperer les infos du nvx massif
    onMassifNameChange = event => {
        this.setState({ inputMassifName: event.target.value });
    }
    
    
    
    //récuperer les infos de la nouvelle station
    onStationNameChange = event => {
        this.setState({ inputStationName: event.target.value });
    }
    
    onDomaineNameChange = event => {
        this.setState({ inputDomaineName: event.target.value });
    }
    
    onNbRemonteChange = event => {
        this.setState({ inputNbRemonte: event.target.value });
    }
    
    onKmPisteChange = event => {
        this.setState({ inputKmPiste: event.target.value });
    }
    
    onMassifSelectChange = event => {
        this.setState({ selectedMassifName: event.target.value });
    }
    
    onStationSelectChange = event => {
        this.setState({ selectedStationName: event.target.value });
    }
    
    onLevelSelectChange = event => {
        this.setState({ selectedLevel: event.target.value });
    }
    
    onDescriptionChange = event => {
        this.setState({ inputDescription: event.target.value });
    }
    
    onNameChange = event => {
        this.setState({ inputHPnom: event.target.value });
    }

    //submit le nvx massif
    onMassifSubmit = event => {
        event.preventDefault();
        
        var requestBody = {
            nom : this.state.inputMassifName,
        }


        axios.post('http://localhost:3000/api/massif', requestBody )
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
    }
    
    //submit la nouvelle station
    onStationSubmit = event => {
        event.preventDefault();
        
        var requestBody = {
            nom : this.state.inputStationName,
            massifName : this.state.selectedMassifName,
            nb_piste : this.state.inputNbRemonte,
            nb_kilometre : this.state.inputKmPiste
        }


        axios.post('http://localhost:3000/api/station', requestBody )
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
    }
    
    //submit le nouvel hors piste
    onHorsPisteSubmit = event => {
        event.preventDefault();
        
        var requestBody = {
            nom : this.state.inputHPnom,
            stationName : this.state.selectedStationName,
            description : this.state.inputDescription,
            difficulte : this.state.selectedLevel
        }


        axios.post('http://localhost:3000/api/horspiste', requestBody )
          .then(res => {
            console.log(requestBody);
            console.log(res.data);
          })
    }

    constructor () {
    super()
    
    //afficher tous les massifs
    var self=this;  
    axios.get('http://localhost:3000/api/massif')
    .then(function (response) {
        self.setState({massifliste: response.data})
    })
    .catch(function (error) {
        console.log(error);
    });
     
    //afficher touites les stations
    axios.get('http://localhost:3000/api/station')
    .then(function (response) {
        self.setState({stationliste: response.data})
    })
    .catch(function (error) {
        console.log(error);
    });
    }
    

  render(){
    return (
      <div className="form">

      <Row>
      <Col xs="12" sm="6" lg="4"> 

        <br></br><br></br>

        <h3>AJOUT MASSIF</h3>
        <br></br>
        
        <Form onSubmit={this.onMassifSubmit}>
        <FormGroup row>
            <Label for="exampleText" sm={12}>Entrez massif à enregistrer</Label>
            <Col sm={10}>
              <Input type="textarea" name="text" id="massifInputName" onChange={this.onMassifNameChange}/>
            </Col>
        </FormGroup>

        
            <FormGroup check row>
                <Col sm={{ size: 10, offset: 2 }}>
                  <Button>Submit</Button>
                </Col>
            </FormGroup>
        
        </Form>

      
        </Col>

        <Col xs="12" sm="6"  lg="4"> 
                  <br></br><br></br>

                  <h3>AJOUT STATION</h3>
                  <br></br>
        
        <Form onSubmit={this.onStationSubmit}>
        
          <FormGroup row>
            <Label for="exampleSelect" sm={12}>Massif montagneux</Label>
            <Col sm={10}>
              <Input type="select" name="select" id="exampleSelect" onChange={this.onMassifSelectChange}>
        
                {this.state.massifliste.map((massif) => (
                <option value={massif.nom}> {massif.nom} </option>
                ))}
    
              </Input>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleText" sm={12}>Nom de la station</Label>
            <Col sm={10}>
              <Input type="textarea" name="text" id="exampleText" onChange={this.onStationNameChange} />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleText" sm={12}>Domaine skiable</Label>
            <Col sm={10}>
              <Input type="textarea" name="text" id="exampleText"  onChange={this.onDomaineNameChange}/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleText" sm={12}>Nombre de remonte</Label>
            <Col sm={10}>
              <Input type="textarea" name="text" id="exampleText" onChange={this.onNbRemonteChange} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleText" sm={12}>Km de pistes</Label>
            <Col sm={10}>
              <Input type="textarea" name="text" id="exampleText" onChange={this.onKmPisteChange} />
            </Col>
          </FormGroup>

          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button>Submit</Button>
            </Col>
          </FormGroup>

</Form>
        </Col>
        


        <Col xs="12" sm="6"  lg="4"> 
                  <br></br><br></br>

                  <h3>AJOUT HORS PISTE</h3>
                  <br></br>
<Form onSubmit={this.onHorsPisteSubmit}>
                  <FormGroup row>
            <Label for="exampleSelect" sm={12}>Station</Label>
            <Col sm={10}>
              <Input type="select" name="select" id="exampleSelect" onChange={this.onStationSelectChange}>
              {this.state.stationliste.map((station) => (
                <option value={station.nom}> {station.nom} </option>
                ))}
              </Input>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleSelect" sm={12}>Niveau de difficulté</Label>
            <Col sm={10}>
              <Input type="select" name="select" id="exampleSelect"  onChange={this.onLevelSelectChange}>
              <option value="4" >Attention au gros mur !</option>
              <option value="3" >Hardos</option>
              <option value="2" >Bon niveau requis</option>
              <option value="1" >Easy baby</option>
              </Input>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleText" sm={12}>Description</Label>
            <Col sm={10}>
              <Input type="textarea" name="text" id="exampleText" onChange={this.onDescriptionChange}/>
            </Col>
          </FormGroup>

            <FormGroup row>
            <Label for="exampleText" sm={12}>Surnom</Label>
            <Col sm={10}>
              <Input type="textarea" name="text" id="exampleText" onChange={this.onNameChange}/>
            </Col>
          </FormGroup>

          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button>Submit</Button>
            </Col>
          </FormGroup>
</Form>
        </Col>
        </Row>

      </div>
    )
  }
}

export default Formu;

