let config = {
  title: 'Atlantic LAN 2018',
  logo: `/static/img/logo-183x100.png`,
  description: 'Retrouvez l\'Atlantic LAN très prochainement',
  metaImage: `${process.env.BASE_URL}/static/img/logo-365x200.png`,
  gaTrackingId: 'UA-128777022-3',
  // mainPartner: {
  //   logo: '/static/img/image106pxdehaut.png',
  //   url: 'https://bmagic.fr'
  // },
  home: {
    banner: '/static/img/bg-banner-al2018.jpg',
    twitterAccount: 'AtlanticLan17'
  },
  news: {
    active: true,
    title: 'Actualités',
    description: 'Retrouvez toutes les actualités de l\'Atlantic LAN 2018'
  },
  recruit: {
    active: false,
    title: 'Recrutement',
    description: 'Devenir bénévole pour l\'Atlantic LAN 2018, c\'est par ici !!!',
    formUrl: 'https://goo.gl/forms/84pHQfSp50RcuUel2'
  },
  partners: {
    active: true,
    title: 'Partenaires',
    description: 'Retrouvez la liste de tous nos partenaires'
  },
  tournaments: {
    active: true,
    title: 'Tournois',
    description: 'Tous les tournois de l\'Atlantic LAN 2018'
  },
  info: {
    active: true,
    title: 'Informations pratiques',
    description: 'Toutes les informations sur cet évènement'
  },
  tickets: {
    title: 'Billetterie',
    description: 'Achetez vos places pour l\'Atlantic LAN 2018'
  },
  contact: {
    active: true,
    pageId: 6
  },
  press: {
    active: false,
    pageId: 7
  },
  legals: {
    active: true,
    pageId: 8
  },
  social: {
    twitter: 'https://twitter.com/AtlanticLan17',
    facebook: 'https://www.facebook.com/AtlanticLan/',
    youtube: 'https://www.youtube.com/channel/UCiX3u5T5B2LZ46FUBRMNmSA',
    flickr: 'https://www.flickr.com/photos/futurolan'
  }
}

module.exports = config
