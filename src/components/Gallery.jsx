import React, { useEffect, useState, useRef } from 'react'
import { FaThumbsUp } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { MdArrowOutward , MdArrowForward} from "react-icons/md";
import { motion, useScroll, useTransform } from 'motion/react';


function Gallery() {

  const [hover, setHover] = useState(false);

  const [cards250grm , setCards250grm] =useState([
    {
      pic: <img src='/assets/box1.png' className='h-[90%] md:w-[30vw] w-full bg-cover object-fill'></img>,
      title:"Red Box",
      id:0,
      liked:false
    },
    {
      pic:<img src='/assets/box2.png' className='h-[90%] md:w-[30vw] w-full bg-cover object-fill'></img>,
      title:"White Box",
      id:1,
      liked:false
    },
    {
      pic:<img src='/assets/box9.png' className='h-[90%] md:w-[30vw] w-full bg-cover object-fill'></img>,
      title:"Pink Box",
      id:2,
      liked:false
    },
    {
      pic:<img src='/assets/box5.png' className='h-[90%] md:w-[30vw] w-full bg-cover object-fill'></img>,
      title:"Orange Box",
      id:3,
      liked:false
    },
    {
      pic:<img src='/assets/box7.png' className='h-[90%] md:w-[30vw] w-full bg-cover object-fill'></img>,
      title:"White Box",
      id:4,
      liked:false
    },
    {
      pic:<img src='/assets/box8.png' className='h-[90%] md:w-[30vw] w-full bg-cover object-fill'></img>,
      title:"WhiteGreen Box",
      id:5,
      liked:false
    },
    {
      pic:<img src='/assets/box4.png' className='h-[90%] md:w-[30vw] w-full bg-cover object-fill'></img>,
      title:"Pink Box",
      id:6,
      liked:false
    },
    {
      pic:<img src='/assets/box14.png' className='h-[90%] md:w-[30vw] w-full bg-cover object-fill'></img>,
      title:"Orange Box",
      id:7,
      liked:false
    },
    {
      pic:<img src='/assets/box15.png' className='h-[90%] md:w-[30vw] w-full bg-cover object-fill'></img>,
      title:"Red Box",
      id:8,
      liked:false
    },
    {
      pic:<img src='/assets/box16.png' className='h-[90%] md:w-[30vw] w-full bg-cover object-fill'></img>,
      title:"Purple Box",
      id:9,
      liked:false
    },
    {
      pic:<img src='/assets/box17.png' className='h-[90%] md:w-[30vw] w-full bg-cover object-fill'></img>,
      title:"White Box",
      id:10,
      liked:false
    },
    {
      pic:<img src='/assets/box18.png' className='h-[90%] md:w-[30vw] w-full bg-cover object-fill'></img>,
      title:"Pink Box",
      id:11,
      liked:false
    },
  ])
  
  const [card250grm1 , setCard250grm1 ] = useState([
    
    {
      pic:<img src='/assets/box19.png' className='h-[90%] md:w-[30vw] w-full bg-cover object-fill'></img>,
      title:"WhiteBlack Box",
      id:1,
      liked:false
    },
    {
      pic:<img src='/assets/box20.png' className='h-[90%] md:w-[30vw] w-full bg-cover object-fill'></img>,
      title:"Yellow Box",
      id:1,
      liked:false
    },
    {
      pic:<img src='/assets/box21.png' className='h-[90%] md:w-[30vw] w-full bg-cover object-fill'></img>,
      title:"Red Festive Box",
      id:1,
      liked:false
    },
    {
      pic:<img src='/assets/box22.png' className='h-[90%] md:w-[30vw] w-full bg-cover object-fill'></img>,
      title:"Regular Red Box",
      id:2,
      liked:false
    },
    {
      pic:<img src='/assets/box23.png' className='h-[90%] md:w-[30vw] w-full bg-cover object-fill'></img>,
      title:"LightYellow Box",
      id:2,
      liked:false
    },
    {
      pic:<img src='/assets/box32.png' className='h-[90%] md:w-[30vw] w-full bg-cover object-fill'></img>,
      title:"Side Angle",
      id:2,
      liked:false
    },
    {
      pic:<img src='/assets/box33.png' className='h-[90%] md:w-[30vw] w-full bg-cover object-fill'></img>,
      title:"Side Angle",
      id:1,
      liked:false
    },
    {
      pic:<img src='/assets/box35.png' className='h-[90%] md:w-[30vw] w-full bg-cover object-fill'></img>,
      title:"Side Angle",
      id:1,
      liked:false
    },
    {
      pic:<img src='/assets/box36.png' className='h-[90%] md:w-[30vw] w-full bg-cover object-fill'></img>,
      title:"Side Angle",
      id:1,
      liked:false
    },
    {
      pic:<img src='/assets/box37.png' className='h-[90%] md:w-[30vw] w-full bg-cover object-fill'></img>,
      title:"Side Angle",
      id:2,
      liked:false
    },
    {
      pic:<img src='/assets/box38.png' className='h-[90%] md:w-[30vw] w-full bg-cover object-fill'></img>,
      title:"ShopName Box ",
      id:2,
      liked:false
    },
    {
      pic:<img src='/assets/box40.png' className='h-[90%] md:w-[30vw] w-full bg-cover object-fill'></img>,
      title:"25 boxes Bundle",
      id:2,
      liked:false
    },

  ])
  
  const [fullbox , setFullbox ] = useState([
    {
      pic:<img src='/assets/box24.png' className='h-[90%] md:w-[30vw] w-full bg-cover object-fill'></img>,
      title:"Shop name Box",
      id:17,
      liked:false
    },
    {
      pic:<img src='/assets/box25.png' className='h-[90%] md:w-[30vw] w-full bg-cover object-fill'></img>,
      title:"Front Side",
      id:18,
      liked:false
    },
    {
      pic:<img src='/assets/box26.png' className='h-[90%] md:w-[30vw] w-full bg-cover object-fill'></img>,
      title:"Front Side",
      id:19,
      liked:false
    },
    {
      pic:<img src='/assets/box27.png' className='h-[90%] md:w-[30vw] w-full bg-cover object-fill'></img>,
      title:"Front Side",
      id:20,
      liked:false
    },
    {
      pic:<img src='/assets/box29.png' className='h-[90%] md:w-[30vw] w-full bg-cover object-fill'></img>,
      title:"Front Side",
      id:21,
      liked:false
    },
    {
      pic:<img src='/assets/box34.png' className='h-[90%] md:w-[30vw] w-full bg-cover object-fill'></img>,
      title:"Front Side",
      id:22,
      liked:false
    },

  ])

  const [cards500grm , setCards500grm] =useState([
    {
      pic: <img src='/assets/box3.png' className='h-[90%] md:w-[30vw] w-full bg-cover object-fill'></img>,
      title:"Red Box",
      id:1,
      liked:false
    },
    {
      pic:<img src='/assets/box11.png' className='h-[90%] md:w-[30vw] w-full bg-cover object-fill'></img>,
      title:"Red Box",
      id:1,
      liked:false
    },
    {
      pic:<img src='/assets/box10.png' className='h-[90%] md:w-[30vw] w-full bg-cover object-fill'></img>,
      title:"White Box",
      id:1,
      liked:false
    },
    {
      pic:<img src='/assets/box12.png' className='h-[90%] md:w-[30vw] w-full bg-cover object-fill'></img>,
      title:"SkinColor Box",
      id:2,
      liked:false
    },
    {
      pic:<img src='/assets/box13.png' className='h-[90%] md:w-[30vw] w-full bg-cover object-fill'></img>,
      title:"GreenRegular Box",
      id:2,
      liked:false
    },
    {
      pic:<img src='/assets/box6.png' className='h-[90%] md:w-[30vw] w-full bg-cover object-fill'></img>,
      title:"Green Box",
      id:2,
      liked:false
    },
    {
      pic:<img src='/assets/box30.png' className='h-[90%] md:w-[30vw] w-full bg-cover object-fill'></img>,
      title:"Gold Box",
      id:1,
      liked:false
    },
    {
      pic:<img src='/assets/box31.png' className='h-[90%] md:w-[30vw] w-full bg-cover object-fill'></img>,
      title:"ShopName Box",
      id:1,
      liked:false
    },
    {
      pic:<img src='/assets/box40.png' className='h-[90%] md:w-[30vw] w-full bg-cover object-fill'></img>,
      title:"25 Boxes Bundle",
      id:1,
      liked:false
    },
    {
      pic:<img src='/assets/nashta1.png' className='h-[90%] md:w-[30vw] w-full bg-cover object-fill'></img>,
      title:"Nashta Box",
      id:2,
      liked:false
    },
    {
      pic:<img src='/assets/img1.png' className='h-[90%] md:w-[30vw] w-full bg-cover object-fill'></img>,
      title:"Customize Box",
      id:2,
      liked:false
    },
    
  ])

  const handleClick = (id)=>{
    // console.log(id)
    setCards250grm((prevCards)=>(
      prevCards.map((card)=>(
        card.id === id ? { ...card, liked: !card.liked } : card
      )))
    )
  }

  const handleClick1 = (id)=>{
    // console.log(id)
    setCard250grm1((prevCards)=>(
      prevCards.map((card)=>(
        card.id === id ? { ...card, liked: !card.liked } : card
      )))
    )
  }

  const handleClick2 = (id)=>{
    // console.log(id)
    setFullbox((prevCards)=>(
      prevCards.map((card)=>(
        card.id === id ? { ...card, liked: !card.liked } : card
      )))
    )
  }

  const handleClick500 = (id)=>{
    // console.log(id)
    setCards500grm((prevCards)=>(
      prevCards.map((card)=>(
        card.id === id ? { ...card, liked: !card.liked } : card
      )))
    )
  }

  const navigate = useNavigate();
  const handleButton = ()=>{
    navigate("/contactus")
  }

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);


  const {scrollYProgress: div1} = useScroll({target: ref1 });
  const {scrollYProgress: div2} = useScroll({target: ref2 , offset:["start end" ,"end start"]});
  const {scrollYProgress: div3} = useScroll({target: ref3 , offset:["start end" ,"end start"]});
  const {scrollYProgress: div4} = useScroll({target: ref4 , offset:["start end" ,"end start"]});
  const {scrollYProgress: div5} = useScroll({target: ref5 ,offset:["start end","end start"]})

  const [ismobile ,setIsMobile] = useState(window.innerWidth < 768);
  
  const scale = useTransform(div1,  ismobile ? [0 ,1] :[0, 0.2],  ismobile ?[1,1 ]:[0.9, 1]); // Scale effect
  const y = useTransform(div1, ismobile ?[0,1]: [0, 0.8], ismobile ?[0,0]: [180,0]); // Move up effect
  
  const scale1 = useTransform(div2,ismobile ? [0 ,1 ]:[0, 0.2],  ismobile ?[1,1 ]:[0.9, 1]); 
  const opacity = useTransform(div2, ismobile ? [0, 1]:[0, 0.5], ismobile ?[1, 1]:[0.8, 1 ]); 
  const y1 = useTransform(div2, ismobile ?[0,1]: [0, 0.5], ismobile ?[0,0]: [80,0]); 

  const scale2 = useTransform(div3, ismobile ? [0 ,1 ]:[0, 0.3],  ismobile ?[1,1 ]:[0.7, 1]); 
  const opacity2 = useTransform (div3, ismobile ? [0, 1]:[0, 0.5], ismobile ?[1, 1]:[0.8, 1 ]); 
  const y2 = useTransform(div3, ismobile ?[0,1]: [0,0.8], ismobile ?[0,0]: [180 ,0]); 

  const scale3 = useTransform(div4, ismobile ? [0 ,1 ]:[0, 0.3],  ismobile ?[1,1 ]:[0.7, 1]); 
  const opacity3 = useTransform(div4,  ismobile ? [0, 1]:[0, 0.5], ismobile ?[1, 1]:[0.8, 1 ]); 
  const y3 = useTransform(div4,  ismobile ?[0,1]: [0, 0.8], ismobile ?[0,0]: [180,0]); 

  const opacityBottom = useTransform(div5, [0,0.24] , [0.6,1])
  const y4 = useTransform(div5 ,[0,0.2] , [90,0])

  useEffect(()=>{
    const handleSize =()=>{
      setIsMobile(window.innerHeight < 768)
    }
    window.addEventListener("resize" , handleSize)
    return window.removeEventListener("resize" ,handleSize);
  })
  
  return (
    <div className='bg-gradient-to-l from-[#fefae0] to-[#faedcd] '>
    <div className='bg-gradient-to-l from-[#fefae0] to-[#faedcd] min-h-[100vh] w-full flex flex-col justify-start items-center md:px-6 pb-7 pt-16 '>
      <header className='font-["Playfair_Display_SC"] md:text-3xl font-semibold text-[#2a2929] md:border-[10px] md:border-[purple]/80 mb-5 tracking-wider'>
        <div className="hidden md:block bg-gradient-to-l from-[#fefae0] to-[#faedcd] mx-5 translate-y-6">
          Explore the Gallery
        </div>
      </header>

      <main className='min-h-[80vh] w-[90vw] flex flex-col justify-start items-center p-6 '>
        <h1 className='font-["Josefin_Sans"] md:mt-5 mt-20 md:px-4 px-2 text-center md:text-xl text-[1rem] whitespace-nowrap py-2 rounded-lg border-[2px] border-white bg-[#672C67]/80 text-white mb-5'>
          This is a 250g Box – Ideal for 250g of Sweets
        </h1>
        <div ref={ref1} className="cards md:w-[87vw] w-[100vw] md:rounded-[2rem] rounded-2xl flex flex-wrap md:justify-center justify-start items-center gap-7 md:p-5 px-2 py-4 bg-[url(/assets/galleryp.png)] bg-cover object-fill md:pt-[6.5rem] pt-[2rem] ">
          {cards250grm.map((card)=>(
            <motion.div
            style={{scale ,y}}
            key={card.id} 
            className="md:h-[50vh] h-[35vh] md:w-[20vw] w-[43vw] shadow-[13px_10px_15px_] bg-white rounded-2xl overflow-hidden cursor-pointer hover:scale-95 transition-all duration-300">
              <div className="h-full w-full    hover:scale-105 transition-all duration-300 p-2">
                {card.pic}
                <div className="h-[10%] w-full whitespace-nowrap font-['Josefin_Sans'] font-medium flex justify-between items-center px-4 text-[#131313]">
                  <div className="title pt-2">
                    {card.title}
                  </div>
                  <button onClick={()=>handleClick(card.id)} className={`transition-colors duration-300 ${ card.liked ? "text-blue-500" : "text-gray-500"} `}>
                    <FaThumbsUp size={22}/>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div ref={ref3} className="cards md:w-[87vw] w-[100vw] md:rounded-[2rem] rounded-2xl flex flex-wrap md:justify-center justify-start items-center gap-7 mt-5 md:p-5 px-2 py-4 bg-[url(/assets/galleryp.png)] bg-cover object-fill md:pt-[6.5rem] pt-[2rem] md:overflow-x-visible overflow-x-hidden ">
          {card250grm1.map((card  )=>(
            <motion.div
            style={{y:y2, opacity:opacity2 ,scale:scale2}}
            key={card.id} className="md:h-[50vh] h-[35vh] md:w-[20vw] w-[43vw] shadow-[13px_10px_15px_] bg-white rounded-2xl overflow-hidden cursor-pointer hover:scale-95 transition-all duration-300">
              <div className="md:h-full h-[98%] w-full p-2 hover:scale-105 transition-all duration-300">
                {card.pic}
                <div className="md:h-[10%] h-[12%] whitespace-nowrap w-full font-['Josefin_Sans'] font-medium flex justify-between items-center md:px-4 text-[#131313]">
                  <div className="title pt-2">
                    {card.title}
                  </div>
                  <button onClick={()=>handleClick1(card.id)} className={`transition-colors duration-300 ${ card.liked ? "text-blue-500" : "text-gray-500"} `}>
                    <FaThumbsUp size={22}/>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <h1 className='font-["Josefin_Sans"] md:mt-5 mt-20 md:px-4 px-2 py-2 rounded-lg border-[2px] border-white bg-[#672C67]/80 text-white mb-5 whitespace-nowrap'>
          Samples of front side of sweet Boxes
        </h1>
        <div ref={ref2} className="cards md:w-[87vw] w-[100vw] md:rounded-[2rem] rounded-2xl flex flex-wrap md:justify-center justify-start items-center gap-7 md:p-5 px-2 py-4 bg-[url(/assets/galleryp.png)] bg-cover object-fill md:pt-[6.5rem] pt-[2rem] ">
          {fullbox.map((card)=>(
            <motion.div
            style={{y:y1, opacity:opacity ,scale:scale1 }} 
             key={card.id} className="md:h-[50vh] h-[35vh] md:w-[20vw] w-[43vw] shadow-[13px_10px_15px_] bg-white rounded-2xl overflow-hidden cursor-pointer hover:scale-95 transition-all duration-300 ">
              <div className="md:h-full h-[98%] w-full p-2 hover:scale-105 transition-all duration-300">
                {card.pic}
                <div className="md:h-[10%] h-[12%] w-full whitespace-nowrap font-['Josefin_Sans'] font-medium flex justify-between items-center md:px-4  text-[#131313]">
                  <div className="title pt-2">
                    {card.title}
                  </div>
                  <button onClick={()=>handleClick2(card.id)} className={`transition-colors duration-300 ${ card.liked ? "text-blue-500" : "text-gray-500"} `}>
                    <FaThumbsUp size={22} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <h1 className='font-["Josefin_Sans"] md:mt-5 mt-20 md:px-4 px-2 py-2 whitespace-nowrap rounded-lg border-[2px] border-white bg-[#672C67]/80 text-white mb-5'>
          This is a 500g Box – Ideal for 500g of Sweets
        </h1>
        <div ref={ref4} className="cards md:w-[87vw] w-[100vw] md:rounded-t-[2rem] md:rounded-b-none rounded-2xl flex flex-wrap md:justify-center justify-start items-center gap-7 md:p-5 px-2 py-4 bg-[url(/assets/galleryp.png)] bg-cover bg-no-repeat md:pt-[6.5rem] pt-[2rem] md:overflow-x-visible overflow-x-hidden">
          {cards500grm.map((card)=>(
            <motion.div
            style={{y:y3, opacity:opacity3 ,scale:scale3 }}
            key={card.id} className="md:h-[50vh] h-[35vh] md:w-[20vw] w-[43vw] shadow-[13px_10px_15px_] bg-white rounded-2xl hover:scale-95 transition-all duration-300 overflow-hidden cursor-pointer  ">
              <div className="md:h-full h-[98%] w-full p-2 hover:scale-105 transition-all duration-300">
                {card.pic}
                <div className="md:h-[10%] h-[12%] w-full whitespace-nowrap font-['Josefin_Sans'] font-medium flex justify-between items-center md:px-4 text-[#131313]">
                  <div className="title pt-2">
                    {card.title}
                  </div>
                  <button onClick={()=>handleClick500(card.id)} className={`transition-colors duration-300 ${ card.liked ? "text-blue-500" : "text-gray-500"} `}>
                    <FaThumbsUp size={22}/>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

    </div>

    <motion.footer
    ref={ref5} 
    style={{opacity:opacityBottom ,y:y4 }}
    className='font-["Josefin_Sans"] tracking-tight bg-gradient-to-l from-[#fefae0] to-[#faedcd]'>
      <div className="wrapper flex md:flex-row flex-col justify-between items-center md:gap-0 gap-4 bg-gradient-to-r from-[#ffbe0b] to-[#fb5607] rounded-t-3xl md:h-72 h-[60vh] md:w-[98.9vw] w-[100vw] md:px-10 px-2 md:py-3 pt-3 pb-14 ">
        <div className="md:w-[30%] md:h-full h-full w-[91%] bg-white md:p-4 p-3 rounded-2xl shadow-md shadow-black/40 overflow-hidden cursor-pointer">
          <img src="/assets/banner.jpeg" className='h-full w-full rounded-xl transition-transform duration-500 hover:scale-105' alt="box" />
        </div>
        <div className="h-full md:w-[40%] text-white font-bold flex flex-col justify-between items-center text-black/80">
          <div className="h-fit w-fit text-center md:text-3xl text-xl">
            <h1>We have alot more designs and variety of pattern colors</h1>
            <h1>Want to See ?</h1>
            <h1>Contact Us right now</h1>
          </div>
          <div className="btn text-black " onClick={handleButton}>
            <motion.button 
            initial={{x:0}} 
            whileTap={{x:500}} 
            transition={{duration:1}} 
            onMouseEnter={() => setHover(true)} 
            onMouseLeave={() => setHover(false)} 
            className='px-4 py-2 md:text-xl text-[1.2rem] bg-sky-400 rounded-md flex gap-2 justify-center items-center border-[8px] border-white shadow-inner shadow-black font-semibold'>
              Place your order now {hover ? <MdArrowForward className="transition-all duration-300" /> : <MdArrowOutward className="transition-all duration-300" />}
            </motion.button>
          </div>
        </div>          
      </div>
    </motion.footer>
    </div>
  )
}

export default Gallery
//color,eyeball,