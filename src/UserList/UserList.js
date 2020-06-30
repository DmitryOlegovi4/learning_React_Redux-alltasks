import React, {Component} from 'react';
import API from './AxiosReqres';
import UserCard from "./UserCard";
import './UserList.css';
import UserUpdate from "./UserUpdate";


class UserList extends Component{
    constructor(props){
        super(props);
        this.state = {
            users: []
        };
        API.getUsers(result=>this.setUsers(result.data.data));
    }
    setUsers(data){
        this.setState({
            users: data
        })
    }
    addUser = (user) =>{
        this.setState((prev)=>{
            prev.users.push(user);
            return prev
        });
    }
    render(){
        console.log(this.state.users);
        const data = this.state.users;
        if (data){
            return(
            <div>
                <h2>Пользователи</h2>
                <div className='UserList'>{data.map((item, i)=><UserCard key={i} user={item}/>)}</div>
                <hr/>
                <UserUpdate addUser={this.addUser}/>
            </div>
        )}else{
            return (
                <div>

                </div>
            )
        }
    }
}

export default UserList;