window.addEventListener('load', () => {
    const updateButtons = document.querySelectorAll('.update-trick-image-modal');
    const modalImage = document.getElementById('modal-image');
    const trickId = document.getElementById('trick_image_form_trickId');
    const oldImage = document.getElementById('trick_image_form_oldImage');
    const confirmModal = document.getElementById('confirm-modal-update-image');
    const confirmYesButton = document.getElementById('confirm-yes-update-image');
    const confirmNoButton = document.getElementById('confirm-no-update-image');
    const mobileMedia = document.getElementById('mobileMediasModal');

    updateButtons.forEach(button => {
        button.addEventListener('click', event => {
            mobileMedia.style.setProperty("display", "none", "important");
            const image = button.getAttribute('data-image-name');
            modalImage.src = '/assets/uploads/tricks/mini/300x300-' + image;
            oldImage.value = image;
            trickId.value = button.getAttribute('data-trick-id');
            confirmModal.style.setProperty("display", "block", "important");
        });
    });

    confirmNoButton.addEventListener('click', () => {
        confirmModal.style.setProperty("display", "none", "important");
    });

    confirmYesButton.addEventListener('click', () => {
        confirmModal.style.setProperty("display", "none", "important");
        location.href = url;
    });
});
