const dotenv = require('dotenv');
    dotenv.config();

    module.exports = {
      telegram: {
        apiKey: process.env.TELEGRAM_API_KEY,
        chatId: process.env.TELEGRAM_CHAT_ID
      },
      solana: {
        rpcUrl: process.env.SOLANA_RPC_URL,
        sniffer: {
          apiKey: process.env.SOLANA_SNIFFER_API_KEY,
          apiUrl: process.env.SOLANA_SNIFFER_API_URL
        }
      },
      app: {
        port: process.env.APP_PORT || 3000,
        env: process.env.APP_ENV || 'development',
        debug: process.env.DEBUG === 'true'
      }
    };
