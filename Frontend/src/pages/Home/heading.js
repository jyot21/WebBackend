import React from "react";
import { makeStyles } from "@mui/styles";  
import logo from '../../assets/images/daiictlogo.jpeg';

const useStyles = makeStyles({

    "header":{
        height:"160px"
    },

    "heading":{
        textAlign: "center",
        background: "#007FFF",
        height: "60px",
        paddingTop: "10px",
        fontSize: "35px"
    },

    "logo":{
        height: "170px"
    }
});


const Heading = () => {
    const classes = useStyles();
    return(
        <>
        <div className={classes["header"]}>
            <img className={classes["logo"]} src={logo} alt="NULL" />
            <div className={classes["heading"]}>
                DAIICT ERP
            </div>
        </div>
        </>
        
        
    );
}

export default Heading;