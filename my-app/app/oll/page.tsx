import { Navbar } from "@/components/navbar";
import { AlgorithmsOfType, SpeedcubeTimerComponent } from "@/components/speedcube-timer";

// Define the PLL cases with all necessary properties
const OLL_CASES: AlgorithmsOfType[] = [
    {
      name: "Algorithm 1",
      description: "Dot",
      scramblePattern: "R U2 R2 F R F' U2 R' F R F'",
      image: "/images/algorithms/Algorithm1.png",
    },
    {
      name: "Algorithm 2",
      description: "Dot",
      scramblePattern: "r U r' U2 r U2 R' U2 R U' r'",
      image: "/images/algorithms/Algorithm2.png",
    },
    {
      name: "Algorithm 3",
      description: "Dot",
      scramblePattern: "r' R2 U R' U r U2 r' U M'",
      image: "/images/algorithms/Algorithm3.png",
    },
    {
      name: "Algorithm 4",
      description: "Dot",
      scramblePattern: "M U' r U2 r' U' R U' R' M'",
      image: "/images/algorithms/Algorithm4.png",
    },
    {
      name: "Algorithm 5",
      description: "Square Shape",
      scramblePattern: "l' U2 L U L' U l",
      image: "/images/algorithms/Algorithm5.png",
    },
    {
      name: "Algorithm 6",
      description: "Square Shape",
      scramblePattern: "r U2 R' U' R U' r'",
      image: "/images/algorithms/Algorithm6.png",
    },
    {
      name: "Algorithm 7",
      description: "Small Lightning Bolt",
      scramblePattern: "r U R' U R U2 r'",
      image: "/images/algorithms/Algorithm7.png",
    },
    {
      name: "Algorithm 8",
      description: "Small Lightning Bolt",
      scramblePattern: "l' U' L U' L' U2 l",
      image: "/images/algorithms/Algorithm8.png",
    },
    {
      name: "Algorithm 9",
      description: "Fish Shape",
      scramblePattern: "R U R' U' R' F R2 U R' U' F'",
      image: "/images/algorithms/Algorithm9.png",
    },
    {
      name: "Algorithm 10",
      description: "Fish Shape",
      scramblePattern: "R U R' U R' F R F' R U2 R'",
      image: "/images/algorithms/Algorithm10.png",
    },
    {
      name: "Algorithm 11",
      description: "Small Lightning Bolt",
      scramblePattern: "r U R' U R' F R F' R U2 r'",
      image: "/images/algorithms/Algorithm11.png",
    },
    {
      name: "Algorithm 12",
      description: "Small Lightning Bolt",
      scramblePattern: "M' R' U' R U' R' U2 R U' R' U2 r'",
      image: "/images/algorithms/Algorithm12.png",
    },
    {
      name: "Algorithm 13",
      description: "Knight Move Shape",
      scramblePattern: "F U R U' R2 F' R U R U' R'",
      image: "/images/algorithms/Algorithm13.png",
    },
    {
      name: "Algorithm 14",
      description: "Knight Move Shape",
      scramblePattern: "R' F R U R' F' R F U' F'",
      image: "/images/algorithms/Algorithm14.png",
    },
    {
      name: "Algorithm 15",
      description: "Knight Move Shape",
      scramblePattern: "l' U' l L' U' L U l' U l",
      image: "/images/algorithms/Algorithm15.png",
    },
    {
      name: "Algorithm 16",
      description: "Knight Move Shape",
      scramblePattern: "r U r' R U R' U' r U' r'",
      image: "/images/algorithms/Algorithm16.png",
    },
    {
      name: "Algorithm 17",
      description: "Dot",
      scramblePattern: "F R' F' R2 r' U R U' R' U' M'",
      image: "/images/algorithms/Algorithm17.png",
    },
    {
      name: "Algorithm 18",
      description: "Dot",
      scramblePattern: "r U R' U R U2 r2 U' R U' R' U2 r",
      image: "/images/algorithms/Algorithm18.png",
    },
    {
      name: "Algorithm 19",
      description: "Dot",
      scramblePattern: "r' R U R U R' U' M' R' F R F'",
      image: "/images/algorithms/Algorithm19.png",
    },
    {
      name: "Algorithm 20",
      description: "Dot",
      scramblePattern: "r U R' U' M2 U R U' R' U' M'",
      image: "/images/algorithms/Algorithm20.png",
    },
    {
      name: "Algorithm 21",
      description: "Cross",
      scramblePattern: "R U2 R' U' R U R' U' R U' R'",
      image: "/images/algorithms/Algorithm21.png",
    },
    {
      name: "Algorithm 22",
      description: "Cross",
      scramblePattern: "R U2 R2 U' R2 U' R2 U2 R",
      image: "/images/algorithms/Algorithm22.png",
    },
    {
      name: "Algorithm 23",
      description: "Cross",
      scramblePattern: "R2 D' R U2 R' D R U2 R",
      image: "/images/algorithms/Algorithm23.png",
    },
    {
      name: "Algorithm 24",
      description: "Cross",
      scramblePattern: "r U R' U' r' F R F'",
      image: "/images/algorithms/Algorithm24.png",
    },
    {
      name: "Algorithm 25",
      description: "Cross",
      scramblePattern: "F' r U R' U' r' F R",
      image: "/images/algorithms/Algorithm25.png",
    },
    {
      name: "Algorithm 26",
      description: "Cross",
      scramblePattern: "R U2 R' U' R U' R'",
      image: "/images/algorithms/Algorithm26.png",
    },
    {
      name: "Algorithm 27",
      description: "Cross",
      scramblePattern: "R U R' U R U2 R'",
      image: "/images/algorithms/Algorithm27.png",
    },
    {
      name: "Algorithm 28",
      description: "Corners Oriented",
      scramblePattern: "r U R' U' M' U R U' r'",
      image: "/images/algorithms/Algorithm28.png",
    },
    {
      name: "Algorithm 29",
      description: "Awkward Shape",
      scramblePattern: "R U R' U' R U' R' F' U' F R U R'",
      image: "/images/algorithms/Algorithm29.png",
    },
    {
      name: "Algorithm 30",
      description: "Awkward Shape",
      scramblePattern: "F R' F R2 U' R' U' R U R' F2",
      image: "/images/algorithms/Algorithm30.png",
    },
    {
      name: "Algorithm 31",
      description: "P Shape",
      scramblePattern: "R' U' F U R U' R' F' R",
      image: "/images/algorithms/Algorithm31.png",
    },
    {
      name: "Algorithm 32",
      description: "P Shape",
      scramblePattern: "L U F' U' L' U L F L'",
      image: "/images/algorithms/Algorithm32.png",
    },
    {
      name: "Algorithm 33",
      description: "T Shape",
      scramblePattern: "R U R' U' R' F R F'",
      image: "/images/algorithms/Algorithm33.png",
    },
    {
      name: "Algorithm 34",
      description: "C Shape",
      scramblePattern: "R U R2 U' R' F R U R U' F'",
      image: "/images/algorithms/Algorithm34.png",
    },
    {
      name: "Algorithm 35",
      description: "Fish Shape",
      scramblePattern: "R U2 R2 F R F' R U2 R'",
      image: "/images/algorithms/Algorithm35.png",
    },
    {
      name: "Algorithm 36",
      description: "W Shape",
      scramblePattern: "L' U' L U' L' U L U L F' L' F",
      image: "/images/algorithms/Algorithm36.png",
    },
    {
      name: "Algorithm 37",
      description: "Fish Shape",
      scramblePattern: "F R' F' R U R U' R'",
      image: "/images/algorithms/Algorithm37.png",
    },
    {
      name: "Algorithm 38",
      description: "W Shape",
      scramblePattern: "R U R' U R U' R' U' R' F R F'",
      image: "/images/algorithms/Algorithm38.png",
    },
    {
      name: "Algorithm 39",
      description: "Big Lightning Bolt",
      scramblePattern: "L F' L' U' L U F U' L'",
      image: "/images/algorithms/Algorithm39.png",
    },
    {
      name: "Algorithm 40",
      description: "Big Lightning Bolt",
      scramblePattern: "R' F R U R' U' F' U R",
      image: "/images/algorithms/Algorithm40.png",
    },
    {
      name: "Algorithm 41",
      description: "Awkward Shape",
      scramblePattern: "R U R' U R U2 R' F R U R' U' F'",
      image: "/images/algorithms/Algorithm41.png",
    },
    {
      name: "Algorithm 42",
      description: "Awkward Shape",
      scramblePattern: "R' U' R U' R' U2 R F R U R' U' F'",
      image: "/images/algorithms/Algorithm42.png",
    },
    {
      name: "Algorithm 43",
      description: "P Shape",
      scramblePattern: "F' U' L' U L F",
      image: "/images/algorithms/Algorithm43.png",
    },
    {
      name: "Algorithm 44",
      description: "P Shape",
      scramblePattern: "F U R U' R' F'",
      image: "/images/algorithms/Algorithm44.png",
    },
    {
      name: "Algorithm 45",
      description: "T Shape",
      scramblePattern: "F R U R' U' F'",
      image: "/images/algorithms/Algorithm45.png",
    },
    {
      name: "Algorithm 46",
      description: "C Shape",
      scramblePattern: "R' U' R' F R F' U R",
      image: "/images/algorithms/Algorithm46.png",
    },
    {
      name: "Algorithm 47",
      description: "Small L Shape",
      scramblePattern: "R' U' R' F R F' R' F R F' U R",
      image: "/images/algorithms/Algorithm47.png",
    },
    {
      name: "Algorithm 48",
      description: "Small L Shape",
      scramblePattern: "F R U R' U' R U R' U' F'",
      image: "/images/algorithms/Algorithm48.png",
    },
    {
      name: "Algorithm 49",
      description: "Small L Shape",
      scramblePattern: "r U' r2 U r2 U r2 U' r",
      image: "/images/algorithms/Algorithm49.png",
    },
    {
      name: "Algorithm 50",
      description: "Small L Shape",
      scramblePattern: "r' U r2 U' r2 U' r2 U r'",
      image: "/images/algorithms/Algorithm50.png",
    },
    {
      name: "Algorithm 51",
      description: "I Shape",
      scramblePattern: "F U R U' R' U R U' R' F'",
      image: "/images/algorithms/Algorithm51.png",
    },
    {
      name: "Algorithm 52",
      description: "I Shape",
      scramblePattern: "R U R' U R U' B U' B' R'",
      image: "/images/algorithms/Algorithm52.png",
    },
    {
      name: "Algorithm 53",
      description: "Small L Shape",
      scramblePattern: "l' U2 L U L' U' L U L' U l",
      image: "/images/algorithms/Algorithm53.png",
    },
    {
      name: "Algorithm 54",
      description: "Small L Shape",
      scramblePattern: "r U2 R' U' R U R' U' R U' r'",
      image: "/images/algorithms/Algorithm54.png",
    },
    {
      name: "Algorithm 55",
      description: "I Shape",
      scramblePattern: "R' F R U R U' R2 F' R2 U' R' U R U R'",
      image: "/images/algorithms/Algorithm55.png",
    },
    {
      name: "Algorithm 56",
      description: "I Shape",
      scramblePattern: "r' U' r U' R' U R U' R' U R r' U r",
      image: "/images/algorithms/Algorithm56.png",
    },
    {
      name: "Algorithm 57",
      description: "Corners Oriented",
      scramblePattern: "R U R' U' M' U R U' r'",
      image: "/images/algorithms/Algorithm57.png",
    },
  ];
  
export default function Home() {
  return (
    <>
    <Navbar />
    <SpeedcubeTimerComponent algorithmTypeCases={OLL_CASES} title="OLL Cases"/>
    </>
  );
}
