import { View, Text } from 'react-native'
import { THEME } from '../../theme'

import { styles } from './styles'
import { CardContentProps } from './types'

export function CardContent({
  color = THEME.COLORS.TEXT,
  label,
  value
}: CardContentProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.value, { color: color }]} numberOfLines={1}>
        {value}
      </Text>
    </View>
  )
}
