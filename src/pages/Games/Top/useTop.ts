import { MouseEvent, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOrderTitle } from 'redux/counterSlice';
import { RootState } from 'redux/types';
import { useClickOutside } from 'utils/customHooks';

const useTop = () => {
  const dispatch = useDispatch();
  const reduxStore = useSelector((state: RootState) => state.harbor);
  const [isShowOrder, setIsShowOrder] = useState(true);
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const orderRef = useRef<HTMLUListElement>(null);

  const { currentFilter, orderTitle, isSearching } = reduxStore;
  const orderOptions = ['Name', 'Release date', 'Popularity', 'Rating'];

  const openAndHideOrder = () => {
    setIsOrderOpen(!isOrderOpen);
  };

  const changeTitle = (e: MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const { textContent } = target;

    if (textContent !== null) dispatch(setOrderTitle(textContent.trim()));
  };

  const handleOptionClick = (e: MouseEvent<HTMLElement>) => {
    changeTitle(e);
    openAndHideOrder();
  };

  useClickOutside(isOrderOpen, orderRef, openAndHideOrder);

  useEffect(() => {
    if (
      currentFilter === 'All time top' ||
      currentFilter === 'Popular in 2022' ||
      currentFilter === 'Best of the year' ||
      isSearching
    ) {
      setIsShowOrder(false);
      return;
    }

    setIsShowOrder(true);
  }, [currentFilter]);

  return {
    currentFilter,
    isShowOrder,
    orderTitle,
    isOrderOpen,
    orderRef,
    orderOptions,
    openAndHideOrder,
    handleOptionClick,
  };
};

export default useTop;
