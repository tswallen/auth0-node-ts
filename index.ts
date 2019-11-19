import { ManagementClient } from "auth0";
import { config } from "dotenv";
config();

// Initialise client
const management = new ManagementClient({
    domain: process.env.DOMAIN as string,
    token: process.env.TOKEN,
});

// Get a list of applications
management.getClients({ fields: ["name", "client_id"] }).then((clients) => console.log(clients));
