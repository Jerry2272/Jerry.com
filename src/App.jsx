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
      <h2 className='logo'>Jerry</h2>
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
   <section className='HeroSection flex justify-end align-middle items-center relative lg:h-[100vh] p-[10px] h-[70vh] lg:p-[4em]'  id='hero'>
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
   
   {/* Portfolio Section */}
   <section className="portfolio-section my-20">
      <h1 className="text-zinc-950 text-4xl font-semibold text-center mb-10" data-aos="fade-up">
         Showcasing My <span className="text-emerald-600">Creative Journey</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-5">
         {[
            {
               image: Ecom,
               link: "https://jerry2272.github.io/jerryshoppingmoore",
               alt: "E-commerce Project",
               overlay: Ecom,
            },
            {
               image: Vilox,
               link: "https://vilox-six.vercel.app",
               alt: "Vilox Project",
               overlay: Vilox,
            },
            {
               image: Iccef,
               link: "https://jerry2272.github.io/iccef_programme.github/",
               alt: "Iccef Project",
               overlay: Iccef,
            },
            {
               image: Kelis,
               link: "https://kelis-int-ng.vercel.app",
               alt: "Kelis Project",
               overlay: Kelis,
            },
            {
               image: Speech,
               link: "https://jerry2272.github.io/speechConverter",
               alt: "Speech Converter",
               overlay: Speech,
            },
            {
               image: Search,
               link: "https://jerry2272.github.io/search-images.api/",
               alt: "Image Search API",
               overlay: Search,
            },
         ].map((project, index) => (
            <div
               key={index}
               className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
               data-aos="zoom-in"
            >
               <img
                  src={project.image}
                  className="w-full h-48 object-cover"
                  alt={project.alt}
               />
               <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                     href={project.link}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-white text-lg font-bold px-6 py-2 bg-emerald-600 rounded-full"
                  >
                     View Project
                  </a>
               </div>
            </div>
         ))}
      </div>

      <div className="flex justify-center items-center mt-10">
         <a
            href="https://github.com/Jerry2272?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white rounded-full py-3 px-8 bg-emerald-600 hover:bg-emerald-700 transition-colors duration-300"
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
