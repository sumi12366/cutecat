 const flower = document.getElementById("flower");
const checks = document.querySelectorAll(".task-check");

checks.forEach(check => {
  check.addEventListener("change", updateFlower);
});

function updateFlower() {
  const done = document.querySelectorAll(".task-check:checked").length;


    let stage = "🌱";
    if (done === 1) stage = "🍃";
    if (done === 2) stage = "🍀";
    if (done === 3) stage = "🌸";
    if (done === 4) stage ="💐";

    flower.textContent = stage;
  }

  
  
const taskInputs = document.querySelectorAll(".task-input");
const taskChecks = document.querySelectorAll(".task-check");

const COOKIE_NAME = "tasks";
const EXPIRES_DAYS = 7;


document.addEventListener("DOMContentLoaded", () => {
  const saved = getCookie(COOKIE_NAME);

  if (saved) {
    const tasks = JSON.parse(decodeURIComponent(saved));

    tasks.forEach((task, i) => {
      if (taskInputs[i]) {
        taskInputs[i].value = task.text;
        taskChecks[i].checked = task.done;
      }
    });
  }
});


taskInputs.forEach(input => {
  input.addEventListener("input", saveTasks);
});

taskChecks.forEach(check => {
  check.addEventListener("change", saveTasks);
});


function saveTasks() {
  const taskData = Array.from(taskInputs).map((input, i) => {
    return {
      text: input.value,
      done: taskChecks[i].checked
    };
  });

  setCookie(
    COOKIE_NAME,
    encodeURIComponent(JSON.stringify(taskData)),
    EXPIRES_DAYS
  );
}


function setCookie(name, value, days) {
  let expires = "";

  if (days) {
    const d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + d.toUTCString();
  }

  document.cookie = name + "=" + value + expires + "; path=/";
}


function getCookie(name) {
  const nameEQ = name + "=";
  const cookies = document.cookie.split(";");

  for (let c of cookies) {
    c = c.trim();
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length);
    }
  }
  return null;
}
