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
  name: string;
  avatar: string;
  phone: string;
}

export interface IApplicationCard {
  id: string;
  date?: string;
  time?: string;
  location?: string;
  about: string;
  completedAppQuantity: string;
  owner: IOwner;
  type?: ApplicationTypes;
  onButtonClick?: () => void;
}

export interface IToolTipMap {
  cardData: any;
  id: string;
  name?: string;
  phone?: string;
  avatar?: string;
}

export interface IMessage {
  id: string;
  owner: IOwner;
  time?: string;
  text?: string;
  type?: string;
  class?: string;
}

export enum AdminPageTitle {
  created = 'Подтверждение / Блокировка',
  statistics = 'Статистика',
  edit = 'Создание / Редактирование заявки',
}

export interface TAdminUsersData {
  userImg: string;
  userName: string;
  userId: string;
  userTel: string;
  userPoints: string;
  userHelps: string;
  userKey: string;
  lineColor: string;
  confirmed: string;
}
