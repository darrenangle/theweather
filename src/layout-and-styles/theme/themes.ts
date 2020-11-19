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
};

export default Themes;
