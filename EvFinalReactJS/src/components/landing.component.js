import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

function Landing() {
    return (
      <><Card>
        <Card.Header>El usuario, el blanco principal</Card.Header>
        <Card.Body>
          <Card.Title>protegetuempresa.cl</Card.Title>
          <Card.Text>
          es la plataforma online de concienciación en Seguridad de la Información, que genera hábitos seguros en los usuarios.
          </Card.Text>
          <Button variant="primary">Conoce tu riesgo</Button>
        </Card.Body>
      </Card><Alert variant="primary">
          <Alert.Heading>Es hora de actuar</Alert.Heading>
          <p>
            Regístrate y Descarga nuestra guía "10 Consejos de Ciberseguridad para Pymes"
          </p>
        </Alert></>
        
      );
    }
   
        
      


export default Landing