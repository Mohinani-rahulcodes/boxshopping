import React, { useEffect, useState } from 'react'
import { FaHeadphones, FaBuildingColumns } from "react-icons/fa6";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaInstagram, FaLink } from "react-icons/fa";
import { FcGlobe } from "react-icons/fc";
import { motion, transform } from "framer-motion";
import { useNavigate } from 'react-router-dom';


function ContactUS() {

  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [number , setNumber ] = useState("");
  const [text , setText] = useState("");

  const [nameError , setNameError] = useState("");
  const [emailError , setEmailError] = useState("");
  const [textError , setTextError] = useState("");
  const [numberError, setNumberError] = useState("");

  const navigate = useNavigate()
  const handleClick = (index)=>{
      // console.log(index);
      if (index === 0) {
        navigate("/")
      }
      if (index === 1) {
        navigate("/gallery")
      }
      if (index === 2) {
        navigate("/contactus")
      }
  }

  const handlesubmit = (e)=>{
    e.preventDefault();
    let valid = true;

    if (name.length > 8) {
      setNameError("");
    } else {
      setNameError("red");
      valid = false;
    }

    if (email.includes("@gmail.com")) {
      setEmailError("");
    } else {
      setEmailError("red");
      valid = false;
    }
    if (number.length >= 10) {
      setNumberError("");
    } else {
      setNumberError("red");
      valid = false;
    }

    if (text.trim() !== "") {
      setTextError("");
    } else {
      setTextError("red");
      valid = false;
    }
    // Submit form only if all fields are valid
    if (valid) {
      e.target.closest("form").submit(); // Submit form via Formspree
    }
  }
  const [ismobile , setIsMobile] = useState(window.innerWidth < 768)
    useEffect(()=>{
      const handleResize = ()=> setIsMobile(window.innerWidth < 768);
      window.addEventListener("resize", handleResize);
      return ()=> window.removeEventListener("resize" ,handleResize)
  
    },[])
  
  return (
    <div className='font-["Josefin_Sans"] pt-14 bg-[#EDE7DB] overflow-x-hidden '>
      <header className='md:h-[30vh] h-[20vh] w-full bg-[#295a6acf] pt-3 flex justify-around items-center '>
        <div className="h-full w-[30%]">
          <motion.img initial={{x: ismobile ? -100: -300 }} whileInView={{x:ismobile ? 0 : 0}} transition={{duration:1}} viewport={{once:true}} src="/assets/side.svg" className='h-full w-full '/>
        </div>
        <motion.div initial={{y:ismobile ? 40 : 50, opacity:0}} whileInView={{y: ismobile? 0: 0,opacity:1}} transition={{duration:1, delay:1.5}} viewport={{once:true}} className="heading flex flex-col justify-center items-center text-white cursor-pointer">
          <p className='md:text-3xl  whitespace-nowrap font-semibold font-["Tillana"] tracking-widest'>Contact Us</p> 
          <p className='md:text-xl text-[0.9rem] md:leading-0 leading-3 text-[#131313]'>Lets make a deal</p>
        </motion.div>
        <div className="h-full w-[30%]">
          <motion.img initial={{x: ismobile ? 80 : 400 ,opacity: 0}} whileInView={{x:ismobile ? 0 : 0 ,opacity: 1}} transition={{duration:1, delay:2}} viewport={{once:true}} src="/assets/boy.svg" className='h-full w-full'/>
        </div>
      </header>
      
      <main className='min-h-[70vh] w-full flex flex-col gap-10 md:mt-[10rem] mt-10 mb-[4rem] relative '>
        <div className="uperdiv flex justify-around md:px-5 px-2 items-center ">
          <div className="imgdiv hidden md:block h-full w-[50%]">
            <img src="/assets/contactUs.svg" className='h-full w-full' alt="formbg" />
          </div>
    
          <motion.div 
          initial={{x: ismobile ? 100 : 400 ,opacity:0}} 
          whileInView={{x:ismobile ? 0 : 0, opacity:1}} 
          transition={{duration:1, delay: ismobile ? 2 :0}} viewport={{once:true, amount: 0.4 }} 
          className="formSetion h-full md:w-[40%] w-[92vw] md:flex md:flex-col md:justify-center md:items-center bg-[url(/assets/img2.png)] bg-cover bg-center bg-no-repeat border-b-4 shadow-inner shadow-[#808080] rounded-2xl">
            <form className='w-full flex flex-col gap-5 md:px-10 px-7 py-10 backdrop-blur-[2px]' action="https://formspree.io/f/mzzdglaz" method='POST'>
              <h1 className='font-semibold text-center md:text-3xl text-2xl text-white '>Want to Send Your Message ?</h1>
              <input className='px-3 pt-1 text-xl placeholder-black focus:outline-none border-b-2 border-white bg-transparent' style={{borderColor:nameError}} value={name} onChange={(e)=>{setName(e.target.value)}} type="text" name='Name' placeholder='Enter your full name' required/>
              <input className='px-3 pt-1 text-xl placeholder-black focus:outline-none border-b-2 border-white bg-transparent' style={{borderColor:emailError}} value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" name="Email" placeholder='Email' required/>
              <input className='px-3 pt-1 text-xl placeholder-black focus:outline-none border-b-2 border-white bg-transparent ' style={{borderColor:numberError}} value={number} onChange={(e)=>{setNumber(e.target.value)}} type="number" name="Number" placeholder='Mobile Number' required />
              <textarea className='px-3 pt-1 text-xl placeholder-black focus:outline-none border-2 border-white bg-transparent rounded-md' style={{borderColor:textError}} value={text} onChange={(e)=>{setText(e.target.value)}} name='Message' cols='30' rows='6' placeholder='Enter message' required/>
              <input className='px-3 md:mr-[18rem] mr-[9.5rem] py-1 bg-[purple]/70 border text-white font-semibold rounded-2xl cursor-pointer' type="submit" value="Send Message" onClick={(e)=>{handlesubmit(e)}}/>
            </form>
          </motion.div>

        </div>
        <div className="midpart min-h-[20vh] w-full flex flex-col gap-4 ">
          <h1 className='text-center font-semibold text-3xl tracking-tighter'>Or'</h1>
          <div className="md:h-[10vh] h-[25vh] w-full bg-[#4C7B72] flex md:flex-row flex-col justify-around md:items-center items-start md:pl-0 pl-3">
            <div className="number md:h-[90%] md:w-[30%] flex justify-center items-center md:border-r-[3px] border-[#1A3842]">
              <FaHeadphones className='h-12 w-12 mr-3 rounded-full p-2 text-white bg-[#1A3842] '/>
              <div className="flex flex-col ">
                <p className='text-white'>Call us for inquiry</p>
                <p className='text-[#131313] text-xl'>+(91) 9356116329</p>
              </div>
            </div>
            <div className="email md:h-[90%] md:w-[30%] flex justify-center items-center md:border-r-[3px] border-[#1A3842]">
             <MdOutlineMarkEmailRead className='h-12 w-12 mr-3 rounded-full p-2 text-white bg-[#1A3842] '/>
             <div className="flex flex-col">
              <p className='text-white'>Email anytime</p>
              <p className='text-[#131313] text-xl'>rahulmohinani7@gmail.com</p>
             </div>
            </div>
            <div className="insta md:h-[90%] md:w-[30%] flex justify-center items-center">
             <FaInstagram className='h-12 w-12 mr-3 rounded-full p-2 text-white bg-[#1A3842] '/>
             <div className="flex flex-col ">
              <p className='text-white'>Insta handle</p>
              <p className='text-[#131313] text-xl'>rahulmohinanimr</p>
             </div>
            </div>
          </div>
        </div>

        <div  className="bottompart md:w-[95vw] md:mx-7 shadow-[10px_12px_10px_rgba(0,0,0,.4)]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.0951440765543!2d73.16619066120867!3d19.234684790870098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be79411963b6565%3A0x4dfbce41a5531557!2sAHUJA%20CHOWK%2C%202%2C%20Khemani%20Rd%2C%20Mukund%20Nagar%2C%20Ulhasnagar%2C%20Maharashtra%20421002!5e0!3m2!1sen!2sin!4v1738689847496!5m2!1sen!2sin" 
            width="100%" 
             className='md:h-[61vh] h-[50vh]'
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </main>
      
      <footer className='md:h-[40vh] h-[75vh] w-full flex flex-col justify-between items-center bg-[#1A3842] px-5 pt-8'>
        <div className="wrapper h-[99%] w-full flex md:flex-row flex-col justify-between md:items-start">
          <div className="title h-full">
            <p className='font-["Tillana"] font-bold text-[gold] text-4xl tracking-widest'>Box World</p>
            <p className='text-white'>your sweet BoXes waiting <br /> for You </p>
          </div>
          <div className="h-full md:w-[60%] flex md:flex-row flex-col justify-between md:gap-0 gap-5">
            <div className="wrap md:w-[80%] w-[90%] flex md:justify-evenly justify-between">

              <div className="aboutUsLinks ">
                <p className='flex gap-3  font-bold text-white pb-3 text-[0.8rem]'>ABOUT US <FaBuildingColumns color='white'/></p>
                <ul className='flex flex-col gap-3 text-white/70'>
                  {["- Elegent SweetBox","- Box Designs","- Custom Order","- Luxury Feel"].map((items,index)=>(
                    <li key={index} className='h-5 w-fit relative group cursor-pointer hover:border-b-2'>
                      {items}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="quickLinks ">
              <p className='flex gap-3  font-bold text-white pb-3 text-[0.8rem]' >QUICK LINK <FaLink color='silver'/></p>
                <ul className='flex flex-col gap-3 text-white/70'>
                {["- Home","- Gallery","- Contact Us"].map((items,index)=>(
                    <li onClick={()=>handleClick(index)} key={index} className='h-5 w-fit relative group cursor-pointer hover:border-b-2 overflow-hidden'>
                      {items}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="wrap1 md:mb-0 mb-3">
              <div className="followLinks ">
              <p className='flex gap-3  font-bold text-white pb-3 text-[0.8rem]'>FOLLOW US <FcGlobe /> </p>
                <ul className='flex flex-col gap-3 text-white/70 ml-2'>
                  <li>
                    <a href="https://www.facebook.com/rahul.mohinani.1">[Facebook]</a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/rahulmohinanimr/">[Instagram]</a>
                  </li>
                  <li>
                    <a href="https://www.whatsapp.com">[WhatsApp]</a>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>
        <div className="copywrite md:h-[15%] h-[22%] w-full md:border-t-2 border-t flex md:flex-row flex-col justify-between md:items-center border-white/50 text-white md:py-0 py-2">
          <p className='tracking-tight md:text-[1rem] text-[0.94rem]'>&copy; 2025 Box World | Worldwide Sweets Box Service | All Rights Reserved</p>
          <div className="creditCard h-7 md:w-[20%] w-[77%] flex justify-between items-center md:gap-0 ">
              <img src="/assets/mastercard.png" className='h-6 w-9 object-cover' alt="card" />
              <img src="/assets/visa.png" className='h-6 w-9 object-cover' alt="card" />
              <img src="/assets/american.png" className='h-6 w-10 object-cover' alt="card" />
              <img src="/assets/phonepay.png" className='h-6 w-9 object-cover' alt="card" />
              <img src="/assets/paytm.png" className='h-6 w-10 object-cover ' alt="card" />
              <img src="/assets/gpay.png" className='h-6 md:w-9 w-10 object-cover' alt="card" />
          </div>
        </div>
      </footer>

    </div>
  )
}

export default ContactUS

