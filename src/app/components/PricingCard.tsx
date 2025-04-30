'use client';

import Link from 'next/link';
import { useState } from 'react';

// ✅ Función cn incluida directamente en este archivo
function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description?: string;
  features: PricingFeature[];
  buttonText: string;
  buttonLink: string;
  gradient: string;
  popular?: boolean;
}

export function PricingCard({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  buttonLink,
  gradient,
  popular = false,
}: PricingCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        'relative flex flex-col rounded-2xl shadow-lg transition-all duration-300 ease-in-out',
        isHovered ? 'translate-y-[-8px] shadow-xl' : ''
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          'flex h-full flex-col rounded-2xl p-6 text-white',
          gradient
        )}
      >
        {popular && (
          <div className="absolute -top-3 right-6 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase text-primary shadow-md">
            Popular
          </div>
        )}

        <div className="mb-5 flex flex-col items-center justify-center text-center">
          <p className="text-lg font-semibold uppercase tracking-wider">{title}</p>
          <div className="mt-4 flex items-baseline">
            <span className="text-5xl font-bold">{price}</span>
            {period && <span className="ml-1 text-lg opacity-80">/{period}</span>}
          </div>
          {description && (
            <p className="mt-2 text-sm font-medium opacity-90">{description}</p>
          )}
        </div>

        <ul className="mb-6 mt-2 flex-1 space-y-4 px-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-white/30">
                <svg
                  className="h-3 w-3 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className={cn('text-sm', feature.included ? '' : 'opacity-75')}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        <Link
          href={buttonLink}
          className={cn(
            'group mt-auto flex w-full items-center justify-center rounded-full bg-white py-3 px-6 text-sm font-semibold transition-all duration-200',
            'hover:bg-opacity-95 hover:shadow-md',
            isHovered ? 'scale-105' : ''
          )}
        >
          <span className="bg-gradient-to-r from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
            {buttonText}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
