import{BrowserRouter,Route}from "react-router-dom";
import './App.css';
import Header from './components/Header';
import CoinPage from "./pages/CoinPage";
import Homepage from "./pages/Homepage";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#FFFFFF",
    color: "black",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>

        <Header />
       
        <Route path="/" component={Homepage} exact />
        <Route path="/coins/:id" component={CoinPage} exact />
       
      </div>
    </BrowserRouter>
  );
}

export default App;