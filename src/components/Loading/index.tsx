import { ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { THEME } from '../../theme';

import { styles } from './styles';

export function Loading() {
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator color={THEME.COLORS.PRIMARY}/>
    </SafeAreaView>
  );
}