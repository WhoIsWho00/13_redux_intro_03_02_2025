import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reduxRTK/storeRTK';
import { add, clearIngredients} from "../reduxRTK/sandwichSlice"

const Sandwich = () => {

    const ingredients = useSelector((state: RootState) => state.sandwich.ingredients)

    const dispatch = useDispatch();


  return (
    <div>
          <p>Ingredients: {ingredients.join(', ')}</p>
          <button onClick={()=> dispatch(add('bread'))}>Add bread</button>
          <button onClick={()=> dispatch(add('cheese'))}>Add cheese</button>
          <button onClick={()=> dispatch(add('sausage'))}>Add sausage</button>
          <button onClick={()=> dispatch(add('tomato'))}>Add tomato</button>
          <button onClick={()=> dispatch(clearIngredients())}>Clear ingredients</button>
        </div>
  )
}

export default Sandwich