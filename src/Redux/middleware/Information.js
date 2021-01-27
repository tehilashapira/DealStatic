import React, {
  Component
} from 'react';
import { connect } from 'react-redux';
import {
  withStyles
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import GradeIcon from '@material-ui/icons/Grade';
import CheckIcon from '@material-ui/icons/Check';
import FlagIcon from '@material-ui/icons/Flag';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import TrendingUpOutlinedIcon from '@material-ui/icons/TrendingUpOutlined';
import SignalCellularAltOutlinedIcon from '@material-ui/icons/SignalCellularAltOutlined';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import Button from '@material-ui/core/Button';
import SalesDetails from '../Statistics/SalesDetails'
import BBoutton from '../Statistics/button'
import GFLastmonth from '../Statistics/GFLastmonth'
// import Iframe from 'react-iframe'

const useStyles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  },
  paper: {
    // padding: theme.spacing(1),
    // textAlign: 'center',
    // color: theme.palette.text.secondary,
    // whiteSpace: 'nowrap',
    // marginBottom: theme.spacing(1),
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  },
})
class information extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      title: "",
      checked: false,
    };
  }
  clickButton=()=>{
   console.log(this.props.staticData);
  }
  render() {
    const leads = this.props.staticData;
    return (


      <div className="container " style={{ background: '#FCFDFD', borderRadius: '10px' }}>
        <div className="row justify-content-between">
          <div className="col-3">
            leads Information
    </div>
          <div className="col-3.5"></div>
          <div className="col-3.5">
            <Button color="primary" onClick={this.clickButton}>
              <SignalCellularAltOutlinedIcon fontSize="small" />graph</Button>
            <Button disabled><ListOutlinedIcon fontSize="small" />list</Button>
          </div>
        </div>
        {/* <br></br> */}
        <div className="row" style={{ margin: '5px' }}>
          <Grid container spacing={3} >
            <Grid item xs={12} sm={3}>
              <Paper className={useStyles.paper} style={{ padding: 10, background: 'linear-gradient(45deg, #FDC551 30%, #FD4EA1 90%)' }}>
             Total   {this.props.staticData[0] ?this.props.staticData[0].title:""}
          <div class="row justify-content-between">
                  <div class="col-6">
                  <h5> {this.props.staticData[0] ?this.props.staticData[0].summary:""}</h5>
                  </div>
                  <div class="col-5">
                    <Avatar style={{ background: '#FFFFFF' }}>
                      <FlagIcon style={{ color: '#FF8E53' }} />
                    </Avatar>
                  </div>
                </div>
                <div className="row" style={{ margin: '1px' }}>
                  <Typography variant="caption"><TrendingUpOutlinedIcon fontSize="small" />8.5% Up from yesterday</Typography>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Paper className={useStyles.paper} style={{ padding: 10, background: 'linear-gradient(219deg, #01DBD8 0%, #02E79D 100%)' }}>Total  {this.props.staticData[1] ?this.props.staticData[1].title:""}
          <div class="row justify-content-between">
                  <div class="col-6">
    <h5> {this.props.staticData[1] ?this.props.staticData[1].summary:""}</h5>

                  </div>
                  <div class="col-5" >
                    <Avatar style={{ background: '#FFFFFF' }}>
                      <CheckIcon style={{ color: '#02E79D' }} />
                    </Avatar>
                  </div>
                </div>
                <div className="row" style={{ margin: '1px' }}>
                  <Typography variant="caption"><TrendingUpOutlinedIcon fontSize="small" />8.5% Up from yesterday</Typography>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Paper className={useStyles.paper} style={{ padding: 10, background: 'linear-gradient(219deg, #5475E3 0%, #C367C7 100%) ' }}>
                Total  {this.props.staticData[3] ?this.props.staticData[3].title:""}
          <div class="row justify-content-between">
                  <div class="col-6">
                  <h5> {this.props.staticData[3] ?this.props.staticData[3].summary:""}</h5>

                  </div>
                  <div class="col-5">
                    <Avatar style={{ background: '#FFFFFF' }}>
                      <DescriptionOutlinedIcon style={{ color: '#C367C7' }} />
                    </Avatar>
                  </div>
                </div>
                <div className="row" style={{ margin: '1px' }}>
                  <Typography variant="caption"><TrendingUpOutlinedIcon fontSize="small" />8.5% Up from yesterday</Typography>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Paper className={useStyles.paper} style={{ padding: 10, background: 'linear-gradient(219deg, #FD51DB 0%, #E467E0 13%, #6CD1F7 83%, #4EECFD 100%) ' }}>
                Total  {this.props.staticData[2] ?this.props.staticData[2].title:""}
          <div class="row justify-content-between">
                  <div class="col-6">
                  <h5> {this.props.staticData[2] ?this.props.staticData[2].summary:""}</h5>
                  </div>
                  <div class="col-5" >
                    <Avatar style={{ background: '#FFFFFF' }}>
                      <HeadsetMicIcon style={{ color: '#E467E0 ' }} />
                    </Avatar>
                  </div>
                </div>
                <div className="row" style={{ margin: '1px' }}>
                  <Typography variant="caption"><TrendingUpOutlinedIcon fontSize="small" />8.5% Up from yesterday</Typography>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
        <br></br>
        {/* <div><GFLastmonth></GFLastmonth>
          <SalesDetails></SalesDetails></div> */}
        <br></br>
      </div>
    )
  }


}
const mapStateToProps = (state) => {
  return {
    // staticData:(state)=>state({type:'INIT_DATA'}),
    staticData: state.staticDetails.dataStatic
  };
}

export default connect(mapStateToProps)(withStyles(useStyles)(information));