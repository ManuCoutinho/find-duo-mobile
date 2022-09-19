import { TouchableOpacity, View, Image, FlatList, Text } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Entypo } from '@expo/vector-icons'
import { GameParams } from '../../@types/navigation'
import { Background } from '../../components/Background'
import { Heading } from '../../components/Heading'
import { AnnounceCard } from '../../components/AnnounceCard'

import { THEME } from '../../theme'
import { styles } from './styles'

import logoImg from '../../assets/logo-nlw-esports.png'
import { useEffect, useState } from 'react'
import { Ad } from '../../components/AnnounceCard/types'

export function Announces() {
  const [ad, setAd] = useState<Ad[]>()
  const navigation = useNavigation()
  const route = useRoute()
  const game = route.params as GameParams
  const containerStyle =
    ad?.length === 0
      ? styles.emptyContent
      : ad?.length === 1
      ? styles.oneCard
      : styles.contentList
  useEffect(() => {
    fetch(`http://192.168.100.216:4800/games/${game.id}/ads`)
      .then((response) => response.json())
      .then((data) => setAd(data))
  }, [])
  console.log(containerStyle)
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
              onConnect={() => console.log('abriu modal')}
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
      </SafeAreaView>
    </Background>
  )
}
