import { Component } from "react";
class User extends Component {
  constructor(props) {
    super();
    this.state = { fname: "no name",lName:"Teka",age:22,email:"aviel260@gmail.com",password:"12345678"};
    this.printMyNameToLog = this.printMyNameToLog.bind(this);
    this.sendTheFormToTable = this.sendTheFormToTable.bind(this)
  }

  printMyNameToLog() {
    this.setState({ fname: this.state }.Fname = "aviel");
  }
sendTheFormToTable(e){
e.preventDefault()
  return(
    document.getElementById("display")
    .innerHTML=`
  <table>
<thead>
  <th>first name</th>
  <th>last name</th>
  <th>Age</th>
  <th>Email</th>
  <th>Password</th>

</thead>
<tbody>

<tr>
  <td>${this.state.fname}</td>
  <td>${this.state.lName}</td>
  <td>${this.state.age}</td>
  <td>${this.state.email}</td>
  <td>${this.state.password}</td>
</tr>
</tbody>

  </table>`
  )
}

fnameInpu=(e)=>{

  this.setState({fname:e.target.value})

}

lnameInpu=(e)=>{

  this.setState({lName:e.target.value})
}
ageInpu=(e)=>{

  this.setState({age:e.target.value})
}
emailInpu=(e)=>{

  this.setState({email:e.target.value})
}
passwordInpu=(e)=>{

  this.setState({password:e.target.value})
}




  render() {
    return (

      <div>
        {this.state.Fname}
        <br></br>
        <button  onClick={this.printMyNameToLog}>what my name </button>
        <br></br><br></br>
        <form>
        <label>
        First name:
          <input onChange={this.fnameInpu} placeholder="enter a name" Value={this.state.fname}></input>
        </label> <br></br>
        <label>
        Last name:
          <input onChange={this.lnameInpu} placeholder="enter a name" Value={this.state.lName}></input>
        </label> <br></br>
        <label>
        Age:
          <input onChange={this.ageInpu} placeholder="enter a name" Value={this.state.age}></input>
        </label> <br></br>
        <label>
          Email:
          <input onChange={this.emailInpu} placeholder="enter a name" Value={this.state.email}></input>
        </label><br></br>
        <label>
          Password:
          <input onChange={this.passwordInpu} placeholder="enter a name" Value={this.state.password}></input>
        </label><br></br><br></br>
        <button  onClick={this.sendTheFormToTable}>send</button>
        </form>
        <div id="display"></div>
       
      </div>
    );
  }
}
export default User;
