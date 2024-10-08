import axios from "axios";
import { eventGoogle } from "./googleEvent";

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
export const sendMessageToTelegram = async ({
  data,
  constAddress,
}: {
  data: Inputs;
  constAddress: IAddress;
}) => {
  try {
    const localOrder = localStorage.getItem("order");
    const order = localOrder ? JSON.parse(localOrder) : [];
    const ids = order ? order.map((item: { id: string }) => item.id) : [];
    if (order.length >= 1) {
      const response = await axios.post(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
          chat_id: process.env.USER_ID, 
          text: `${order
            .map(
              (elem: { id: string; count: number }) =>
                `Продукт id: /${elem.id}\nКількість: ${elem.count}\n____________________________________\n`
            )
            .join("")}
Имя: ${data.Name}
Номер: ${data.Number}
Адрес: ${constAddress.Description}
Номер дома: ${constAddress.Number}`,
        }
      );
      eventGoogle({
        action: "buy",
        id: ids,
        city: constAddress.Description,
      });
      localStorage.removeItem("order");
    }
  } catch (error) {
    console.error("Error sending message:");
  }
};
export const getChatId = async () => {
  const response = await axios.get(
    `https://api.telegram.org/bot${token}/getUpdates`
  );

  console.log(response.data);
};
