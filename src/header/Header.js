import React from 'react';
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "./Header.css";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// eslint-disable-next-line 
import { PlayCircleFilledWhite } from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    button: {
        paddingLeft: "50px",
        color: "white",
        fontWeight: "15px",


    },
    logo: {
        width: "50px",
        objectFit: "contain",
    },
    headerLink: {
        color: "white",
        textDecoration: "none",
        display: "flex",
        alignItems: "right",
    },
    headerOption: {
        display: "flex",
        flexDirection: "column",
        marginLeft: "10px",
        marginRight: "10px",
    },
    headerLineOne: {
        fontSize: "13px",
    },
    headerLineTwo: {
        fontSize: "15px",
        fontWeight: "bold",
    },
    spacer: {
        paddingLeft: "20vw",
    },
}));
function Header() {
    const classes = useStyles();
    const showAboutUs = () => {
        const elmnt = document.getElementById("About");
        if (elmnt) {
            elmnt.scrollIntoView();
        }
    };
    const showProduct = () => {
        const elmnt = document.getElementById("product");
        if (elmnt) {
            elmnt.scrollIntoView();
        }
    };
    const showPackage = () => {
        const elmnt = document.getElementById("Package");
        if (elmnt) {
            elmnt.scrollIntoView();
        }
    };
    const showContactUs = () => {
        const elmnt = document.getElementById("Contactus");
        if (elmnt) {
            elmnt.scrollIntoView();
        }
    };
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Link to="/">
                        <img className="header__logo" src={logo} alt="" />
                    </Link>
                    <Typography variant="h6" color="inherit">
                        MTD Bank
                    </Typography>
                    <Button className={classes.button} onClick={showAboutUs}>
                        About Us
                    </Button>
                    <Button className={classes.button} onClick={showProduct}>
                        Product
                    </Button>
                    <Button className={classes.button} onClick={showPackage}>
                        Package
                    </Button>
                    <Button className={classes.button} onClick={showContactUs}>
                        Contact Us
                    </Button>
                    <div className={classes.spacer}></div>
                    <Link to="/login" className="header__link">
                        <div className="header__option">
                            <span className="header__lineOne">Hello</span>
                            <span className="header__lineTwo">Sign In</span>
                        </div>
                    </Link>
                    <Link to="/register" className="header__link">
                        <div className="header__option">
                            <span className="header__lineOne">New User</span>
                            <span className="header__lineTwo">Register</span>
                        </div>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header
