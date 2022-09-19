import { ImageSourcePropType, TouchableOpacityProps } from "react-native"

export interface GameCardProps extends TouchableOpacityProps {
 data: GameCardTypes
}

export type GameCardTypes = {
  id: string
  title: string
  _count: {
    ads: number
  }
  bannerUrl: string
}