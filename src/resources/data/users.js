const tim = {
  name: 'Tim Starr',
  email: 'timstarr14@gmail.com',
  likes: [],
  selling: [{
    strImage: 'https://i.etsystatic.com/16218713/r/il/db754c/2952250961/il_570xN.2952250961_ndez.jpg',
    strPrice: '$15',
    strSize: 'Medium',
    strType: 'Harvard Crewneck 2',
  }],
  following: 3,
  followers: 100000000,
  classOf: 2016,
  university: {
    name: 'Trinity College Dublin',
    abbreviation: 'TCD',
    primaryColor: '#F47321',
    secondaryColor: '#005030',
  },
  greek: 'Tri Delta (3 triangles)',
  socials: [
    {
      url: 'instagram.com/tim.starrr',
      username: 'tim.starrr',
    },
    {
      url: 'facebook.com/timstar',
      username: 'Tim Starr',
    },
  ],
};

const charlie = {
  name: 'Charlie Dodds',
  email: 'charlesgdodds@hotmail.co.uk',
  likes: [],
  selling: [],
  following: 100000,
  followers: 100000,
  classOf: 2015,
  university: {
    name: 'Brunel University London',
    abbreviation: 'BUL',
    primaryColor: 'darkblue',
    secondaryColor: 'yellow',
  },
  socials: [
    {
      url: 'instagram.com/chazdodds',
      username: 'chazdodds',
    },
    {
      url: 'facebook.com/charlie.dodds',
      username: 'Charlie Dodds',
    },
  ],
};

const users = [tim, charlie];

export default users;
