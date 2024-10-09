import axios from "axios";
import { eventGoogle } from "./googleEvent";

const token = process.env.TOKEN_TELEGRAM;
type Inputs = {
  Name: string;
  Number: number;
  Deliver: string;
  Feedback?: string;
  PayMetod: string;
};

export const sendMessageToTelegram = async ({ data }: { data: Inputs }) => {
  try {
    const localOrder = localStorage.getItem("order");
    const order = localOrder ? JSON.parse(localOrder) : [];
    const ids = order ? order.map((item: { id: string }) => item.id) : [];
    if (order.length == 0) {
      return;
    }
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
${data?.Feedback && `Зворотній зв'язок: ${data.Feedback}`}
Номер пошти: ${data.Deliver}
Спосіб оплати:${data.PayMetod}
`,
      }
    );
    eventGoogle({
      action: "buy",
      id: ids,
      city: data.Deliver,
    });
    localStorage.removeItem("order");
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
