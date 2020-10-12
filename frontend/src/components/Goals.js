import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setGoals } from '../store/goals';
import Goal from './Goal';
import './Goals.css'

function Goals() {

  const user_id = useSelector((state) => state.auth.id);
  const goals = useSelector(state => state.goals);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadGoals = async () => {
      const res = await fetch(`/api/goals/${user_id}`);
      res.data = await res.json();
      if (res.ok) {
        dispatch(setGoals(res.data.goals));
      }
    };
    loadGoals();
  }, [dispatch, user_id]);

  return (
    <div>
      <div className="goals-page">
        <div className="goals-form-container">Goal Form</div>
        <div className="goals-container">
          {Object.values(goals).map(goal => {
            return <Goal goal={goal} key={goal.id} />
          })}
        </div>
      </div>
    </div>
  );
}

export default Goals
