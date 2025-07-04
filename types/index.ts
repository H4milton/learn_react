import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface SquareProps {
  value: "X" | "O" | null;
  onSquareClick: () => void;
}
