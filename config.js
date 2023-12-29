// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Nor',
  imageBackground: true,
  openInNewTab: false,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good morning',
  greetingAfternoon: 'Good afternoon',
  greetingEvening: 'Good evening',
  greetingNight: 'Go to sleep',

  // Layout
  bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

  // Weather
  weatherKey: 'InsertYourAPIKeyHere123456', // Write here your API Key
  weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '37.775',
  defaultLongitude: '-122.419',

  // Autochange
  autoChangeTheme: true,

  // Autochabge by OS
  changeThemeByOS: true,

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: false,
  hourDarkThemeActive: '18:30',
  hourDarkThemeInactive: '07:00',

  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

  firstButtonsContainer: [
    {
      id: '1',
      name: 'Youtube',
      icon: 'youtube',
      link: 'https://www.youtube.com/feed/subscriptions',
    },
    {
      id: '2',
      name: 'Jellyfin',
      icon: 'film',
      link: 'https://jelly.acorneroftheweb.com',
    },
    {
      id: '3',
      name: 'Ladok',
      icon: 'glasses',
      link: 'https://www.student.ladok.se/student/app/studentwebb/',
    },
    {
      id: '4',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '5',
      name: 'Canvas',
      icon: 'book',
      link: 'https://chalmers.instructure.com/',
    },
    {
      id: '6',
      name: 'Miniflux',
      icon: 'rss',
      link: 'https://rss.acorneroftheweb.com/',
    },
    {
      id: '7',
      name: 'Schedule',
      icon: 'calendar',
      link: 'https://cloud.timeedit.net/chalmers/web/public/ri1Y637vX55Z45Q7Zy660Y91590063XQY0Z6g39Qx37QQYw3.html',
    },
    {
      id: '8',
      name: 'Nextcloud',
      icon: 'cloud',
      link: 'https://nc.acorneroftheweb.com',
    },
  ],

  secondButtonsContainer: [
    {
      id: '1',
      name: 'Music',
      icon: 'headphones',
      link: 'https://open.spotify.com',
    },
    {
      id: '2',
      name: 'Reddit',
      icon: 'glasses',
      link: 'https://old.reddit.com/',
    },
    {
      id: '3',
      name: 'Netflix',
      icon: 'film',
      link: 'https://www.netflix.com/browse',
    },
    {
      id: '4',
      name: 'Canvas',
      icon: 'book',
      link: 'https://chalmers.instructure.com/',
    },
    {
      id: '5',
      name: 'Schedule',
      icon: 'calendar',
      link: 'https://cloud.timeedit.net/chalmers/web/public/ri1Y73yQZ05ZZ6Q1Xf5vfo085Q4Qx45fYgZ86YQ.html#',
    },
    {
      id: '6',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '7',
      name: 'Miniflux',
      icon: 'rss',
      link: 'https://rss.acorneroftheweb.com/',
    },
    {
      id: '8',
      name: 'Nextcloud',
      icon: 'cloud',
      link: 'https://nc.acorneroftheweb.com',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  // First Links Container
  firstlistsContainer: [
    {
      icon: 'coffee',
      id: '1',
      links: [
          {
            name: 'Mafia universe',
            link: 'https://www.mafiauniverse.com/forums/',
          },
          {
            name: 'Lounge',
            link: 'https://lounge.acorneroftheweb.com',
          },
          {
            name: 'Download',
            link: 'https://dwn.acorneroftheweb.com/',
          },
          {
            name: 'Dav',
            link: 'https://dav.acorneroftheweb.com',
          },
      ],
    },
    {
      icon: 'tv-2',
      id: '2',
      links: [
          {
            name: 'Twitch',
            link: 'https://twitch.tv',
          },
          {
            name: 'Tumblr',
            link: 'https://www.tumblr.com',
          },
          {
            name: 'Sonarr',
            link: 'https://sonarr.acorneroftheweb.com',
          },
          {
            name: 'Radarr',
            link: 'https://radarr.acorneroftheweb.com/',
          },
      ],
    },
  ],

  // Second Links Container
  secondListsContainer: [
    {
      icon: 'binary',
      id: '1',
      links: [
        {
          name: 'Spotify',
          link: 'https://www.spotify.com',
        },
        {
          name: 'Reddit',
          link: 'https://www.reddit.com',
        },
        {
          name: 'Hashnode',
          link: 'https://www.hashnode.com',
        },
        {
          name: 'Pocket',
          link: 'https://www.pocket.com',
        },
      ],
    },
    {
      icon: 'github',
      id: '2',
      links: [
        {
          name: 'Front',
          link: 'https://www.reddit.com/r/Frontend/',
        },
        {
          name: 'Rust',
          link: 'https://www.reddit.com/r/rust/',
        },
        {
          name: 'Go',
          link: 'https://www.reddit.com/r/golang/',
        },
        {
          name: 'Repos',
          link: 'https://github.com/migueravila',
        },
      ],
    },
  ],
};
