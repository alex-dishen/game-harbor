import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from './store';
import { increment, incrementByAmount } from './counterSlice';

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          type="button"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          type="button"
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(44))}
        >
          Increment by 44
        </button>
      </div>
    </div>
  );
}
