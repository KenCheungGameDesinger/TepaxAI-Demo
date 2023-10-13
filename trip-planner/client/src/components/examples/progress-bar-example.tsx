'use client'

import React, { useEffect, useState } from "react";
import { Progress } from "@nextui-org/progress";

export default function ProgressBarExample() {
  const [progressValue, setProgressValue] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgressValue((v) => (v >= 100 ? 0 : v + 10));
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <Progress
      size="sm"
      aria-label="Loading..."
      classNames={{
        indicator:
          "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
      }}
      value={progressValue}
    />
  );
}
