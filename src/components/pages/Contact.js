import React from 'react';
import '../styles/formStyle.css';


export default function Contact(){
    return (
        <div>
          <h1>Contact Page</h1>
          <p>Send a message and I'll send you a reply when I'm free</p>
          <hr/>
          <container className="box">
          <form action="https://formsubmit.co/kimaguilar2017@email.com" method="POST"> {/* form submit to my email */}
          <input type="hidden" name="_subject" value="Message from MyPortfolio!"></input>
          <input type="hidden" name="_next" value="https://kim-aguilar.com/pages/Thankyou.html"></input> {/*Not connected yet, Considered Hostinger to connect to send email to me when someone sends message under my contact page --https://www.youtube.com/watch?v=r4RQ38EoLds-*/}
          <label for="fullName">Full Name:</label>
           <input
                type="text"
                name="fullName"
                className="fullName"
                tabIndex="1"
           />
           <br></br>
          <label for="email">Your Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            className="email"
            placeholder="ILIKEANIME@gmail.com"
            tabIndex="2"
          />
          <br></br>
          <label for="message">Message :</label>
          <br></br>
          <textarea
            placeholder="Start typing..."
            className="message"
            name="message"
          />
          </form>
          </container>
          <br></br>
          <button type="submit" className="send">Send</button>
        </div>
        
    );
}
      
      