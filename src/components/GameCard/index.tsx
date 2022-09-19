import { TouchableOpacity, ImageBackground, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import { GameCardProps } from './types';
import { THEME } from '../../theme';

export function GameCard({data, ...rest}: GameCardProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground style={styles.cover} source={{ uri: data.bannerUrl}} >
      <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
        <Text style={styles.name}>{data.title}</Text>
        <Text style={styles.ads}>
          {data._count.ads <= 1 ? `${data._count.ads} anúncio`: `${data._count.ads} anúncios`}
        </Text>
      </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}