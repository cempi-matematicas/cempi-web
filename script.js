// ===== CEMPI: EDITA ESTOS DATOS =====
const CEMPI = {
  whatsapp: "34686622713", // Sustituye por tu número, sin + ni espacios.
  email: "cempimatematicas@gmail.com" // Sustituye por tu correo.
};

document.querySelectorAll("[data-whatsapp]").forEach(a => {
  const text = encodeURIComponent("Hola, me gustaría recibir información sobre las clases de CEMPI.");
  a.href = `https://wa.me/${CEMPI.whatsapp}?text=${text}`;
  a.target = "_blank";
  a.rel = "noopener";
});

document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const subject = encodeURIComponent("Solicitud de información CEMPI");
  const body = encodeURIComponent(
`Nombre: ${data.get("nombre")}
Contacto: ${data.get("contacto")}
Universidad: ${data.get("universidad")}
Carrera: ${data.get("carrera")}
Asignatura: ${data.get("asignatura")}

Mensaje:
${data.get("mensaje")}`
  );
  window.location.href = `mailto:${CEMPI.email}?subject=${subject}&body=${body}`;
});

document.getElementById("year").textContent = new Date().getFullYear();
