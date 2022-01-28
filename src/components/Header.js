import { AppBar,Container,Toolbar,Typography ,Select, makeStyles, MenuItem} from '@material-ui/core';
import { mergeClasses } from '@material-ui/styles';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { CryptoState } from '../cryptoContext';

const useStyles = makeStyles(() => ({
    title: {
      flex: 1,
      color: "Blue",
      fontFamily: "Montserrat",
      fontWeight: "bold",
      cursor: "pointer",
    },
  }));


const Header = () => {
    const classes = useStyles();
    const  history=useHistory();
    const{currency,setCurrency}=CryptoState();

    console.log(currency);


  return (
    <AppBar color='transparent' position="static">
          <Container>
              <Toolbar>

                  <Typography onClick={history.push("/")}className={classes.title} >Crypto Tracker</Typography>

                  <Select
                  variant="outlined"
                  style={{
                      width:100,
                      height:40,
                      marginLeft:15,
                  }}
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  
                  
                  >

                      <MenuItem  value={"USD" }> USD</MenuItem>
                      <MenuItem  value={"INR" }> INR</MenuItem>
                     

                  </Select>




              </Toolbar>





          </Container>

      </AppBar>

  )






};

export default Header;
