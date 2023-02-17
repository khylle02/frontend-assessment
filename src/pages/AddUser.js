import React, { useState } from "react";
import { Grid, TextField, Button, Card, CardContent, Snackbar, Alert} from '@mui/material';
import { useDispatch, useSelector, useStore } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../redux/users/userSlice"
import { v4 as uuidv4 } from 'uuid';
import { setFormError } from "../redux/errorSlice";


const AddUser = () =>{
    const dispatch = useDispatch();
    const store = useStore();
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);
    const [values, setValues] = useState({
        name: {
            firstname: '',
            middleInitial: '',
            lastName: '',
        },
        number: '',
        email: '',
        password:'',
        birthdate: '',
        age: '',
    });

    const validate = (value) => {
        if(value == undefined || value==null || value == ''){
            dispatch(setFormError(true))
        }
    }
    const handleAddUser = () => {
        setSubmitted(true);
        dispatch(setFormError(false))
        for (const key in values) {
            if(key == "name"){
                for (const n in values[key]) {
                    validate(values[key][n]);
                }
            }
            else{
                validate(values[key]);
            }
        }
        console.log("values", values);
        console.log("store.getState()", store.getState());
        
        if(!store.getState().error.form){
            dispatch(addUser({
                id: uuidv4(),
                name: values.name,
                number: values.number,
                email: values.email,
                password: values.password,
                birthdate: values.birthdate,
                age: values.age
            }))
            navigate('/displayfields')
        }
    }
    
    // const calculate_age = () => {
    //     const birthDate = new Date(values.birthdate); 
    //     const difference = Date.now() - birthDate.getTime();
    //     const age = new Date(difference);
    //     return Math.abs(age.getUTCFullYear() - 1970);
    // }
    const calculate_age = (birthDate) => {
        console.log("birthDate", birthDate);
        birthDate = new Date(birthDate); 
        const otherDate = new Date();
        var years = (otherDate.getFullYear() - birthDate.getFullYear());
        console.log("years", years);
        if (otherDate.getMonth() < birthDate.getMonth() || 
            otherDate.getMonth() == birthDate.getMonth() && otherDate.getDate() < birthDate.getDate()) {
            years--;
        }
 
        return years;
    }

    const setAge = (birthdate) => {
        const birthDate = new Date(birthdate); 
        if(birthDate.getFullYear() >= 1900 ){
            const age = calculate_age(birthdate)
            if(!isNaN(age)){
                setValues({ ...values, birthdate})
                setValues({ ...values, age})
            }
        }
    }
    return(
        <>
            <div>
                <h1>Home</h1>
            </div>
            <div>
            <Grid>
                <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
                    <CardContent>
                            <form>
                                <Grid container spacing={1}>
                                    <Grid xs={12} sm={8} item>
                                            <TextField placeholder="Enter first name" label="First Name" 
                                            onChange={(e) => setValues((prevState)=>{ 
                                                const newState = {...prevState}
                                                newState.name.firstname = e.target.value;
                                                return newState;
                                            })}
                                            variant="outlined"
                                            error={submitted && values.name.firstname==''}
                                            fullWidth />
                                    </Grid>
                                    <Grid xs={12} sm={4} item>
                                        <TextField placeholder="Enter M.I." label="M.I." variant="outlined" 
                                        onChange={(e) => setValues((prevState)=>{ 
                                            const newState = {...prevState}
                                            newState.name.middleInitial = e.target.value;
                                            return newState;
                                        })}
                                        fullWidth 
                                        error={submitted && values.name.middleInitial==''}
                                        required/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField placeholder="Enter last name" label="Last Name" variant="outlined" 
                                        onChange={(e) => setValues((prevState)=>{ 
                                            const newState = {...prevState}
                                            newState.name.lastName = e.target.value;
                                            return newState;
                                        })}
                                        error={submitted && values.name.lastName==''}
                                        fullWidth required />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField type="number" InputProps={{ inputProps: { min: 0, max: 11 } }} placeholder="Enter phone number" label="Phone" variant="outlined"
                                        onChange={(e) => setValues({ ...values, number: e.target.value })} 
                                        error={submitted && values.number==''}
                                        fullWidth required />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" 
                                        onChange={(e) => setValues({ ...values, email: e.target.value })} 
                                        error={submitted && values.email==''}
                                        fullWidth required />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField type="password" placeholder="Enter password" label="Password" variant="outlined" 
                                        
                                        onChange={(e) => setValues({ ...values, password: e.target.value })} 
                                        error={submitted && values.password==''}
                                        fullWidth required />
                                    </Grid>
                                    <Grid xs={12} sm={6} item>
                                        <TextField id="date" label="Birthday" type="date" defaultValue={values.birthdate} sx={{ width: 200 }} InputLabelProps={{ shrink: true, }} 
                                        onChange={(e) =>  setAge(e.target.value)} 
                                        error={submitted && values.birthdate==''}
                                        fullWidth required /> 
                                    </Grid>
                                    <Grid xs={12} sm={6} item>
                                        <TextField disabled id="age-disabled" label="Age" variant="filled"
                                        value = {values.age}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button onClick={handleAddUser} variant="contained" color="primary" fullWidth>Submit</Button>
                                    </Grid>
                                </Grid>
                            </form>
                    </CardContent>
                </Card>
            </Grid>
            {
                store.getState().error.nav ? 
                <Snackbar open={true} autoHideDuration={6000} anchorOrigin={{ vertical:"top", horizontal:"right" }}>
                    <Alert severity="warning" sx={{ width: '100%' }}>
                        Please complete the form
                    </Alert>
                </Snackbar>
                :""
            }
            
            </div>
        </>
    )
}

export default AddUser;