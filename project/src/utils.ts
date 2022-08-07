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
