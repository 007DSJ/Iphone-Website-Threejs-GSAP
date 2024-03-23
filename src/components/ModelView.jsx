import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ModelView = () =>{

    useGSAP(()=>{

        gsap.to('#heading',{ y:0, opacity:1})

    },[])

    return(
        <section className="common-padding">
          
        </section>
    )
}

export default ModelView;