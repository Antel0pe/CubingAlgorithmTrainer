"use client";

import { useState, useEffect, useCallback, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// Define the TypeScript interface for a PLL case
interface PLLCase {
  name: string;
  description: string;
  scramblePattern: string;
  image: string;
}

// Define the type for cube face colors
type CubeFaceColor = 'white' | 'red' | 'blue' | 'orange' | 'green' | 'yellow';

// Define the PLL cases with all necessary properties
const PLL_CASES: PLLCase[] = [
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

// Define the type for solve times
type SolveTimes = Record<string, number[]>;

// Define the cube face colors
const CUBE_FACES: CubeFaceColor[] = ['white', 'red', 'blue', 'orange', 'green', 'yellow'];

export function SpeedcubeTimerComponent(): JSX.Element {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [scramble, setScramble] = useState<string>("");
  const [isTabOpen, setIsTabOpen] = useState<boolean>(false);
  const [currentPLLCas, setCurrentPLLCas] = useState<PLLCase | null>(null); // To track the current PLL case
  const [solveTimes, setSolveTimes] = useState<SolveTimes>({}); // To store solve times

  // Compute average times for all PLL cases using useMemo
  const avgTimes: Record<string, number> = useMemo(() => {
    const averages: Record<string, number> = {};
    PLL_CASES.forEach((pll) => {
      const times = solveTimes[pll.name] || [];
      if (times.length === 0) {
        averages[pll.name] = 0.00;
      } else {
        const sum = times.reduce((acc, time) => acc + time, 0);
        averages[pll.name] = parseFloat((sum / times.length).toFixed(2));
      }
    });
    return averages;
  }, [solveTimes]);

  // Generate a scramble based on a random PLL case
  const generateScramble = useCallback(() => {
    // Select a random PLL case
    const randomIndex = Math.floor(Math.random() * PLL_CASES.length);
    const selectedPLLCas = PLL_CASES[randomIndex];
    setCurrentPLLCas(selectedPLLCas);

    // Use only the scramble pattern without additional U moves
    const newScramble = `${selectedPLLCas.scramblePattern}`.trim();

    setScramble(newScramble);
  }, []);

  // Toggle the timer and handle scramble generation
  const toggleTimer = useCallback(() => {
    if (isRunning) {
      setIsRunning(false);
      // Save the solve time using functional state update to avoid stale closure
      if (currentPLLCas) {
        const newTime = parseFloat((time / 1000).toFixed(2)); // Convert to seconds with two decimals
        setSolveTimes((prevSolveTimes) => ({
          ...prevSolveTimes,
          [currentPLLCas.name]: [...(prevSolveTimes[currentPLLCas.name] || []), newTime],
        }));
      }
      // Generate a new scramble
      generateScramble();
    } else {
      setIsRunning(true);
      setTime(0);
    }
  }, [isRunning, time, currentPLLCas, generateScramble]);

  // Initialize the first scramble and load solve times from localStorage
  useEffect(() => {
    generateScramble();

    const storedSolveTimes = localStorage.getItem('solveTimes');
    if (storedSolveTimes) {
      try {
        const parsedSolveTimes: SolveTimes = JSON.parse(storedSolveTimes);
        setSolveTimes(parsedSolveTimes);
      } catch (error) {
        console.error("Error parsing solveTimes from localStorage:", error);
      }
    }
  }, [generateScramble]);

  // Save solve times to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('solveTimes', JSON.stringify(solveTimes));
    } catch (error) {
      console.error("Error saving solveTimes to localStorage:", error);
    }
  }, [solveTimes]);

  // Handle spacebar press to toggle timer
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        event.preventDefault();
        toggleTimer();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleTimer]);

  // Update the timer every 10 milliseconds when running
  useEffect(() => {
    let interval: number | undefined;
    if (isRunning) {
      interval = window.setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
    return () => {
      if (interval !== undefined) {
        clearInterval(interval);
      }
    };
  }, [isRunning]);

  // Format time in mm:ss.ms format
  const formatTime = (ms: number): string => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Collapsible
        open={isTabOpen}
        onOpenChange={setIsTabOpen}
        className="fixed left-0 top-0 z-40 h-screen"
      >
        <CollapsibleContent className="w-64 bg-card p-6 shadow-lg h-full overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">PLL Cases</h2>
          <ul className="space-y-4">
            {PLL_CASES.map((pll) => (
              <li key={pll.name} className="flex flex-col items-center">
                {/* <img
                  src={pll.image}
                  alt={`${pll.name} PLL case`}
                  className="w-24 h-24 object-contain mb-2"
                  loading="lazy"
                /> */}
                <div className="flex justify-between items-center w-full">
                  <span className="font-medium">{pll.name}</span>
                  <span className="text-muted-foreground">
                    {avgTimes[pll.name] > 0 ? `${avgTimes[pll.name].toFixed(2)}s` : '--'}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">{pll.description}</span>
              </li>
            ))}
          </ul>
        </CollapsibleContent>
        <CollapsibleTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-4 -right-12 h-24 w-12"
          >
            {isTabOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </Button>
        </CollapsibleTrigger>
      </Collapsible>

      <div className="flex-grow container mx-auto p-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8 mt-8">Speedcube Timer</h1>
        <Card className="w-full max-w-3xl">
          <CardContent className="p-6">
            <div className="flex flex-col items-center space-y-8">
              <div className="text-8xl font-mono tabular-nums" aria-live="polite">
                {formatTime(time)}
              </div>
              <Button
                onClick={toggleTimer}
                className="text-lg px-8 py-6 rounded-full"
                size="lg"
              >
                {isRunning ? 'Stop' : 'Start'}
              </Button>
              <p className="text-center text-muted-foreground">
                Press the spacebar or click the button to start/stop the timer
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 w-full max-w-3xl">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
              </h2>
              <p className="text-lg font-mono break-words">{scramble}</p>
              {currentPLLCas && (
                <>
                  {/* <img
                    src={currentPLLCas.image}
                    alt={`${currentPLLCas.name} PLL case`}
                    className="w-32 h-32 object-contain mt-4"
                    loading="lazy"
                  /> */}
                  <p className="mt-2 text-sm text-muted-foreground">
                    <strong>Case:</strong> {currentPLLCas.name} - {currentPLLCas.description}
                  </p>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
