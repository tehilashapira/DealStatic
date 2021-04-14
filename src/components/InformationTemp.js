import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux'
import { Navbar, Container } from 'react-bootstrap';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import $ from 'jquery'

import './InformationTemp.css';
import iconFive from '../img/iconFive.png'
import iconOne from '../img/iconOne.png'
import iconTwo from '../img/iconTwo.png';
import iconThree from '../img/iconThree.png'
import flag from '../img/flag.png'
import v from '../img/v.png'
import forms from '../img/forms.png'
import { actions } from '../Redux/actions/staticAction'
import SpeedometerAppointments from './SpeedometerAppointments'
import SpeedometerPresentations from './SpeedometerPresentations'
import SpeedometerDeals from './SpeedometerDeals'
import SpeedometerNewContacts from './SpeedometerNewContacts'


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


    const [input, setInput] = useState("text")
    const [valueGoal1, setValueGoal1] = useState()
    const [valueGoal2, setValueGoal2] = useState()
    const [valueGoal3, setValueGoal3] = useState()
    const [valueGoal4, setValueGoal4] = useState()



    const ReducerData = useSelector(state => state.staticDetailsReducer)
    const dispatch = useDispatch()


    function CurrentValues(typeNumber, valueGoal) {
         
        // alert("lll")
        dispatch(actions.setGoalsServer({ typeNumber, valueGoal }))
        dispatch(actions.setGoalsServer1(valueGoal))

    }

    return (
        <div>

            <div style={{ backgroundColor: '#F5F5FA' }}>
                <div>
                    <div className="row pb-5" style={{ marginRight: '12%', marginLeft: '12%' }} >
                        <div className="col-3 " style={{ fontSize: "18px", fontFamily: "system-ui", fontWeight: "bold", marginBottom: "31px", marginTop: "25px", color: "black" }}>
                            Goals Information
                </div>
                        <div className="col-3.5" style={{ direction: "rtl" }}>
                            <div className="col-3.5" style={{ direction: "rtl" }}>
                            </div></div>‏
             <Grid container spacing={4}>
                            <Grid item xs={12} sm={3}>
                                <Paper className="paperOne" style={{ cursor: 'pointer', padding: 10, borderRadius: '14px', background: 'white', color: '#C1EAF8', height: '100px' }}>
                                    {/* ,border: '2px solid #4BBAFD' */}
                                    <div className="ml-2" style={{ textAlign: 'start', fontWeight: 'bolder', color: "#000000" }}>
                                        Total appointments {" "}
                                    </div>
                                    <div class="row justify-content-between">
                                        <div className="ml-2" >
                                            <div class="col-6 ml-2">
                                                {/* <h1>{ReducerData.CurrentValuesGoals.appointments}</h1> */}
                                                <h6 style={{ color: "#000000", fontSize: "19px" }}>
                                                    {ReducerData.GoalsStatic.appointmentsSum
                                                        ? ReducerData.GoalsStatic.appointmentsSum + "/" +
                                                        (ReducerData.CurrentValuesGoals.appointmentsSum) : "0/" + (ReducerData.CurrentValuesGoals.appointmentsSum)}</h6>
                                                <div className="gouge">
                                                    <SpeedometerAppointments className="gouge1"></SpeedometerAppointments></div>
                                                <div className="d-flex flex-row">
                                                    <div>
                                                        <input onChange={(e) => (setValueGoal1(e.target.value))} className="myInput" placeholder="Set Goal" type="number" value={valueGoal1} style={{ background: "#4BBAFD", border: "1px solid #2FAAF4", borderRadius: " 3px", opacity: "1", textAlign: "center" }}></input></div>
                                                    <div>
                                                        <button onClick={() => CurrentValues(1, valueGoal1)} style={{ backgroundColor: "white", height: "26px", marginTop: "-1px", border: "1px solid #2FAAF4", opacity: "1" }}>  <img src={v} style={{ height: '50%', color: "white" }} alt="V" /></button>
                                                    </div></div>

                                                {/* < button onClick={(e)=>updateGoals(e)}>ok</button> */}
                                                {/* <div onClick={() => { window.location.assign('https://pay.leader.codes/') }}  className="upladge" style={{ backgroundColor: "#4BBAFD" ,textAlign: "center"}}>upradge</div> */}
                                            </div>
                                        </div>

                                        {/* <div class="col-4" >
                                    <Avatar style={{ background: "#FFFFFF", boxShadow: '0px 0px 20px #00000033' }}>
                                        <img src={flag} style={{ height: '50%' }} alt="icon one" />
                                    </Avatar>
                                    
                                </div> */}
                                    </div>
                                    <div className="row" style={{ margin: '1px', fontWeight: 'bolder' }}>
                                    </div>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <Paper className="paperTwo" style={{ padding: 10, background: 'white', cursor: 'pointer', color: '#81ADD3', borderRadius: '14px', height: '100px', width: '240px' }}>
                                    <div className="ml-2" style={{ textAlign: 'start', fontWeight: 'bolder', color: "#000000" }}>
                                        Total presentations {" "}
                                    </div>
                                    <div class="row justify-content-between">
                                        <div className="ml-2" >
                                            <div class="col-6 ml-2">
                                                <h6 style={{ color: "#000000", fontSize: "19px" }}>  {ReducerData.GoalsStatic.presentationsSum ? ReducerData.GoalsStatic.presentationsSum + "/" + ReducerData.CurrentValuesGoals.presentationsSum : "0/500"}</h6>
                                                <div className="gouge">
                                                    <SpeedometerPresentations className="gouge1"></SpeedometerPresentations></div>
                                                {/* <div  onClick={() => { window.location.assign('https://pay.leader.codes/') }}  className="upladge" style={{ backgroundColor: "#4BBAFD" ,textAlign: "center"}}>upradge</div> */}
                                            </div>
                                            <div className="d-flex flex-row" style={{ marginLeft: "22px" }}>
                                                <div>
                                                    <input onChange={(e) => (setValueGoal2(e.target.value))} className="myInput" placeholder="Set Goal" type="number" value={valueGoal2} style={{ background: "#4BBAFD", border: "1px solid #2FAAF4", borderRadius: " 3px", opacity: "1", textAlign: "center" }}></input></div>
                                                <div>
                                                    <button onClick={() => CurrentValues(2, valueGoal2)} style={{ backgroundColor: "white", height: "26px", marginTop: "-1px", border: "1px solid #2FAAF4", opacity: "1" }}>  <img src={v} style={{ height: '50%', color: "white" }} alt="V" /></button>
                                                </div></div>

                                        </div>

                                    </div>
                                    {/* <div className="row" style={{ margin: '1px' }}>
                                    </div> */}
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={3}  >
                                <Paper className="paperThree" style={{ cursor: 'pointer', padding: 10, background: 'white', color: '#C1EAF8', borderRadius: '14px', height: '100px', width: '240px' }}>
                                    <div className="ml-2" style={{ textAlign: 'start', fontWeight: 'bolder', color: "#000000" }}>
                                        Total deals {" "}
                                    </div>
                                    <div class="row justify-content-between">
                                        <div className="ml-2">
                                            <div class="col-6 ml-2">
                                                <h6 style={{ color: "#000000", fontSize: "19px" }}>
                                                    {ReducerData.GoalsStatic.dealsSum ? ReducerData.GoalsStatic.dealsSum + "/" + ReducerData.CurrentValuesGoals.dealsSum : "0/500"}</h6>
                                                <div className="gouge">
                                                    <SpeedometerDeals className="gouge1"></SpeedometerDeals>
                                                </div>
                                                <div className="d-flex flex-row">
                                                    <div>
                                                        <input onChange={(e) => (setValueGoal3(e.target.value))} className="myInput" placeholder="Set Goal" type="number" value={valueGoal3} style={{ background: "#4BBAFD", border: "1px solid #2FAAF4", borderRadius: " 3px", opacity: "1", textAlign: "center" }}></input></div>
                                                    <div>
                                                        <button onClick={() => CurrentValues(3, valueGoal3)} style={{ backgroundColor: "white", height: "26px", marginTop: "-1px", border: "1px solid #2FAAF4", opacity: "1" }}>  <img src={v} style={{ height: '50%', color: "white" }} alt="V" /></button>
                                                    </div></div>

                                                {/* <div onClick={() => { window.location.assign('https://pay.leader.codes/') }} className="upladge" style={{ backgroundColor: "#4BBAFD" ,textAlign: "center"}}>upradge</div> */}

                                            </div>
                                        </div>
                                        <div class="col-4">
                                            {/* <Avatar style={{ background: '#FFFFFF', boxShadow: ' 0px 0px 20px #00000033' }}>
                                        <img src={forms} alt="icon three" />
                                    </Avatar> */}
                                        </div>
                                    </div>
                                    <div className="row" style={{ margin: '1px' }}>
                                    </div>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={3}  >
                                <Paper className="paperFour" style={{
                                    padding: 10, background: 'white'

                                    , color: '#C1EAF8', borderRadius: '14px', cursor: 'pointer', height: '100px', width: '240px'
                                }}>
                                    <div className="ml-2 cardFor" style={{ textAlign: 'start', fontWeight: 'bolder', color: "#000000" }}>
                                        Total newContacts  {" "}
                                    </div>
                                    <div class="row justify-content-between">
                                        <div class=" ml-2">
                                            <div className=" col-6 ml-2" >
                                                <h6 style={{ color: "#000000", fontSize: "19px" }}>{ReducerData.GoalsStatic.newContactsSum ? ReducerData.GoalsStatic.newContactsSum + "/" + ReducerData.CurrentValuesGoals.newContactsSum : "0/500"}
                                                </h6>

                                                <div className="gouge">
                                                    <SpeedometerNewContacts className="gouge1"></SpeedometerNewContacts>


                                                </div>

                                                <div className="d-flex flex-row">
                                                    <div>
                                                        <input onChange={(e) => (setValueGoal4(e.target.value))} className="myInput" placeholder="Set Goal" type="number" value={valueGoal4} style={{ background: "#4BBAFD", border: "1px solid #2FAAF4", borderRadius: " 3px", opacity: "1", textAlign: "center" }}></input></div>
                                                    <div>
                                                        <button onClick={() => CurrentValues(4, valueGoal4)} style={{ backgroundColor: "white", height: "26px", marginTop: "-1px", border: "1px solid #2FAAF4", opacity: "1" }}>  <img src={v} style={{ height: '50%', color: "white" }} alt="V" /></button>
                                                    </div></div>


                                            </div>
                                        </div>
                                    </div>
                                    <div className="row" style={{ margin: '1px' }}>
                                    </div>
                                </Paper>
                            </Grid>
                        </Grid>
                    </div>
                    <div className="div-container">
                        <Container className="p-0">
                            <div class="container p-0">
                                <div class="row">
                                    <div class="col-md-6 mb-0 text-time-container">
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                </div>
            </div>
        </div>

    )
})