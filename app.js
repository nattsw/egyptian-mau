const { RTMClient } = require('@slack/rtm-api');
const token = process.env.SLACK_BOT_TOKEN;

const channels = {
}
const users = {
}

const rtm = new RTMClient(token);

rtm.on('ready', async () => {
  try {
    await rtm.subscribePresence(Object.keys(users));
    console.log(`Subscribed to presence at ${new Date()}`);
  } catch (error) {
    console.log('Failed to subscribe to presence, error: ', error);
  }
});

rtm.on('presence_change', (event) => {
  console.log(`${users[event.user]} is ${event.presence}`);
  if (users[event.user] === 'Gabe') {
    rtm.sendMessage('Still alive', 'bot-test')
  } else if (users[event.user] === 'Francis') {

  }
});

(async () => {
  await rtm.start();
})();
