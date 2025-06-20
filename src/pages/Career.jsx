import BacktoTop from "./BacktoTop";
import  { useEffect } from 'react';
const Career=()=>{
   useEffect(() => {
    document.title = "Career |  Yashika Counsulting Services";
  }, []);
    return(
      
        <>
       <div><img src="https://media.licdn.com/dms/image/v2/C5612AQGubjPReSyxGg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1520136237835?e=2147483647&v=beta&t=acl7kscmu4-czBXW4gLuopZdjXSZ8-tdEzcPWvPTjSU"
        id="i4" alt="" />
        
        <p id="cr1">
Would you like to explore an exciting career opportunity with Yashika Consulting Services Pvt. Ltd.?

We are always searching for talented and dedicated individuals for both permanent and temporary roles. If you're interested, kindly submit your resume, and we will reach out to you once you are shortlisted for further consideration.
</p>

 <div class="cr2">
    <div class="form1">
      <h2>Let’s Work Together</h2>
      <p>Get in touch so we can start working together. Please fill below details. Our team will reach out to you.</p>

      <form  method="post" class="contact-form">
        <div class="grid-left">
          <label>
            First Name *<br />
            <input type="text" name="first_name" required />
          </label>
          <label>
            Last Name *<br />
            <input type="text" name="last_name" required />
          </label>
          <label>
            Email *<br />
            <input type="email" name="email" required />
          </label>
          <div class="phone-row">
            <label>
              Code<br />
              <select name="country_code">
                <option>IN +91</option>
                <option>US +1</option>
               
              </select>
            </label>
            <label>
              Phone<br />
              <input type="tel" name="phone" />
            </label>
          </div>
        </div>

        <div class="grid-right">
          <label>
            Message<br />
            <textarea name="message" rows="9"></textarea>
          </label>
         
        </div>

        <div class="form-footer">
          <button type="submit" class="btn-send">SEND</button>
        </div>
      </form>
    </div>
  </div>
  <BacktoTop/>
        </div>
        </>
    )
}
export default Career;