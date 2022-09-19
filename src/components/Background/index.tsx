import { ImageBackground } from 'react-native';
import { BackgroundProps } from './types';
import { styles } from './styles';

import bgImg from '../../assets/background-galaxy.png'

export function Background({children}: BackgroundProps) {
  return (
    <ImageBackground source={bgImg} defaultSource={bgImg} style={styles.container}>
    {children}
    </ImageBackground>
  );
}