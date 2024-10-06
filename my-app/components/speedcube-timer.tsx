"use client";

import { useState, useEffect, useCallback, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
// Removed Collapsible imports as it's no longer needed

// Define the TypeScript interface for a PLL case
export interface AlgorithmsOfType {
  name: string;
  description: string;
  scramblePattern: string;
  image: string;
}

type Props = {
  algorithmTypeCases: AlgorithmsOfType[],
  title: string
}

// Define the type for solve times
type SolveTimes = Record<string, number[]>;

export function SpeedcubeTimerComponent({ algorithmTypeCases, title } : Props): JSX.Element {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [scramble, setScramble] = useState<string>("");
  const [currentCase, setCurrentCase] = useState<AlgorithmsOfType | null>(null); // To track the current PLL case
  const [solveTimes, setSolveTimes] = useState<SolveTimes>({}); // To store solve times

  // Compute average times for all PLL cases using useMemo
  const avgTimes: Record<string, number> = useMemo(() => {
    const averages: Record<string, number> = {};
    algorithmTypeCases.forEach((pll) => {
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
    const randomIndex = Math.floor(Math.random() * algorithmTypeCases.length);
    const selectedPLLCas = algorithmTypeCases[randomIndex];
    setCurrentCase(selectedPLLCas);
    const newScramble = `${selectedPLLCas.scramblePattern}`.trim();
    setScramble(newScramble);
  }, []);

  // Toggle the timer and handle scramble generation
  const toggleTimer = useCallback(() => {
    if (isRunning) {
      setIsRunning(false);
      // Save the solve time using functional state update to avoid stale closure
      if (currentCase) {
        const newTime = parseFloat((time / 1000).toFixed(2)); // Convert to seconds with two decimals
        setSolveTimes((prevSolveTimes) => ({
          ...prevSolveTimes,
          [currentCase.name]: [...(prevSolveTimes[currentCase.name] || []), newTime],
        }));
      }
      // Generate a new scramble
      generateScramble();
    } else {
      setIsRunning(true);
      setTime(0);
    }
  }, [isRunning, time, currentCase, generateScramble]);

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
      {/* Permanent Sidebar */}
      <div className="w-64 bg-card p-6 shadow-lg h-full overflow-y-auto h-screen">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <ul className="space-y-4">
          {algorithmTypeCases.map((pll) => (
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
      </div>

      {/* Main Content */}
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
              {currentCase && (
                <>
                  {/* <img
                    src={currentPLLCas.image}
                    alt={`${currentPLLCas.name} PLL case`}
                    className="w-32 h-32 object-contain mt-4"
                    loading="lazy"
                  /> */}
                  <p className="mt-2 text-sm text-muted-foreground">
                    <strong>Case:</strong> {currentCase.name} - {currentCase.description}
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
