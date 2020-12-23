import React from "react";
import jquery from "jquery";
import {Link} from 'react-router-dom';
import { Navbar, Button, FormControl, Form, Table, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const consultaEndereco = () => {
      
    let cep = document.getElementById("cep").value;
   
    verificaCep(cep);

    const url = `https://viacep.com.br/ws/${cep}/json/`;

    jquery.ajax({
      url: url,
      type: "GET",
      success: function (response) {
        setTimeout(() => {
        
            jquery("#cep-title").html(`CEP - ${response.cep}` );  
            jquery("#logradouro").html(response.logradouro);
            jquery("#bairro").html(response.bairro);
            jquery("#localidade").html(response.localidade);
            jquery("#uf").html(response.uf);
            jquery('.barra-progresso').hide();
            jquery(".table-cep").show();     
            limpaCampo();
        }, 1000);
      },
    });
  };
  jquery(function(){
    jquery(".table-cep").hide();
    jquery('.barra-progresso').hide();
  });

  const limpaCampo = () => {
    document.getElementById("cep").value = "";
  }

  const verificaCep = (cep) => {
      if(cep.length > 8 || cep.length < 8 || cep.length === 0){
        alert('Cep inválido')
        limpaCampo();
        return;
      }
      jquery('.barra-progresso').show();
  }
  

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Consulte o Cep</Navbar.Brand>
        <Form inline>
          <FormControl
            type="text"
            placeholder="CEP"
            id="cep"
            className="mr-sm-2"
          />
          
          <Button
            variant="outline-success"
            size="sm"
            onClick={consultaEndereco}
            style={{marginRight:'15px'}}
          >
            Consultar
          </Button>
          <Link to='/' style={{textDecoration:'none'}}>
            <Button variant="outline-danger" size='sm' >
              Sair
            </Button>
          </Link>
          
        </Form>
      </Navbar>
      <br />

      <ProgressBar animated now={100} variant='success' className='barra-progresso' />
      <Table striped bordered hover size='sm' variant='dark' className='table-cep'>
        <tbody>
          <tr>
            <td id='cep-title'>CEP</td>
          </tr>
          <tr>
            <td>Logradouro</td>
            <td id='logradouro' ></td>
          </tr>
          <tr>
            <td>Bairro</td>
            <td id='bairro'></td>
          </tr>
          <tr>
            <td>Localidade</td>
            <td  id='localidade'></td>
          </tr>
          <tr>
              <td>UF</td>
              <td id='uf'></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Header;
