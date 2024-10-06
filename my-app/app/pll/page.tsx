import { Navbar } from "@/components/navbar";
import { AlgorithmsOfType, SpeedcubeTimerComponent } from "@/components/speedcube-timer";

// Define the PLL cases with all necessary properties
const PLL_CASES: AlgorithmsOfType[] = [
  {
    name: "Aa",
    description: "Adjacent Corner Swap",
    scramblePattern: "x L2 D2 L' U' L D2 L' U L'",
    image: "/images/pll/Aa.png",
  },
  {
    name: "Ab",
    description: "Adjacent Corner Swap",
    scramblePattern: "x' L2 D2 L U L' D2 L U' L",
    image: "/images/pll/Ab.png",
  },
  {
    name: "E",
    description: "Diagonal Corner Swap",
    scramblePattern: "x' L' U L D' L' U' L D L' U' L D' L' U L D",
    image: "/images/pll/E.png",
  },
  {
    name: "F",
    description: "Adjacent Corner Swap",
    scramblePattern: "R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R",
    image: "/images/pll/F.png",
  },
  {
    name: "Ga",
    description: "Adjacent Corner Swap",
    scramblePattern: "R2 U R' U R' U' R U' R2 U' D R' U R D'",
    image: "/images/pll/Ga.png",
  },
  {
    name: "Gb",
    description: "Adjacent Corner Swap",
    scramblePattern: "R' U' R U D' R2 U R' U R U' R U' R2 D",
    image: "/images/pll/Gb.png",
  },
  {
    name: "Gc",
    description: "Adjacent Corner Swap",
    scramblePattern: "R2 U' R U' R U R' U R2 U D' R U' R' D",
    image: "/images/pll/Gc.png",
  },
  {
    name: "Gd",
    description: "Adjacent Corner Swap",
    scramblePattern: "R U R' U' D R2 U' R U' R' U R' U R2 D'",
    image: "/images/pll/Gd.png",
  },
  {
    name: "Ja",
    description: "Adjacent Corner Swap",
    scramblePattern: "x R2 F R F' R U2 r' U r U2",
    image: "/images/pll/Ja.png",
  },
  {
    name: "Jb",
    description: "Adjacent Corner Swap",
    scramblePattern: "R U R' F' R U R' U' R' F R2 U' R'",
    image: "/images/pll/Jb.png",
  },
  {
    name: "Na",
    description: "Diagonal Corner Swap",
    scramblePattern: "R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'",
    image: "/images/pll/Na.png",
  },
  {
    name: "Nb",
    description: "Diagonal Corner Swap",
    scramblePattern: "R' U R U' R' F' U' F R U R' F R' F' R U' R",
    image: "/images/pll/Nb.png",
  },
  {
    name: "Ra",
    description: "Adjacent Corner Swap",
    scramblePattern: "R U' R' U' R U R D R' U' R D' R' U2 R'",
    image: "/images/pll/Ra.png",
  },
  {
    name: "Rb",
    description: "Adjacent Corner Swap",
    scramblePattern: "R2 F R U R U' R' F' R U2 R' U2 R",
    image: "/images/pll/Rb.png",
  },
  {
    name: "T",
    description: "Adjacent Corner Swap",
    scramblePattern: "R U R' U' R' F R2 U' R' U' R U R' F'",
    image: "/images/pll/T.png",
  },
  {
    name: "Ua",
    description: "Edges Only",
    scramblePattern: "M2 U M U2 M' U M2",
    image: "/images/pll/Ua.png",
  },
  {
    name: "Ub",
    description: "Edges Only",
    scramblePattern: "M2 U' M U2 M' U' M2",
    image: "/images/pll/Ub.png",
  },
  {
    name: "V",
    description: "Diagonal Corner Swap",
    scramblePattern: "R' U R' U' y R' F' R2 U' R' U R' F R F",
    image: "/images/pll/V.png",
  },
  {
    name: "Y",
    description: "Diagonal Corner Swap",
    scramblePattern: "F R U' R' U' R U R' F' R U R' U' R' F R F'",
    image: "/images/pll/Y.png",
  },
  {
    name: "H",
    description: "Edges Only",
    scramblePattern: "M2 U M2 U2 M2 U M2",
    image: "/images/pll/H.png",
  },
  {
    name: "Z",
    description: "Edges Only",
    scramblePattern: "M' U M2 U M2 U M' U2 M2",
    image: "/images/pll/Z.png",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <SpeedcubeTimerComponent algorithmTypeCases={PLL_CASES} title="PLL Cases"/>
    </>
  );
}
