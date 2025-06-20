import BacktoTop from "./BacktoTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const Training = () => {
   const navigate = useNavigate();
 useEffect(() => {
    document.title = "Training|  Yashika Counsulting Services";
  }, []);
  const handleClick = () => {
    navigate("/contact"); // or whatever your route is
  };
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
    AOS.refresh(); // Reinitializes animations on mount
  }, []);
    return (
    
    <>
      <div id="Home3">
        <div
          id="i3"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            src="https://static.wixstatic.com/media/nsplsh_312d614132466164796463~mv2_d_5101_3401_s_4_2.jpg/v1/fill/w_850,h_850,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/nsplsh_312d614132466164796463~mv2_d_5101_3401_s_4_2.jpg"
            alt=""
            id="i3"
          />
        </div>
 
        <div
          id="h9"
          data-aos="fade-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div className=" typewriter2" style={{color:"black"}}>
            <p
              id="h3"
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "40px",
                fontWeight: "lighter",
                textAlign: "center",
              }}
            >
             Individual Trainings <br />
Upskilling. Reskilling
            </p>
          </div>
          <p id="h8">
           In the ever-evolving IT industry, staying up-to-date with emerging technologies is crucial for personal and professional growth. At our organization, we provide support to individuals seeking to upskill and stay relevant in the dynamic demands of the IT landscape. Let us help you stay ahead of the curve and achieve your goals.
          </p>
          <br />
          <Link to="/ContactUs">
      <button id="b5">Get In Touch</button>
    </Link>
        </div>

      </div>

      <div id="Home3">
        <div
          id="h9"
          data-aos="fade-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div className=" typewriter2" style={{color:"black"}}>
            <p
              id="h3"
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "40px",
                fontWeight: "lighter",
                textAlign: "center",
              }}
            >
              Corporate Trainings <br />
Upskilling. Reskilling
            </p>
          </div>
          <p id="h8">
          To stay ahead of technology shift and up-skill your workforce on the latest technologies. We help you to upskill your workforce to align with your technology roadmap. Our services include tailor-made IT training solutions for corporate clients and organized batches for individuals, all with a strong emphasis on delivering high-quality training sessions.
          </p>
          <br />
          <Link to="/ContactUs">
      <button id="b5">Get In Touch</button>
    </Link>
        </div>

        <div
          id="i3"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            src="https://static.wixstatic.com/media/5309e07b4f4d455990b3d510c03afce9.jpg/v1/fill/w_850,h_934,fp_0.49_0.28,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/5309e07b4f4d455990b3d510c03afce9.jpg"
            alt=""
            id="i3"
          />
        </div>
      </div>

      <BacktoTop />
    </>
  );
};

export default Training;
