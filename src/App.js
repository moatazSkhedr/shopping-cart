import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { calculateTotal } from "./future/cartSlice";
import {useSelector , useDispatch} from 'react-redux'
import {useEffect} from 'react';
function App() {
  const {cartItems} = useSelector((state)=>state.cart);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(calculateTotal())

  }, [cartItems])
  return (
    <div>
      <Navbar />
      <CartContainer />
    </div>
  );
}

export default App;
