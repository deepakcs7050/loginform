import React, { useState, useEffect } from 'react'
import InputField from './InputField/InputField'
import { makeStyles } from '@material-ui/core/styles';
import Button from './Button/Button'
import Header from './Header/Header'

const useStyles = makeStyles({
  container: {
    width: '100%',
  },
  mB: {
    marginBottom: '40px',
  },
  mB2: {
    marginBottom: '20px',
  },
  width: {
    width: '240px',
  },
  picker: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

const styles = {
  left: {
    height: "250px",
    position: "sticky",
    top: 0,
    width: "250px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  mid: {
    width: "100%",
    height: "100%",
  },
  back: {
    marginLeft: "5.5px",
    marginTop: "40px",
    marginBottom: "40px"
  }
};
const Login = props => {

  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [err, setErr] = useState({ error: false, errorMsg: {} });


  const classes = useStyles();

  

  const submit = () => {
    const errors = { error: false, errorMsg: {} };
    const emailErr = validateEmail();
    const passwordErr = validatePassword();
    if (!emailErr.isValid) {
      errors.error = true;
      errors.errorMsg["email"] = emailErr.err;
    }
    else if (!passwordErr.isValid) {
      errors.error = true;
      errors.errorMsg["password"] = passwordErr.err;
    } 
    setErr(errors);
    if (errors.error) {
      return;
    }
  }


    const validateEmail = () => {
      const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      let emailErr = "";
      if (email.length === 0) {
        emailErr = "Please Enter eMail id";
      } else if (!pattern.test(email)) {
        emailErr = "Please enter valid email id";
      }
      return {
        isValid: emailErr === "" ? true : false,
        err: emailErr
      };
    };

    const validatePassword = () => {
      const pattern = /^[a-zA-Z]*$/;
      let passwordErr = "";
      if (password.length === 0) {
        passwordErr = "Please enter the password";
      } else if (password.length < 6) {
        passwordErr = "Password should contain atleast 6 characters";
      } else if (!pattern.test(password)) {
        passwordErr = "password can contail only alphabets";
      }
      return {
        isValid: passwordErr === "" ? true : false,
        err: passwordErr
      };
    };

    return (
      <>
        <div style={styles.left}>
          <div>
            <Button
              text
              style={styles.back}
              icon={<i className="fas fa-arrow-left" />}>
            </Button>
          </div>
        </div>
        <div className={styles.container}>
          <Header title="Let’s start" fontSize="36px" style={{ marginTop: '80px', marginBottom: '40px' }} />

          <div className={classes.mB2}>
            <InputField
              onChange={setEmail}
              value={email}
              error={err.errorMsg.email ? err.errorMsg.email.length : false}
              errorMsg={err.errorMsg && err.errorMsg.email}
              label="Email"
            />
          </div>
          <div className={classes.mB}>
            <InputField 
            type="password" 
            value={password}
             label="Password"
              onChange={setpassword}
              error={err.errorMsg.password ? err.errorMsg.password.length : false}
            errorMsg={err.errorMsg && err.errorMsg.password}
             />
          </div>
          <div className={classes.mB}>
            <Button value="Submit" large onClick={submit} right icon={<i className="fas fa-greater-than"></i>} />
          </div>
        </div>

      </>
    );
  };

  export default Login
