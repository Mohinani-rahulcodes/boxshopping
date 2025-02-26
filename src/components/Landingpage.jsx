import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiShoppingBagFill } from "react-icons/ri";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";
import { GiPolarStar } from "react-icons/gi";
import { FaBox, FaCrown, FaUserFriends, FaTruck, FaShapes, FaWrench, FaRegStar, FaStar, FaStarHalfAlt, FaHandLizard, FaLocationArrow} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion ,useScroll, useTransform  } from "motion/react";
import Countup from "react-countup"
import ScrollTrigger from "react-scroll-trigger";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

function Landingpage() {
  
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/gallery");
  };

  const features = [
    {
      tittle: "Premium Quality",
      icon: <FaCrown className="text-[gold] text-[2rem]" />,
      des: "Every sweet box is crafted using high-quality materials to ensure durability and elegance, making your sweets boxes as special as the moments they celebrate.",
    },
    {
      tittle: "Customization Options",
      icon: <FaWrench className="text-orange-500 text-[2rem]" />,
      des: "We offer personalized sweet boxes shop name printing tailored to your needs—whether it's for weddings, festivals, or for corporate .",
    },
    {
      tittle:"ReadyMade Boxes",
      icon:<RiShoppingBagFill className="text-[#EF4444] text-[2rem]"/>,
      des:"We also give service of delivering readymade sweets boxes which saves you alot of time ,also space in your shop !!"
    },
    {
      tittle: "Variety of Sizes",
      icon: <FaShapes className="text-purple-500 text-[2rem]" />,
      des: "From sweets boxes to snacks box large ones for an assortment of sweets, we provide diverse options to suit every preference",
    },
    {
      tittle: "Timely Delivery",
      icon: <FaTruck className="text-green-500 text-[2rem]" />,
      des: "We value your time and ensure your orders are delivered promptly and in perfect condition.",
    },
    {
      tittle: "Customer-Centric",
      icon: <FaUserFriends className="text-blue-500 text-[2rem]" />,
      des: "Your satisfaction is our priority. Expect friendly, reliable support and a hassle-free shopping experience every time.",
    },
    {
      tittle: "Luxurious Designs",
      icon: <FaBox className="text-indigo-500 text-[2rem]" />,
      des: "We also offer rich feeling box design patterns for your high-status people",
    },
  ];

  const card = [
    {
      name: "Shagan lal",
      pic: "SL",
      rating:<div className="flex text-[gold]">
        <FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/>
      </div>,
      review:
        "As a regular customer ham apne sabhi prakar ke boxes box world se he mangwate hai aur yaha sabse achi services me se jo mujhe pasand hai wo time pe delivery karna ,boxes bhi readymade milte hai time bachta hai ,Good service",
      location:
        "Shop no.2 ,jai shree ganesh society ,opp railway station titwala (E)",
      shopName: "Shri Bikaner",
    }, //titwala
    {
      name: "Bera Ram",
      pic: "BR",
      rating:<div className="flex text-[gold]">
        <FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/>
      </div>,
      review: "Mera order hamesha quantity me he rehta hai mujhe box world se kabhi koi quality compromise nhi hui hai plus kabhi 1 piece bhi kam nhi aya hai and relation behaivour kafi acha hai ,I am satisfied customer",
      location: "Padgha, Nashik highway road",
      shopName: "Jodhpur Sweets",
    }, //padgha
    {
      name: "Pappu Kumawat",
      pic: "PK",
      rating:<div className="flex text-[gold]">
        <FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/>
      </div>,
      review: "Box World se hamara relation kafhi time se acha hai inki sabse achi baat jo hamme lagti hai ki Delivery time to time rehta hai plus ocassional boxes ki quality aur designs kafi acha provide karte hai",
      location: "Belapur bhim nagar, Rabale ,Thane",
      shopName: "Krishna Dairy",
    }, //airoli
    {
      name: "Bhanwarlal ji",
      pic: "BL",
      rating:<div className="flex text-[gold]">
        <FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/>
      </div>,
      review: "Box world kafhi trust worthy shop hai aur yaha customize name printing boxes bhi ache mill jate hai and design patterns. Urgent order deliver hojate hai plus yaha ke ocassional box bhot sundar hote hai me ek Happy Customer hu Box World ka 😘",
      location: "Borivali naka ,Mumbai Nashik highway road ",
      shopName: "CM Bikaner wale",
    }, //
    {
      name: "Shankar Kumawat",
      pic: "SK",
      rating:<div className="flex text-[gold]">
        <FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/>
      </div>,
      review: "As regular customer shuravat se he inne se box mangwata hu inki delivery ,boxes k pattern mujhe kafhi acha lagta hai ,rate bhi genuine rehta hai its really good.",
      location: "Shop no.5 ,opposite station ,hanuman chowk ,Mulund (E)",
      shopName: "Pratham Sweets",
    }, //mulund
    {
      name: "Mathalal Chaudhery",
      pic: "MC",
      rating:<div className="flex text-[gold]">
        <FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/>
      </div>,
      review: "Me Box world ka regular customer hu mujhe yaha ka rate ,boxes ke color pattern ,time pe delivery karna khas karke season festival ke time bhot priyhe hai overall customer service achi hai, ",
      location: "Gym khana road ,sagarli gaon ,opposite balaji mandir ,Dombivli (E)",
      shopName: "Balaji Sweets & Namkeen",
    }, //dombivili
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <MdArrowForwardIos className="text-blue-500 text-4xl absolute right-[-2rem] top-1/2 z-10 cursor-pointer" />,
    prevArrow: <MdArrowBackIos className="text-blue-500 text-4xl absolute left-[-2rem] top-1/2 z-10 cursor-pointer" />,
}

  const array = [<GiPolarStar />,"Beautiful",<GiPolarStar />,"ReadyMade",<GiPolarStar />,"Sweets",<GiPolarStar />,"Boxes",<GiPolarStar />,"Designs",<GiPolarStar />,"Sweets",<GiPolarStar />,"Boxes",<GiPolarStar />,"Beautiful",<GiPolarStar />,"ReadyMade",<GiPolarStar />,"Sweets",<GiPolarStar />,"Boxes",<GiPolarStar />,"Designs",<GiPolarStar />,"Sweets",<GiPolarStar />,"Boxes"]
  
  const [count , setCount] = useState(false)
  const { scrollYProgress } = useScroll();
  const [ismobile , setIsMobile] = useState(window.innerWidth < 768)
  
  
  useEffect(()=>{
    const handleResize = ()=> setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return ()=> window.removeEventListener("resize" ,handleResize)

  },[])

  const scale = useTransform(scrollYProgress,  ismobile ? [0 ,0.2] :[0, 0.4],  ismobile ?[0.2,1 ]:[0.5, 1]); // Scale effect
  const opacity = useTransform(scrollYProgress, [0,0.2, 0.4], ismobile ?[0, 0.9,1]:[0, 0.5 , 1]); // Fade-in effect
  const y = useTransform(scrollYProgress, ismobile ?[0,0.2]: [0, 0.4], ismobile ?[60,0]: [150, 0 ]); // Move up effect

  return (
    <div className="overflow-x-hidden">
      <motion.div
      initial={{height: ismobile? 790 :720,width:ismobile ? 400 : 1500}}
      whileInView={{height:0, width:0}}
      transition={{duration:6,ease:"anticipate"}}
      viewport={{once:true}}
      className="h-[100vh] w-[100vw] text-white flex justify-center items-center ">{ ismobile ? <img src="assets/radhekrishna2.png" className="h-fit w-fit bg-contain object-cover" />:<img src="assets/radhekrishna.webp" className="h-fit w-fit bg-contain object-cover" /> }</motion.div>
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:3}} 
    className="min-h-[100vh] w-full text-[#131313] overflow-x-hidden bg-[#EDE7DB] md:relative">
      <div className="banner h-[100vh] w-full ">
        <img
          src="/assets/banner1.png"
          className="h-full w-full bg-contain object-cover "
          alt="hero page"
        />
      </div>
      <div className="md:h-[40vh] h-[50vh] w-[80vw] md:w-[43%] flex flex-col justify-center md:items-center md:bg-white/20 md:backdrop-blur-[3px] absolute md:top-[15rem] bottom-[1rem] md:right-5 text-left md:px-2 ml-4 py-6 z-0 md:rounded-2xl md:border-[1px] md:border-[#e0dbdb] ">
        <motion.h1
        initial={{x:-100,opacity:0}}
        whileInView={{x:0,opacity:1}}
        transition={{duration:2,ease:"anticipate",delay:1.2}}
        viewport={{once:true}}  
        style={{ textShadow: "3px 3px 2px black" }}  className='hidden md:block px-5  py-1 rounded-2xl  items-center font-bold font-["Josefin_Sans"] text-center text-4xl text-pink-400 '>
          Welcome to The Box World 
        </motion.h1>
        
        <motion.p
         initial={{x:-100,opacity:0}}
         whileInView={{x:0,opacity:1}}
         transition={{delay:2,duration:1.7,ease:"anticipate"}}  
         viewport={{once:true}} 
        style={{ textShadow: "2px 2px 4px white" }} className='hidden md:block text-xl text-center font-["Josefin_Sans"] mt-8 border bg-gradient-to-l from-[#ffb4a2] to-[#b5838d] rounded-xl px-5 py-1 leading-[1.5rem] scale-x-110' >
          "Elegant sweet boxes for every occasion—crafted
          <p className="whitespace-nowrap">with care, filled with joy ,Perfect for your tasty sweets.</p> 
           Welcome to Box World."
        </motion.p>
        
        {/* head for modile design */}
        <motion.h1 
        initial={{y:-100,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration:1,ease:"easeIn",delay:4}}
        style={{textShadow: "2px 4px 2px black"}}
         className="md:hidden w-[85vw] font-['Josefin_Sans'] font-bold text-yellow-400 text-[3rem] leading-[3rem] scale-y-125 tracking-tight pt-5 mb-6 -translate-x-[0.6rem]">Elegant Sweet Boxes - Crafted with Care, Filled with Joy!</motion.h1 
        >
        
        <motion.button
          whileTap={{scale:0.6}}
          onClick={handleclick}
          initial={{x: ismobile ? -250:0}}
          animate={{x: ismobile ? 0:0,}}
          transition={{duration: ismobile ? 1:0, ease: ismobile? "anticipate":0, delay:ismobile ? 4.5 :0}}
          className="mt-8 md:w-[13vw] w-[54vw] bg-[#672C67] border-[2px] border-[#e0dbdb] py-1 px-4 text-white rounded-xl hover:scale-105 duration-300 hover:shadow-[3px_6px_1px_purple] ">                 
          Jump to Our Gallery !
        </motion.button>
      </div>
      <div className="aboutus min-h-[40vh] w-full bg-[#EDE7DB] md:px-10 px-4 flex flex-col justify-center items-center gap-8">
        <div className="containerslider  h-[7vh] w-[99vw] flex flex-shrink-0 bg-[#672C67] mt-14 mb-10 relative">
          <div className="mask absolute h-[7vh] w-32 left-0 z-10 bg-gradient-to-l from-transparent to-[#672C67]"></div>
            <motion.div initial={{x:0}} animate={{x:"-100%"}} transition={{duration:30,repeat:Infinity,ease:"linear"}} className="sliderstripe flex  justify-center items-center gap-10 font-['Josefin_Sans'] ">
              {array.map((marquee ,index)=>(
                  <div className="text-[#EDE7DB] text-2xl " key={index}>{marquee}</div>
              ))}
            </motion.div>
            <motion.div initial={{x:0}} animate={{x:"-100%"}} transition={{duration:30,repeat:Infinity,ease:"linear"}} className="sliderstripe flex justify-center items-center gap-10 font-['Josefin_Sans'] ">
              {array.map((marquee ,index)=>(
                  <div className="text-[#EDE7DB] text-2xl " key={index}>{marquee}</div>  
              ))}
            </motion.div>
          <div className="mask absolute h-[7vh] w-32 right-0 bg-gradient-to-r from-transparent to-[#672C67]"></div>
        </div>
        <h1 className="md:text-4xl text-2xl md:font-normal whitespace-nowrap font-semibold font-['Playfair_Display_SC'] tracking-[3px]">
          What makes us Special
        </h1>

        <div className="md:h-[60vh] h-[98vh] w-[80%] flex md:flex-row flex-col md:justify-around items-center md:gap-0 gap-3 mb-5">
          <motion.div 
          style={{ scale, opacity, y }}
          className=" img md:h-full h-[56%] md:w-[40%] w-[88vw] rounded-2xl shadow-[31px_31px_40px_-1px_rgba(0,0,0,0.39)] flex justify-center items-center overflow-hidden">
            <img 
              src="/assets/goldbox.png"
              className="md:h-full md:w-full h-full w-full bg-contain object-cover "
              alt="beautiful box pic"
            />
          </motion.div>
          <div className="info md:h-full md:w-[55%] h-[58%] w-[88vw] ">
            <div className="md:h-full h-[118vh] overflow-hidden rounded-xl flex flex-col gap-3 text-white md:overflow-auto w-fit"> 
              {features.map(({ tittle, icon, des }, index) => (
                <div
                  className=" flex gap-5 font-['Josefin_Sans'] bg-white backdrop-blur-[4px] px-3 py-3"
                  key={index}
                >
                  <div className=" w-full ">
                    <h1 className="text-[#131313] text-xl font-bold">{tittle}</h1>
                    <p className="text-[#131313] text-[0.9rem]">{des}</p>
                  </div>
                  <p className="mt-4">{icon}</p>
                </div>
              ))}
            </div>
          </div>
          
        </div>

        <div className="reviewSection md:mt-[6rem] mt-[30rem] flex flex-col justify-center gap-5 ">
          <motion.h1 initial={{y:300 ,opacity:[0,0,0],}}
          whileInView={{y:0, opacity:[0.3,0.7,1], }}
          transition={{duration:2,type:"spring", stiffness: 300, damping: 10,duration: 1.5,}}
          viewport={{once:true}}
          className="font-['Playfair_Display_SC'] md:text-4xl text-xl md:font-normal font-semibold tracking-widest text-center ">
            🤩 What our Clients Say !!
          </motion.h1>
          <div className="cardContainer h-[50vh] md:w-[72vw] w-[230vw] py-3 md:px-3 pr-8 font-['Josefin_Sans'] cursor-pointer [&_.slick-prev]:text-blue-500 [&_.slick-next]:text-blue-500 ">
          <Slider {...settings} >
              {card.map(({name ,shopName ,pic ,review ,location, rating},index)=>(
                <div className="cards md:h-[40vh] md:w-[27vw] w-[33vw] h-[40vh] rounded-lg bg-white px-2 py-2" key={index}>
                  <div className="name flex justify-start items-center gap-3 text-zinc-800 ">
                    <p className="bg-blue-500 text-white h-12 w-12 rounded-full flex justify-center items-center">{pic}</p>
                    <div className="flex flex-col leading-[1.2rem] tracking-tight">
                      <p className="font-bold">{name}</p>
                      <p className="text-[0.9rem]">{shopName}</p>
                    </div>
                  </div>
                  <div className="clientreview flex flex-col gap-3">
                    <div className="flex gap-3 text-xl mt-3">
                      <p className= "">{rating}</p>
                      <HiMiniCheckBadge className="text-[blue] "/>
                    </div>
                    <div className="para h-[23vh] flex flex-col justify-between text-[#333333] tracking-tight ">
                      <div className="h-[80%] leading-[1.1rem]">
                        <p>{review}</p>
                      </div>
                      <p className="flex justify-start gap-1 items-start mt-5 leading-[1rem]">
                        <FaLocationDot className="text-[#0000FF] text-[1.7rem] "/>
                        <div className="text-[0.9rem]">
                        {location}
                        </div>
                      </p>
                    </div>                    
                  </div>
                </div>
              ))}
          </Slider>
          </div>
        </div>

        <ScrollTrigger onEnter={()=>{setCount(true)}} onExit={()=>{setCount(false)}}>

        <div className="stats md:h-[35vh] h-[60vh] w-[100vw] bg-red-600 text-white md:rounded-lg rounded-2xl my-10 flex md:flex-row flex-col justify-around items-center font-['Josefin_Sans'] md:py-8 py-4">
          <div className="h-full md:w-[30vw] flex flex-col justify-center items-center md:leading-[5rem] md:border-r-2 md:border-white/40">
              <p className="text-[4rem] font-bold">{count && <Countup start={1300000} end={1500000} duration={5} delay={1}/>}+</p>
              <h1 className="md:text-3xl text-[1.6rem] font-bold">Total sweet boxes delivered</h1>
          </div>
          <div className="h-full md:w-[30vw] flex flex-col justify-center items-center md:leading-[5rem] md:border-r-2 md:border-white/40">
              <p className="font-bold text-[4rem]">{count && <Countup start={0} end={100} duration={5} delay={1}/>}+</p>
              <h1 className="text-3xl font-bold">No. of box designs</h1>
          </div>
          <div className="h-full md:w-[30vw] flex flex-col justify-center items-center md:leading-[5rem]">
              <p className="font-bold text-[4rem]">{count && <Countup start={0} end={50} duration={5} delay={1}/>}+</p>
              <h1 className="text-3xl font-bold">Total clients till now</h1>
          </div>
        </div>
        
        </ScrollTrigger>
      </div>

      <footer className="flex flex-col justify-center items-center mt-12 ">
        <p
        className="md:text-[2.5rem] md:mb-4 mb-8 font-['Playfair_Display_SC'] md:tracking-[0.4rem] text-2xl ">Why <span className="ml-1 md:ml-0"></span> Wait 
        <motion.span 
          className="inline-block ml-2" 
          whileInView={{scale:[1,1.5,1]}} 
          transition={{duration:1.5,repeat:Infinity, repeatType:"reverse",ease:"easeInOut"}}>?
        </motion.span>
        </p>
        <p className="md:h-20 md:w-[50vw] h-24  flex flex-col justify-center items-center text-center text-2xl text-[#6D1A36] font-['Josefin_Sans']">
              <h1 >Dive into our stunning collection of sweets boxes </h1>
              <h1 >and place your order now !!</h1>
        </p>
        <motion.button whileTap={{scale:0.6}} onClick={handleclick}  className="md:w-[13vw] w-[55vw] md:py-2 py-3 bg-[#672C67] text-white md:mt-10 md:mb-10 my-12 rounded-xl hover:scale-105 duration-200 hover:shadow-[5px_4px_1px_purple] hover:border-2">
          <p whileTap={{scale:0.6}}>Explore the gallery now !</p>
        </motion.button>

      </footer>
    
    </motion.div>
    </div>
  );
}

export default Landingpage;
