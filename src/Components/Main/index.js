import React from "react";
import {Link} from 'react-router-dom';

import {Form, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';


const Main = () => {

  return (

    <div id="formulario">
      
      <Form >
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email" />
          <Form.Text className="text-muted">
            Nunca compartilharemos seu e-mail com mais ninguém!
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Senha" />
          <Form.Text style={{ marginTop:'5px', color:'#0096c7'}}>
            <Link to='/'>Esqueci minha senha</Link>
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicLogin">
          <Link to='/query' style={{textDecoration:'none'}}>
          <Button variant="success" size='sm' >
            Entrar
          </Button>
          </Link>
          <Form.Text>
            Não tem uma conta? <a href="https://github.com/DanielPAnjos" style={{color:'#0096c7'}}>Cadastre-se</a>
          </Form.Text>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Main;
