import { OrbitingCircles } from "./OrbitingCircles";


export function Frameworks() {
  const skills=[
    "aws",
    "css3",
    "django",
    "express",
    "flask",
    "Gin",
    "git",
    "heroku",
    "html5",
    "javascript",
    "mongodb",
    "mysql",
    "Python",
    "react",
    "tailwindcss",
    "vitejs",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
            <Icon key={index} src={`assets/logos/${skill}.svg`} />
      ))} 
      </OrbitingCircles>
      <OrbitingCircles 
      iconSize={25} 
      radius={100}
      reverse speed={2}
      >
        {skills.reverse().map((skill, index) => (
            <Icon key={index} src={`assets/logos/${skill}.svg`} />
      ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon=({src}) => (
    <img src={src} className="rounded-sm hover:scale-110 
    duration-200 "/>
);
