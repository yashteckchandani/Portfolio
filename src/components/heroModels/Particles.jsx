import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";

const Particles = ({ count = 200 }) => {
  const refs = useRef([]);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 10,
          Math.random() * 10 + 5,
          (Math.random() - 0.5) * 10,
        ],
        speed: 0.005 + Math.random() * 0.001,
      });
    }
    return temp;
  }, [count]);

  useFrame(() => {
    refs.current.forEach((ref, i) => {
      if (ref) {
        ref.position.y -= particles[i].speed;
        if (ref.position.y < -2) {
          ref.position.y = Math.random() * 10 + 5;
        }
      }
    });
  });

  return (
    <>
      {particles.map((p, i) => (
        <Text
          key={i}
          ref={(el) => (refs.current[i] = el)}
          position={p.position}
          fontSize={0.07}
          anchorX="center"
          anchorY="middle"
          material-toneMapped={false} // important for bloom
        >
          {"</>"}
          <meshBasicMaterial color="white" />
        </Text>
      ))}
    </>
  );
};

export default Particles;
