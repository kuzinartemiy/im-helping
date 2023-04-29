export interface IApplicationCard {
  cardData: any
  id?: string
  date?: string
  time?: string
  location?: string
  about?: string
  completedAppQuantity?: string
  owner?: IOwner
}

export interface IOwner {
  name?: string
  avatar?: string
  phone?: string
}