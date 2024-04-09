const TelegramBot = require('node-telegram-bot-api');
const token = process.env;

 module.exports = class BotService {
    constructor () {this.bot =  new TelegramBot(token, {polling: true});

    //register event listener for incoming messages
    this.bot.on('msg', this.onRecieveMessage    )

     //register event listener for incoming messages
     this.bot.on('query', this.onRecieveButtonCommands)
}

// hNDLER FOR ALL INCOMING MESSAGE
onRecieveMessage = async (msg) => {
    
    console.log("I am triggered")
    const chatId = msg.chat.id;

    // send a message to the chat acknowledging receipt of their message
    this.bot.sendMessage(chatId, 'hello amie');
}

onRecieveButtonCommands = async (query) => {
    console.log(msg)
}

}
