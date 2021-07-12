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
const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Link to="/">
                        <img className={classes.logo} src={logo} alt="" />
                    </Link>
                    <Typography variant="h6" >MTD Bank</Typography>
                    <Button className={classes.button}>ABOUT US</Button>
                    <Button className={classes.button}>PRODUCTS</Button>
                    <Button className={classes.button}>PACKAGE</Button>
                    <Button className={classes.button}>CONTACT US</Button>
                    <div className={classes.spacer}>
                        <Link to="/login" className={classes.headerLink}>
                            <div className={classes.headerOption}>
                                <span className={classes.headerLineOne}>Hello</span>
                                <span className={classes.headerLineTwo}>Sign In</span>
                            </div>
                            <div className={classes.headerOption}>
                                <span className={classes.headerLineOne}>New User</span>
                                <span className={classes.headerLineTwo}>Registration</span>
                            </div>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
