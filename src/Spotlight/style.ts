import { createStyles } from 'antd-style';

export const useStyles = createStyles(
  (
    { css, token, isDarkMode },
    { offset, outside, size }: { offset: { x: number; y: number }; outside: boolean; size: number },
  ) => {
    const spotlightX = (offset?.x ?? 0) + 'px';
    const spotlightY = (offset?.y ?? 0) + 'px';
    const spotlightOpacity = outside ? '0' : isDarkMode ? '.1' : '0.07';
    const spotlightSize = size + 'px';
    return css`
      pointer-events: none;

      position: absolute;
      z-index: 1;
      inset: 0;

      opacity: ${spotlightOpacity};
      background: radial-gradient(
        ${spotlightSize} circle at ${spotlightX} ${spotlightY},
        ${token.colorText},
        transparent
      );
      border-radius: inherit;

      transition: all 0.2s;
    `;
  },
);
