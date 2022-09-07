import React from "react";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import CallMadeIcon from '@mui/icons-material/CallMade';
import Loanhistory from "./Loanhistory";
import CurrentDetails from "./CurrentDetails";
import DiasporaSMEloan from "./DiasporaSMEloan";
const useStyles = makeStyles((theme) => ({
  statwrapper:{
    padding: "20px",
  },
  getloan:{
    backgroundColor: "#ffe9c5",
    width: "40%",
    padding: "10px",
    float: "left",
    borderRadius: "10px",
    marginTop: "20px",
    [theme.breakpoints.down("md")]:{
      width: "100%",
    },
    "& h4":{
      float: "left",
      fontSize: "14px"
    }
  },
  getcapital:{
    backgroundColor: "#ffe9c5",
    width: "40%",
    padding: "10px",
    float: "left",
    borderRadius: "10px",
    marginTop: "20px",
    marginLeft: "20px",
    [theme.breakpoints.down("md")]:{
      width: "100%",
      marginLeft: "0",
      marginBottom: "10px"
    },
    "& h4":{
      float: "left",
      fontSize: "14px"
    }
  },
  links:{
    float: "right",
    width: "36px",
    height: "36px",
    textAlign: "center",
    lineHeight: "51px",
    backgroundColor: "#fff",
    borderRadius: "100%"
  },
  fundstats:{
    backgroundColor: "#fcab00",
    width: "100%",
    height: "200px",
    padding: "20px",
    borderRadius: "5px"
  },
  fundstatsnumbers:{
    width: "100%",
    background: "#fec41b",
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "10px"
  },
  loanhistory:{
    marginTop: "15px ",
    "& h4":{
      padding: "20px",
      
    }
  },
  currentdetailswrapper:{
    padding: "10px"
  }
}));
const Funding = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Grid container >
      <Grid item xs={12} sm={8} >
        <Paper >
          <Grid container >
            <Grid item xs={12} sm={8}>
              <div className={classes.statwrapper}>
              <h4>Get more funding today!</h4>
              <p >
                What kind of funding would you like to get for your business?
              </p>
              <div className={classes.getloan}>
                <h4 >Get <br/> A Loan </h4>
                <span className={classes.links}>
               < CallMadeIcon/>
                </span>
              </div>
              <div className={classes.getcapital}>
                <h4 >Get <br/> Private Capital </h4>
                <span className={classes.links}>
               < CallMadeIcon/>
                </span>
              </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={4} container>
              <Grid item xs container direction="column" >
                <Grid item xs>
                  <div className={classes.fundstats}>
                  <h4> Fund Statistics </h4>
                  <div className={classes.fundstatsnumbers}>
                      <p><strong>KES 6,690,900</strong></p>
                      <small>Total private capital</small>
                  </div>
                  <div className={classes.fundstatsnumbers}>
                      <p><strong>KES 3,000,000</strong></p>
                      <small>Total loan borrowed</small>
                  </div>
                  </div>
                  
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <Grid container>
          <Grid item xs={12}>
            <Paper className={classes.loanhistory}>
            <h4> Loan History </h4>
              <Loanhistory/>
              </Paper>
            
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={4} >
        <Paper className={classes.currentdetailswrapper}><CurrentDetails/>
        <DiasporaSMEloan/>
        </Paper>
        
      </Grid>
    </Grid>
  );
};

export default Funding;
