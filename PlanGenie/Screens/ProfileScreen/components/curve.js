import React from 'react';
import { Svg, Path } from 'react-native-svg';

export default function Curve() {
  return (
    <Svg height="100" width="100">
      <Path
        d="M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
        stroke="black"
        fill="transparent"
      />
    </Svg>
  );
};
