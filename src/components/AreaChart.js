import React from 'react';
import moment from 'moment';
import ReactApexChart from 'react-apexcharts'
export default class ApexChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'PRODUCT A',
                data: 6
            }, {
                name: 'PRODUCT B',
                data:8
            }, {
                name: 'PRODUCT C',
                data: 7
            }],
            options: {
                chart: {
                    type: 'area',
                    stacked: false,
                    height: 350,
                    zoom: {
                        enabled: false
                    },
                },
                dataLabels: {
                    enabled: false
                },
                markers: {
                    size: 0,
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shadeIntensity: 1,
                        inverseColors: false,
                        opacityFrom: 0.45,
                        opacityTo: 0.05,
                        stops: [20, 100, 100, 100]
                    },
                },
                yaxis: {
                    labels: {
                        style: {
                            colors: '#8e8da4',
                        },
                        offsetX: 0,
                        formatter: function (val) {
                            return (val / 1000000).toFixed(2);
                        },
                    },
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false
                    }
                },
                xaxis: {
                    type: 'datetime',
                    tickAmount: 8,
                    min: new Date("01/01/2014").getTime(),
                    max: new Date("01/20/2014").getTime(),
                    labels: {
                        rotate: -15,
                        rotateAlways: true,
                        formatter: function (val, timestamp) {
                            return moment(new Date(timestamp)).format("DD MMM YYYY")
                        }
                    }
                },
                title: {
                    text: 'Irregular Data in Time Series',
                    align: 'left',
                    offsetX: 14
                },
                tooltip: {
                    shared: true
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'right',
                    offsetX: -10
                }
            },


        };
    }



    render() {
        return (


            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350} />
            </div>
        )
    }
}