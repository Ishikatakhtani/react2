import BacktoTop from "./BacktoTop";

const  ContactUs=()=>{
    return(
        <>

      <section class="contact-wrapper">
    <div class="contact-image">
      <img src="https://media.istockphoto.com/id/1855489747/video/business-woman-manager-thinking-and-meeting-announcement-bad-news-or-feedback-of-company-debt.jpg?b=1&s=640x640&k=20&c=WgBPX9fNaPLLLt5tNmZKSJK6z7wSRm2qlWZfXsLsYeU="></img> </div>

    <div class="contact-form-area">
      <h2>Get in Touch</h2>
      <form action="#" method="post">
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="tel" name="phone" placeholder="Enter your phone number" />
        <input type="text" name="subject" placeholder="Subject" />
        <textarea name="message" placeholder="Type your message here..." rows="5"></textarea>

        

        <button type="submit" id="b4">Send</button>
      </form>
    </div>
    <BacktoTop/>
  </section>
        </>
    )
}
export default ContactUs;