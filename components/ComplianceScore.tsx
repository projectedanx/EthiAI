
import React from 'react';

interface ComplianceScoreProps {
  score: number;
  size?: 'sm' | 'lg';
}

export const ComplianceScore: React.FC<ComplianceScoreProps> = ({ score, size = 'lg' }) => {
  const sizeConfig = {
    sm: { radius: 20, stroke: 3, textSize: 'text-sm' },
    lg: { radius: 40, stroke: 6, textSize: 'text-2xl' },
  };
  const { radius, stroke, textSize } = sizeConfig[size];
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  const scoreColor = score >= 95 ? 'text-emerald-400' : score >= 85 ? 'text-sky-400' : 'text-amber-400';
  const ringColor = score >= 95 ? 'stroke-emerald-400' : score >= 85 ? 'stroke-sky-400' : 'stroke-amber-400';

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="-rotate-90"
      >
        <circle
          className="stroke-slate-700"
          strokeWidth={stroke}
          fill="transparent"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          className={`${ringColor} transition-all duration-1000 ease-in-out`}
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
          fill="transparent"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div className={`absolute flex flex-col items-center justify-center ${scoreColor}`}>
        <span className={`${textSize} font-bold`}>{score}</span>
        {size === 'lg' && <span className="text-xs">Score</span>}
      </div>
    </div>
  );
};
