import BacktoTop from "./BacktoTop";
import  { useEffect } from 'react';
const  ContactUs=()=>{
   useEffect(() => {
    document.title = "Contact Us |  Yashika Counsulting Services ";
  }, []);
    return(
        <>

      <section class="contact-wrapper">
    <div class="contact-image">
      <img src="https://media.istockphoto.com/id/1855489747/video/business-woman-manager-thinking-and-meeting-announcement-bad-news-or-feedback-of-company-debt.jpg?b=1&s=640x640&k=20&c=WgBPX9fNaPLLLt5tNmZKSJK6z7wSRm2qlWZfXsLsYeU="></img> </div>

    <div class="contact-form-area">
      <h2>Get in Touch</h2>
      <form action="#" method="post" >
        <input type="text" name="name" placeholder="Name" required id="f1" />
        <input type="email" name="email" placeholder="Email" required id="f1" />
        <input type="tel" name="phone" placeholder="Enter your phone number" id="f1" required />
        <input type="text" name="subject" placeholder="Subject"  required id="f1" />
        <textarea name="message" placeholder="Type your message here..." id="f1" required rows="5"></textarea>

        

        <button type="submit" id="b4">SEND</button>
      </form>
    </div>
    <BacktoTop/>
  </section>
        </>
    )
}
export default ContactUs;