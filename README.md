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
### Read messages
- Replace `bot token` and `chat id` 
```javascript
fetch('https://api.telegram.org/bot**********:*********-*************************/getUpdates', {
    method: 'POST',
    headers: {
	    'Content-Type': 'application/json'
    }
})
.then(response => response.json())
.then(data => {
	if (data.ok) {
		const messages = data.result;
		const specificChatMessages = messages.filter(message => message.message.chat.id === ***********);
		console.log(specificChatMessages);
	} else {
		console.log('Error fetching updates:', data.description);
	}
})
.catch(error => console.error(error));
```
### Edit sent message
- Replace `bot token`, `chat id`, `message id` and `your new text`
```javascript
fetch(`https://api.telegram.org/bot**********:*********-*************************/editMessageText`, {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		chat_id: ***********,
		message_id: ****,
		text: 'New Text'
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
### Reply to messages
- Replace `bot token`, `chat id`, `message id` and `your reply text`
``` javascript
fetch(`https://api.telegram.org/bot**********:*********-*************************/sendMessage`, {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		chat_id: ***********,
		text: text,
		reply_to_message_id: ****
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
### Send Polls
- Replace `bot token`, `chat id`, `your poll question` and `your options`
```javascript
fetch(`https://api.telegram.org/bot**********:*********-*************************/sendPoll`, {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		chat_id: ***********,
		question: 'Your question?',
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
### Pin messages
- Replace `bot token`, `chat id` and `message id`
```javascript
fetch(`https://api.telegram.org/bot**********:*********-*************************/pinChatMessage`, {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		chat_id: ***********,
		message_id: *****
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
