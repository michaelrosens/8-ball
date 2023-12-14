function shakeMagic8Ball() {
    const question = prompt('Ask the Magic 8-Ball a question:');

    if (question === null){
        document.getElementById('response-text').innerText = 'Ask me a question!'
        document.getElementById('response-text'). classList = 'text-danger'
        document.getElementById('response-text').src = '#BAD/BROKENIMAGE'
    }

if(!question.trim()) {
    alert('Please enter a valid question!')
    return
}
}