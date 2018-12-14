function notify(message) {
    let notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';

    let oneTimeInterval = setTimeout(hideMessage,2000);

    function hideMessage() {
        clearTimeout(oneTimeInterval)
        notification.style.display = 'none';
    }
}