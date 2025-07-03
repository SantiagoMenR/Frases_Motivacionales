const messages = [
    "¿Qué energía, espacio, conciencia y elección puedo ser para recibir más dinero de lo que jamás imaginé, con total facilidad?",
    "¿Qué tomaría para que el dinero me busque a mí como yo busco el café en las mañanas?",
    "Si no tuviera ningún punto de vista sobre el dinero, ¿cuánto podría recibir hoy?",
    "¿Y si el dinero fuera mi amante, cómo le estaría tratando?",
    "¿Qué está creando escasez en mi vida que podría soltar ahora mismo?",
    "¿Qué es el dinero para mí... y de quién aprendí eso?",
    "¿Qué juicios estoy usando para limitar el dinero que puedo elegir?",
    "¿Qué me impide reconocer que ya soy una energía de riqueza?",
    "¿Cuánto más dinero podría tener si me atreviera a disfrutar sin culpa?",
    "¿Qué posibilidades infinitas con el dinero están disponibles hoy que aún no he reconocido?",
    "¿Qué debo dejar de controlar para que el dinero fluya con más gozo?",
    "¿Estoy dispuesta a recibir dinero de formas inesperadas y sin esfuerzo?",
    "¿Qué estoy evitando o defendiendo que me impide ser millonaria?",
    "¿Qué más es posible con el dinero que nunca nadie me enseñó?",
    "¿Qué pasaría si dejara de rechazar ser rica?",
    "¿Y si el dinero no fuera un problema… qué elegiría hoy?",
    "¿Qué estoy copiando de mi familia sobre el dinero que ya no me sirve?",
    "¿Qué tomaría para que el dinero se muestre hoy con facilidad, alegría y gloria?",
    "¿Qué nivel de gratitud y gozo puedo ser hoy para duplicar mis ingresos?",
    "¿Cuánto dinero estoy dispuesto(a) a tener sin perder mi esencia?",
    "¿Qué conciencia del dinero estoy listo(a) para recibir hoy?",
    "¿Qué energía puedo ser para atraer clientes que me paguen con gozo?",
    "¿Qué más puedo vender, crear o elegir que sea una contribución financiera para mí y para el mundo?",
    "¿Qué estoy haciendo más difícil de lo que realmente es con el dinero?",
    "¿Qué parte de mi magia estoy ignorando que crearía más dinero de inmediato?",
    "¿Qué me impide ser el imán que realmente soy para el dinero?",
    "¿Qué tomaría para elegir más dinero sin tener que justificarlo?",
    "¿Y si el dinero no fuera serio ni pesado, cómo sería?",
    "¿Qué riqueza energética está disponible para mí ahora mismo?",
    "¿Qué puedo ser o hacer hoy que cree más dinero ahora y para toda la eternidad?",
  ];
  
  function getMessageForToday() {
    const day = new Date().getDate(); // 1–31
    return messages[(day - 1) % messages.length];
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    // Aplicar preferencia de tema guardada
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
    }
  
    document.getElementById("motivation-text").innerText = getMessageForToday();

  
    // Compartir
    document.getElementById("share-btn").addEventListener("click", () => {
      const text = document.getElementById("motivation-text").innerText;
      if (navigator.share) {
        navigator.share({
          title: "Tarjeta Motivacional",
          text: text,
          url: window.location.href,
        });
      } else {
        alert("Tu navegador no soporta la función de compartir.");
      }
    });
  
    // Saludo dinámico
    const hour = new Date().getHours();
    const greeting = document.getElementById("greeting");
    if (hour < 12) {
      greeting.innerText = "🌞 Buenos días";
      document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFpc2FqZSUyMGRlJTIwYW1hbmVjZXJ8ZW58MHx8MHx8fDA%3D')";
    } else if (hour < 18) {
      greeting.innerText = "🌤 Buenas tardes";
      document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1682939225364-3353202ceec0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxheWElMjBhbCUyMGF0YXJkZWNlciUyMDRrfGVufDB8fDB8fHww')";
    } else {
      greeting.innerText = "🌙 Buenas noches";
      document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1495567720989-cebdbdd97913?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9uZG8lMjBkZSUyMHBhbnRhbGxhJTIwZGUlMjBhdGFyZGVjZXJ8ZW58MHx8MHx8fDA%3D')";
    }
  });
  

  document.getElementById("generate-text").addEventListener("click",() => {
    const fraseActual = document.getElementById("motivation-text").innerText;
    let nuevaFrase;

    do{
      const index = Math.floor(Math.random() * messages.length);
      nuevaFrase = messages[index];
    }while(nuevaFrase === fraseActual);

    document.getElementById("motivation-text").innerText = nuevaFrase;
    actualizarCorazon(); 
  })
    

// Guardar frase favorita
document.getElementById("save-favorite").addEventListener("click", () => {
  const fraseActual = document.getElementById("motivation-text").innerText;
  let favoritas = JSON.parse(localStorage.getItem("frasesFavoritas")) || [];

  
  const index = favoritas.indexOf(fraseActual);
  if (index === -1) {
    favoritas.push(fraseActual); // Agregar
  } else {
    favoritas.splice(index, 1); // Quitar
  }

  localStorage.setItem("frasesFavoritas", JSON.stringify(favoritas));
  actualizarCorazon();

  const lista = document.getElementById("favorites-list");
  if (!lista.classList.contains("hidden")) {
    mostrarFavoritas();
  }
});

function mostrarFavoritas() {
  const lista = document.getElementById("favorites-list");
  const favoritas = JSON.parse(localStorage.getItem("frasesFavoritas")) || [];

  if (favoritas.length === 0) {
    lista.innerHTML = "<p>❌ No tienes frases favoritas aún.</p>";
  } else {
    lista.innerHTML = `
      <h1>⭐ Tus frases favoritas:</h1>
      <ul class = "lista">
        ${favoritas.map(frase => `<li class = "item">"${frase}"</li>`).join("")}
      </ul>
    `;
  }
}

document.getElementById("show-favorites").addEventListener("click", () => {
  const lista = document.getElementById("favorites-list");
  lista.classList.toggle("hidden");

  if (!lista.classList.contains("hidden")) {
    mostrarFavoritas(); // Solo actualizar si se va a mostrar
  }
});



function actualizarCorazon() {
  const fraseActual = document.getElementById("motivation-text").innerText;
  const favoritas = JSON.parse(localStorage.getItem("frasesFavoritas")) || [];
  const esFavorita = favoritas.includes(fraseActual);
  document.getElementById("save-favorite").innerText = esFavorita ? "❤️" : "🤍";
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("motivation-text").innerText = getMessageForToday(); // o getRandomMessage()
  actualizarCorazon();
});



// Crear calendario de 30 días
function generarCalendario() {
  const contenedor = document.getElementById("calendar-days");
  contenedor.innerHTML = ""; // Limpiar si ya existe
  for (let i = 1; i <= 30; i++) {
    const btn = document.createElement("button");
    btn.innerText = i;
    btn.addEventListener("click", () => mostrarFraseDelDia(i));
    contenedor.appendChild(btn);
  }
}

// Mostrar frase según el número de día
function mostrarFraseDelDia(dia) {
  const mensaje = messages[(dia - 1) % messages.length];
  document.getElementById("day-message").innerText = `📅 Día ${dia}: "${mensaje}"`;
}

// Mostrar / ocultar calendario
document.getElementById("open-calendar").addEventListener("click", () => {
  generarCalendario();
  document.getElementById("calendar-modal").classList.remove("hidden");
});

document.getElementById("close-calendar").addEventListener("click", () => {
  document.getElementById("calendar-modal").classList.add("hidden");
});