import { AuthorizationStatus } from './const';

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

export const formatMonth = (monthNumber: number): string => {
  const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return monthArr[monthNumber];
};

export const formatDate = (dateString: string) => {
  const commentDate = new Date(dateString);
  const year = commentDate.getFullYear();
  const day = commentDate.getDay();
  const month = formatMonth(commentDate.getMonth());

  return `${month} ${day}, ${year}`;
};

export const formatTime = (totalSeconds: number) => {
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
