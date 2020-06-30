import React, {Component} from 'react';
import './UserCard.css';


class UserCard extends Component{
    constructor({user}){
        super();
        this.photo = user.avatar;
        this.name = user.first_name;
        this.surname = user.last_name;
        this.email = user.email;
    }

    render(){
        return(
            <div className='UserCard'>
                <img src={this.photo}/>
                <h4>{this.name} {this.surname}</h4>
                <p>{this.email}</p>
            </div>
        )
    }
}

export default UserCard;