import axios from "axios";

const token = process.env.TOKEN_TELEGRAM;
type Inputs = {
  Name: string;
  Number: number;
  Deliver: string;
};

interface IAddress {
  Number: string;
  Description: string;
  SettlementDescription: string;
}
export const sendMessageToTelegram = async ({data,constAddress}:{data: Inputs,constAddress: IAddress}) => {
  try {
    const localOrder=localStorage.getItem("order")
    const order = localOrder ? JSON.parse(localOrder) : [];
    if(order.length>=1){
      console.log(order)
    const response = await axios.post(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        chat_id: process.env.USER_ID, // Ensure this is the correct chat/channel username
        text: `${order.map((elem:{id:string,count:number})=>(
          `http://localhost:3000/product/${elem.id}
           count:${elem.count}
        ____________________________________
       
` ))} 
${data.Name}:${data.Number}
        ${constAddress.Description} 
        номер :${constAddress.Number}`,
      }
    );
    localStorage.removeItem("order")
      console.log("Message sent:", response.data);
  }
  
  } catch (error) {
    console.error(
      "Error sending message:",
     
    );
  }
};
