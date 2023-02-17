import React, { useState } from "react";
import { Grid, TextField, Button, Card, CardContent} from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../redux/users/userSlice"
import { v4 as uuidv4 } from 'uuid';
import { setError } from "../redux/errorSlice";


const AddUser = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const error = useSelector(store => store.error);
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
    useSelector(store => console.log(store))
    const [errors, setErrors] = useState({
        firstname: false,
        middleInitial: false,
        lastName: false,
        number: false,
        email: false,
        password: false,
        birthdate: false
        });

    const validate = (key) => {
        console.log(values[key])
        if(!values[key] || values[key] == ''){
            console.log('sad')
            setErrors({ ...errors, [key]: true})
            setError(true) 
        }
    }
    
    console.log('setError', error)
    const handleAddUser = () => {
        setError(false)
        for (const key in values) {
            validate(key)
        }
        console.log(errors)
        console.log('error', error)
        if(!error){
            dispatch(addUser({
                id: uuidv4(),
                firstname: values.firstname,
                middleInitial: values.middleInitial,
                lastName: values.lastName,
                number: values.number,
                email: values.email,
                password: values.password,
                birthdate: values.birthdate,
                age: values.age
            }))
            
            navigate('/displayfields')
        }
    }
    
    const calculate_age = () => {
        const birthDate = new Date(values.birthdate); 
        const difference = Date.now() - birthDate.getTime();
        const age = new Date(difference);
        return Math.abs(age.getUTCFullYear() - 1970);
    }

    const setAge = (birthdate) => {
        console.log(birthdate)
        const birthDate = new Date(birthdate); 
        if(birthDate.getFullYear() >= 1900 ){
            setValues({ ...values, birthdate})
            console.log(calculate_age())
            const age = calculate_age()
            console.log(age)
            if(!isNaN(age)){
                setValues({ ...values, age: calculate_age()})
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
                                            onChange={(e) => setValues({ ...values, firstname: e.target.value})}
                                            variant="outlined"
                                            fullWidth />
                                    </Grid>
                                    <Grid xs={12} sm={4} item>
                                        <TextField placeholder="Enter M.I." label="M.I." variant="outlined" 
                                        onChange={(e) => setValues({ ...values, middleInitial: e.target.value })}  
                                        fullWidth 
                                        required/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField placeholder="Enter last name" label="Last Name" variant="outlined" 
                                        onChange={(e) => setValues({ ...values, lastName: e.target.value })} 
                                        fullWidth required />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField type="number" InputProps={{ inputProps: { min: 0, max: 11 } }} placeholder="Enter phone number" label="Phone" variant="outlined"
                                        onChange={(e) => setValues({ ...values, number: e.target.value })} 
                                        fullWidth required />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" 
                                        onChange={(e) => setValues({ ...values, email: e.target.value })} 
                                        fullWidth required />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField type="password" placeholder="Enter password" label="Password" variant="outlined" 
                                        
                                        onChange={(e) => setValues({ ...values, password: e.target.value })} 
                                        fullWidth required />
                                    </Grid>
                                    <Grid xs={12} sm={6} item>
                                        <TextField id="date" label="Birthday" type="date" defaultValue="//-//-//" sx={{ width: 200 }} InputLabelProps={{ shrink: true, }} 
                                        onChange={(e) =>  setAge(e.target.value)} 
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
            </div>
        </>
    )
}

export default AddUser;