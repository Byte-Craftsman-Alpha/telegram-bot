# Telegram Bot

### Get your chat ID here
Replace with your bot token\
`https://api.telegram.org/bot**********:*********-*************************/getUpdates`

### Send message
- Replace `bot token` and `chat id` 
```javascript
fetch('https://api.telegram.org/bot**********:*********-*************************/sendMessage', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    chat_id: ***********,
    text: 'Hello, world!'
  })
})
.then(response => response.json())
.then(data => console.log(data)) // Process the response data 
.catch(error => console.error(error));
```
#### Customize the message
modify the body block with 
```javascript
body: JSON.stringify({
    chat_id: ***********,
    text: 'Hello, world!',
    parse_mode: "Markdown"
})
```
- For **BOLD** characters 
  - `text: 'the *Bold Characters*'`
- For *ITALIC* characters 
  - `text: 'the __italic Characters__'`
- For HIDDEN TEXT characters 
  - `text: 'the |Hidden Characters|'`
- For ~STRIKETHROUGH~ characters 
  - `text: 'the ~STRIKETHROUGH Characters~'`
### delete sent message 
- Replace `bot token`,  `chat id` and `message id`
```javascript
fetch('https://api.telegram.org/bot**********:*********-*************************/deleteMessage', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    chat_id: ***********,
    message_id: ***
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
```
