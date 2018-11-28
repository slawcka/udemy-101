import React,{Component} from 'react';
import '../css/style.css';

const getYear=()=>{
    const newDate=new Date();
    return newDate.getFullYear();
}

class Header extends Component{

    state={
        input:''
    }
    handler=(ev)=>{
        this.setState({
            input: ev.target.value
        });
    }
    render(){
        const styles={
            header:{
                background:'#03a9f4'
            },
            logo:{
                color:'#fff',
                fontFamily:'Anton',
                textAlign:'center'
            }
        }
        return (
            <header style={styles.header} >
                <div className="logo" style={styles.logo}>logo</div>
                <input type="text" onChange={this.handler}/>
            </header>
        )
    }
}

export default Header;