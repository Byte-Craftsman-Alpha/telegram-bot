class TelegramBot {
    constructor(botToken, chatId) {
      this.botToken = botToken;
      this.chatId = chatId;
      this.results = {};
    }
  
    async sendMessage(text) {
      try {
        const response = await fetch(`https://api.telegram.org/bot${this.botToken}/sendMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            chat_id: this.chatId,
            text: text
          })
        });
        const data = await response.json();
        console.log(data);
        this.results.sendMessage = data;
      } catch (error) {
        console.error(error);
      }
    }
  
    async deleteMessage(messageId) {
      try {
        const response = await fetch(`https://api.telegram.org/bot${this.botToken}/deleteMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            chat_id: this.chatId,
            message_id: messageId
          })
        });
        const data = await response.json();
        console.log(data);
        this.results.deleteMessage = data;
      } catch (error) {
        console.error(error);
      }
    }
  
    async readMessages() {
      try {
        const response = await fetch(`https://api.telegram.org/bot${this.botToken}/getUpdates`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        if (data.ok) {
          const messages = data.result;
          const specificChatMessages = messages.filter(message => message.message.chat.id === this.chatId);
          console.log(specificChatMessages);
            this.results.readMessages = specificChatMessages;
        } else {
          console.log('Error fetching updates:', data.description);
          this.results.readMessages = data.description;
        }
      } catch (error) {
        console.error(error);
      }
    }
  
    async editMessage(messageId, newText) {
      try {
        const response = await fetch(`https://api.telegram.org/bot${this.botToken}/editMessageText`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            chat_id: this.chatId,
            message_id: messageId,
            text: newText
          })
        });
        const data = await response.json();
        if (data.ok) {
          console.log('Message edited successfully:', data.result);
          this.results.editMessage = data.result;
        } else {
          console.error('Error editing message:', data.description);
          this.results.editMessage = data.description;
        }
      } catch (error) {
        console.error(error);
      }
    }
  
    async replyToMessage(text, messageId) {
      try {
        const response = await fetch(`https://api.telegram.org/bot${this.botToken}/sendMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            chat_id: this.chatId,
            text: text,
            reply_to_message_id: messageId
          })
        });
        const data = await response.json();
        if (data.ok) {
          console.log('Reply sent successfully:', data.result);
          this.results.replyToMessage = data.result;
        } else {
          console.error('Error sending reply:', data.description);
          this.results.replyToMessage = data.description;
        }
      } catch (error) {
        console.error(error);
      }
    }
  
    async sendPoll(question, options, isAnonymous = true, type = 'regular') {
      try {
        const response = await fetch(`https://api.telegram.org/bot${this.botToken}/sendPoll`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            chat_id: this.chatId,
            question: question,
            options: options,
            is_anonymous: isAnonymous,
            type: type
          })
        });
        const data = await response.json();
        if (data.ok) {
          console.log('Poll sent successfully:', data.result);
          this.results.sendPoll = data.result;
        } else {
          console.error('Error sending poll:', data.description);
          this.results.sendPoll = data.description;
        }
      } catch (error) {
        console.error(error);
      }
    }
  
    async pinMessage(messageId) {
      try {
        const response = await fetch(`https://api.telegram.org/bot${this.botToken}/pinChatMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            chat_id: this.chatId,
            message_id: messageId
          })
        });
        const data = await response.json();
        if (data.ok) {
          console.log('Message pinned successfully');
          this.results.pinMessage = 'Message pinned successfully';
        } else {
          console.error('Error pinning message:', data.description);
          this.results.pinMessage = data.description;
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
