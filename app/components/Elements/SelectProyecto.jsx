import React from 'react';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';
import FormExtendedRun from '../Forms/FormExtended.run';

class SelectProyecto extends React.Component {
  componentDidMount() {
    FormExtendedRun();
  }

  render() {
    return (
      <fieldset>
        <div className="form-group mb">
          <label className="col-sm-2 control-label">Chosen groups</label>
          <Col sm={ 10 }>
            <select className="chosen-select input-md form-control">
            <optgroup label="NFC EAST">
                <option>Dallas Cowboys</option>
                <option>New York Giants</option>
                <option>Philadelphia Eagles</option>
                <option>Washington Redskins</option>
            </optgroup>
            <optgroup label="NFC NORTH">
                <option>Chicago Bears</option>
                <option>Detroit Lions</option>
                <option>Green Bay Packers</option>
                <option>Minnesota Vikings</option>
            </optgroup>
            <optgroup label="NFC SOUTH">
                <option>Atlanta Falcons</option>
                <option>Carolina Panthers</option>
                <option>New Orleans Saints</option>
                <option>Tampa Bay Buccaneers</option>
            </optgroup>
            <optgroup label="NFC WEST">
                <option>Arizona Cardinals</option>
                <option>St. Louis Rams</option>
                <option>San Francisco 49ers</option>
                <option>Seattle Seahawks</option>
            </optgroup>
            <optgroup label="AFC EAST">
                <option>Buffalo Bills</option>
                <option>Miami Dolphins</option>
                <option>New England Patriots</option>
                <option>New York Jets</option>
            </optgroup>
            <optgroup label="AFC NORTH">
                <option>Baltimore Ravens</option>
                <option>Cincinnati Bengals</option>
                <option>Cleveland Browns</option>
                <option>Pittsburgh Steelers</option>
            </optgroup>
            <optgroup label="AFC SOUTH">
                <option>Houston Texans</option>
                <option>Indianapolis Colts</option>
                <option>Jacksonville Jaguars</option>
                <option>Tennessee Titans</option>
            </optgroup>
            <optgroup label="AFC WEST">
                <option>Denver Broncos</option>
                <option>Kansas City Chiefs</option>
                <option>Oakland Raiders</option>
                <option>San Diego Chargers</option>
            </optgroup>
            </select>
          </Col>
        </div>
      </fieldset>
    )
  }
}
