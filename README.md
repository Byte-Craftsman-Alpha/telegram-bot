# Telegram Bot API Usage Guide

This guide provides detailed instructions on utilizing the Telegram Bot API to perform various actions such as sending messages, deleting messages, reading messages, editing messages, replying to messages, sending polls, and pinning messages. The examples provided below are demonstrated in JavaScript, but the principles apply to multiple coding languages.

## Obtain Your Bot Token and Chat ID

Before you begin using the Telegram Bot API, you need to obtain your bot token and chat ID. Follow these steps:

1. [Get your chat ID here](https://api.telegram.org/bot<YOUR_BOT_TOKEN_HERE>/getUpdates)
   - Replace `<YOUR_BOT_TOKEN_HERE>` with your bot token.

## Send Message

To send a message using your bot, use the following code snippet:

```javascript
fetch('https://api.telegram.org/bot<YOUR_BOT_TOKEN_HERE>/sendMessage', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    chat_id: <YOUR_CHAT_ID_HERE>,
    text: 'Your message here'
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
```

### Customizing Messages

You can customize your messages using Markdown. Here are some examples:

- **Bold**: `*Your text here*`
- *Italic*: `_Your text here_`
- Hidden Text: `|Your text here|`
- ~Strikethrough~: `~Your text here~`

## Delete Sent Message

To delete a sent message, use the following code snippet:

```javascript
fetch('https://api.telegram.org/bot<YOUR_BOT_TOKEN_HERE>/deleteMessage', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    chat_id: <YOUR_CHAT_ID_HERE>,
    message_id: <MESSAGE_ID_HERE>
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
```

## Read Messages

To read messages from your bot, use the following code snippet:

```javascript
fetch('https://api.telegram.org/bot<YOUR_BOT_TOKEN_HERE>/getUpdates', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(response => response.json())
.then(data => {
    if (data.ok) {
        const messages = data.result;
        const specificChatMessages = messages.filter(message => message.message.chat.id === <YOUR_CHAT_ID_HERE>);
        console.log(specificChatMessages);
    } else {
        console.log('Error fetching updates:', data.description);
    }
})
.catch(error => console.error(error));
```

## Edit Sent Message

To edit a sent message, use the following code snippet:

```javascript
fetch(`https://api.telegram.org/bot<YOUR_BOT_TOKEN_HERE>/editMessageText`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        chat_id: <YOUR_CHAT_ID_HERE>,
        message_id: <MESSAGE_ID_HERE>,
        text: 'Your new text'
    })
})
.then(response => response.json())
.then(data => {
    if (data.ok) {
        console.log('Message edited successfully:', data.result);
    } else {
        console.error('Error editing message:', data.description);
    }
})
.catch(error => console.error(error));
```

## Reply to Messages

To reply to messages, use the following code snippet:

```javascript
fetch(`https://api.telegram.org/bot<YOUR_BOT_TOKEN_HERE>/sendMessage`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        chat_id: <YOUR_CHAT_ID_HERE>,
        text: 'Your reply text',
        reply_to_message_id: <MESSAGE_ID_HERE>
    })
})
.then(response => response.json())
.then(data => {
    if (data.ok) {
        console.log('Reply sent successfully:', data.result);
    } else {
        console.error('Error sending reply:', data.description);
    }
})
.catch(error => console.error(error));
```

## Send Polls

To send polls, use the following code snippet:

```javascript
fetch(`https://api.telegram.org/bot<YOUR_BOT_TOKEN_HERE>/sendPoll`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        chat_id: <YOUR_CHAT_ID_HERE>,
        question: 'Your poll question?',
        options: ['Option_1','Option_2','Option_3','Option_4'],
        is_anonymous: true,  // optional: set to false if the poll should be public
        type: 'regular'  // 'quiz' for a quiz
    })
})
.then(response => response.json())
.then(data => {
    if (data.ok) {
        console.log('Poll sent successfully:', data.result);
    } else {
        console.error('Error sending poll:', data.description);
    }
})
.catch(error => console.error(error));
```

## Pin Messages

To pin messages, use the following code snippet:

```javascript
fetch(`https://api.telegram.org/bot<YOUR_BOT_TOKEN_HERE>/pinChatMessage`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        chat_id: <YOUR_CHAT_ID_HERE>,
        message_id: <MESSAGE_ID_HERE>
    })
})
.then(response => response.json())
.then(data => {
    if (data.ok) {
        console.log('Message pinned successfully');
    } else {
        console.error('Error pinning message:', data.description);
    }
})
.catch(error => console.error(error));
```

Replace `<YOUR_BOT_TOKEN_HERE>` and `<YOUR_CHAT_ID_HERE>` with your bot token and chat ID respectively. Also, replace `<MESSAGE_ID_HERE>` with the ID of the message you want to manipulate.
