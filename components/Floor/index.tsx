import {useRef,useEffect} from "react"
import {DoubleSide} from "three"
export function Floor() {
    const floorRef = useRef<JSX.IntrinsicElements["mesh"]>()
    useEffect(()=>{
        if(floorRef.current && floorRef.current.material){
            (floorRef.current.material as any).side = DoubleSide
        }
    },[])
  return (
    <mesh rotation={[-Math.PI/2,0,0]}  ref={floorRef} >
      <planeBufferGeometry  attach="geometry" args={[300,300]} />
      <meshStandardMaterial attach="material" color="#ffffff" />
    </mesh>
  );
}
