export interface IApplicationCard {
  cardData: any
  id?: string
  date: number // обязательный параметр для фильтрации по нему
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

export interface IToolTipMap {
  cardData: any
  id: string
  name?: string
  phone?: string
  avatar?: string
}

export interface ICheckboxesCompletedFilterPopup {
  id: number
  label: string
}
