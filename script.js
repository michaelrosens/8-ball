function shakeMagic8Ball() {
    const question = prompt('Ask the Magic 8-Ball a question:');
    if (question === null) {
        document.getElementById('response-text').innerText = 'Please ask a question!'
        document.getElementById('response-text').classList = 'text-danger'
        document.getElementById('response-image').src = '#BAD/BROKENIMAGE' //FIX THIS
        return
    }

    if (!question.trim()) {
        alert('Please enter a valid question!')
        return
    }

    const randomNumber = Math.floor(Math.random() * 8);
    let answer, image, color;

    switch (randomNumber) {
        case 0:
            answer = "Yes";
            image = "imgs/yes.webp";
            color = "text-success"
            break;
        case 1:
            answer = "No";
            image = "imgs/red x.png";
            color = "text-danger";
            break;
        case 2:
            answer = "Ask again later";
            image = "imgs/later.gif" //change this!!;
            color = "text-secondary";
            break;
        case 3:
            answer = "Maybe";
            image = "imgs/mayb e.jpg";//change this!!;
            color = "text-warning";
            break;
        case 4:
            answer = "Cannot predict now";
            image = "imgs/i-dont-know.jpg";//change this!!;
            color = "text-muted";
            break;
        case 5:
            answer = "Don't count on it";
            image = "imgs/dontcount.gif";//change this!!;
            color = "text-danger";
            break;
        case 6:
            answer = "Most likely";
            image = "imgs/thumbsup.jpg";//change this!!;
            color = "text-success";
            break;
        case 7:
            answer = "Outlook not so good";
            image = "imgs/frown.png";//change this!!;
            color = "text-danger";
            break;
        default:
            break;
    }

const responseText = document.getElementById('response-text');
responseText.innerText = answer;
responseText.classList = `display-4 ${color}`;
document.getElementById('response-image').src = image;

}