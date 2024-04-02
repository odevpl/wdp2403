const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      img:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2Fb53e96bb-cd86-4815-b22a-4413b5d44145.6db569c8420c44e4057b3b4be0776042.jpeg&f=1&nofb=1&ipt=ef8fe14b87dbc1f5e08dc94c70ea38cb24b7509d46d66c3fb61fbb8528c6cca1&ipo=images',
      favorite: false,
      comparision: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt alias modi veniam facere veritatis debitis iste dolorum accusantium molestias animi.',

    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      img:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fengineeringdiscoveries.com%2Fwp-content%2Fuploads%2F2021%2F04%2F6a7b51d92b1f3efedb994ee2620ddc56.jpg&f=1&nofb=1&ipt=ef7470c63a2514124c896467566df15b07403ef62bce7ef779659ccac7316a73&ipo=images',
      favorite: true,
      comparision: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt alias modi veniam facere veritatis debitis iste dolorum accusantium molestias animi.',
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      img:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gentlemansgazette.com%2Fwp-content%2Fuploads%2F2015%2F10%2FA-completely-adjustable-ergonomic-chair.jpg&f=1&nofb=1&ipt=9a70c7dad3c09ca8f64932783c64c9b00eb590231807a58f6949796147db896c&ipo=images',
      favorite: false,
      comparision: true,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt alias modi veniam facere veritatis debitis iste dolorum accusantium molestias animi.',
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      img:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fengineeringdiscoveries.com%2Fwp-content%2Fuploads%2F2021%2F04%2F6a7b51d92b1f3efedb994ee2620ddc56.jpg&f=1&nofb=1&ipt=ef7470c63a2514124c896467566df15b07403ef62bce7ef779659ccac7316a73&ipo=images',
      favorite: true,
      comparision: true,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt alias modi veniam facere veritatis debitis iste dolorum accusantium molestias animi.',
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      img:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2Fac75c7a0-07a0-405d-a748-58743d8ceb2d.7eb05d00f850a867b1f376b08d510e6e.jpeg&f=1&nofb=1&ipt=18c4396d71b14b34fab7987fbf6f0b5750c0c427b0f2c9899b3c0d3376367d36&ipo=images',
      favorite: false,
      comparision: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt alias modi veniam facere veritatis debitis iste dolorum accusantium molestias animi.',
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      img:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.y2uHbEzmnIA1Sj7wffCksAHaHa%26pid%3DApi&f=1&ipt=66a2d1481dcc586b788e29c0d0975888a6652183330206cda9f9e49f92f79e2d&ipo=images',
      favorite: false,
      comparision: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt alias modi veniam facere veritatis debitis iste dolorum accusantium molestias animi.',
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      img:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F71vcCmKRpeL._AC_SL1024_.jpg&f=1&nofb=1&ipt=954a9e13ace7a7ce07a4d061541a176f3b11b29e82e29d09871b153775c6c6f2&ipo=images',
      favorite: false,
      comparision: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt alias modi veniam facere veritatis debitis iste dolorum accusantium molestias animi.',
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      img:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimgdataserver.com%2Fitems%2Fhooker-ss-chaise-lounge-living-room-chair-hooss641cs097_zm.jpg&f=1&nofb=1&ipt=bd6b7cfe6eca7088561c9baa6d568d52ae99742567175e271f666f5718941ecd&ipo=images',
      favorite: false,
      comparision: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt alias modi veniam facere veritatis debitis iste dolorum accusantium molestias animi.',
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparision: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt alias modi veniam facere veritatis debitis iste dolorum accusantium molestias animi.',
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      img:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fengineeringdiscoveries.com%2Fwp-content%2Fuploads%2F2021%2F04%2F6a7b51d92b1f3efedb994ee2620ddc56.jpg&f=1&nofb=1&ipt=ef7470c63a2514124c896467566df15b07403ef62bce7ef779659ccac7316a73&ipo=images',
      favorite: false,
      comparision: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt alias modi veniam facere veritatis debitis iste dolorum accusantium molestias animi.',
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      img:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fengineeringdiscoveries.com%2Fwp-content%2Fuploads%2F2021%2F04%2F6a7b51d92b1f3efedb994ee2620ddc56.jpg&f=1&nofb=1&ipt=ef7470c63a2514124c896467566df15b07403ef62bce7ef779659ccac7316a73&ipo=images',
      favorite: false,
      comparision: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt alias modi veniam facere veritatis debitis iste dolorum accusantium molestias animi.',
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparision: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt alias modi veniam facere veritatis debitis iste dolorum accusantium molestias animi.',
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparision: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt alias modi veniam facere veritatis debitis iste dolorum accusantium molestias animi.',
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      img:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fengineeringdiscoveries.com%2Fwp-content%2Fuploads%2F2021%2F04%2F6a7b51d92b1f3efedb994ee2620ddc56.jpg&f=1&nofb=1&ipt=ef7470c63a2514124c896467566df15b07403ef62bce7ef779659ccac7316a73&ipo=images',
      favorite: false,
      comparision: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt alias modi veniam facere veritatis debitis iste dolorum accusantium molestias animi.',
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparision: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt alias modi veniam facere veritatis debitis iste dolorum accusantium molestias animi.',
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparision: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt alias modi veniam facere veritatis debitis iste dolorum accusantium molestias animi.',
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparision: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt alias modi veniam facere veritatis debitis iste dolorum accusantium molestias animi.',
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      img:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fengineeringdiscoveries.com%2Fwp-content%2Fuploads%2F2021%2F04%2F6a7b51d92b1f3efedb994ee2620ddc56.jpg&f=1&nofb=1&ipt=ef7470c63a2514124c896467566df15b07403ef62bce7ef779659ccac7316a73&ipo=images',
      favorite: false,
      comparision: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt alias modi veniam facere veritatis debitis iste dolorum accusantium molestias animi.',
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      img:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fengineeringdiscoveries.com%2Fwp-content%2Fuploads%2F2021%2F04%2F6a7b51d92b1f3efedb994ee2620ddc56.jpg&f=1&nofb=1&ipt=ef7470c63a2514124c896467566df15b07403ef62bce7ef779659ccac7316a73&ipo=images',
      favorite: false,
      comparision: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt alias modi veniam facere veritatis debitis iste dolorum accusantium molestias animi.',
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      img:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fengineeringdiscoveries.com%2Fwp-content%2Fuploads%2F2021%2F04%2F6a7b51d92b1f3efedb994ee2620ddc56.jpg&f=1&nofb=1&ipt=ef7470c63a2514124c896467566df15b07403ef62bce7ef779659ccac7316a73&ipo=images',
      favorite: false,
      comparision: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt alias modi veniam facere veritatis debitis iste dolorum accusantium molestias animi.',
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      img:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fengineeringdiscoveries.com%2Fwp-content%2Fuploads%2F2021%2F04%2F6a7b51d92b1f3efedb994ee2620ddc56.jpg&f=1&nofb=1&ipt=ef7470c63a2514124c896467566df15b07403ef62bce7ef779659ccac7316a73&ipo=images',
      favorite: false,
      comparision: false,      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt alias modi veniam facere veritatis debitis iste dolorum accusantium molestias animi.',
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      img:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fengineeringdiscoveries.com%2Fwp-content%2Fuploads%2F2021%2F04%2F6a7b51d92b1f3efedb994ee2620ddc56.jpg&f=1&nofb=1&ipt=ef7470c63a2514124c896467566df15b07403ef62bce7ef779659ccac7316a73&ipo=images',
      favorite: false,
      comparision: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt alias modi veniam facere veritatis debitis iste dolorum accusantium molestias animi.',
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      img:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fengineeringdiscoveries.com%2Fwp-content%2Fuploads%2F2021%2F04%2F6a7b51d92b1f3efedb994ee2620ddc56.jpg&f=1&nofb=1&ipt=ef7470c63a2514124c896467566df15b07403ef62bce7ef779659ccac7316a73&ipo=images',
      favorite: false,
      comparision: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt alias modi veniam facere veritatis debitis iste dolorum accusantium molestias animi.',
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      img:
        'https://duckduckgo.com/?q=chair&atb=v400-1&iax=images&ia=images&iai=https%3A%2F%2Fimgdataserver.com%2Fitems%2Fhooker-ss-chaise-lounge-living-room-chair-hooss641cs097_zm.jpg',
      favorite: false,
      comparision: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt alias modi veniam facere veritatis debitis iste dolorum accusantium molestias animi.',
    },
  ],
  cart: {
    products: [],
  },
};

export default initialState;
