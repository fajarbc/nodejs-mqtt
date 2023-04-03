const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://localhost");
client.on("connect", () => {
  setInterval(() => {
    client.publish("my-topic", `Hello world! ${new Date().toISOString()}`);
  }, 3000);
});
