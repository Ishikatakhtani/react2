import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BacktoTop from './BacktoTop';
const Home=()=>{
    useEffect(() => {
      AOS.init({ duration: 1000 }); 
    }, []);
    return(
        <>
       <div id="Home">
            <div id="i1">
  <div id="i2"><p class="cursor typewriter-animation">Consulting Services</p></div> 
  </div>

  <div id="Home1">
    <div><img src="https://media.istockphoto.com/id/482073694/photo/time-for-a-quick-brainstorm.jpg?s=612x612&w=0&k=20&c=Zltbl9b1qQXrmGeYO4JllFolhHhLTqVt6VVfJx_DqtA=" alt="" /></div>
    <div id="h2"> <p id="h1">Innovators. Dreamers. Trainers. Executors<br /> <br />
At Yashika Consulting Services, we pride ourselves on being a leading provider of advanced technologies and services for clients of all sizes.  

Our success is built on our ability to listen to our clients' needs and tailor our offerings to meet their evolving demands. 
Join our growing customer base and discover the innovative solutions we can offer. Contact us today to learn more about our inspiring story.</p></div>
  </div>

  <BacktoTop/>
        </div>
        </>
    )
}
export default Home;