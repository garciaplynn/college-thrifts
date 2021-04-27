const universities = [
  {
    title: 'University of Florida',
    colour1: '#FA4616',
    colour2: '#0021A5',
    mascot:  'Gators',
    logo: 'https://s3-alpha-sig.figma.com/img/6119/2ef1/506e606237f37ada0168eb311d22d9b3?Expires=1619395200&Signature=Ht2Z10FZCjgcMbSvCNWm2ciDQCo2Ew3VAHkghMK0bsnFpHWjlXL62vx9HYtn1ZwVqbnd2TUWTg3VAC8q9TqbvE3qK-~KC99lmTRK~L-382x8K4cMaqEizNHSxZUT6vU09bUjvHKLTdAYet6v3Euuf3APStMN4EcCMA7Lcsl67zZAAKWVe49raduJ06BqLWZZCIHdQJ2M-PtYGB4MC3~~SVvDeQ6L7dyBDdv-LL2ffHgWW60zfNGiK5lVTsESN0DL4FVNbUhb5vhUFJJXSkxEpDs7IbtnE7I5yDVeK~KHf6pMgWDRUcmX8ahoNLu1diCLyc5O0EKwsOqKODLM6olZ4g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    title: 'Florida State University',
    colour1: '#782F40',
    colour2: '#CEB888',
    mascot: 'Seminoles',
    logo: 'https://1000logos.net/wp-content/uploads/2017/11/FSU-logo-500x353.p',
  },
  {
    title: 'University of Miami',
    colour1: '#005030',
    colour2: '#F47321',
    mascot: 'Hurricances',
    logo: 'https://cdn.miami.edu/_assets-common/images/system/um-logo-gray-bg.png',
  },
  {
    title: 'UCLA',
    colour1: '#2774AE',
    colour2: '#FFD100',
    mascot: 'Bruins',
    logo: 'https://brand.ucla.edu/images/logos-and-marks/campus-logo.jpg',
  },
  {
    title: 'UW Madison',
    colour1: '#C5050C',
    colour2: '#F7F7F7',
    mascot: 'Trojans',
    logo: 'https://www.salesforce.org/wp-content/uploads/2020/07/uni-wisc-mad-story-featured-image-532x336-07282020-v1.png',
  },
  {
    title: 'Tulane University',
    colour1: '#005837',
    colour2: '#00A4D7',
    mascot: 'Riptide the Pelican',
    logo: 'https://communications.tulane.edu/sites/g/files/rdw811/f/pictures/TU.CTR_2c.png',
  },
  {
    title: 'University of Alabama',
    colour1: '#9E1B32',
    colour2: '#828A8F',
    mascot: 'Crimson Tide',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Alabama_Athletics_logo.svg/125px-Alabama_Athletics_logo.svg.png',
  },
  {
    title: 'Ohio State University',
    colour1: '#BB0000',
    colour2: '#666666',
    mascot: 'Buckeyes',
    logo: 'https://www.wayne-local.com/pages/district-news/image/section-image/ohio-state-logo-png-2-3201.png',
  },
  {
    title: 'Clemson University',
    colour1: '#F56600',
    colour2: '#522D80',
    mascot: 'Tigers',
    logo: 'https://www.clemson.edu/brand/resources/logos/paw/orange.png',
  },
  {
    title: 'Auburn University',
    colour1: '#03244D',
    colour2: '#DD550C',
    mascot: 'War Eagles',
    logo: 'http://licensing.auburn.edu/wp-content/uploads/2020/01/Standard1.png',
  },
  {
    title: 'Duke University',
    colour1: '#012169',
    colour2: '#F7F7F7',
    mascot: 'Blue Devils',
    logo: 'https://brand.duke.edu/wp-content/uploads/sites/42/2018/06/dukelogo5_orig.rev_-150x150.png',
  },
  {
    title: 'Vanderbilt University',
    colour1: '#D8AB4C',
    colour2: '#000000',
    mascot: 'Commodores',
    logo: 'https://cdn.vanderbilt.edu/vu-news/files/20190417224211/vu06b-483x585.jpg',
  },
  // {
  //   // title: 'Phi Delta Theta',
  //   // colour1: '#0081C6',
  //   // colour2: '#002B54',
  // },
  {
    title: 'UNC Chapel Hill',
    colour1: '#4B9CD3',
    colour2: '#13294B',
    mascot: 'Tar Heels',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/North_Carolina_Tar_Heels_logo.svg',
    
  },
  // {
  //   title: 'Sigma Kappa',
  //   colour1: '#441155',
  //   colour2: '#881133',
  // },
  // {
  //   title: 'Pi Kappa Alpha',
  //   colour1: '#830F23',
  //   colour2: '#CEB888',
  // },
  // {
  //   title: 'Delta Gamma',
  //   colour1: '#FABBCB',
  //   colour2: '#00205B',
  // },
  // {
  //   title: 'Delta Phi Epsilon',
  //   colour1: '#AF52DE',
  //   colour2: '#D8AB4C',
  // },
  // {
  //   title: 'Sigma Chi',
  //   colour1: '#00A3E0',
  //   colour2: '#FED141',
  // },
  // {
  //   title: 'Tri Delta',
  //   colour1: '#D8AB4C',
  //   colour2: '#1B5ABF',
  // },
  // {
  //   title: 'Sigma Phi Epsilon',
  //   colour1: '#BB0000',
  //   colour2: '#350473',
  // },
  {
    title: 'University of Southern California',
    colour1: '#990000',
    colour2: '#FFCC00',
    mascot: 'Trojans',
    logo: 'https://identity.usc.edu/files/2019/01/PrimShield-Mono_SmallUse_CardOnTrans_RGB.png',
  },
  {
    title: 'Pennsylvania State',
    colour1: '#002D62',
    colour2: '#FFFFFF',
    mascot: 'Nittany Lion',
    logo: 'https://standard.psu.edu/images/uploads/psu-mark.svg',
  },
  {
    title: 'Syracuse University',
    colour1: '#F06600',
    colour2: '#000E54',
    mascot: 'Orange',
    logo: 'https://sportslogohistory.com/wp-content/uploads/2018/03/syracuse_orange_2006-pres.png',
  },
  {
    title: 'University of Michigan',
    colour1: '#003E78',
    colour2: '#FFCB0B',
    mascot: 'Wolverines',
    logo: 'https://brand.umich.edu/wp-content/themes/micbrand/img/um_logo_footer.svg',
  },
  {
    title: 'University of Notre Dame',
    colour1: '#0C2340',
    colour2: '#AE9142',
    mascot: 'Fighting Irish',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Notre_Dame_Fighting_Irish_logo.svg'
  }, 
  {
    title: 'University of Tenessee Knoxville',
    colour1: '#FE8100',
    colour2: '#F4F4F4',
    mascot: 'Volunteers',
    logo: 'https://www.pngkey.com/png/detail/266-2663723_tennessee-university-of-tennessee-knoxville-logo-png.png',

  },
  {
    title: 'University of Colorado Boulder',
    colour1: '#CCB672',
    colour2: '#221F20',
    mascot: 'Buffs',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/86/University_of_Colorado_Boulder_logo.png',
  },
  {
    title: 'Wake Forest University',
    colour1: '#8C6D2C',
    colour2: '#252525',
    mascot: 'Demon Deacons',
    logo: 'https://prod.wp.cdn.aws.wfu.edu/sites/73/2017/04/WFU_Univ_H_RGB.jpg',
  },
  {
    title: 'University of Texas Austin',
    colour1: '#AC4E00',
    colour2: '#FFFFFF',
    mascot: 'Bevo',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/77/University_of_Texas_at_Austin_logo.svg',
  },
];

export default universities;
