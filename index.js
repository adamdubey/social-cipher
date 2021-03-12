// destructure encoded hash message from URL
const { hash } = window.location;

// display decrypted message
const message = atob(hash.replace('#', ''));

if (message) {
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');

    document.querySelector('h1').innerHTML = message;
}

document.querySelector('form').addEventListener('submit', event => {
    // prevent browser from attempting to submit
    // form to backend (which doesn't exist)
    event.preventDefault();

    // toggle card visibility
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');

    // encrypt user input
    const input = document.querySelector('#msg-input');
    const encrypted = btoa(input.value);

    // generate sharable link
    const linkInput = document.querySelector('#link-input');
    linkInput.value = `${window.location}#${encrypted}`;
    linkInput.select();
});