/*eslint-disable*/

import React, {Component, PropTypes} from 'react';
// import Rubix from 'helpers/rubix/rubix';

export default class MainChart extends Component {
  static propTypes = {
    data: PropTypes.array
  }

  state = {
    total: null
  }

  init(data) {
    console.log("[MainChart] init");

    // const Rubix = require('helpers/rubix/rubix');
    // const d3 = require('d3');

    const layout = {
      width: '100%',
      height: 300,
      title: 'Chart of Total Users',
      titleColor: '#2EB398',
      subtitle: 'Period: 2004 and 2008',
      subtitleColor: '#2EB398',
      axis: {
        x: {
          type: 'datetime',
          tickCount: 3,
          label: 'Time',
          labelColor: '#2EB398'
        },
        y: {
          type: 'linear',
          tickFormat: 'd',
          tickCount: 2,
          labelColor: '#2EB398'
        }
      },
      tooltip: {
        color: '#55C9A6',
        format: {
          y: '.0f',
          x: '%x'
        }
      },
      margin: {
        top: 25,
        left: 50,
        right: 25
      },
      interpolate: 'linear',
      master_detail: true
    };

    var chart = new Rubix('#main-chart', layout);

    var total_users = chart.area_series({
      name: 'Total Users',
      color: '#2EB398',
      marker: 'circle',
      fillopacity: 0.7,
      noshadow: true
    });

    chart.extent = [1297110663*850+(86400000*20*(.35*40)), 1297110663*850+(86400000*20*(.66*40))];

    total_users.addData(data);

    this.areaUser = total_users;
  }

  update(data) {
    console.log("[MainChart] update");

    for (var i = 0; i < data.length; i++) {
      this.areaUser.updatePoint(data[i]);
    }

    // //Remove old points and data
    // //extracted from show() & addData()
    // this.areaUser.removeData();
    //
    // //Add new data and points
    // this.areaUser.addData(data);
  }

  componentDidMount() {
    console.log("[MainChart] didMount");

    const {data} = this.props;
    this.init(data);
  }

  componentDidUpdate() {
    console.log("[MainChart] didUpdate");
    const {data} = this.props;
    this.update(data);
  }

  render() {
    return (
      <div id='main-chart'></div>
    );
  }
}

/*eslint-disable*/
