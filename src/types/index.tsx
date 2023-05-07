export enum DatePickerTypes {
  Date = 'date',
  Time = 'time',
}

export enum ApplicationTypes {
  ActiveRecipient = 'activeRecepient',
  ActiveVolunteer = 'activeVolunteer',
  Completed = 'completed',
}

export interface IOwner {
  name?: string
  avatar?: string
  phone?: string
}

export interface IApplicationCard {
  id: string
  date: string
  time: string
  location: string
  about: string
  completedAppQuantity: string
  owner: IOwner
  type?: ApplicationTypes
}

export interface IToolTipMap {
  cardData: any
  id: string
  name?: string
  phone?: string
  avatar?: string
}
