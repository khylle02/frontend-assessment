import React, { useState } from "react";
import { Grid, TextField, Button, Card, CardContent} from '@mui/material';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../redux/users/userSlice"
import { v4 as uuidv4 } from 'uuid';
import Box from '@mui/material/Box';

const AddUser = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [values, setValues] = useState({
    firstname: '',
    middleInitial: '',
    lastName: '',
    number: '',
    email: '',
    password:'',
    birthdate: '',
    age: '',
    });

    const handleAddUser = () => {
    setValues({ firstname: '' , middleInitial: '', lastName: '', number: '', email: '', password: '', birthdate: '', age: '' });
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
    }));
    navigate('/');
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
                                            value={values.firstname}
                                            onChange={(e) => setValues({ ...values, firstname: e.target.value })} variant="outlined"
                                            fullWidth required />
                                    </Grid>
                                    <Grid xs={12} sm={4} item>
                                        <TextField placeholder="Enter M.I." label="M.I." variant="outlined" 
                                        onChange={(e) => setValues({ ...values, middleInitial: e.target.value })}  
                                        fullWidth required/>
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
                                        onChange={(e) => setValues({ ...values, birthdate: e.target.value })} 
                                        fullWidth required /> 
                                    </Grid>
                                    <Grid xs={12} sm={6} item>
                                        <TextField disabled id="age-disabled" label="Age" defaultValue="Age" variant="filled" 
                                        onChange={(e) => setValues({ ...values, age: e.target.value })}
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