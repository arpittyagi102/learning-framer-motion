import { motion,useScroll,useSpring,useTransform } from 'framer-motion'
import { useEffect, useState,useRef } from 'react';
import { followPointer } from './components/followPointer';

export default function Home() {
  const style = "h-20 w-20 bg-white m-10 inline-block text-black text-center";

  const list=["one","two","three","four","five"];
  const [on, setOn] = useState(false);

  const { scrollYProgress } = useScroll();
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const ref = useRef(null);
  const { x, y } = followPointer(ref);

  return (
    <div className='wrapper m-10'>

      <div className=' text-4xl '>Easy</div>
          <motion.div  className={style}
            whileHover={{ rotate:90 }}
            whileTap={{ rotate:-90 }}
          > Rotate </motion.div>

          <motion.div  className={style}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.7 }}
            transition={{
              type:"spring",
              stiffness:400,
            }}
          > Resize </motion.div>

          <motion.div className={style}
            whileHover={{ backgroundColor:'#0565ff' }}
            whileTap={{ backgroundColor:'#ff0505' }} 
          > Color </motion.div>

          <motion.div className={style}
            whileHover={{ outline:"solid white 5px",border:"solid black 5px" }}
            whileTap={{ backgroundColor:'#ff0505' }} 
          > Border </motion.div>

          <motion.div className={style}
            whileHover={{ opacity:0 }}
            whileTap={{ opacity:1 }} 
          > Opacity </motion.div>

          <motion.div className={style}
            whileHover={{ borderRadius:"100%" }}
            whileTap={{borderRadius:0 }} 
          > Radius </motion.div> 

          <motion.div className={style}
            whileHover={{ y:100 }}
            whileTap={{ y:-100 }} 
          > Move </motion.div> 

          <motion.div className={style}
            drag 
          > Drag </motion.div>    


      <div className=' text-4xl '>Medium</div>    
          <motion.div className={style}
            ref={ref}
            whileHover={{ x:x, y:y}}
            drag 
          > follow </motion.div> 

          <motion.div className={style}
          > background-position </motion.div>
          
          <motion.div className={style}
              style={{ rotate:rotation }}
          > scroll </motion.div>

          <motion.div className={style}
              style={{ scaleX: scrollYProgress }}
          > drawing border </motion.div>

          <motion.div className={style}
          > drawing border </motion.div>

          <motion.ul className={`h-min w-20 bg-white m-10 flex text-black text-center ${on?"flex-col-reverse":"flex-col"}`}
            transition= {{
              staggerChildren: 0.5
            }}
          >
              <motion.button layout onClick={() => setOn(!on)} className='bg-blue-500'>order</motion.button>
             {list.map((value,key)=>{
                return (<motion.li key={key} layout>{value}</motion.li>)
             })}
          </motion.ul>

    </div>
  )
}
