import { useEffect, useState } from "react";

interface ISkillsProps {
  skills: string[];
}

function Skills({ skills }: ISkillsProps) {
  const [isSinged, setIsSigned] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsSigned(true);
    }, 500);
  }, []);
  return (
    <>
      <ul>
        {skills.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {isSinged ? (
        <button>Start Learning</button>
      ) : (
        <button onClick={() => setIsSigned(true)}>Login</button>
      )}
    </>
  );
}

export default Skills;
