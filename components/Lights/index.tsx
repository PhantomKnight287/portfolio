export function Lights() {
  return (
    <>
    <directionalLight position={[350,600,200]} intensity={0.5} castShadow />
    <ambientLight intensity={0.15} />
    </>
  );
}
