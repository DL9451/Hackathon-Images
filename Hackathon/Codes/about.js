document.addEventListener("DOMContentLoaded", () => {

    // Floating Animation for Image
    const img = document.querySelector(".floating-img");
    if (img) {
        let position = 0;
        let direction = 1;

        function floatImage() {
            setInterval(() => {
                position += direction;
                img.style.transform = `translateY(${position}px)`;

                if (position >= 10 || position <= -10) {
                    direction *= -1;
                }
            }, 50);
        }

        floatImage();
    }
});