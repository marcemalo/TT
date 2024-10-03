import { useDispatch } from "react-redux"
import { Props } from "../App"
import { add, remove } from "../redux/slice/counter"
import { AppDispatch } from "../redux/store";

const Modal: React.FC<Props> = ({isModalOpen}) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div>
      Modal open: {JSON.stringify(isModalOpen)}
      <button onClick={() => dispatch(add(1))}>+</button>
      <button onClick={() => dispatch(remove(1))}>-</button>
    </div>
  )
}

export default Modal