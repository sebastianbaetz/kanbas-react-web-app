import * as client from "./client";
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Alert} from "react-bootstrap";

function Account() {
    const [account, setAccount] = useState(null);
    const navigate = useNavigate();
    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };
    const save = async () => {
        await client.updateUser(account);
    };
    const signout = async () => {
        await client.signout();
        navigate("/project/signin");
    };


    useEffect(() => {
        fetchAccount();
    }, []);
    return (
        <div className="w-50">
            <h1>Account</h1>
            {account && (
                <div>
                    <input value={account.password} className={'form-control'} type={"password"} placeholder={'Password'}
                           onChange={(e) => setAccount({ ...account,
                               password: e.target.value })}/>
                    <input value={account.firstName} className={'form-control'} placeholder={'First Name'}
                           onChange={(e) => setAccount({ ...account,
                               firstName: e.target.value })}/>
                    <input value={account.lastName} className={'form-control'} placeholder={'Last Name'}
                           onChange={(e) => setAccount({ ...account,
                               lastName: e.target.value })}/>
                    <input value={account.dob} className={'form-control'} type={'date'} placeholder={'Date of Birth'}
                           onChange={(e) => setAccount({ ...account,
                               dob: e.target.value })}/>
                    <input value={account.email} className={'form-control'} placeholder={'Email'}
                           onChange={(e) => setAccount({ ...account,
                               email: e.target.value })}/>
                    <select onChange={(e) => setAccount({ ...account,
                        role: e.target.value })} className={"form-select"}>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>

                    <button onClick={save} className="btn btn-primary w-100">
                        Save
                    </button>

                    <Link to="/project/admin/users" className="btn btn-warning w-100">
                        Users
                    </Link>
                    <button onClick={signout} className="btn btn-danger w-100">
                        Signout
                    </button>



                </div>
            )}
            {!account && (
                <>
                    <Alert variant="danger">You have entered bad credentials</Alert>
                </>
            )}
        </div>
    );
}
export default Account;