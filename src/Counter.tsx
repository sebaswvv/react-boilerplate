import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store/store';
import { increment, decrement, incrementByAmount } from './store/counterSlice';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-2xl font-bold mb-4">Count: {count}</div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1"
              onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-1"
              onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-1"
              onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
    </div>
  );
};

export default Counter;
