document.addEventListener("DOMContentLoaded", () => {
    // Initialize the map
    const map = L.map('map').setView([0.0, 0.0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18 }).addTo(map);

    let marker;

    // Get current location and update form fields
    document.getElementById("getLocation").addEventListener("click", () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;

                    // Update form fields
                    document.getElementById("latitude").value = lat;
                    document.getElementById("longitude").value = lng;

                    // Update map and add marker
                    if (marker) map.removeLayer(marker);
                    map.setView([lat, lng], 13);
                    marker = L.marker([lat, lng]).addTo(map).bindPopup("Incident Location").openPopup();
                },
                (error) => alert("Error fetching location: " + error.message)
            );
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    });

    // Handle form submission
    document.getElementById("incidentForm").addEventListener("submit", async (event) => {
        event.preventDefault();

        const incidentType = document.getElementById("incidentType").value;
        const incidentDetails = document.getElementById("incidentDetails").value;
        const latitude = document.getElementById("latitude").value;
        const longitude = document.getElementById("longitude").value;
        const intensity = document.getElementById("intensity").value;
        const imageFile = document.getElementById("imageUpload").files[0];

        if (!latitude || !longitude) {
            alert("Please get the location before submitting the form.");
            return;
        }

        // Convert the image file to Base64
        const reader = new FileReader();
        reader.onload = async (e) => {
            const base64Image = e.target.result.split(",")[1]; // Extract Base64 image data

            // Prepare form data for submission
            const formData = {
                incidentType,
                incidentDetails,
                latitude,
                longitude,
                intensity,
                image: base64Image,
                imageName: imageFile.name,
                imageType: imageFile.type,
            };

            try {
                const response = await fetch("<https://script.google.com/macros/s/AKfycbxnG_5B8U44r_FD2tktZWCHQPdvJEtIgaQs3ZfdZAAJmouYL7RTHmBytIn6ZSVQ6lo/exec>", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                });

                const result = await response.json();
                if (result.status === "success") {
                    alert("Incident reported successfully!");
                    console.log("File URL:", result.fileUrl);
                } else {
                    alert("Error: " + result.message);
                }
            } catch (error) {
                alert("Error submitting the form: " + error.message);
            }
        };

        reader.readAsDataURL(imageFile); // Read the file as Base64
    });
});
