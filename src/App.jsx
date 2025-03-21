import { FaFacebookF, FaLinkedinIn,FaEnvelope, FaGithub, FaHandPointRight, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
// import { useEffect} from 'react';
import { FaCode, FaCodepen } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Iccef from '../src/assets/Iccef_programme.png';
import Ecom from '../src/assets/ecommerce.PNG';
import Search from '../src/assets/search.PNG';
import Speech from '../src/assets/speech.PNG';
import Kelis from '../src/assets/kelis.jpeg';
import Vilox from '../src/assets/vilox.jpeg';
import Lp from '../src/assets/lp-about.png';
import myProfile from '../src/assets/jakes-photo.jpg';
import jakesPro from '../src/assets/jak.png';
import colorPg from '../src/assets/group.png'
import { BrowserRouter} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {FaMoon, FaSun} from 'react-icons/fa';
import { createContext, useState } from 'react';
import ReactSwitc from 'react-switch'
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
  const ContextApi = createContext(null);
const [theme, setTheme] = useState('dark');
const modeToggle = () =>{
  setTheme((darkMode) => (darkMode === 'light' ? 'dark' : 'light'))
};

  return (
    <BrowserRouter>
    <div className="App" id={theme}>
      <header className="App-header px-10 lg:px-[5em] fixed z-[1] w-full"> 
      <ContextApi.Provider value={{theme, modeToggle}}>
      <h2 className='logo'>Jerry Jakes</h2>
      <ReactSwitc 
      onChange={modeToggle}
      checked={theme === 'dark'}
      checkedIcon={<FaMoon color="#fff" className="state" />}
      uncheckedIcon={<FaSun color="#fff" className="state" />}
      className='switch'
       />
      {
        theme
      }
        </ContextApi.Provider>
      </header>
      <ContextApi.Provider value={{theme}}>
   <Navbar />

   {/* hero section  */}
   <section className='HeroSection flex justify-center items-center relative md:h-[100vh] h-[90vh] p-[1em] md:p-[4em] flex-col md:flex-row'  id='hero'>
 
          <div className="imgDisplay relative hidden md:block">
      <img src={colorPg} className='w-[70%] relative left-0 hidden lg:block' alt="" />
      <img src={jakesPro} className='absolute bottom-[1em] md:left-[-0.80em] hidden md:block' alt="" />
    </div>

         <div className="heroText text-start">
         <h6 className='md:text-[0.80em] font-[600] text-[1em]'  data-aos="fade-up">HI!, MY NAME IS</h6>
         <h2 className='text-[50px] py-[10px]'><span className='span'>Jerry</span> Jakes</h2>
         <h4 className='mb-[1em]'>Web | WordPress Developer | Tech Saviour | Codist | Software Engineer</h4>
         <div className="buttonDiv flex my-[2em]">
          <button className='rounded-1xl text-white bg-[#FF014F]'  data-aos="zoom-out">Download Cv</button>
          <button className='bg-transparent rounded-1xl ms-6 text-white' style={
            {border: '1px solid #FF014F'}
          }  data-aos="zoom-out">Hire me</button>
         </div>
         <ul className='flex text-white'>
          <Link to="https://twitter.com/JerryAtebe?t=a4UOyewZuoB-lehKkeu8kw&s=09">
                  <FaTwitter className='ms-4 span' />
                  </Link>
                <Link><FaLinkedinIn  className='ms-4 span' /></Link>
                <Link to="https://www.instagram.com/jerryjake33/">
                <FaInstagram className='ms-4 span' />
                </Link>
                <Link to="https://wa.me/09161729605"><FaWhatsapp  className='ms-4 span' /></Link>
                <Link to="https://mail.google.com/mail/u/0/#inbox?compose=new">
                    <FaEnvelope  className='ms-4 span' />
                </Link>
                <Link to="https://www.facebook.com/profile.php?id=100089627465352"><FaFacebookF  className='ms-4 span' /></Link>
                <Link to="https://github.com/Jerry2272?tab=repositories">
                <FaGithub  className='ms-4 span' /> 
                </Link>
          </ul>
          </div>   
   
    </section>  
    {/* hero section ending */}

    {/* about section  */}
    <section  className='aboutMe px-[1em]' id="about">
        <div className="aboutContent flex justify-center items-center flex-col lg:flex-row gap-1">
           <div className="md:w-[45%] text-left text order-1">
            <h5 className='md:text-[0.80em] font-[600] text-[1em] mb-[20px]'>ABOUT ME!</h5>
            <h1 className="md:text-[40px] text-[30px] leading-[38px] mb-[30px]"><span className="span">Passionate</span> , Innovative <br /> Software <span className="span">Engineer</span></h1>
           <p>
                A dedicated | committed | web developer | eager to learning| based in Nigeria with over 2+ years of experience in web development and  in solving both technical and relative problem. 
            </p>
            <p>
            I specialize in helping clients and individuals create and maintain websites. Adept at utilizing modern technologies like React, WordPress, and Tailwind CSS to create high-performing applications. Passionate about mentoring and simplifying complex technical concepts for diverse audiences. Strong communicator and collaborative team player committed to delivering impactful results.
            </p>
            <p>
         I transform ideas into user-friendly and dynamic web solutions. If you're seeking a passionate and skilled developer to enhance your online presence, I'm here to help.   Solution-driven Front-End Engineer with 2+ years of experience developing responsive and user-focused websites.
            </p>
           <div className="icon flex mt-[20px]">
            <FaHandPointRight className='handPoint' />
          <ul className='flex items-center mt-5'>
          <Link to="https://twitter.com/JerryAtebe?t=a4UOyewZuoB-lehKkeu8kw&s=09">
                  <FaTwitter className='ms-4 span' />
                  </Link>
                <Link><FaLinkedinIn  className='ms-4 span' /></Link>
                <Link to="https://www.instagram.com/jerryjake33/">
                <FaInstagram className='ms-4 span' />
                </Link>
                <Link to="https://wa.me/09161729605"><FaWhatsapp  className='ms-4 span' /></Link>
                <Link to="https://mail.google.com/mail/u/0/#inbox?compose=new">
                    <FaEnvelope  className='ms-4 span' />
                </Link>
                <Link to="https://www.facebook.com/profile.php?id=100089627465352"><FaFacebookF  className='ms-4 span' /></Link>
                <Link to="https://github.com/Jerry2272?tab=repositories">
                <FaGithub  className='ms-4 span' /> 
                </Link>
          </ul>
           </div>
           </div>
           <div className="aboutImg relative md:order-1">
            <img src={Lp} className='relative overflow-hidden' alt="" />
            <img src={myProfile}  className='absolute top-[6.30em] md:top-[8.10em] w-[58%] h-[37%] md:h-[38%] left-[3.15em] md:left-[4.16em]'   data-aos="fade-up" alt="" />
           </div>
        </div>
    </section>
    {/* about section ending */}
    
  {/* services sections  */}

  <section className="service my-[3em]" id="service">
  <div className="serviceText" data-aos="fade-up">
  <h5 className='md:text-[0.80em] font-[600] text-[1em] mb-[20px]'>SERVICES!</h5>
   <h1 className="md:text-[28px] text-[18px]">SERVICES I OFFER AS A <br />   <span className="span"> FRONT-END </span>    ENGINEER!</h1>
    <div
      className="serviceContainer grid md:grid-cols-3 md:p-[90px]"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <div className="serviceContent" data-aos="zoom-in" data-aos-duration="1000">
        <FaCodepen className="span text-[40px] text-center mx-auto mb-8" />
        <h2>WEBSITE <span className="span">DEVELOPMENT</span></h2>
        <p>
          I have extensive knowledge in web developing and fundamentals, such as
          color theory and typeface with the ability to include responsive designs. I
          am also familiar with Bootstrap | Tailwind and other tech skills.
        </p>
      </div>
      <div className="serviceContent" data-aos="zoom-in" data-aos-duration="1000">
        <FaCodepen className='span text-[40px] text-center mx-auto mb-8' />
        <h2><span className="span">PAYMENT </span> INTEGRATION</h2>
        <p>
         Automate the process of payments to allow users pay right on your platform.
        </p>
      </div>
      <div className="serviceContent" data-aos="zoom-in" data-aos-duration="1000">
        <FaCodepen className='span text-[40px] text-center mx-auto mb-8' />
        <h2>WEB <span className="span">HOSTING</span></h2>
        <p>
          Simplify your web presence by hosting your site on reliable servers. We
          handle the technicalities, ensuring your website is accessible and secure
          24/7.
        </p>
      </div>
      <div className="serviceContent" data-aos="zoom-in" data-aos-duration="1000">
        <FaCodepen className='span text-[40px] text-center mx-auto mb-8' />
        <h2><span className="span">WEBSITE</span>     MAINTENANCE</h2>
        <p>
          Keep your site secure and up-to-date with regular maintenance, security
          checks, content management, and feature enhancements.
        </p>
      </div>
      <div className="serviceContent" data-aos="zoom-in" data-aos-duration="1000">
        <FaCode className='span text-[40px] text-center mx-auto mb-8' />
        <h2>ONLINE <span className="span">TEACHING</span></h2>
        <p>
          I have extensive knowledge in web developing and fundamentals, such as
          color theory and typeface with the ability to include responsive designs. I
          am also familiar with Bootstrap | Tailwind and other tech skills.
        </p>
      </div>
      <div className="serviceContent" data-aos="zoom-in" data-aos-duration="1000">
        <FaCode className='span text-[40px] text-center mx-auto mb-8' />
        <h2><span className="span">ONSITE</span> TEACHING</h2>
        <p>
          I have extensive knowledge in web developing and fundamentals, such as
          color theory and typeface with the ability to include responsive designs. I
          am also familiar with Bootstrap | Tailwind and other tech skills.
        </p>
      </div>
    </div>
  </div>
</section>

  {/* services sections ending */}
  
   <Skills />
   
   {/* portfolio section  */}
   <section className="port my-[5em]">
  <h1 className=" text-4xl font-[600]" data-aos="fade-up">
    Showing casing my <span className="span">creative Journey</span>.
  </h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5 my-12 md:px-16">
  {/* Project Items */}
  {[ 
    { link: "https://jerry2272.github.io/jerryshoppingmoore", image: Ecom },
    { link: "https://vilox-six.vercel.app", image: Vilox },
    { link: "https://jerry2272.github.io/iccef_programme.github/", image: Iccef },
    { link: "https://kelis-int-ng.vercel.app", image: Kelis },
    { link: "https://jerry2272.github.io/speechConverter", image: Speech },
    { link: "https://jerry2272.github.io/search-images.api/", image: Search }
  ].map((project, index) => (
    <div 
      key={index} 
      className="relative flex justify-center items-center overflow-hidden bg-white/10 rounded-lg shadow-lg h-[250px] md:h-[300px] transition-transform duration-300 cursor-pointer px-[20px]" 
      data-aos="zoom-in"
    >
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <img 
          src={project.image} 
          className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-90 hover:scale-[1]" 
          alt="Project"
        />
      </a>
    </div>
  ))}
</div>



<div className=' flex justify-center items-center text-center w-full'>
<a
      href="https://github.com/Jerry2272?tab=repositories" target='blank'
      className="text-white rounded-1xl p-3 bg-[#FF014F] w-[30%]"
      data-aos="fade-up"
    >
      Visit Github
    </a>
</div>
</section>
   {/* Portfolio section ending */}

   <Contact />
   <Footer/>
   </ContextApi.Provider>
    </div>
   </ BrowserRouter>
  )
}

export default App;
