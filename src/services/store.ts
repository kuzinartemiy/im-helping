import { create } from 'zustand';

interface UserState {
  userAvatar: string
  userName: string
  userNumber: string
  userAbout: string
  changeAvatar: (url: string) => void
  changeName: (name: string) => void
  changeNumber: (number: string) => void
  changeAbout: (about: string) => void
  owner: any
  applicationCards: any
}

export const useStore = create<UserState>(set => ({
  applicationCards: [
    {
      id: '1',
      date: '24.10.2022',
      time: '16:00',
      location: 'ул. Потолочного д. 9',
      about: 'Описание заявки с возможностью развернуть и прочитать Описание заявки с возможностью развернуть и прочитать Описание заявки с  прочитать Описание заявки с',
      completedAppQuantity: '1',
      owner: {
        name: 'Петров Петр Петрович',
        avatar: 'https://i.pinimg.com/originals/53/1a/5c/531a5cf45c39bad3320af48e8ad8d324.png',
        phone: '+7(000) 000-00-00',
      },
    },
    {
      id: '2',
      date: '25.10.2022',
      time: '13:00',
      location: 'ул. Дверная д. 13',
      about: 'Описание заявки с возможностью развернуть и прочитать Описание заявки с возможностью развернуть и прочитать Описание заявки с  прочитать Описание заявки с',
      completedAppQuantity: '13',
      owner: {
        name: 'Алексеев Алексей Алексеевич ',
        avatar: 'https://i.pinimg.com/originals/53/1a/5c/531a5cf45c39bad3320af48e8ad8d324.png',
        phone: '+7(000) 000-00-13',
      },
    },
    {
      id: '3',
      date: '13.10.2022',
      time: '11:00',
      location: 'ул. Оконная д. 9',
      about: 'Описание заявки с возможностью развернуть и прочитать Описание заявки с возможностью развернуть и прочитать Описание заявки с  прочитать Описание заявки с',
      completedAppQuantity: '33',
      owner: {
        name: 'Александров Александр Александрович',
        avatar: 'https://i.pinimg.com/originals/53/1a/5c/531a5cf45c39bad3320af48e8ad8d324.png',
        phone: '+7(000) 000-00-11',
      },
    },
    {
      id: '4',
      date: '13.10.2022',
      time: '11:00',
      location: 'ул. Оконная д. 9',
      about: 'Описание заявки с возможностью развернуть и прочитать Описание заявки с возможностью развернуть и прочитать Описание заявки с  прочитать Описание заявки с',
      completedAppQuantity: '33',
      owner: {
        name: 'Александров Александр Александрович',
        avatar: 'https://i.pinimg.com/originals/53/1a/5c/531a5cf45c39bad3320af48e8ad8d324.png',
        phone: '+7(000) 000-00-11',
      },
    },
    {
      id: '5',
      date: '13.10.2022',
      time: '11:00',
      location: 'ул. Оконная д. 9',
      about: 'Описание заявки с возможностью развернуть и прочитать Описание заявки с возможностью развернуть и прочитать Описание заявки с  прочитать Описание заявки с',
      completedAppQuantity: '33',
      owner: {
        name: 'Александров Александр Александрович',
        avatar: 'https://i.pinimg.com/originals/53/1a/5c/531a5cf45c39bad3320af48e8ad8d324.png',
        phone: '+7(000) 000-00-11',
      },
    },
    {
      id: '6',
      date: '13.10.2022',
      time: '11:00',
      location: 'ул. Оконная д. 9',
      about: 'Описание заявки с возможностью развернуть и прочитать Описание заявки с возможностью развернуть и прочитать Описание заявки с  прочитать Описание заявки с',
      completedAppQuantity: '33',
      owner: {
        name: 'Александров Александр Александрович',
        avatar: 'https://i.pinimg.com/originals/53/1a/5c/531a5cf45c39bad3320af48e8ad8d324.png',
        phone: '+7(000) 000-00-11',
      },
    },
    {
      id: '7',
      date: '13.10.2022',
      time: '11:00',
      location: 'ул. Оконная д. 9',
      about: 'Описание заявки с возможностью развернуть и прочитать Описание заявки с возможностью развернуть и прочитать Описание заявки с  прочитать Описание заявки с',
      completedAppQuantity: '33',
      owner: {
        name: 'Александров Александр Александрович',
        avatar: 'https://i.pinimg.com/originals/53/1a/5c/531a5cf45c39bad3320af48e8ad8d324.png',
        phone: '+7(000) 000-00-11',
      },
    },
  ],
  owner: {
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvcId3roctkMS-wX26vViSB2FNUOI-bfaSZw&usqp=CAU',
    name: 'John Cena',
    id: '0034321',
    phone: '88005553535',
    about: 'I love music, books and scss I love music, books and scss I love music, books and scss',
    progress: 2,
    counters: {
      faces: 2500,
      keys: 1,
      hands: 150,
    },
  },
  userAvatar: 'userAvatar',
  userName: 'userName',
  userNumber: 'userNumber',
  userAbout: 'userAbout',
  changeAvatar: (url: string) => set(() => ({ userAvatar: url })),
  changeName: (name: string) => set(() => ({ userName: name })),
  changeNumber: (number: string) => set(() => ({ userNumber: number })),
  changeAbout: (about: string) => set(() => ({ userAbout: about })),
}));
