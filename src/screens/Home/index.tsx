import { useEffect, useState } from 'react';
import { Image, FlatList } from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import logoImg from '../../assets/logo-nlw-esports.png'
import { Background } from '../../components/Background';
import { GameCard } from '../../components/GameCard';
import { GameCardTypes } from '../../components/GameCard/types';
import { Heading } from '../../components/Heading';
import { styles } from './styles';

export function Home() {
  const [games, setGames] = useState<GameCardTypes[]>([])
  const navigation = useNavigation()
  useEffect(() => {
    fetch('http://192.168.100.216:4800/games')
      .then(response => response.json())
      .then(data => setGames(data))
  }, [])

  return (
   <Background>
     <SafeAreaView style={styles.container}>
      <Image source={logoImg} style={styles.logo}/> 
      <Heading 
        title='Encontre seu duo!'
        subtitle='Selecione o game que deseja jogar...'
      />
      <FlatList 
        data={games} 
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <GameCard 
            data={item}  
            onPress={() =>  navigation.navigate('announces', item)}/>
        )}
      />
    </SafeAreaView>
   </Background>
  );
}