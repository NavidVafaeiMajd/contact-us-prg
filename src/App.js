import React, { Component } from 'react';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import ReactDOM from 'react-dom'


class App extends Component {
  state= {
    firstName : "",
    lastName : "",
    email :"",
  }

  render(handlefirstNameChange,handleSubmit,handlelastNameChange,handleEmailChange) { 
    handleSubmit =(e)=>{
    }
    handlefirstNameChange =(e)=>{
      const value = e.target.value;
      this.setState({firstName:value});
      if (!value.trim()) {
        document.getElementById(e.target.id).className = "form-control is-invalid";
        
      } else {
        document.getElementById(e.target.id).className = "form-control is-valid";
      };

    };
    handlelastNameChange =(e)=>{
      const value = e.target.value;
      this.setState({lastName:value});
      if (!value.trim()) {
        document.getElementById(e.target.id).className = "form-control is-invalid";
      } else {
        document.getElementById(e.target.id).className = "form-control is-valid";
      };

    };
    handleEmailChange =(e)=>{
      const value = e.target.value;
      this.setState({email:value});
      if (!value.trim()) {
        document.getElementById(e.target.id).className = "form-control is-invalid";
      } else {
        document.getElementById(e.target.id).className = "form-control is-valid";
      };

    };
    return (
      <>
        <div class="container p-4 d-flex d-flex ">
          <form class="row g-3"  onSubmit={handleSubmit}>
            <h1>Contact Us </h1>
            <div class="col-md-6">
              <label for="validationServer01" class="form-label">First name*</label>
              <input type="text" class="form-control " id="validationServer01"  onChange={handlefirstNameChange} value={this.state.firstName} required/>
              <div class="valid-feedback">
                Looks good!
              </div>
              <div id="validationServerUsernameFeedback" class="invalid-feedback">
                  Please Enter Your FirstName.
                </div>
            </div>
            <div class="col-md-6">
              <label for="validationServer02" class="form-label">Last name*</label>
              <input type="text" class="form-control " id="validationServer02" onChange={handlelastNameChange} value={this.state.lastName} required/>
              <div class="valid-feedback">
                Looks good!
              </div>
              <div id="validationServerUsernameFeedback" class="invalid-feedback">
              Please Enter Your LastName.
              </div>
            </div>
            <div class="col-md-12">
              <label for="validationServer03" class="form-label">Email*</label>
              <input type="email" class="form-control " id="validationServer03" onChange={handleEmailChange} value={this.state.email} required/>
              <div class="valid-feedback">
                Looks good!
              </div>
              <div id="validationServerUsernameFeedback"  class="invalid-feedback">
                  Please Enter Your Email.
                </div>
            </div>
            <div >
            <div class="form-check col-md-6">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label class="form-check-label" for="flexRadioDefault1">
                  General Enquiry
                </label>
              </div>
              <div class="form-check col-md-6">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                <label class="form-check-label" for="flexRadioDefault2">
                  Support Request  
                </label>
              </div>
            </div>
            <div className='col-12'>
              <div class="">
                <label for="exampleFormControlTextarea1">Massage*</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
            </div>
            <div class="col-12">
              <div class="form-check">
                <input class="form-check-input " type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required/>
                <label class="form-check-label" for="invalidCheck3">
                  Agree to terms and conditions
                </label>
              </div>
            </div>
            <div class="col-12">
              <button class="btn btn-primary" type="submit">Submit form</button>
            </div>
          </form>
        </div>        

      </>
    );

  }
 }

  
 export default App;