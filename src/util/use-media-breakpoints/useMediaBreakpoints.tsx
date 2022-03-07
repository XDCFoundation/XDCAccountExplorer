import { isNumber, isUndefined } from 'lodash';
import { useCallback, useEffect, useState } from 'react';
import styles from './useMediaBreakpoints.module.scss';

function parseBreakpoint(breakpoint: number | string | undefined): number {
  if (isUndefined(breakpoint)) {
    return 0;
  }
  if (isNumber(breakpoint)) {
    return breakpoint;
  }
  return parseFloat(breakpoint);
}

const Breakpoints = {
  xs: parseBreakpoint(styles.xs),
  sm: parseBreakpoint(styles.sm),
  md: parseBreakpoint(styles.md),
  lg: parseBreakpoint(styles.lg),
  xl: parseBreakpoint(styles.xl),
  xxl: parseBreakpoint(styles.xxl),
} as const;

type Breakpoint = keyof typeof Breakpoints;

function useMediaBreakpoints() {
  const [width, setWidth] = useState<number>(() => window.innerWidth);

  const isMediaBreakpointUp = useCallback((breakpoint: Breakpoint) => (
    Breakpoints[breakpoint] <= width
  ), [width]);

  const isMediaBreakpointDown = useCallback((breakpoint: Breakpoint) => (
    Breakpoints[breakpoint] > width
  ), [width]);

  const isMediaBreakpointBetween = useCallback((
    breakpointFrom: Breakpoint,
    breakpointTo: Breakpoint,
  ) => {
    const breakpointFromValue = Breakpoints[breakpointFrom];
    const breakpointToValue = Breakpoints[breakpointTo];

    const minBreakpoint = Math.min(breakpointFromValue, breakpointToValue);
    const maxBreakpoint = Math.max(breakpointFromValue, breakpointToValue);

    return minBreakpoint <= width && maxBreakpoint > width;
  }, [width]);

  useEffect(() => {
    const windowResizeListener = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', windowResizeListener);

    return () => {
      window.removeEventListener('resize', windowResizeListener);
    };
  }, []);

  return {
    isMediaBreakpointUp,
    isMediaBreakpointDown,
    isMediaBreakpointBetween,
  };
}

export default useMediaBreakpoints;
