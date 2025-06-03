import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../api';
import { initData as initTodoData } from '../features/todo/todoSlice';
import { initData as initGoalData } from '../features/goal/goalSlice';

const ENDPOINTS = {
  tasks: 'tasks',
  goals: 'goals',
};

const TYPE_TO_INIT = {
  tasks: initTodoData,
  goals: initGoalData,
};

export function useFetchByOption() {
  const dispatch = useDispatch();
  const option = useSelector(state => state.options.value);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    api.get(ENDPOINTS[option])
      .then((result) => {
        setData(result);
        // Inicializa el reducer correspondiente según el tipo
        if (TYPE_TO_INIT[option]) {
          dispatch(TYPE_TO_INIT[option](result));
        }
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, [option, dispatch]);

  return { data, loading, error, option };
}
