import { ICoordinates } from './IMap'

export interface INote {
  nickname: string
  partners: string[]
  timestamp: string
  place: ICoordinates
  private: boolean
  types?: string[]
  contraceptive?: string[]
  tags?: string[]
  notes?: string
}
