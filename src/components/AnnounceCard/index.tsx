import { TouchableOpacity, View, Text } from 'react-native'
import { GameController } from 'phosphor-react-native'
import { CardContent } from '../CardContent'
import { THEME } from '../../theme'
import { styles } from './styles'
import { AnnounceCardProps } from './types'

export function AnnounceCard({ data, onConnect }: AnnounceCardProps) {
  function formatHour(hour: string) {
    return hour.slice(0, 2)
  }
  return (
    <View style={styles.container}>
      <CardContent label='Nome' value={data?.name} />
      <CardContent label='Tempo de jogo' value={`${data?.yearsPlaying} anos`} />
      <CardContent
        label='Disponibilidade'
        value={`${data?.weekDays?.length} dias \u2022 ${formatHour(
          data?.hourStart
        )}h - ${formatHour(data?.hourEnd)}h`}
      />
      <CardContent
        label='Chamada de áudio?'
        value={data?.useVoiceChannel ? 'Sim' : 'Não'}
        color={
          data?.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT
        }
      />
      <TouchableOpacity style={styles.button} onPress={onConnect}>
        <GameController color={THEME.COLORS.TEXT} size={20} />
        <Text style={styles.titleButton}>Conectar</Text>
      </TouchableOpacity>
    </View>
  )
}
