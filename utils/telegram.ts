import axios from "axios";

const token = process.env.TOKEN_TELEGRAM;

export const sendMessageToTelegram = async () => {
  try {
    const response = await axios.post(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        chat_id: process.env.USER_ID, // Ensure this is the correct chat/channel username
        text: "hey",
      }
    );
    console.log("Message sent:", response.data);
  } catch (error) {
    console.error(
      "Error sending message:",
     
    );
  }
};
