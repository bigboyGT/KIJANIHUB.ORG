// JavaScript to manage the species counter and form submissions
document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('species-counter');
    let count = 0;
    const target = 30000; // Target number
    const duration = 5000; // Duration in milliseconds
    const increment = Math.ceil(target / (duration / 16)); // Increment per frame

    const updateCounter = () => {
        count += increment;
        if (count > target) count = target;
        counterElement.textContent = count.toLocaleString(); // Format as a number with commas
        if (count < target) {
            requestAnimationFrame(updateCounter);
        }
    };

    updateCounter();

    // Form submission logic
    document.getElementById('post-form').addEventListener('submit', function (e) {
        e.preventDefault();

        const title = document.getElementById('post-title').value;
        const content = document.getElementById('post-content').value;
        const category = document.getElementById('post-category').value;

        alert(`Your post titled "${title}" has been submitted under "${category}"!`);
        
        // Clear form
        document.getElementById('post-form').reset();
    });
});
