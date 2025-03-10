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

    // File Input on Click
    const div = document.querySelector(".btn")?.parentElement;
    if (div) {
        div.addEventListener("click", () => {
            let fileInput = document.createElement("input");
            fileInput.type = "file";
            fileInput.style.display = "none";

            document.body.appendChild(fileInput);
            fileInput.click();

            fileInput.addEventListener("change", () => {
                if (fileInput.files.length) {
                    alert("Selected File: " + fileInput.files[0].name);
                }
                fileInput.remove();
            });
        });
    }
});
