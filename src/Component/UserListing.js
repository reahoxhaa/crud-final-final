import { FetchUserList, RemoveUser } from "../Redux/Action";
import { connect } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


const UserListing = (props) => {
    useEffect(()=> {
        props.loaduser();
    }, [])

    const handleDelete = (code) => {
        if (window.confirm('Are you sure you want to delete?')) {
             props.removeuser(code);
             props.loaduser(); 
             toast.success('User Deleted Successfully!');
             
            // window.location.href = "http://localhost:3000/user";
        }
    }
    return( 
        props.user.loading?<div><h2>Loading....</h2></div>:
        props.user.errmessage?<div><h2>{props.user.errmessage}</h2></div>:

        <div>
            <div className="card " style={{margin:"20px"}}>
                <div className="card-header d-flex justify-content-between">
                    <h4> Users List </h4>
                    <Link to={'/user/add'} className="btn btn-success  ">Add new</Link>
                </div>
                    <div className="card-body " style={{  }}>
                    <table className="table table-hover  table-bordered " >
                        <thead className="table-dark text-white " >
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone Number</td>
                                <td>Role</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody className="table-light">
                            {
                                props.user.userlist && props.user.userlist.map(item=>
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.role}</td>
                                        <td>
                                            <Link to={'/user/edit/' + item.id} className="btn btn-primary">Edit</Link> &nbsp;
                                            <button onClick={() =>{handleDelete(item.id)}} className="btn btn-danger">Delete</button>
                                        </td>

                                    </tr>
                                    )
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loaduser: () => dispatch(FetchUserList()),
        removeuser: (code) => dispatch(RemoveUser(code))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserListing);