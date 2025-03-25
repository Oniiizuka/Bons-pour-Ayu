document.addEventListener("DOMContentLoaded", function () {
    const services = [
        { name: "Striptease", price: "0€" },
        { name: "Sucer le bras gauche d'Eliot", price: "0€" },
    ];

    const serviceList = document.getElementById("service-list");

    services.forEach(service => {
        const div = document.createElement("div");
        div.classList.add("service");
        div.innerHTML = `<h3>${service.name}</h3><p>Prix: ${service.price}</p>`;
        serviceList.appendChild(div);
    });
});
