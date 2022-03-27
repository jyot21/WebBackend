import React from 'react';
import './user.css'
import { makeStyles } from "@mui/styles";
import student from '../../assets/images/student.png';
import faculty from '../../assets/images/faculty.png';
import admin from '../../assets/images/admin.png';



const useStyles = makeStyles({
    "main":{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: "100px"
    },

    "box":{
        textAlign: "center",
        height: "250px",
        width: "300px",
        border: "2px solid black"
    },

    "user":{
        borderBottom: "2px solid black",
        background: "#03C03C",
        paddingTop: "10px",
        height:"50px",
        fontWeight:"700",
        fontSize:"25px"
    },

    "faculty_icon":{
        height:"150px",
        padding: "15px"
    },

    "student_icon":{
        height:"150px",
        padding: "15px"
    },

    "admin_icon":{
        height:"150px",
        padding: "15px"
    }
});

const User = () => {
    const classes = useStyles();

    return(
        <>
            <div className={classes["main"]}>
                <div className={classes["box"]}>
                    <div className={classes["user"]}>
                        Student Login
                    </div>
                    <div className={classes["icon"]}>
                        <img className={classes["student_icon"]} src={student} alt="NULL" />
                    </div>
                    
                </div>
                
                <div className={classes["box"]}>
                    <div className={classes["user"]}>
                            Faculty Login
                        </div>
                        <div>
                            <img className={classes["faculty_icon"]} src={faculty} alt="NULL" />
                        </div>
                    </div>
                <div className={classes["box"]}>
                    
                <div className={classes["user"]}>
                        Admin Login
                    </div>
                    <div className={classes["icon"]}>
                        <img className={classes["admin_icon"]} src={admin} alt="NULL" />
                    </div>
                </div>

            </div>
        </>
    );
}

export default User;