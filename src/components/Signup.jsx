import React, {useState, useRef} from 'react'
import hostbase from './vars.js';

// CSS
import '../static/css/Main.css';
import '../static/css/Home.css';

export default function Signup() {

    const [user, setUser] = useState({
        firstName : "",
        lastName : "",
        document : "",
        email : "",
        date : "",
        address : "",
        phone : "",
        username : "",
        password : "",
        offers: false,
        ideas: false,
        nation: false
    })

    const nameRef = useRef();
    const lastRef = useRef();
    const mailRef = useRef();
    const docRef = useRef();
    const addressRef = useRef();
    const phoneRef = useRef();
    const dateRef = useRef();
    const offersRef = useRef();
    const ideasRef = useRef();
    const nationRef = useRef();
    const userRef = useRef();
    const passRef = useRef();

    const handleChange = event => {
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        setUser({
            ...user, [event.target.name] : value
        })
        
    }

    const handleSubmit = event => {
        event.preventDefault();
        setUser({
          ...user,
          firstName : nameRef.current.value,
          lastName : lastRef.current.value,
          email : mailRef.current.value,
          date : dateRef.current.value,
          document : docRef.current.value,
          phone : phoneRef.current.value,
          address : addressRef.current.value,
          username : userRef.current.value,
          password : passRef.current.value,
        })
                

        fetch(`${hostbase}/users/newUsers`, {
            headers:{ "content-type" : "application/json" },
            method:"POST",
            body: JSON.stringify({user})
              }).then(res => res.json())
                .then(res => {
                    console.log(res.msg)
                    alert(res.msg)
            })
    }

  return (
    <>
        <div className='header-background'/> 
        <form className="signup" onSubmit={handleSubmit} style={{ paddingTop: "2rem" }}>
            <div className="signup-row">
                <div className="signup-column" style={{ maxWidth: "100%"}}>
                    <strong>First Name</strong><br />
                    <input 
                        className="signup-inputs" 
                        id="name-input" 
                        type="text" 
                        name="firstName"
                        placeholder="Your first name"
                        value={user.firstName}
                        ref={nameRef} 
                        onChange={handleChange} 
                        required/>
                </div>
                <div className="signup-column">
                    <strong>Last Name</strong><br />
                    <input 
                        className="signup-inputs" 
                        type="text" 
                        name="lastName" 
                        placeholder="Your last name" 
                        value={user.lastName}
                        ref={lastRef}  
                        onChange={handleChange} 
                        required/>
                </div>
            </div>
            <div className="signup-row">
                <div className="signup-column" style={{ maxWidth: "100%"}}>
                    <strong>Date of birth</strong><br />
                    <input 
                        className="signup-inputs" 
                        type="date" 
                        name="date"
                        id="name-input"
                        value={user.date} 
                        ref={dateRef} 
                        onChange={handleChange} 
                        required/>
                </div>
                <div className="signup-column">
                    <strong>Email</strong><br />
                    <input 
                        className="signup-inputs" 
                        type="text" 
                        name="email"
                        placeholder="Your email address"  
                        value={user.email}
                        ref={docRef}  
                        onChange={handleChange} 
                        required/>
                </div>
            </div>
            <div className="signup-row">
                <div className="signup-column" style={{ maxWidth: "100%"}}>
                    <strong>Document</strong><br />
                    <input 
                        className="signup-inputs" 
                        type="text" 
                        name="document"
                        placeholder="Your id"
                        id="name-input"  
                        value={user.document}
                        ref={docRef}  
                        onChange={handleChange} 
                        required/>
                </div>
                <div className="signup-column">
                    <strong>Phone Number</strong><br />
                    <input 
                        className="signup-inputs" 
                        type="text" 
                        name="phone" 
                        placeholder="Phone Number" 
                        value={user.phone}
                        ref={phoneRef}  
                        onChange={handleChange} 
                        required/>
                </div>
            </div>
            <div className="signup-row">
                <strong>Address</strong><br />
                <input 
                    className="signup-inputs" 
                    type="text" 
                    name="address"
                    placeholder="Your address"  
                    value={user.address}
                    ref={addressRef}  
                    onChange={handleChange} 
                    required/>
            </div>
            <div className="signup-row">
                <div className="signup-column" style={{ maxWidth: "100%"}}>
                    <strong>Username</strong><br />
                    <input 
                        className="signup-inputs" 
                        type="text" 
                        name="username"
                        placeholder="Pick a unique username"
                        id="name-input"  
                        value={user.username}
                        ref={userRef}  
                        onChange={handleChange} 
                        required/>
                </div>
                <div className="signup-column">
                    <strong>Password</strong><br />
                    <input 
                        className="signup-inputs" 
                        type="text" 
                        name="password" 
                        placeholder="Min. 8 characters" 
                        value={user.password}
                        ref={passRef}  
                        onChange={handleChange} 
                        required/>
                </div>
            </div>
            <div className="signup-row">
                <strong>Preferences</strong><br />
                    <input
                        className="checkboxes" 
                        style={{ margin: ".4rem" }} 
                        name="offers" 
                        type="checkbox"
                        ref={offersRef} 
                        onChange={handleChange}
                        checked={user.offers}/>
                    <label className="check-labels">Exclusive offers</label><br />
                    <input 
                        className="checkboxes" 
                        style={{ margin: ".4rem" }} 
                        name="ideas" 
                        type="checkbox"
                        ref={ideasRef} 
                        onChange={handleChange}
                        checked={user.ideas}/>
                    <label className="check-labels">Sets ideas</label><br />
                    <input 
                        className="checkboxes" 
                        style={{ margin: ".4rem" }} 
                        name="nation" 
                        type="checkbox"
                        ref={nationRef} 
                        onChange={handleChange}
                        checked={user.nation}/>
                    <label className="check-labels">Shoppingly nation</label>
            </div>
            <div className="signup-row" id='signupbtn'>
                <button className="signup-btn"><h3><strong>Sign Up</strong></h3></button>
            </div>
            <div className="signup-row" style={{ display: "flex" }}>
                <input className="checkboxes" style={{ margin: ".4rem" }} name="policy" type="checkbox" required/>
                <label className="check-labels">By entering your data you agree with our Privacy Policy.*</label><br />
            </div>
        </form>
    </>
  )
}
