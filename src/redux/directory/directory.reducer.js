import critterpedia from '../../assets/DeviceIconBook^w.png'
import catalog from '../../assets/DeviceIconCatalogue^w.png'
import journal from '../../assets/DeviceIconProfile^w.png'
import villagers from '../../assets/DeviceIconBestFriend^w.png'

const INITIAL_STATE = {
  sections: [
    {
      title: 'catalog',
      subtitle: 'coming soon',
      imageUrl: catalog,
      id: 1,
      size: 'box',
      linkUrl: '/catalog'
    },
    {
      title: 'critterpedia',
      subtitle: '',
      imageUrl: critterpedia,
      id: 2,
      size: 'box',
      linkUrl: '/critterpedia'
    },
    {
      title: 'villagers',
      subtitle: 'coming soon',
      imageUrl: villagers,
      id: 3,
      size: 'box',
      linkUrl: '/villagers'
    },
    {
      title: 'journal',
      subtitle: 'coming soon',
      imageUrl: journal,
      id: 4,
      size: 'box',
      linkUrl: '/journal'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;