export interface AnnounceCardProps {
  data: Ad
  onConnect: () => void
}

export type Ad = {
  hourEnd: string
  hourStart: string
  name: string
  id: string
  weekDays: string[]
  yearsPlaying: number
  useVoiceChannel: boolean
}
