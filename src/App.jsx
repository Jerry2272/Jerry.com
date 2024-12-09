import { FaFacebookF, FaLinkedinIn,FaEnvelope, FaGithub, FaHandPointRight, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { useEffect} from 'react';
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
import P1 from '../src/assets/p1.png';
import P3 from '../src/assets/p3.png';
import P4 from '../src/assets/p4.png';
import P5 from '../src/assets/p5.png';
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
   <section className='HeroSection flex justify-end align-middle items-center relative h-[100vh] p-[1em] lg:p-[4em]'  id='hero'>
         <div className="heroText text-start">
         <h1 className='lg:text-[6em] font-[800] text-[3em] text-white'  data-aos="fade-up"><span className=''>Hi! Jerry Atebe</span></h1>
         <h4 className='mb-[3em] text-white'>Web | WordPress Developer | Tech Saviour | Codist | Software Engineer</h4>
         <ul className='flex text-white'>
          <Link to="https://twitter.com/JerryAtebe?t=a4UOyewZuoB-lehKkeu8kw&s=09">
                  <FaTwitter />
                  </Link>
                <Link><FaLinkedinIn  className='ms-4' /></Link>
                <Link to="https://www.instagram.com/jerryjake33/">
                <FaInstagram className='ms-4' />
                </Link>
                <Link to="https://wa.me/09161729605"><FaWhatsapp  className='ms-4' /></Link>
                <Link to="https://mail.google.com/mail/u/0/#inbox?compose=new">
                    <FaEnvelope  className='ms-4' />
                </Link>
                <Link to="https://www.facebook.com/profile.php?id=100089627465352"><FaFacebookF  className='ms-4' /></Link>
                <Link to="https://github.com/Jerry2272?tab=repositories">
                <FaGithub  className='ms-4' /> 
                </Link>
          </ul>
         <div className="buttonDiv flex my-[2em]">
          <button className='bg-[#059669] rounded-3xl text-white'  data-aos="zoom-out">Download Cv</button>
          <button className='bg-[#059669] rounded-3xl ms-6 text-white'  data-aos="zoom-out">Hire me</button>
         </div>
          </div>   
    </section>  
    {/* hero section ending */}

    {/* about section  */}
    <section  className='aboutMe' id="about">
                <h1 className='text-zinc-950 font-[600] text-4xl my-[2em]'>About <span className='text-[#059669]'> Me</span></h1>
        <div className="aboutContent flex justify-center items-center flex-col lg:flex-row gap-1">
           <div className="lg:w-[50%] text-left text">
           <p>
                A dedicated | committed | passionate | web developer | eager to learning| based in Nigeria with over 2+ years of experience in web development and  in solving both technical and relative problem. I specialize in helping clients and individuals create and maintain websites. Adept at utilizing modern technologies like React, WordPress, and Tailwind CSS to create high-performing applications. Passionate about mentoring and simplifying complex technical concepts for diverse audiences. Strong communicator and collaborative team player committed to delivering impactful results.
            </p>
            <p>
         I transform ideas into user-friendly and dynamic web solutions. If you're seeking a passionate and skilled developer to enhance your online presence, I'm here to help.
            </p>
            <p>
            Solution-driven Front-End Engineer with 2+ years of experience developing responsive and user-focused websites.
            </p>
           <div className="icon flex">
            <FaHandPointRight className='handPoint' />
          <ul className='flex items-center'>
          <Link to="https://twitter.com/JerryAtebe?t=a4UOyewZuoB-lehKkeu8kw&s=09">
                  <FaTwitter className='ms-4'  />
                  </Link>
                <Link><FaLinkedinIn className='ms-4'  /></Link>
                <Link to="https://www.instagram.com/jerryjake33/">
                <FaInstagram className='ms-4'  />
                </Link>
                <Link to="https://wa.me/09161729605"><FaWhatsapp className='ms-4'  /></Link>
                <Link to="https://mail.google.com/mail/u/0/#inbox?compose=new">
                    <FaEnvelope className='ms-4'  />
                </Link>
                <Link to="https://www.facebook.com/profile.php?id=100089627465352"><FaFacebookF className='ms-4'  /></Link>
                <Link to="https://github.com/Jerry2272?tab=repositories">
                <FaGithub className='ms-4'  /> 
                </Link>
          </ul>
           </div>
           </div>
           <div className="aboutImg relative">
            <img src={Lp} className='relative overflow-hidden' alt="" />
            <img src={myProfile}  className='absolute top-[6.30em] lg:top-[8.10em] w-[58%] h-[37%] lg:h-[38%] left-[3.15em] lg:left-[4.16em]'   data-aos="fade-up" alt="" />
           </div>
        </div>
    </section>
    {/* about section ending */}
    
  {/* services sections  */}

  <section className="service" id="service">
  <div className="serviceText" data-aos="fade-up">
    <h1 className="text-zinc-950 font-[600] text-4xl">
      What I <span> Offer</span>
    </h1>
    <div
      className="serviceContainer grid lg:grid-cols-3 lg:p-[90px]"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <div className="serviceContent" data-aos="zoom-in" data-aos-duration="1000">
        <FaCodepen />
        <h4>Web Development</h4>
        <p>
          I have extensive knowledge in web developing and fundamentals, such as
          color theory and typeface with the ability to include responsive designs. I
          am also familiar with Bootstrap | Tailwind and other tech skills.
        </p>
      </div>
      <div className="serviceContent" data-aos="zoom-in" data-aos-duration="1000">
        <FaCodepen />
        <h4>SEO Optimization</h4>
        <p>
          Optimize website speed and efficiency, ensuring swift loading times and
          seamless user navigation.
        </p>
      </div>
      <div className="serviceContent" data-aos="zoom-in" data-aos-duration="1000">
        <FaCodepen />
        <h4>Web Hosting</h4>
        <p>
          Simplify your web presence by hosting your site on reliable servers. We
          handle the technicalities, ensuring your website is accessible and secure
          24/7.
        </p>
      </div>
      <div className="serviceContent" data-aos="zoom-in" data-aos-duration="1000">
        <FaCodepen />
        <h4>Website Maintenance</h4>
        <p>
          Keep your site secure and up-to-date with regular maintenance, security
          checks, content management, and feature enhancements.
        </p>
      </div>
      <div className="serviceContent" data-aos="zoom-in" data-aos-duration="1000">
        <FaCode />
        <h4>Online Teaching</h4>
        <p>
          I have extensive knowledge in web developing and fundamentals, such as
          color theory and typeface with the ability to include responsive designs. I
          am also familiar with Bootstrap | Tailwind and other tech skills.
        </p>
      </div>
      <div className="serviceContent" data-aos="zoom-in" data-aos-duration="1000">
        <FaCodepen />
        <h4>Onsite Coding</h4>
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
  <h1 className="text-zinc-950 text-4xl font-[600]" data-aos="fade-up">
    Showing casing my <span className="text-emerald-600">creative Journey</span>.
  </h1>
  <div className="grid lg:grid-cols-3 p-5 my-[3em] grid-flow-dense">
    <div className="item relative" data-aos="zoom-in">
      <img src={P1} className="w-full relative hidden lg:block" alt="" />
      <img src={P4} className="w-full relative lg:hidden" alt="" />
      <Link to="https://jerry2272.github.io/jerryshoppingmoore"
      target='blank'
      >
        <img
          src={Ecom}
          className="absolute inset-0 lg:w-[47.50%] h-[37%] lg:left-[10.96em] top-[5.51em] left-[5.70em] lg:top-[3.58em] w-[46%]"
          alt=""
        />
      </Link>
    </div>
    <div className="item relative" data-aos="zoom-in">
      <img src={P4} className="relative hidden lg:block" alt="" />
      <img src={P5} className="relative lg:hidden" alt="" />
      <Link to="https://vilox-six.vercel.app"
      target='blank'
      >
        <img
          src={Vilox}
          className="absolute inset-0 lg:w-[49%] w-[58%] lg:left-[6.80em] left-[5em] top-[4.78em] lg:top-[5.70em]"
          alt=""
        />
      </Link>
    </div>
    <div className="item relative" data-aos="zoom-in">
      <img src={P3} className="w-[90%] relative hidden lg:block" alt="" />
      <img src={P4} className="lg:hidden relative" alt="" />
      <Link to="https://jerry2272.github.io/iccef_programme.github/"
      target='blank'
      >
        <img
          src={Iccef}
          className="absolute inset-0 w-[52%] h-[37%] left-[5.38em] top-[4.76em]"
          alt=""
        />
      </Link>
    </div>
    <div className="item relative" data-aos="zoom-in">
      <img src={P4} className="relative" alt="" />
      <a href="https://kelis-int-ng.vercel.app" 
      target='blank'
      >
        <img
          src={Kelis}
          className="absolute inset-0 w-[48%] h-[24%] left-[7.0em] top-[6.57em]"
          alt=""
        />
      </a>
    </div>
    <div className="item relative" data-aos="zoom-in">
      <img src={P5} className="relative w-[80%] hidden lg:block" alt="" />
      <img src={P4} className="lg:hidden" alt="" />
      <a href="https://jerry2272.github.io/speechConverter" 
      target='blank'
      >
        <img
          src={Speech}
          className="absolute inset-0 lg:w-[50%] w-[47%] lg:h-[25%] lg:left-[4.20em] left-[5.60em] h-[4%] top-[4.80em]"
          alt=""
        />
      </a>
    </div>
    <div className="item relative" data-aos="zoom-in">
      <img src={P4} className="w-[100%] relative" alt="" />
      <Link to="https://jerry2272.github.io/search-images.api/"
      target='blank'
      >
        <img
          src={Search}
          className="absolute lg:w-[48%] lg:h-[25%] lg:left-[7.01em] left-[6em] w-[43%] lg:top-[6em] top-[5.22em] roll"
          alt=""
        />
      </Link>
    </div>
  </div>
<div className=' flex justify-center items-center text-center w-full'>
<a
      href="https://github.com/Jerry2272?tab=repositories" target='blank'
      className="text-white rounded-3xl p-3 bg-[#059669] w-[30%]"
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