import { TouchableOpacity, View, Image, FlatList, Text } from 'react-native'
import { useEffect, useState } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Entypo } from '@expo/vector-icons'
import { GameParams } from '../../@types/navigation'
import { Background } from '../../components/Background'
import { Heading } from '../../components/Heading'
import { AnnounceCard } from '../../components/AnnounceCard'
import { Modal } from '../../components/Modal'

import { Ad } from '../../components/AnnounceCard/types'
import { THEME } from '../../theme'
import { styles } from './styles'

import logoImg from '../../assets/logo-nlw-esports.png'

export function Announces() {
  const navigation = useNavigation()
  const route = useRoute()
  const [ad, setAd] = useState<Ad[]>()
  const [discordSelected, setDiscordSelected] = useState('')

  const game = route.params as GameParams
  const containerStyle =
    ad?.length === 0
      ? styles.emptyContent
      : ad?.length === 1
      ? styles.oneCard
      : styles.contentList
  useEffect(() => {
    fetch(`${process.env.BACKEND_ENDPOINT}/games/${game.id}/ads`)
      .then((response) => response.json())
      .then((data) => setAd(data))
  }, [])

  async function getDiscordByAd(adsId: string) {
    await fetch(`${process.env.BACKEND_ENDPOINT}/ads/${adsId}/discord`)
      .then((response) => response.json())
      .then((data) => setDiscordSelected(data?.discord))
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Entypo
              name='chevron-thin-left'
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>
          <Image source={logoImg} style={styles.image} />
          <View style={styles.block} />
        </View>
        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode='cover'
        />
        <Heading title={game.title} subtitle='Conecte-se e comece a jogar!' />
        <FlatList
          data={ad}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <AnnounceCard
              data={item}
              onConnect={() => getDiscordByAd(item.id)}
            />
          )}
          contentContainerStyle={containerStyle}
          showsHorizontalScrollIndicator={false}
          style={styles.containerList}
          horizontal
          ListEmptyComponent={() => (
            <Text style={styles.emptyMessage}>
              Não há anúncios para este game :(
            </Text>
          )}
        />
        <Modal
          visible={discordSelected.length > 0}
          discord={discordSelected}
          onClose={() => setDiscordSelected('')}
        />
      </SafeAreaView>
    </Background>
  )
}
