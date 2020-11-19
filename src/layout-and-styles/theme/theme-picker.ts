import Themes from './themes';

const pickTheme = (date: Date, timezone: string) => {
  const hour = new Date(
    date.toLocaleString('default', {
      timeZone: timezone,
    })
  ).getHours();
  console.log(hour);
  switch (true) {
    case hour >= 5 && hour <= 10:
      return Themes.earlyMorning;
      break;
    case hour >= 11 && hour <= 15:
      return Themes.day;
      break;
    default:
      return Themes.earlyMorning;
  }
};

export default pickTheme;
