export function Lights() {
  return (
    <>
      {/* Point light to lightup the room */}
      <pointLight position={[25, 60, 60]} color="yellow" />
      {/* PointLight to lightup the back of the walls */}
      <pointLight position={[-60, 60, -75]} color="grey" intensity={0.7} />
    </>
  );
}
