import React from "react";
import { Progress } from "@nextui-org/progress";

interface ProgressProps {
  progress: number;
}

export default function ProgressBar({ progress = 50 }: ProgressProps) {
  return <Progress size="sm" aria-label="Loading..." value={progress} />;
}
