import requests
import json

class TelegramBot:
    def __init__(self, bot_token, chat_id):
        self.bot_token = bot_token
        self.chat_id = chat_id

    def send_message(self, text):
        try:
            response = requests.post(
                f'https://api.telegram.org/bot{self.bot_token}/sendMessage',
                headers={'Content-Type': 'application/json'},
                data=json.dumps({
                    'chat_id': self.chat_id,
                    'text': text
                })
            )
            data = response.json()
            print(data)
        except Exception as e:
            print(e)

    def delete_message(self, message_id):
        try:
            response = requests.post(
                f'https://api.telegram.org/bot{self.bot_token}/deleteMessage',
                headers={'Content-Type': 'application/json'},
                data=json.dumps({
                    'chat_id': self.chat_id,
                    'message_id': message_id
                })
            )
            data = response.json()
            print(data)
        except Exception as e:
            print(e)

    def read_messages(self):
        try:
            response = requests.post(
                f'https://api.telegram.org/bot{self.bot_token}/getUpdates',
                headers={'Content-Type': 'application/json'},
                data=json.dumps({})
            )
            data = response.json()
            if data.get('ok'):
                messages = data.get('result')
                specific_chat_messages = [message for message in messages if message.get('message', {}).get('chat', {}).get('id') == self.chat_id]
                print(specific_chat_messages)
            else:
                print('Error fetching updates:', data.get('description'))
        except Exception as e:
            print(e)

    def edit_message(self, message_id, new_text):
        try:
            response = requests.post(
                f'https://api.telegram.org/bot{self.bot_token}/editMessageText',
                headers={'Content-Type': 'application/json'},
                data=json.dumps({
                    'chat_id': self.chat_id,
                    'message_id': message_id,
                    'text': new_text
                })
            )
            data = response.json()
            if data.get('ok'):
                print('Message edited successfully:', data.get('result'))
            else:
                print('Error editing message:', data.get('description'))
        except Exception as e:
            print(e)

    def reply_to_message(self, text, message_id):
        try:
            response = requests.post(
                f'https://api.telegram.org/bot{self.bot_token}/sendMessage',
                headers={'Content-Type': 'application/json'},
                data=json.dumps({
                    'chat_id': self.chat_id,
                    'text': text,
                    'reply_to_message_id': message_id
                })
            )
            data = response.json()
            if data.get('ok'):
                print('Reply sent successfully:', data.get('result'))
            else:
                print('Error sending reply:', data.get('description'))
        except Exception as e:
            print(e)

    def send_poll(self, question, options):
        try:
            response = requests.post(
                f'https://api.telegram.org/bot{self.bot_token}/sendPoll',
                headers={'Content-Type': 'application/json'},
                data=json.dumps({
                    'chat_id': self.chat_id,
                    'question': question,
                    'options': options,
                    'is_anonymous': True,  # optional: set to False if the poll should be public
                    'type': 'regular'  # 'quiz' for a quiz
                })
            )
            data = response.json()
            if data.get('ok'):
                print('Poll sent successfully:', data.get('result'))
            else:
                print('Error sending poll:', data.get('description'))
        except Exception as e:
            print(e)

    def pin_message(self, message_id):
        try:
            response = requests.post(
                f'https://api.telegram.org/bot{self.bot_token}/pinChatMessage',
                headers={'Content-Type': 'application/json'},
                data=json.dumps({
                    'chat_id': self.chat_id,
                    'message_id': message_id
                })
            )
            data = response.json()
            if data.get('ok'):
                print('Message pinned successfully')
            else:
                print('Error pinning message:', data.get('description'))
        except Exception as e:
            print(e)

# Example Usage:
bot = TelegramBot('<YOUR_BOT_TOKEN_HERE>', '<YOUR_CHAT_ID_HERE>')
bot.send_message('Hello, world!')
bot.delete_message(<MESSAGE_ID_HERE>)
bot.read_messages()
bot.edit_message(<MESSAGE_ID_HERE>, 'New Text')
bot.reply_to_message('Your reply text', <MESSAGE_ID_HERE>)
bot.send_poll('Your poll question?', ['Option_1', 'Option_2', 'Option_3', 'Option_4'])
bot.pin_message(<MESSAGE_ID_HERE>)
