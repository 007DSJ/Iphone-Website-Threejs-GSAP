import { useGSAP } from "@gsap/react";
import { View } from "@react-three/drei";
import gsap from "gsap";

const ModelView = ({index, groupRef, gsapType, controlRef, setRotationSize, size, item}) =>{

    return(
        <View
            index={index}
            id={gsapType}
            className={`border-2 border-red-500 w-full h-full ${index===2} ? 'right-[-100%] : ''`}
        >
            {/* ambient light */}
            <ambientLight intensity={0.3}/>
            
        </View>
    )
}

export default ModelView;