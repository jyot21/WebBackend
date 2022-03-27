import { makeStyles } from '@mui/styles';
import React from 'react';
import ReactDOM from 'react-dom';


const  useStyles = makeStyles({
  "appStyle" : {
    marginTop: '150px',
    height: '250px',
    display: 'flex'
  },

  "formStyle" : {
    margin: 'auto',
    padding: '10px',
    border: '1px solid #c9c9c9',
    borderRadius: '5px',
    background: '#f5f5f5',
    width: '220px',
    display: 'block'
  },

  "submitStyle" : {
    margin: '10px 0 0 0',
    padding: '7px 10px',
    border: '1px solid #efffff',
    borderRadius: '3px',
    background: '#3085d6',
    width: '100%', 
    fontSize: '15px',
    color: 'white',
    display: 'block'
  },

  "labelStyle" : {
    margin: '10px 0 5px 0',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '15px',
  },

  "inputStyle" : {
    margin: '5px 0 10px 0',
    padding: '5px', 
    border: '1px solid #bfbfbf',
    borderRadius: '3px',
    boxSizing: 'border-box',
    width: '100%'
  }


});

const Field = React.forwardRef(({label, type}, ref) => {
  const classes = useStyles();
    return (
      <div>
        <label className={classes["labelStyle"]} >{label}</label>
        <input ref={ref} type={type} className={classes["inputStyle"]} />
      </div>
    );
});

const Form = ({onSubmit}) => {
    const classes = useStyles();
    const usernameRef = React.useRef();
    const passwordRef = React.useRef();
    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        };
        onSubmit(data);
    };
    return (
      <form className={classes["formStyle"]} onSubmit={handleSubmit} >
        <Field ref={usernameRef} label="Username:" type="text" />
        <Field ref={passwordRef} label="Password:" type="password" />
        <div>
          <button className={classes["submitStyle"]} type="submit">Login</button>
        </div>
      </form>
    );
};

const Login = () => {
  const classes = useStyles();
    const handleSubmit = data => {
        const json = JSON.stringify(data, null, 4);
        console.clear();
        console.log(json);
    };
    return (
      <div className={classes["appStyle"]}>
        <Form onSubmit={handleSubmit} />
      </div>
    );
};

export default Login;