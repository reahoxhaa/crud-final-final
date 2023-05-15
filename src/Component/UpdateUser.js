import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FetchUserObj, FunctionUpdateUser } from "../Redux/Action";

const UpdateUser = () => {
    const [id, idChange] = useState(0);
    const [name, nameChange] = useState('');
    const [email, emailChange] = useState('');
    const [phone, phoneChange] = useState('');
    const [role, roleChange] = useState('Administration');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {code} = useParams(); 

    const userobj=useSelector((state)=>state.user.userobj)

    const handleSubmit = (e) => {
        e.preventDefault();
        const userobj = { id, name, email, phone, role };
        dispatch(FunctionUpdateUser(userobj, id));
        navigate('/user');
    }
    useEffect(() => { 
      dispatch(FetchUserObj(code));
    }, [])

    useEffect(() => { 
        if(userobj){
            idChange(userobj.id);
            nameChange(userobj.name);
            emailChange(userobj.email);
            phoneChange(userobj.phone);
            roleChange(userobj.role);

        }
      }, [userobj])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="card " style={{ margin: "20px" }}>
                    <div className="card-header" style={{ textAlign: 'center' }}>
                        <h2> Edit User </h2>
                    </div>
                    <div className="card-body" style={{ textAlign: 'left' }}>
                        <div className="row">
                        <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Id</label>
                                    <input value={id || ''}  disabled="disabled" className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input value={name || ''} onChange={e => nameChange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input value={email || ''} onChange={e => emailChange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input value={phone || ''} onChange={e => phoneChange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Role</label>
                                    <select value={role || ''} onChange={e => roleChange(e.target.value)} className="form-control">
                                    <option value="Administration">Administration</option>
                                        <option value="Finance">Finance</option>
                                        <option value="Human Resources">Human Resources</option>
                                        <option value="Project Management">Project Management</option>
                                        <option value="Product Development">Product Development</option>
                                        <option value="Research and Development">Research and Development</option>
                                        <option value="Marketing">Marketing</option>
                                        <option value="Accounting">Accounting</option>
                                    </select>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="card-footer" style={{ textAlign: 'left' }}>
                        <button className="btn btn-primary" type="submit">Submit</button>  &nbsp;
                        <Link className="btn btn-danger" to={'/user'}>Back</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default UpdateUser;