import defaultAvatar from '../../assets/images/default-user.png';

export const user = {
  name: 'Иванов Иван Иванович',
  id: '1',
  phone: '+7 000 000 00 00',
  avatar: defaultAvatar,
};

export const messagesMok = [
  {
    id: 'chat-5-1090',
    owner: {
      id: '2',
      name: 'Олег',
      avatar: defaultAvatar,
    },
    type: 'response',
    time: '10:10',
    text: 'Привет, Иван. Как дела? Как идёт работа над проектом?',
  },
  {
    id: 'chat-5-1091',
    owner: {
      id: '1',
      name: 'Иван',
      avatar: defaultAvatar,
    },
    type: 'message',
    time: '10:12',
    text: 'Привет. Давай сегодня созвонимся. Проект практически готов, и у меня есть что показать.',
  },
  {
    id: 'chat-5-1092',
    owner: {
      id: '2',
      name: 'Олег',
      avatar: defaultAvatar,
    },
    type: 'response',
    time: '10:14',
    text: 'Не уверен, что сегодня получится. Всё ещё в офисе. Давай уточню через час. Возникли ли какие-либо проблемы на последней стадии проекта?',
  },
  {
    id: 'chat-5-1093',
    owner: {
      id: '1',
      name: 'Иван',
      avatar: defaultAvatar,
    },
    type: 'message',
    time: '10:20',
    text: 'Нет, всё прошло гладко. Очень хочу показать всё команде.',
  },
  {
    id: 'chat-5-1094',
    owner: {
      id: '1',
      name: 'Иван',
      avatar: defaultAvatar,
    },
    type: 'typing',
    time: '10:31',
  },
];
