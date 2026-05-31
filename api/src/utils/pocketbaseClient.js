import PocketBase from 'pocketbase';

const client = new PocketBase(process.env.POCKETBASE_URL || 'http://127.0.0.1:8090');

// If you need authentication, you can set it up here
// client.admins.authWithPassword(process.env.PB_EMAIL, process.env.PB_PASSWORD);

export default client;
