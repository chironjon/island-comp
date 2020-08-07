const INITIAL_STATE = {
  sections: [
    {
      title: 'catalog',
      subtitle: 'coming soon',
      imageUrl: 'https://via.placeholder.com/350x150',
      id: 1,
      size: 'box',
      linkUrl: '/catalog'
    },
    {
      title: 'journal',
      subtitle: 'coming soon',
      imageUrl: 'https://via.placeholder.com/350x150',
      id: 2,
      size: 'box',
      linkUrl: '/journal'
    },
    {
      title: 'villagers',
      subtitle: 'coming soon',
      imageUrl: 'https://via.placeholder.com/350x150',
      id: 3,
      size: 'box',
      linkUrl: '/villagers'
    },
    {
      title: 'collections',
      subtitle: '',
      imageUrl: 'https://vignette.wikia.nocookie.net/animalcrossing/images/4/44/NH-Icon-Nook_Phone-Critterpedia.png',
      id: 4,
      size: 'box',
      linkUrl: '/collections'
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