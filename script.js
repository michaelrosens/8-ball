function shakeMagic8Ball() {
    const responses = [
        'Yes',
        'No',
        'Ask again later',
        'Cannot predict now',
        'Dont count on it',
        'My sources say no',
        'Outlook not so good',
        'Yes, definitely'
    ];

    const question = prompt('Ask the Magic 8-Ball a question:');

    if (question === null) {
        document.getElementById('response-text').innerText = 'Ask me a question!';
        document.getElementById('response-text').classList = 'text-danger';
    } else if (!question.trim()) {
        alert('Please enter a valid question!');
    } else {
        const randomIndex = Math.floor(Math.random() * responses.length);
        const answer = responses[randomIndex];
        
        // Display the answer on the screen
        document.getElementById('response-text').innerText = answer;
        document.getElementById('response-text').classList.remove('text-danger');
    }
}