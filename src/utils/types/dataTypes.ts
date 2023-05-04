export interface IApplicationCard {
  cardData: any
  id?: string
  date?: string
  time?: string
  location?: string
  about?: string
  completedAppQuantity?: string
  owner?: IOwner
  size?: 'small' | 'large'
  type?: 'activeRecepient' | 'activeVolunteer' | 'complited'
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

export interface IActiveApplications {
  type: 'activeRecepient' | 'activeVolunteer'
  size: 'small' | 'large'
}
