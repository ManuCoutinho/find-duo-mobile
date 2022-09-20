import {
  View,
  Modal as NativeModal,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { CheckCircle } from 'phosphor-react-native'
import * as Clipboard from 'expo-clipboard'

import { styles } from './styles'
import { ModalProps } from './types'
import { THEME } from '../../theme'
import { Heading } from '../Heading'
import { useState } from 'react'

export function Modal({ discord, onClose, ...rest }: ModalProps) {
  const [isCopping, setIsCopping] = useState(false)
  async function handleCopyDiscordToClipboard() {
    setIsCopping(true)
    await Clipboard.setStringAsync(discord)
    Alert.alert(
      'Discord Copiado!',
      'Usuário copiado para sua área de trabalho, encontre seu duo!'
    )
    setIsCopping(false)
  }
  return (
    <NativeModal
      {...rest}
      transparent
      statusBarTranslucent
      animationType='fade'
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
            <MaterialIcons
              name='close'
              size={20}
              color={THEME.COLORS.CAPTION_300}
            />
          </TouchableOpacity>
          <CheckCircle size={64} color={THEME.COLORS.SUCCESS} weight='bold' />
          <Heading
            title="Let's Play"
            subtitle='Agora é começar a jogar!'
            style={{ alignItems: 'center', marginTop: 24 }}
          />
          <Text style={styles.label}>Adicione no Discord</Text>
          <TouchableOpacity
            style={styles.discordButton}
            onPress={handleCopyDiscordToClipboard}
            disabled={isCopping}
          >
            <Text style={styles.discord}>
              {isCopping ? (
                <ActivityIndicator color={THEME.COLORS.PRIMARY} />
              ) : (
                discord
              )}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </NativeModal>
  )
}
