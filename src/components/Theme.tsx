import { useDispatch } from 'react-redux';


const Theme = () => {

    const dispatch = useDispatch();

  return (
    
    <div className="btn-group">
          <button className="btn btn-light" onClick={() => dispatch({ type: "theme/change", payload: 'light' })}>
          ☀
          </button>
          <button className="btn btn-dark" onClick={() => dispatch({ type: "theme/change", payload: 'dark' })}>
          ☾
          </button>
        </div>

  )
}

export default Theme