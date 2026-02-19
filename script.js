const secrets = [
    "The early bird gets the worm, but the second mouse gets the cheese.",
    "I'm not saying I'm Batman, but nobody's ever seen me and Batman in the same room.",
    "Parallel lines have so much in common. It's a shame they'll never meet.",
    "I told my computer I needed a break, and now it won't stop sending me Kit-Kat ads.",
    "Why did the scarecrow win an award? He was outstanding in his field.",
    "I'm reading a book about anti-gravity. It's impossible to put down.",
    "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.",
    "I tried to catch fog yesterday. Mist.",
    "What do you call a bear with no teeth? A gummy bear.",
    "I used to hate facial hair, but then it grew on me.",
    "Secrets are just facts that haven't been caught yet.",
    "The real secret is that there is no secret.",
    "What's orange and sounds like a parrot? A carrot.",
    "I'm reading a horror story in Braille. Something bad is going to happen.",
    "Did you know that honey never expires? Neither do bad puns.",
    "I would avoid the sushi if I were you. It's a little fishy.",
    "Time flies like an arrow. Fruit flies like a banana.",
    "I'm afraid for the calendar. Its days are numbered.",
    "What did the ocean say to the beach? Nothing, it just waved.",
    "I couldn't figure out why the baseball kept getting larger. Then it hit me."
];

function typeSecret(element, text, speed = 50) {
    element.textContent = '';
    element.style.opacity = '1';
    element.style.display = 'block';
    element.classList.add('typing');
    
    let index = 0;
    
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        } else {
            element.classList.remove('typing');
        }
    }
    
    type();
}

document.querySelector('button').addEventListener('click', function() {
    const randomSecret = secrets[Math.floor(Math.random() * secrets.length)];
    const secretDisplay = document.getElementById('secret-display');
    
    // Clear any existing timeout
    if (secretDisplay.timeoutId) {
        clearTimeout(secretDisplay.timeoutId);
    }
    
    typeSecret(secretDisplay, randomSecret);
    
    // Set new timeout for 15 seconds
    secretDisplay.timeoutId = setTimeout(function() {
        secretDisplay.style.opacity = '0';
        setTimeout(function() {
            secretDisplay.style.display = 'none';
        }, 300);
    }, 15000);
});
