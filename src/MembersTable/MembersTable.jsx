import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Component to render Members table
export default class MembersTable extends Component {
  constructor(props) {
    super(props);

    this.state = {sortedMembers: this.props.members};
    this.orderByMultiplierState = true;
    this.orderByMultiplier = this.orderByMultiplier.bind(this);
    this.orderByAreaState = true;
    this.orderByArea = this.orderByArea.bind(this);
    this.orderByColorState = true;
    this.orderByColor = this.orderByColor.bind(this);
  }

  orderByMultiplier() {
    this.orderByMultiplierState = !this.orderByMultiplierState;

    if(this.orderByMultiplierState){
      this.setState({
        sortedMembers: this.props.members.sort(function(a,b) {return (a.multiplier < b.multiplier) ? 1 : ((b.multiplier < a.multiplier) ? -1 : 0)})
      });
    }
    else{
      this.setState({
        sortedMembers: this.props.members.sort(function(a,b) {return (a.multiplier > b.multiplier) ? 1 : ((b.multiplier > a.multiplier) ? -1 : 0)})
      });
    }
  }

  orderByArea() {
    this.orderByAreaState = !this.orderByAreaState;

    if(this.orderByAreaState){
      this.setState({
        sortedMembers: this.props.members.sort(function(a,b) {return (a.area.id < b.area.id) ? 1 : ((b.area.id < a.area.id) ? -1 : 0)})
      });
    }
    else{
      this.setState({
        sortedMembers: this.props.members.sort(function(a,b) {return (a.area.id > b.area.id) ? 1 : ((b.area.id > a.area.id) ? -1 : 0)})
      });
    }
  }

  orderByColor() {
    this.orderByColorState = !this.orderByColorState;

    if(this.orderByColorState){
      this.setState({
        sortedMembers: this.props.members.sort(function(a,b) {return (a.area.color < b.area.color) ? 1 : ((b.area.color < a.area.color) ? -1 : 0)})
      });
    }
    else{
      this.setState({
        sortedMembers: this.props.members.sort(function(a,b) {return (a.area.color > b.area.color) ? 1 : ((b.area.color > a.area.color) ? -1 : 0)})
      });
    }
  }

  render() {

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Crew DB</h1>
            <p>List of available members (click on table headers to reorder).</p>
            <table className="table table-stripped table-bordered">
              <thead>
                <tr>
                  <th onClick={this.orderByColor} className="text-center pointer">
                    Color <i className="fa fa-sort"></i>
                  </th>
                  <th onClick={this.orderByArea} className="pointer">
                    Area & Race <i className="fa fa-sort"></i>
                  </th>
                  <th onClick={this.orderByMultiplier} className="text-center pointer">
                    Multiplier <i className="fa fa-sort"></i>
                  </th>
                </tr>
              </thead>
              <tbody>
              {this.state.sortedMembers.map(function(member, i) {
                return (
                  <tr  key={i}>
                    <td className="text-center vertical-center">
                      <i className={"fa fa-circle " + member.area.color}></i>
                    </td>
                    <td>
                      <p>{member.area.name}</p>
                      <p className="no-bottom">{member.race.name}</p>
                    </td>
                    <td className="text-center vertical-center">
                      {member.multiplier}
                    </td>
                  </tr>
                );
              }, this)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
}
