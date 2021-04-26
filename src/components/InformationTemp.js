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
import v from '../img/v.png'
import { actions } from '../Redux/actions/staticAction'
import SpeedometerAppointments from './SpeedometerAppointments'
import SpeedometerPresentations from './SpeedometerPresentations'
import SpeedometerDeals from './SpeedometerDeals'
import SpeedometerNewContacts from './SpeedometerNewContacts'
import { BsCheck } from "react-icons/bs";
import Toggle from 'react-toggle'

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

    const [check1, setCheck1] = useState(true)
    const [check2, setCheck2] = useState(false)
    const [check3, setCheck3] = useState(false)
    const [check4, setCheck4] = useState(false)


    const [flag1, setflag1] = useState(false)
    const [flag2, setflag2] = useState(false)
    const [flag3, setflag3] = useState(false)
    const [flag4, setflag4] = useState(false)



    const ReducerData = useSelector(state => state.staticDetailsReducer)
    const dispatch = useDispatch()


    function buttonCheck1(e) {
        e.currentTarget.placeholder = ""
        setCheck1(true)
        $(".myInput1").css("background-color", "white")
        setflag1(true); setflag2(false); setflag3(false); setflag4(false)
    }
    function buttonCheck2(e) {
        setflag2(true); setflag1(false); setflag3(false); setflag4(false)
        e.currentTarget.placeholder = ""
        setCheck2(true)
        $(".myInput2").css("background-color", "white")

    }
    function buttonCheck3(e) {
        setflag3(true); setflag1(false); setflag2(false); setflag4(false)
        e.currentTarget.placeholder = ""
        setCheck3(true)
        $(".myInput3").css("background-color", "white")

    }
    function buttonCheck4(e) {
        setflag4(true); setflag1(false); setflag2(false); setflag3(false)
        e.currentTarget.placeholder = ""
        setCheck4(true)
        $(".myInput4").css("background-color", "white")

    }
    function CurrentValues(typeNumber, valueGoal) {
        switch (typeNumber) {
            case 1:
                setCheck1(false)
                break;
            case 2:
                setCheck2(false)
                break;
            case 3:
                setCheck3(false)
                break;
            case 4:
                setCheck4(false)
                break;


        }

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
                            {/* <Toggle 
                             onToggle={e => console.log("onToggle", e.target.checked)}/> */}

                            {/* <label htmlFor='cheese-status'>Adjacent label tag</label> */}
                        </div>
                        <div className="col-3.5" style={{ direction: "rtl" }}>
                            <div className="col-3.5" style={{ direction: "rtl" }}>
                            </div></div>‏
             <Grid container spacing={4}>
                            <Grid item xs={12} sm={3}>
                                <Paper className="paperOne" style={{ cursor: 'pointer', padding: 10, borderRadius: '14px', background: 'white', color: '#C1EAF8', height: '100px', width: '240px' }}>
                                    <div className="ml-2" style={{ textAlign: 'start', fontWeight: 'bolder', color: "#000000" }}>
                                        Total appointments {" "}
                                    </div>
                                    <div class="row justify-content-between">
                                        <div className="ml-2" >
                                            <div class="col-6 ml-2">
                                                <h6 style={{ color: "#000000", fontSize: "19px" }}>
                                                    {(ReducerData.GoalsStatic.appointmentsSum ? ReducerData.GoalsStatic.appointmentsSum : "0") + "/" + (ReducerData.CurrentValuesGoals.appointmentsSum ? ReducerData.CurrentValuesGoals.appointmentsSum : "0")}
                                                </h6>
                                                <div className="gouge">
                                                    <SpeedometerAppointments flag={flag1} className="gouge1"></SpeedometerAppointments>
                                                </div>
                                                <div className="d-flex flex-row">
                                                    <label>
                                                        <Toggle
                                                            id='cheese-status'
                                                            defaultChecked={check1}
                                                            onChange={!check1}
                                                            icons={false} />
                                                    </label>
                                                    <span type="text">Set Goal</span>
                                                </div>
                                                {/* <input
                                                            onFocus={(e) => buttonCheck1(e)}
                                                            onBlur={(e) => e.currentTarget.placeholder = 'Set Goal'}
                                                            placeholder="Set Goal"
                                                            onChange={(e) => {
                                                                setValueGoal1(e.target.value);
                                                                setflag1(true); setflag2(false); setflag3(false); setflag4(false)
                                                            }}
                                                            className="myInput1 hover1" type="text" value={valueGoal1}


                                                        ></input> */}
                                                {/* </div> */}
                                                <div>
                                                    {/* {
                                                            check1 ? */}

                                                    {/* // <button onClick={() => CurrentValues(1, valueGoal1)} style={{ backgroundColor: "#2FAAF4", height: "26px", marginTop: "-1px", border: "1px solid #2FAAF4", opacity: "1" }}><BsCheck color="white"></BsCheck></button> */}

                                                    {/* : ""

                                                        } */}

                                                </div></div>

                                        </div>
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
                                                <h6 style={{ color: "#000000", fontSize: "19px" }}>
                                                    {(ReducerData.GoalsStatic.presentationsSum ? ReducerData.GoalsStatic.presentationsSum : "0") + "/" + (ReducerData.CurrentValuesGoals.presentationsSum ? ReducerData.CurrentValuesGoals.presentationsSum : "0")}
                                                </h6>
                                                <div className="gouge">
                                                    <SpeedometerPresentations flag={flag2} className="gouge1"></SpeedometerPresentations>
                                                </div>
                                                {/* <div  onClick={() => { window.location.assign('https://pay.leader.codes/') }}  className="upladge" style={{ backgroundColor: "#4BBAFD" ,textAlign: "center"}}>upradge</div> */}
                                            </div>
                                            <div className="d-flex flex-row" style={{ marginLeft: "22px" }}>
                                                <div>
                                                    <input
                                                        onFocus={(e) => { buttonCheck2(e) }}
                                                        onBlur={(e) => e.currentTarget.placeholder = 'Set Goal'}
                                                        placeholder="Set Goal"
                                                        onChange={
                                                            (e) => {
                                                                debugger; setValueGoal2(e.target.value);
                                                                setflag2(true); setflag1(false); setflag3(false); setflag4(false)
                                                            }
                                                        }
                                                        className="myInput2 hover2" placeholder="Set Goal" type="text" value={valueGoal2} >

                                                    </input></div>

                                                {
                                                    check2 ?

                                                        <button onClick={() => CurrentValues(2, valueGoal2)} style={{ backgroundColor: "#2FAAF4", height: "26px", marginTop: "-1px", border: "1px solid #2FAAF4", opacity: "1" }}><BsCheck color="white"></BsCheck></button>

                                                        : ""

                                                }

                                                {/* <div>
                                                    <button onClick={() => CurrentValues(2, valueGoal2)} style={{ backgroundColor: "#2FAAF4", height: "26px", marginTop: "-1px", border: "1px solid #2FAAF4", borderRadius: " 3px", opacity: "1" }}>      <BsCheck color="white"></BsCheck></button>
                                                </div> */}
                                            </div>

                                        </div>

                                    </div>


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
                                                    {(ReducerData.GoalsStatic.dealsSum ? ReducerData.GoalsStatic.dealsSum : "0") + "/" + (ReducerData.CurrentValuesGoals.dealsSum ? ReducerData.CurrentValuesGoals.dealsSum : "0")} </h6>
                                                <div className="gouge">
                                                    <SpeedometerDeals flag={flag3} className="gouge1"></SpeedometerDeals>
                                                </div>
                                                <div className="d-flex flex-row">
                                                    <div>
                                                        <input
                                                            onFocus={(e) => { buttonCheck3(e) }}
                                                            onBlur={(e) => e.currentTarget.placeholder = 'Set Goal'}
                                                            placeholder="Set Goal"
                                                            onChange={(e) => {
                                                                setValueGoal3(e.target.value);
                                                                setflag3(true); setflag1(false); setflag2(false); setflag4(false)
                                                            }}
                                                            className="myInput3 hover3" placeholder="Set Goal" type="text" value={valueGoal3} >
                                                        </input></div>

                                                    {
                                                        check3 ?

                                                            <button onClick={() => CurrentValues(3, valueGoal3)} style={{ backgroundColor: "#2FAAF4", height: "26px", marginTop: "-1px", border: "1px solid #2FAAF4", opacity: "1" }}><BsCheck color="white"></BsCheck></button>

                                                            : ""

                                                    }
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-4">

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
                                                <h6 style={{ color: "#000000", fontSize: "19px" }}>
                                                    {(ReducerData.GoalsStatic.newContactsSum ? ReducerData.GoalsStatic.newContactsSum : "0") + "/" + (ReducerData.CurrentValuesGoals.newContactsSum ? ReducerData.CurrentValuesGoals.newContactsSum : "0")}
                                                </h6>

                                                <div className="gouge">
                                                    <SpeedometerNewContacts flag={flag4} className="gouge1"></SpeedometerNewContacts>

                                                </div>

                                                <div className="d-flex flex-row">
                                                    <div>
                                                        <input
                                                            onFocus={(e) => { buttonCheck4(e) }}
                                                            onBlur={(e) => e.currentTarget.placeholder = 'Set Goal'}
                                                            placeholder="Set Goal"
                                                            onChange={(e) => {
                                                                debugger; setValueGoal4(e.target.value);
                                                                setflag4(true); setflag1(false); setflag2(false); setflag3(false)
                                                            }} className="myInput4 hover4" placeholder="Set Goal" type="text" value={valueGoal4} >

                                                        </input></div>

                                                    {
                                                        check4 ?
                                                            <button onClick={() => CurrentValues(4, valueGoal4)} style={{ backgroundColor: "#2FAAF4", height: "26px", marginTop: "-1px", border: "1px solid #2FAAF4", opacity: "1" }}><BsCheck color="white"></BsCheck></button>

                                                            : ""
                                                    }

                                                </div>
                                            </div>
                                        </div>
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
        </div >

    )
})