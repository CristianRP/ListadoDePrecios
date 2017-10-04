import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, Table } from 'react-bootstrap';
import ListadoPreciosRun from './ListadoPrecios.run';
import SelectProyecto from '../Elements/SelectProyecto';
import FormExtendedRun from '../Forms/FormExtended.run';

class ListadoPrecios extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      proyectos: []
    };
  }

  componentDidMount() {
    ListadoPreciosRun();
    FormExtendedRun();
    $.ajax({
        url: 'http://200.6.245.76:3000/api/v1/proyectos',
        method: 'GET',
        data: { data: self.state },
        success: function(data) {
          //this.setState({
            proyectos: data.data
          //});
        },
        error: function(xhr, status, error) {
          alert('Cannot get a record: ', error);
        }
      })
  }

  componentWillUnmount() {
    var destroy = { destroy: true }
    $('#listadoPreciosTable').dataTable(destroy);
  }

  render() {
    return(
      <ContentWrapper>
        <h3>Listado de precios
          <small>Listado de los precios Inmuebles Grupo Rosul.</small>
        </h3>
        <Panel header="Proyecto">
          <fieldset>
              <div className="form-group mb">
                  <Col >
                      <select id="proyectosSelect" value={this.props.proyectos} className="form-control">
                        <option value={option.value} selected={optionsState == option.value}>{option.label}</option>
                      </select>
                  </Col>
              </div>
          </fieldset>
        </Panel>
        <Grid fluid>
          <Row>
              <Col lg={ 12 }>
                  <Panel header="Listas">
                      <Table id="listadoPreciosTable" responsive striped>
                          <thead>
                              <tr>
                                  <th style={{width:"20%"}}>Lista</th>
                                  <th style={{width:"25%"}}>De fecha</th>
                                  <th style={{width:"25%"}}>A fecha</th>
                                  <th style={{width:"15%"}}>Recordatorio</th>
                                  <th style={{width:"15%"}}>Correos para <br/> recordatorio</th>
                                  <th style={{width:"15%"}}>Promoción</th>
                                  <th style={{width:"15%"}}>Estado</th>
                              </tr>
                          </thead>
                          <tbody></tbody>
                      </Table>
                  </Panel>
              </Col>
          </Row>
        </Grid>
      </ContentWrapper>
    );
  }
}

export default ListadoPrecios;
