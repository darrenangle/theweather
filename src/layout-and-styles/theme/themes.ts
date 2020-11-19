type WeatherAppTheme = {
  lightBG: string;
  medBG: string;
  darkBG: string;
  summaryColor: string;
  sunColor: string;
  panelContent: string;
  contrastDark: string;
  contrastVeryDark: string;
};

const Themes: {[key: string]: WeatherAppTheme} = {
  earlyMorning: {
    lightBG: '#E7F2F8',
    medBG: '#D8ECF8',
    darkBG: '#AFC5CC',
    summaryColor: '#AFC5CC',
    sunColor: '#FFFFFF',
    panelContent: '#FFFFFF',
    contrastDark: '#85A3AC',
    contrastVeryDark: '#57737B',
  },
  day: {
    lightBG: '#FFFFFF',
    medBG: '#FFF7EB',
    darkBG: '#FFE6C1',
    summaryColor: '#FFFFFF',
    sunColor: '#FF9900',
    panelContent: '#B96F00',
    contrastDark: '#FF9900',
    contrastVeryDark: '#FF9900',
  },
  sunset: {
    lightBG: '#A48888',
    medBG: '#5B4444',
    darkBG: '#473131',
    summaryColor: '#E9D9D9',
    sunColor: '#CA4141',
    panelContent: '#E9D9D9',
    contrastDark: '#E9D9D9',
    contrastVeryDark: '#E9D9D9',
  },
  plum: {
    lightBG: '#351C48',
    medBG: '#300B2C',
    darkBG: '#250922',
    summaryColor: '#D2C2CF',
    sunColor: '#212F54',
    panelContent: '#EDDAE9',
    contrastDark: '#D2C2CF',
    contrastVeryDark: '#EDDAE9',
  },
  midnight: {
    lightBG: '#1B1B1B',
    medBG: '#0B0B0B',
    darkBG: '#000000',
    summaryColor: '#363636',
    sunColor: '#FFFFFF',
    panelContent: '#D0D0D0',
    contrastDark: '#D0D0D0',
    contrastVeryDark: '#D0D0D0',
  },
  gettingLate: {
    lightBG: '#003960',
    medBG: '#00253F',
    darkBG: '#002138',
    summaryColor: '#95D3FF',
    sunColor: '#0B161E',
    panelContent: '#95D3FF',
    contrastDark: '#95D3FF',
    contrastVeryDark: '#95D3FF',
  },
};

export default Themes;
