import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const useAos = (animat = {}) =>{
    useEffect(()=> {
        AOS.init(animat);
    })
}

export default useAos