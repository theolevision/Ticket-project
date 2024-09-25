const button = document.getElementById("myButton");
const key = document.getElementById("key");
let myMessage = document.getElementById("myMessage");
let five = document.getElementById("five");
const WORD = "Senha:#";
let count = 0;

button.addEventListener("click", () => {
  // Effect fade logic
  myMessage.innerHTML = "Você pegou seu ticket!";
  myMessage.style.opacity = "1";
  myMessage.classList.remove("fade-out");
  setTimeout(() => myMessage.classList.add("fade-out"), 1700);

  // Ticket creation logic
  count++;
  const div = document.createElement("div");
  div.classList.add("key-adm");
  const number = String(count).padStart(3, "0");
  localStorage.setItem(`number_${count}`, div.textContent);

  key.textContent = number;

  document.getElementById("counter").style.display = "block";

  const now = new Date();
  const horario = now.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }); //dateObject.toLocaleTimeString(locales, options);

  div.textContent = `${WORD}${number}`;

  five.appendChild(div);

  function moveDivAfterDelay(source, target, delay) {
    setTimeout(() => {
      if (source.contains(div)) {
        target.appendChild(div);
      }
    }, delay);
  }

  moveDivAfterDelay(five, ten, 300000);
  moveDivAfterDelay(ten, fif, 600000);

  div.addEventListener("click", () => {
    document.getElementById("TV").innerHTML = `${div.textContent}`;

    document.getElementById("painel").appendChild(div);

    const clickTime = new Date();
    const timeDifference = clickTime - now;

    const seconds = Math.floor((timeDifference / 1000) % 60);
    const minutes = Math.floor(timeDifference / 1000 / 60);

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    div.innerHTML = `
    ${div.textContent}<br>
    Horário chegada: ${horario}<br>
    Tempo de espera: ${formattedMinutes}:${formattedSeconds}
    `;

    isClickable = false;

    div.style.pointerEvents = "none";

    function showConfirm() {
      const userResponse = confirm("O cliente foi atendido?");

      if (userResponse) {
        alert("Parabéns, você chamou o cliente a tempo!");
        div.style.backgroundColor = "lightgreen";
      } else {
        alert("Você perdeu o cliente ಠ_ಠ");
        div.style.backgroundColor = "rgb(161, 29, 29)";
      }
    }
    showConfirm();
  });
});
