const amqp = require("amqplib");

connect();

async function connect() {

    try {
        const connection = await amqp.connect("amqp://localhost:5672"); // differnt connection than publisher
        const channel = await connection.createChannel(); // different connection than publisher
        const result = await channel.assertQueue("jobs");

        channel.consume("jobs", message => {
            //console.log(message); // This is the buffer received from publisher
            const msg = JSON.parse(message.content.toString());
            console.log("received job with id: " + msg.jobNumber);

            if (msg.jobNumber == 7) {
                channel.ack(message);
            }
        })

        console.log("waiting for messages...");

    } catch (error) {
        console.error(error);
    }
}