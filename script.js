

document.getElementById('send-button').addEventListener('click', function() {
    const chatBox = document.getElementById('chat-box');
    const chatInput = document.getElementById('chat-input');
    const message = chatInput.value.trim();

    if (message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'user');
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        chatInput.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});

document.getElementById('chat-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('send-button').click();
    }
});

