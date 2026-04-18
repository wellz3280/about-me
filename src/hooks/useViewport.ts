import { useEffect, useState } from 'react';

/** Alinhar com `--breakpoint-md` em src/styles/theme.css */
export const BREAKPOINT_MD_PX = 768;

export type ViewportState = {
  /** viewport ≤ BREAKPOINT_MD_PX — útil para UX mobile futura (drawer, bottom nav, etc.) */
  isNarrow: boolean;
  isWide: boolean;
};

/**
 * Estado de viewport estável para o app. Preferir este hook a media queries
 * espalhadas quando precisar de lógica condicional em React.
 */
function getInitialNarrow(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia(`(max-width: ${BREAKPOINT_MD_PX}px)`).matches;
}

export function useViewport(): ViewportState {
  const [isNarrow, setIsNarrow] = useState(getInitialNarrow);

  useEffect(() => {
    const query = `(max-width: ${BREAKPOINT_MD_PX}px)`;
    const mq = window.matchMedia(query);
    const sync = () => setIsNarrow(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  return { isNarrow, isWide: !isNarrow };
}
