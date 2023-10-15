const amqp = require("amqplib");

const msg = { jobNumber: process.argv[2] };

connect();

async function connect() {

    try {
        const connection = await amqp.connect("amqp://localhost:5672");
        const channel = await connection.createChannel();
        const result = await channel.assertQueue("jobs");
        channel.sendToQueue("jobs", Buffer.from(JSON.stringify(msg)));
        console.log(`Job sent successfully ${msg.jobNumber}`);

    } catch (error) {
        console.error(error);
    }
}