import uniqid from 'uniqid';
import { ORDER_TITLE } from 'pages/Games/constants';

export const orderOptions = [
  { id: uniqid(), title: ORDER_TITLE.NAME },
  { id: uniqid(), title: ORDER_TITLE.RELEASE },
  { id: uniqid(), title: ORDER_TITLE.POPULARITY },
  { id: uniqid(), title: ORDER_TITLE.RATING },
];
