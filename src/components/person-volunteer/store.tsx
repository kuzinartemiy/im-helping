import { create } from 'zustand';

// define the store

interface UserState {
  userAvatar: string
  userName: string
  userNumber: string
  userAbout: string
  changeAvatar: (url: string) => void
  changeName: (name: string) => void
  changeNumber: (number: string) => void
  changeAbout: (about: string) => void
}

const useStore = create<UserState>(set => ({
  userAvatar: 'userAvatar',
  userName: 'userName',
  userNumber: 'userNumber',
  userAbout: 'userAbout',
  changeAvatar: (url: string) => set(() => ({ userAvatar: url })),
  changeName: (name: string) => set(() => ({ userName: name })),
  changeNumber: (number: string) => set(() => ({ userNumber: number })),
  changeAbout: (about: string) => set(() => ({ userAbout: about })),
}));

export default useStore;
