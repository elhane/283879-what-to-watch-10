import { AuthorizationStatus } from './const';

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

export const getMonth = (monthNumber: number): string => {
  const monthsList = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

  return monthsList[monthNumber];
};

export const getFormattedDate = (dateString: string) => {
  const getCommentDate = new Date(dateString);
  const year = getCommentDate.getFullYear();
  const day = getCommentDate.getDate();
  const month = getMonth(getCommentDate.getMonth());

  return `${month} ${day}, ${year}`;
};

export const getFormattedTime = (totalSeconds: number) => {
  const hours = Math.floor(totalSeconds / 3600);
  const totalSecondsRemains = totalSeconds % 3600;
  const minutes = Math.floor(totalSecondsRemains / 60);
  const seconds = Math.floor(totalSecondsRemains % 60);

  const minutesString = String(minutes).padStart(2, '0');
  const hoursString = String(hours).padStart(2, '0');
  const secondsString = String(seconds).padStart(2, '0');

  return totalSeconds > 3600 ?
    `${hoursString}:${minutesString}:${secondsString}` :
    `${minutesString}:${secondsString}`;
};

export const getTimeFromMinutes = (minutes: number): string => {
  const hours = Math.trunc(minutes / 60);
  const minutesRemains = minutes % 60;
  return `${hours}h ${minutesRemains}m`;
};

