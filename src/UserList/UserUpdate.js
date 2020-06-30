import React,{Component}  from "react";
import './UserUpdate.css';

class UserUpdate extends Component{
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            avatar: ''
        }
    }
    onChangeState(event, type){
        const value = event.target.value;
        this.setState(prev=>{
            prev[type] = value;
            return prev
        })
    }
    onChangeImage(event){
        const value = event.target.files[0] || '';
        let blobURL = URL.createObjectURL(value);
        this.setState(prev=>{
            prev.avatar = blobURL;
            return prev
        })
    }
    addUser(event){
        event.preventDefault();
        this.props.addUser(this.state);
    }

    render() {
        let imageElem ='';
        if(this.state.avatar){
            imageElem = <img src={this.state.avatar} />
        }
        return(
            <form className='UserUpdate' onSubmit={this.addUser.bind(this)}>
                <div>
                    <h3>Добавить пользователя:</h3>
                    <div>
                        <p>Имя</p>
                        <input onChange={(event)=>this.onChangeState(event, 'first_name')}/>
                    </div>
                    <div>
                        <p>Фамилия</p>
                        <input onChange={(event)=>this.onChangeState(event, 'last_name')}/>
                    </div>
                    <div>
                        <p>E-mail</p>
                        <input onChange={(event)=>this.onChangeState(event, 'email')}/>
                    </div>
                    <div>
                        <p>Фото</p>
                        <input type='file' onChange={(event)=>this.onChangeImage(event)}/>
                    </div>
                    <button>Добавить</button>
                </div>
                <div className='imageElem'>
                    <p>Предпросмотр фото</p>
                    {imageElem}
                </div>
            </form>
        )
    }
}

export default UserUpdate;