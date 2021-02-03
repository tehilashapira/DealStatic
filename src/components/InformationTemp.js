import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import './InformationTemp.css';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import iconOne from '../img/iconOne.png'
import iconTwo from '../img/iconTwo.png';
import iconThree from '../img/iconThree.png'
import iconFour from '../img/iconFour.png'
import { actions } from '../Redux/actions/staticAction'
import moment from 'moment';
import { } from 'react-router-dom'


// -------get new date in correct format to filter data----------------------------------------------------

let currentDate = moment().format("MM/DD/YYYY");
let dateBeforeWeek = moment().subtract(1, 'week').format('MM/DD/YYYY');
let dateBeforeMonth = moment().subtract(1, 'month').format('MM/DD/YYYY');
let dateBeforeYear = moment().subtract(1, 'year').format('MM/DD/YYYY')
// --------------------------------------------------------------------------------------------------------------
const useStyles = () => ({
    root: {
        width: '100%',
        maxWidth: 360,
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    },
    paper: {
        borderRadius: '17px',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    },
})
function Information(props) {
    //  ---filter by: last day,last week,last month
    function filterByDay() {

        let dataStaticFilterViewer = props.dataStatic.viewers.filter(function (viewer) {
            const dateViewer = viewer.date.split("/")
            const dateFormater = dateViewer[1] + "/" + dateViewer[0] + "/" + dateViewer[2];
            return (dateFormater == currentDate)
        })
        let dataStaticFilterConcatOptions = props.dataStatic.contactOptions.filter(function (contactOptions) {
            const dateConcatOptions = contactOptions.date.split("/")
            const dateFormater = dateConcatOptions[1] + "/" + dateConcatOptions[0] + "/" + dateConcatOptions[2];
            return (dateFormater == currentDate)
        })
        let dataStaticFiltersubmitioms = props.dataStatic.submitioms.filter(function (submitioms) {
            const dateSubmitioms = submitioms.date.split("/")
            const dateFormater = dateSubmitioms[1] + "/" + dateSubmitioms[0] + "/" + dateSubmitioms[2];
            return (dateFormater == currentDate)
        })
        props.changeSumStatic({
            viewers: dataStaticFilterViewer, contactOptions: dataStaticFilterConcatOptions, submitioms: dataStaticFiltersubmitioms
        })
    }
    function filterByYear() {
        let dataStaticFilterViewer = props.dataStatic.viewers.filter(function (viewer) {
            const dateViewer = viewer.date.split("/")
            const dateFormater = dateViewer[1] + "/" + dateViewer[0] + "/" + dateViewer[2];
            return (new Date(dateFormater) >= new Date(dateBeforeYear))
        })
        let dataStaticFilterConcatOptions = props.dataStatic.contactOptions.filter(function (contactOptions) {
            const dateClick = contactOptions.date.split("/")
            const dateFormater = dateClick[1] + "/" + dateClick[0] + "/" + dateClick[2];
            return (new Date(dateFormater) >= new Date(dateBeforeMonth))
        })
        let dataStaticFiltersubmitioms = props.dataStatic.submitioms.filter(function (submitioms) {
            const dateSubmitions = submitioms.date.split("/")
            const dateFormater = dateSubmitions[1] + "/" + dateSubmitions[0] + "/" + dateSubmitions[2];
            return (new Date(dateFormater) >= new Date(dateBeforeMonth))
        })
        props.changeSumStatic({
            viewers: dataStaticFilterViewer, contactOptions: dataStaticFilterConcatOptions, submitioms: dataStaticFiltersubmitioms
        })
    }

    function paper() {
        debugger
        console.log("rrrr");
        window.location.assign('https://papers.dev.leader.codes/admin/ruth109476@gmail.com')

    }
    function filterByWeek() {
        let dataStaticFilterViewer = props.dataStatic.viewers.filter(function (viewer) {
            const dateViewer = viewer.date.split("/")
            const dateFormater = dateViewer[1] + "/" + dateViewer[0] + "/" + dateViewer[2];
            return (new Date(dateFormater) >= new Date(dateBeforeWeek))
        })
        let dataStaticFilterConcatOptions = props.dataStatic.contactOptions.filter(function (contactOptions) {
            const dateClick = contactOptions.date.split("/")
            const dateFormater = dateClick[1] + "/" + dateClick[0] + "/" + dateClick[2];
            return (new Date(dateFormater) >= new Date(dateBeforeWeek))
        })
        let dataStaticFiltersubmitioms = props.dataStatic.submitioms.filter(function (submitioms) {
            const dateSubmitions = submitioms.date.split("/")
            const dateFormater = dateSubmitions[1] + "/" + dateSubmitions[0] + "/" + dateSubmitions[2];
            return (new Date(dateFormater) >= new Date(dateBeforeWeek))
        })
        props.changeSumStatic({ viewers: dataStaticFilterViewer, contactOptions: dataStaticFilterConcatOptions, submitioms: dataStaticFiltersubmitioms })
    }



    function filterByMonth() {
        let dataStaticFilterViewer = props.dataStatic.viewers.filter(function (viewer) {
            const dateViewer = viewer.date.split("/")
            const dateFormater = dateViewer[1] + "/" + dateViewer[0] + "/" + dateViewer[2];
            return (new Date(dateFormater) >= new Date(dateBeforeMonth))
        })
        let dataStaticFilterConcatOptions = props.dataStatic.contactOptions.filter(function (contactOptions) {
            const dateClick = contactOptions.date.split("/")
            const dateFormater = dateClick[1] + "/" + dateClick[0] + "/" + dateClick[2];
            return (new Date(dateFormater) >= new Date(dateBeforeMonth))
        })
        let dataStaticFiltersubmitioms = props.dataStatic.submitioms.filter(function (submitioms) {
            const dateSubmitions = submitioms.date.split("/")
            const dateFormater = dateSubmitions[1] + "/" + dateSubmitions[0] + "/" + dateSubmitions[2];
            return (new Date(dateFormater) >= new Date(dateBeforeMonth))
        })
        props.changeSumStatic({
            viewers: dataStaticFilterViewer, contactOptions: dataStaticFilterConcatOptions, submitioms: dataStaticFiltersubmitioms
        })
    }
    return (
        <div className="container-fluid mt-5">
            <div className="row pb-5" style={{ marginRight: '12%', marginLeft: '12%' }} >
                <div className="col-3 " style={{ fontSize: "30px", font: "normal normal bold 18px/27px Roboto", marginBottom: "15px" }}>
                    leads information
      </div>
                <div className="col-3.5" style={{ direction: "rtl" }}>
                    <div className="col-3.5" style={{ direction: "rtl" }}>
                    </div></div>‏
             <Grid container spacing={4}>
                    <Grid item xs={12} sm={3} onClick={paper}>
                        <Paper className="paperOne" style={{ padding: 10, borderRadius: '14px', background: '#FFFDFA', border: '2px Solid #F7B500', color: '#F7B500' }}>
                            <div className="ml-2" style={{ textAlign: 'start', fontWeight: 'bolder' }}>
                                Total Contacts {" "}
                            </div>
                            <div class="row justify-content-between">
                                <div className="ml-2" >
                                    <div class="col-6 ml-2">
                                        <h5 style={{ fontWeight: 'bolder' }}>
                                            {props.leaderStatic.sumContacts ? props.leaderStatic.sumContacts : "0"}</h5>
                                    </div>
                                </div>
                                <div class="col-4" >
                                    <Avatar style={{ background: '#FFFFFF', boxShadow: '0px 0px 20px #00000033' }}>
                                        <img src={iconOne} style={{ height: '50%' }} />
                                    </Avatar>
                                </div>
                            </div>
                            <div className="row" style={{ margin: '1px', fontWeight: 'bolder' }}>
                            </div>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={3} onClick={() => { window.location.assign('https://papers.dev.leader.codes/admin/ruth109476@gmail.com') }}>
                        <Paper className="paperTwo" style={{ padding: 10, background: '#ECFAFA', border: '2px Solid #01DCD1', color: '#01DCD1', borderRadius: '14px' }}>
                            <div className="ml-2" style={{ textAlign: 'start', fontWeight: 'bolder' }}>
                                Total Papers {" "}
                            </div>
                            <div class="row justify-content-between">
                                <div className="ml-2" >
                                    <div class="col-6 ml-2">
                                        <h5> {props.leaderStatic.sumPapers ? props.leaderStatic.sumPapers : "0"}</h5>
                                    </div>
                                </div>
                                <div class="col-4" >
                                    <Avatar style={{ background: '#FFFFFF', boxShadow: '0px 0px 20px #00000033' }}>
                                        <img src={iconTwo} style={{ height: '50%' }} />
                                    </Avatar>
                                </div>
                            </div>
                            <div className="row" style={{ margin: '1px' }}>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Paper className="paperThree" style={{ padding: 10, background: '#F2F3FF', border: '2px Solid #6772DE', color: '#6772DE', borderRadius: '14px' }}>
                            <div className="ml-2" style={{ textAlign: 'start', fontWeight: 'bolder' }}>
                                Total Projects {" "}
                            </div>
                            <div class="row justify-content-between">
                                <div className="ml-2">
                                    <div class="col-6 ml-2">
                                        <h5>
                                            {props.leaderStatic.sumProjects ? props.leaderStatic.sumProjects : "0"}
                                        </h5>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <Avatar style={{ background: '#FFFFFF', boxShadow: ' 0px 0px 20px #00000033' }}>
                                        <img src={iconThree} />
                                    </Avatar>
                                </div>
                            </div>
                            <div className="row" style={{ margin: '1px' }}>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={3} >
                        <Paper className="paperFour" style={{ padding: 10, background: '#FFF5FD', border: '2px Solid #FD51DB', color: '#FD51DB', borderRadius: '14px' }}>
                            <div className="cardFor" className="ml-2 cardFor" style={{ textAlign: 'start', fontWeight: 'bolder' }}>
                                Total Tasks  {" "}
                            </div>
                            <div class="row justify-content-between">
                                <div class=" ml-2">
                                    <div className=" col-6 ml-2" >
                                        <h5>{props.leaderStatic.sumTasks ? props.leaderStatic.sumTasks : "0"}
                                        </h5>
                                    </div>
                                </div>
                                <div class="col-4" >
                                    <Avatar style={{ background: '#FFFFFF', boxShadow: '0px 0px 20px #00000033' }}>
                                        <img src={iconFour} />
                                    </Avatar>
                                </div>
                            </div>
                            <div className="row" style={{ margin: '1px' }}>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
            {/* ----------------------------filter by: day ,week, month----------------------------------------------------- */}
            <div>
                <div class="row" style={{ direction: "rtl", paddingLeft: "30%" }}>
                    ‎
                    <Button variant="contained" style={{ background: "lightslategrey", marginRight: "520px", height: "20px", font: "normal normal 600 14px/66px SF Pro Display" }} color="primary" onClick={filterByYear}>Year</Button>
                    <Button variant="contained" style={{ background: "lightslategrey", marginRight: "3px", height: "20px", font: "normal normal 600 14px/66px SF Pro Display" }} color="primary" onClick={filterByMonth}>Month</Button>
                    <Button variant="contained" style={{ background: "lightslategrey", marginRight: "3px", height: "20px", font: "normal normal 600 14px/66px SF Pro Display" }} color="primary" onClick={filterByWeek}>Week</Button>
                    <Button variant="contained" style={{ background: "lightslategrey", marginRight: "3px", height: "20px", font: "normal normal 600 14px/66px SF Pro Display" }} color="primary" onClick={filterByDay}>Day</Button>

                </div>
            </div>
        </div>
    )



}
const mapStateToProps = (state) => {
    return {
        dataStatic: state.staticDetailsReducer.dataStatic,
        sumStatic: state.staticDetailsReducer.sumStatic,
        leaderStatic: state.staticDetailsReducer.leaderStatic
    };
}
const mapDispatchToProps = (dispatch) => ({
    changeSumStatic: (data) => dispatch(actions.setSumStatic(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Information));
