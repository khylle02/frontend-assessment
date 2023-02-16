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

const UserList = () => {
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
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Middle Initial</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Remove</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {users.map((user, id)=>{
                            return<TableRow key={id}>
                            <TableCell>{user.firstname}</TableCell>
                            <TableCell align="right">{user.middleInitial}</TableCell>
                            <TableCell align="right">{user.lastName}</TableCell>
                            <TableCell align="right">{user.number}</TableCell>
                            <TableCell align="right">{user.email}</TableCell>
                            <TableCell align="right">{user.password}</TableCell>
                            <TableCell align="right">{user.birthday}</TableCell>
                            <TableCell align="right">{user.age}</TableCell>
                            <TableCell align="right"><Button onClick={() => handleRemoveUser(user.id)}>Remove</Button></TableCell>
                        </TableRow>
                        })}
                        </TableBody>
                    </Table>
        </TableContainer>
        <div>
        <Link to="/add-user"><Button>Add User</Button></Link>
        </div>
        </div>
    )
}

export default UserList