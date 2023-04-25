import styles from './app.module.scss';
import Footer from '../footer';
import Box from '../box';
import Text from '../text';
import AplicationCard from '../aplication-card/aplication-card';

const store = {
  aplicationCardData: [
    {
      id: '1',
      date: '24.10.2022',
      time: '16:00',
      lcoation: 'ул. Потолочного д. 9',
      about: 'Описание заявки с возможностью развернуть и прочитать Описание заявки с возможностью развернуть и прочитать Описание заявки с  прочитать Описание заявки с',
      complitedAppQuantity: '1',
      owner: {
        name: 'Петров Петр Петрович ',
        avatar: 'https://i.pinimg.com/originals/53/1a/5c/531a5cf45c39bad3320af48e8ad8d324.png',
        phone: '+7(000) 000-00-00',
      },
    },
    {
      id: '2',
      date: '25.10.2022',
      time: '13:00',
      lcoation: 'ул. Дверная д. 13',
      about: 'Описание заявки с возможностью развернуть и прочитать Описание заявки с возможностью развернуть и прочитать Описание заявки с  прочитать Описание заявки с',
      complitedAppQuantity: '13',
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
      lcoation: 'ул. Оконная д. 9',
      about: 'Описание заявки с возможностью развернуть и прочитать Описание заявки с возможностью развернуть и прочитать Описание заявки с  прочитать Описание заявки с',
      complitedAppQuantity: '33',
      owner: {
        name: 'Александров Александр Александрович',
        avatar: 'https://i.pinimg.com/originals/53/1a/5c/531a5cf45c39bad3320af48e8ad8d324.png',
        phone: '+7(000) 000-00-11',
      },
    },
  ],
};

const aplicationCards = store.aplicationCardData
  .map(aplicationCard => <AplicationCard
    key={aplicationCard.id}
    id={aplicationCard.id}
    date={aplicationCard.date}
    time={aplicationCard.time}
    location={aplicationCard.lcoation}
    about={aplicationCard.about}
    complitedAppQuantity={aplicationCard.complitedAppQuantity}
    userName={aplicationCard.owner.name}
    userAvatar={aplicationCard.owner.avatar}
    userPhone={aplicationCard.owner.phone}
  />);

function App() {
  return (
    <>
      <div className={styles.app} />
      <Box>
        <Text tag='p' size='24' weight='700'>TEST</Text>
      </Box>
      <section className={styles.app__aplicationCards}>
        {aplicationCards}
      </section>
      <Footer />
    </>
  );
}

export default App;
