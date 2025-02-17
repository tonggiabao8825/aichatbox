document.addEventListener('DOMContentLoaded', function() {
    const chatInput = document.querySelector('.chat-input');
    const sendButton = document.querySelector('.bx-send').parentElement;
    const chatMessages = document.querySelector('.chat-messages');
    const suggestedMessages = document.querySelectorAll('.suggested-message');
    const typingIndicator = document.querySelector('.typing');

    // Auto-resize textarea
    chatInput.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });

    // Send message function
    function sendMessage(content) {
        if (!content.trim()) return;

        // Add user message
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message sent';
        messageDiv.textContent = content;
        chatMessages.appendChild(messageDiv);

        // Clear input
        chatInput.value = '';
        chatInput.style.height = 'auto';

        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Show typing indicator
        typingIndicator.style.display = 'block';
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Simulate response (replace with actual API call)
        setTimeout(() => {
            typingIndicator.style.display = 'none';
            
            const responseDiv = document.createElement('div');
            responseDiv.className = 'message received';
            responseDiv.textContent = getResponse(content);
            chatMessages.appendChild(responseDiv);
            
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1500);
    }

    // Handle send button click
    sendButton.addEventListener('click', () => {
        sendMessage(chatInput.value);
    });

    // Handle Enter key
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage(chatInput.value);
        }
    });

    // Handle suggested messages
    suggestedMessages.forEach(msg => {
        msg.addEventListener('click', () => {
            sendMessage(msg.textContent);
        });
    });

    // Simple response function (replace with actual AI response logic)
    function getResponse(message) {
        const responses = [
            "Tôi hiểu câu hỏi của bạn. Hãy để tôi giải thích chi tiết về vấn đề này...",
            "Đây là một chủ đề thú vị. Dựa trên kinh nghiệm của tôi...",
            "Câu hỏi rất hay! Để trả lời câu hỏi này, chúng ta cần xem xét một số khía cạnh...",
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
});