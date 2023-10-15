### Rabbitmq Publisher Consumer Example
publisher.js publishing message/data
consumer.js consuming messages received by publisher and sending acknowledgement to publisher

#### How to run a rabbitmq server 
Install and set up Docker
docker run --name rabbitmq -p 5672:5672 rabbitmq 
You can use any port number instead of 5672.
