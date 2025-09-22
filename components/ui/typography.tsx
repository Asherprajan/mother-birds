import React from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

// Hero/Page Title - Playfair Display, 48px, Bold
export function HeroHeading({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 className={cn('heading-hero', className)} {...props}>
      {children}
    </h1>
  );
}

// H1 - Playfair Display, 48px, Bold
export function H1({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 className={cn('heading-h1', className)} {...props}>
      {children}
    </h1>
  );
}

// H2 - Playfair Display, 32px, Semi-Bold
export function H2({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={cn('heading-h2', className)} {...props}>
      {children}
    </h2>
  );
}

// H3 - Playfair Display, 24px, Semi-Bold
export function H3({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn('heading-h3', className)} {...props}>
      {children}
    </h3>
  );
}

// Tagline - Playfair Display, 32px, Semi-Bold
export function Tagline({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('tagline', className)} {...props}>
      {children}
    </p>
  );
}

// Body Text - Poppins, 16px, Regular
export function BodyText({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('body-text', className)} {...props}>
      {children}
    </p>
  );
}

// Body Text Medium - Poppins, 16px, Medium
export function BodyMedium({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('body-medium', className)} {...props}>
      {children}
    </p>
  );
}

// Small Text - Poppins, 14px, Regular, muted
export function SmallText({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('small-text', className)} {...props}>
      {children}
    </p>
  );
}

// Button Text - Poppins, 16px, Medium, UPPERCASE
export function ButtonText({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={cn('button-text', className)} {...props}>
      {children}
    </span>
  );
}

// Product Title - Playfair Display, 24px, Medium
export function ProductTitle({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn('heading-h3 font-medium', className)} {...props}>
      {children}
    </h3>
  );
}

// Section Title - Playfair Display, 32px, Semi-Bold
export function SectionTitle({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={cn('heading-h2', className)} {...props}>
      {children}
    </h2>
  );
} 