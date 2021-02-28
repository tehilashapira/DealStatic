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
import { useSelector, useDispatch } from 'react-redux'
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Container } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Pagination from 'react-bootstrap/Pagination'
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FcNext, FcPrevious } from "react-icons/fc";
import { indexOf } from '@amcharts/amcharts4/.internal/core/utils/Array';


// -------get new date in correct format to filter data----------------------------------------------------

// const arrTime=['Day','Wee','Mon','Yea']
// 


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
export default withStyles(useStyles)(function Information() {
    const ReducerData = useSelector(state => state.staticDetailsReducer)
    const dispatch = useDispatch()

// ------------------Functions to scroll the arrows of the date-----------------------------
    function chooseTimeNext() {
        debugger

        var y = ReducerData.choose
        console.log(y)
        var x = ReducerData.arrTime.indexOf(ReducerData.choose);

        if (x != 3) {
            x = x + 1

        }

        else {
            x = 0
        }

        dispatch(actions.IsChooseNext(x))
        var filter= ReducerData.arrTime[x]
        switch (filter) {
            case 'Day':   filterByDay()
                break;
            case 'Week':  filterByWeek()
                break;
            case 'Month': filterByMonth()
                break;
            default:      filterByYear()
                break;
        }
    }



    function chooseTimePrevious() {
        var y = ReducerData.choose
        console.log(y)
        var x = ReducerData.arrTime.indexOf(ReducerData.choose);

        if (x != 0) {
            x = x - 1
        }

        else {
            x = 3
        }
        var filter= ReducerData.arrTime[x]
        switch (filter) {
            case 'Day':  filterByDay()
                break;
            case 'Week': filterByWeek()
                break;
            case 'Month': filterByMonth()
                break;

            default:      filterByYear()
                break;
        }
        dispatch(actions.IsChoosePrevious(x))

    }




    //  ---filter by: last day,last week,last month,year
    function filterByDay() {

        let AllTaskData = (ReducerData.AllTask).filter(function (AllTask) {
            const dateTask = AllTask.startDate.split("/")
            const dateFormater = dateTask[1] + "/" + dateTask[0] + "/" + dateTask[2];
            return (dateFormater == currentDate)

        })

        let AllContactData = (ReducerData.AllContact).filter(function (AllContact) {
            const dateContact1 = (AllContact.createDateAndTime)
            let detaContact = moment(dateContact1).format("MM/DD/YYYY");
            return (detaContact == currentDate)
        })
        let AllProjectData = (ReducerData.AllProject).filter(function (AllProject) {
            const dateProject = AllProject.dueDate.split("/")
            const dateFormater = dateProject[1] + "/" + dateProject[0] + "/" + dateProject[2];
            return (dateFormater == currentDate)
        })

        let AllPapersData = (ReducerData.AllPapers).filter(function (AllPapers) {

            const datePaper1 = AllPapers.createdDate
            let detaPaper = moment(datePaper1).format("MM/DD/YYYY");
            return (detaPaper == currentDate)
        })
        dispatch(actions.setTaskStatic(AllTaskData.length))
        dispatch(actions.setContactStatic(AllContactData.length))
        dispatch(actions.setProjectStatic(AllProjectData.length));
        dispatch(actions.setPaperStatic(AllPapersData.length));
        dispatch(actions.ClickFilter(1));

    }
    function filterByYear() {
        let AllProjectData = (ReducerData.AllProject).filter(function (AllProject) {
            const dateProject = AllProject.dueDate.split("/")
            const dateFormater = dateProject[1] + "/" + dateProject[0] + "/" + dateProject[2];
            return (new Date(dateFormater) >= new Date(dateBeforeYear))

        })
        let AllPapersData = (ReducerData.AllPapers).filter(function (AllPapers) {

            const datePaper1 = AllPapers.createdDate
            let detaPaper = moment(datePaper1).format("MM/DD/YYYY");
            // const dateFormater = detaPaper[1] + "/" + detaPaper[0] + "/" + detaPaper[2];
            return (new Date(detaPaper) >= new Date(dateBeforeYear))

        })
        let AllTaskData = (ReducerData.AllTask).filter(function (AllTask) {

            const dateTask = AllTask.startDate.split("/")
            const dateFormater = dateTask[1] + "/" + dateTask[0] + "/" + dateTask[2];
            return (new Date(dateFormater) >= new Date(dateBeforeYear))

        })
        let AllContactData = (ReducerData.AllContact).filter(function (AllContact) {
            const dateContact1 = (AllContact.createDateAndTime)

            let detaContact = moment(dateContact1).format("MM/DD/YYYY");
            return (new Date(detaContact) >= new Date(dateBeforeYear))

        })
        dispatch(actions.setContactStatic(AllContactData.length))
        dispatch(actions.setTaskStatic(AllTaskData.length))
        dispatch(actions.setProjectStatic(AllProjectData.length));
        dispatch(actions.setPaperStatic(AllPapersData.length));
        dispatch(actions.ClickFilter(1));

    }
    function filterByWeek() {
        let AllProjectData = (ReducerData.AllProject).filter(function (AllProject) {
            const dateProject = AllProject.dueDate.split("/")
            const dateFormater = dateProject[1] + "/" + dateProject[0] + "/" + dateProject[2];
            return (new Date(dateFormater) >= new Date(dateBeforeWeek))
        })
        let AllPapersData = (ReducerData.AllPapers).filter(function (AllPapers) {

            const datePaper1 = AllPapers.createdDate
            let detaPaper = moment(datePaper1).format("MM/DD/YYYY");
            // const dateFormater = detaPaper[1] + "/" + detaPaper[0] + "/" + detaPaper[2];
            return (new Date(detaPaper) >= new Date(dateBeforeWeek))

        })

        let AllTaskData = (ReducerData.AllTask).filter(function (AllTask) {
            const dateTask = AllTask.startDate.split("/")
            const dateFormater = dateTask[1] + "/" + dateTask[0] + "/" + dateTask[2];
            return (new Date(dateFormater) >= new Date(dateBeforeWeek))

        })
        let AllContactData = (ReducerData.AllContact).filter(function (AllContact) {
            const dateContact1 = (AllContact.createDateAndTime)
            let detaContact = moment(dateContact1).format("MM/DD/YYYY");
            return (new Date(detaContact) >= new Date(dateBeforeWeek))

        })
        dispatch(actions.setProjectStatic(AllProjectData.length));
        dispatch(actions.setPaperStatic(AllPapersData.length));
        dispatch(actions.setContactStatic(AllContactData.length))
        dispatch(actions.setTaskStatic(AllTaskData.length))
        dispatch(actions.ClickFilter(1));
    }
    function filterByMonth() {
        let AllProjectData = (ReducerData.AllProject).filter(function (AllProject) {
            const dateProject = AllProject.dueDate.split("/")
            const dateFormater = dateProject[1] + "/" + dateProject[0] + "/" + dateProject[2];
            return (new Date(dateFormater) >= new Date(dateBeforeMonth))
        })
        let AllPapersData = (ReducerData.AllPapers).filter(function (AllPapers) {

            const datePaper1 = AllPapers.createdDate
            let detaPaper = moment(datePaper1).format("MM/DD/YYYY");
            // const dateFormater = detaPaper[1] + "/" + detaPaper[0] + "/" + detaPaper[2];
            return (new Date(detaPaper) >= new Date(dateBeforeMonth))

        })
        let AllTaskData = (ReducerData.AllTask).filter(function (AllTask) {
            const dateTask = AllTask.startDate.split("/")
            const dateFormater = dateTask[1] + "/" + dateTask[0] + "/" + dateTask[2];
            return (new Date(dateFormater) >= new Date(dateBeforeMonth))

        })
        let AllContactData = (ReducerData.AllContact).filter(function (AllContact) {
            const dateContact1 = (AllContact.createDateAndTime)
            let detaContact = moment(dateContact1).format("MM/DD/YYYY");
            return (new Date(detaContact) >= new Date(dateBeforeMonth))

        })

        dispatch(actions.setProjectStatic(AllProjectData.length));
        dispatch(actions.setPaperStatic(AllPapersData.length));
        dispatch(actions.setContactStatic(AllContactData.length))
        dispatch(actions.setTaskStatic(AllTaskData.length))
        dispatch(actions.ClickFilter(1));
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
                    <Grid item xs={12} sm={3}>
                        <Paper className="paperOne" style={{ cursor: 'pointer', padding: 10, borderRadius: '14px', background: '#FFFDFA', border: '2px Solid #F7B500', color: '#F7B500' }}>
                            <div className="ml-2" style={{ textAlign: 'start', fontWeight: 'bolder' }}>
                                Total Contacts {" "}
                            </div>
                            <div class="row justify-content-between">
                                <div className="ml-2" >
                                    <div class="col-6 ml-2">
                                        <h5 style={{ fontWeight: 'bolder' }}>
                                            {ReducerData.leaderStatic.sumContacts ? ReducerData.leaderStatic.sumContacts : "0"}</h5>
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

                    <Grid item xs={12} sm={3}>
                        <Paper className="paperTwo" onClick={() => { window.location.assign('https://papers.dev.leader.codes/admin/ruth109476@gmail.com') }} style={{ padding: 10, background: '#ECFAFA', cursor: 'pointer', border: '2px Solid #01DCD1', color: '#01DCD1', borderRadius: '14px' }}>
                            <div className="ml-2" style={{ textAlign: 'start', fontWeight: 'bolder' }}>
                                Total Papers {" "}
                            </div>
                            <div class="row justify-content-between">
                                <div className="ml-2" >
                                    <div class="col-6 ml-2">
                                        <h5> {ReducerData.leaderStatic.sumPapers ? ReducerData.leaderStatic.sumPapers : "0"}</h5>
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
                    <Grid item xs={12} sm={3}  >
                        <Paper className="paperThree" style={{ cursor: 'pointer', padding: 10, background: '#F2F3FF', border: '2px Solid #6772DE', color: '#6772DE', borderRadius: '14px' }}>
                            <div className="ml-2" style={{ textAlign: 'start', fontWeight: 'bolder' }}>
                                Total Projects {" "}
                            </div>
                            <div class="row justify-content-between">
                                <div className="ml-2">
                                    <div class="col-6 ml-2">
                                        <h5>
                                            {ReducerData.leaderStatic.sumProjects ? ReducerData.leaderStatic.sumProjects : "0"}
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
                    <Grid item xs={12} sm={3}  >
                        <Paper className="paperFour" style={{ padding: 10, background: '#FFF5FD', border: '2px Solid #FD51DB', color: '#FD51DB', borderRadius: '14px', cursor: 'pointer' }}>
                            <div className="cardFor" className="ml-2 cardFor" style={{ textAlign: 'start', fontWeight: 'bolder' }}>
                                Total Tasks  {" "}
                            </div>
                            <div class="row justify-content-between">
                                <div class=" ml-2">
                                    <div className=" col-6 ml-2" >
                                        <h5>{ReducerData.leaderStatic.sumTasks ? ReducerData.leaderStatic.sumTasks : "0"}
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
            <Container>
                <Navbar expand="lg" variant="light" bg="light">
                    <Navbar.Brand href="#">Contacts</Navbar.Brand>
                    <Navbar.Brand href="#">Papers</Navbar.Brand>
                    <Navbar.Brand href="#">Projects</Navbar.Brand>
                    <Navbar.Brand href="#">Tasks</Navbar.Brand>
                    {/* <div class="container"> 
    <BsChevronLeft></BsChevronLeft>
    <BsChevronRight></BsChevronRight>
    </div> */}
                    <div class="container" style={{ paddingLeft: "62%" }}>

                        <FcPrevious onClick={(e) => chooseTimePrevious(e)}></FcPrevious>
                       
                        {ReducerData.choose}

                        <FcNext onClick={(e) => chooseTimeNext(e)}></FcNext>

                    </div>


                    <div style={{ paddingLeft: "60%" }}>
                        <DropdownButton id="dropdown-basic-button" title="Choose Time">
                            <Dropdown.Item href="#/action-1">Day</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Week</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Month</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Year</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </Navbar>
            </Container>
            {/* ----------------------------filter by: day ,week, month----------------------------------------------------- */}



            <div>
                <div class="row" style={{ direction: "rtl", paddingLeft: "30%" }}>
                    ‎
                    {/* <Button variant="contained" style={{ background: "lightslategrey", marginRight: "520px", height: "20px", font: "normal normal 600 14px/66px SF Pro Display" }} color="primary" onClick={filterByYear}>Year</Button>
                    <Button variant="contained" style={{ background: "lightslategrey", marginRight: "3px", height: "20px", font: "normal normal 600 14px/66px SF Pro Display" }} color="primary" onClick={filterByMonth}>Month</Button>
                    <Button variant="contained" style={{ background: "lightslategrey", marginRight: "3px", height: "20px", font: "normal normal 600 14px/66px SF Pro Display" }} color="primary" onClick={filterByWeek}>Week</Button>
                    <Button variant="contained" style={{ background: "lightslategrey", marginRight: "3px", height: "20px", font: "normal normal 600 14px/66px SF Pro Display" }} color="primary" onClick={filterByDay}>Day</Button> */}

                </div>
            </div>
        </div>
    )
})


