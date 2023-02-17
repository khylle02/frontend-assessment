import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../redux/users/userSlice";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const DisplayFields = () => {
    const dispatch = useDispatch();
    const users = useSelector(store => store.users);

    const handleRemoveUser = (id) => {
        dispatch(deleteUser({ id }));
    }

    return (
        <div>
        <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>First Name</TableCell>
                            <TableCell align="right">Middle Initial</TableCell>
                            <TableCell align="right">Last Name</TableCell>
                            <TableCell align="right">Number</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Password</TableCell>
                            <TableCell align="right">Birthday</TableCell>
                            <TableCell align="right">Age</TableCell>
                            <TableCell align="right">Remove</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {/* firstname: values.firstname,
        middleInitial: values.middleInitial,
        lastName: values.lastName,
        number: values.number,
        email: values.email,
        password: values.password,
        birthdate: values.birthdate,
        age: values.age */}
                        {users.map((user, id)=>{
                            return<TableRow key={id}>
                            <TableCell>{user.name.firstname}</TableCell>
                            <TableCell align="right">{user.name.middleInitial}</TableCell>
                            <TableCell align="right">{user.name.lastName}</TableCell>
                            <TableCell align="right">{user.number}</TableCell>
                            <TableCell align="right">{user.email}</TableCell>
                            <TableCell align="right">{user.password}</TableCell>
                            <TableCell align="right">{user.birthdate}</TableCell>
                            <TableCell align="right">{user.age}</TableCell>
                            <TableCell align="right"><Button onClick={() => handleRemoveUser(user.id)}>Remove</Button></TableCell>
                        </TableRow>
                        })}
                        </TableBody>
                    </Table>
        </TableContainer>
        </div>
    )
}

export default DisplayFields