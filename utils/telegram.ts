import axios from "axios";

const token = "7218356256:AAE-8mBqDMnzso1WEQLTROnSv49a9WbXc4w";

export const sendMessageToTelegram = async () => {
  try {
    const response = await axios.post(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        chat_id: "1056119921", // Ensure this is the correct chat/channel username
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
