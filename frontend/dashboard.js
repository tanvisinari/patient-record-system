
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const pages = document.querySelectorAll(".dashboard-page");
    const message = document.getElementById("appointmentMessage");

    function showPage(pageId) {
        const targetPage = document.getElementById(pageId);

        if (!targetPage) {
            return;
        }

        pages.forEach(function (page) {
            page.classList.toggle("hidden", page.id !== pageId);
        });

        navLinks.forEach(function (link) {
            link.classList.toggle("active", link.dataset.page === pageId);
        });

        if (pageId === "appointments" || pageId === "records" ||
            pageId === "profile" || pageId === "dashboard") {
            history.replaceState(null, "", "#" + pageId);
        }
    }

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            showPage(link.dataset.page);
        });
    });

    document.querySelectorAll("[data-open]").forEach(function (button) {
        button.addEventListener("click", function () {
            showPage(button.dataset.open);
        });
    });

    const initialPage = window.location.hash.replace("#", "");
    showPage(document.getElementById(initialPage) ? initialPage : "dashboard");

    const bookButton = document.getElementById("bookAppointmentBtn");
    const appointmentForm = document.getElementById("appointmentForm");

    if (bookButton && appointmentForm) {
        bookButton.addEventListener("click", function () {
            appointmentForm.classList.toggle("hidden");

            if (!appointmentForm.classList.contains("hidden")) {
                appointmentForm.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest"
                });
            }
        });
    }

    const dateInput = document.getElementById("appointmentDate");

    if (dateInput) {
        const today = new Date();
        const localToday = new Date(
            today.getTime() - today.getTimezoneOffset() * 60000
        ).toISOString().split("T")[0];

        dateInput.min = localToday;
    }

    if (appointmentForm) {
        appointmentForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const doctor = document.getElementById("doctorName").value.trim();
            const date = document.getElementById("appointmentDate").value;
            const reason = document.getElementById("appointmentReason").value.trim();

            if (!doctor || !date || !reason) {
                if (message) {
                    message.textContent = "Please complete all fields.";
                }
                return;
            }

            if (message) {
                message.textContent =
                    "Form preview completed! Appointment requests will be saved when the backend is connected.";
            }

            appointmentForm.reset();

            if (dateInput) {
                const today = new Date();
                dateInput.min = new Date(
                    today.getTime() - today.getTimezoneOffset() * 60000
                ).toISOString().split("T")[0];
            }
        });
    }
});