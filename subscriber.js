const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://localhost");
client.on("connect", () => {
  client.subscribe("my-topic");
});
client.on("message", (topic, message) => {
  const context = message.toString();
  console.log(context);
});
