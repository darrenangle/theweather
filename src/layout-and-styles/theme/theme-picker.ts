import Themes from './themes';

const pickTheme = (date: Date, timezone: string) => {
  const hour = new Date(
    date.toLocaleString('default', {
      timeZone: timezone,
    })
  ).getHours();
  switch (true) {
    case hour >= 5 && hour <= 10:
      return Themes.earlyMorning;
      break;
    case hour >= 11 && hour <= 14:
      return Themes.day;
      break;
    case hour >= 15 && hour <= 17:
      return Themes.sunset;
      break;
    case hour >= 18 && hour <= 19:
      return Themes.plum;
      break;
    case hour >= 20 && hour <= 22:
      return Themes.gettingLate;
      break;
    case hour >= 23 || hour <= 3:
      return Themes.midnight;
      break;
    case hour >= 3 && hour <= 4:
      return Themes.gettingLate;
      break;
    default:
      return Themes.day;
  }
};

export default pickTheme;
