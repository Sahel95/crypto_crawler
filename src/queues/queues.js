const Bull = require('bull');
const emailProcess = require('../processes/email.process');
const {setQueues, BullAdapter} = require('bull-board');

// https://optimalbits.github.io/bull

const queue = new Bull('email', {
    redis: 'redis:6379'
});

setQueues([
    new BullAdapter(queue)
]);

queue.process(emailProcess);

const sendNewEmail = (data: any) => {
    queue.add(data, {
        attempts: 5
    });
};

export {
    sendNewEmail
}