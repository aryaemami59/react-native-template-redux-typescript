declare module '*.gif' {
  const logo: number;
  export default logo;
}

declare module 'react-native/Libraries/NewAppScreen' {
  import type { FC } from 'react';
  // import { Colors } from "react-native/Libraries/NewAppScreen/index";
  // export interface TypedColors {
  //   primary: string;
  //   white: string;
  //   lighter: string;
  //   light: string;
  //   dark: string;
  //   darker: string;
  //   black: string;
  // }
  // export const Header: FC;
  export const HermesBadge: FC;
  // export const LearnMoreLinks: FC;
  // export const Colors: TypedColors;
  // export const DebugInstructions: FC;
  // export const ReloadInstructions: FC;
}
