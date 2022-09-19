import { Text } from 'react-native'
import { SafeAreaView} from 'react-native-safe-area-context'

import { styles } from './styles';
import { HeadingProps } from './types';

export function Heading({ title, subtitle, ...rest }: HeadingProps) {
  return (
    <SafeAreaView style={styles.container} {...rest}>
      <Text style={styles.title}>
        {title}
      </Text>
      <Text style={styles.subtitle}>
        {subtitle}
      </Text>
    </SafeAreaView>
  );
}