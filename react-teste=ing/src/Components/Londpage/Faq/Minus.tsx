import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Minus: React.FC<IconProps> = (props) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      {...props}
    >
      <defs>
        <style>{'.cls-1{fill-rule:evenodd}'}</style>
      </defs>
      <path className="cls-1" d="M.5 8.5v-1h15v1z" />
    </svg>
  );
};