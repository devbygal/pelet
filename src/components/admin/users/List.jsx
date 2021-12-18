import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { accountService } from '../../_services';

export const List = () => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        accountService.getAll().then(x => setUsers(x));
    }, []);

    function deleteUser(id) {
        setUsers(users.map(x => {
            if (x.id === id) { x.isDeleting = true; }
            return x;
        }));
        accountService.deleteUser(id).then(() => {
            setUsers(users => users.filter(x => x.id !== id));
        });
    }

    return (
        <div>
            <h1>משתמשים</h1>
            <p>כל המשתמשים לניהול בלבד:</p>
            <Link to="/admin/users/add" className="btn btn-sm btn-success m-1">הוסף משתמש</Link>
            <Table striped bordered hover variant="dark" responsive="sm">
                <thead className="thead-users">
                    <tr>
                        <th>מס משתמש</th>
                        <th colSpan={2}>אסימון</th>
                        <th colSpan={2}>שם מלא</th>
                        <th>סוג משתמש</th>
                        <th colSpan={2}>דוא"ל</th>
                        <th>אישר דוא"ל</th>
                        <th colSpan={3}>סיסמה</th>
                        <th colSpan={3}>נוצר בתאריך</th>
                        <th colSpan={2}></th>
                    </tr>
                </thead>
                <tbody className="tbody-users">
                    {users && users.map((user, index) =>
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td colSpan={2}>{user.verificationToken}</td>
                            <td colSpan={2}>{user.firstName} {user.lastName}</td>
                            <td>{user.roleUser}</td>
                            <td colSpan={2}>{user.email}</td>
                            {user.isVerified &&
                                <td>כן</td>
                            }
                            <td colSpan={3}>{user.password}</td>
                            <td colSpan={3}>{user.dateCreated}</td>
                            <td colSpan={2} style={{ whiteSpace: 'nowrap' }}>
                                <Link to={`/admin/users/edit/${user.id}`} className="btn btn-sm btn-primary">ערוך</Link>
                                <button onClick={() => deleteUser(user.id)} className="btn btn-sm btn-danger" style={{ width: '60px' }} disabled={user.isDeleting}>
                                    {user.isDeleting
                                        ? <span className="spinner-border spinner-border-sm"></span>
                                        : <span>מחיקה</span>
                                    }
                                </button>
                            </td>
                        </tr>
                    )}
                    {!users &&
                        <tr>
                            <td colSpan="17" className="text-center">
                                <span className="spinner-border spinner-border-lg align-center"></span>
                            </td>
                        </tr>
                    }
                </tbody>
            </Table>
        </div>
    );
}