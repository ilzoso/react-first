
onmessage = (e) => {
    console.info('message from main program ' + e.data);
    var sum = e.data.length;
    console.info('posting message back to main program');
    postMessage('sum is ' + sum);
};

