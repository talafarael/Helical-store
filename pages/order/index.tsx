import InputContainer from "@/components/InputContainer/inputContainer";
import "./order.scss";
const Order = () => {
  return (
    <div className="orderContainer">
      <div className="inputContainerOrder">
        <InputContainer />
      </div>
      <div className="cardContainerOrder">card</div>
    </div>
  );
};
export default Order;
