import { makeStyles } from "@material-ui/core";

import "./App.css";

import Header from "./components/Header";
import HomePage from "./pages/Homepage";
import CoinPage from "./pages/CoinPage";

import { BrowserRouter, Route } from "react-router-dom";
//using matrial ui for styling
const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Route path="/" component={HomePage} exact />
        <Route path="/coins/:id" component={CoinPage} exact />
      </div>
      </BrowserRouter>
  
  );
}

export default App;