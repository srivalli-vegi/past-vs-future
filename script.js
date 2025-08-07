const prompts = [
  "What was your happiest childhood memory?",
  "What did you love to do when you were 10?",
  "Who inspired you the most in school?",
  "What was your dream job as a kid?",
  "What made you laugh the most as a child?",
  "What’s a place you loved visiting as a kid?",
  "What would you tell your younger self now?",
  "Describe a day you’d love to relive.",
  "Who was your best friend in childhood?",
  "What’s one lesson you learned growing up?"
];

window.onload = () => {
  const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
  const promptEl = document.getElementById("prompt");
  if (promptEl) {
    promptEl.textContent = randomPrompt;
  }
};

function downloadJournal() {
  const pastInput = document.getElementById("pastInput");
  const futureInput = document.getElementById("futureInput");
  const promptEl = document.getElementById("prompt");
  const dateInput = document.getElementById("entryDate");

  if (!pastInput || !futureInput || !promptEl || !dateInput) {
    alert("Some elements are missing. Please check the page.");
    return;
  }

  const past = pastInput.value.trim();
  const future = futureInput.value.trim();
  const prompt = promptEl.textContent.trim();
  const date = dateInput.value || new Date().toISOString().split("T")[0];

  if (!past && !future) {
    alert("Please write something before downloading!");
    return;
  }

  const content = 🕰 Past vs Future Journal Entry\nDate: ${date}\n\nPrompt: ${prompt}\n\n📜 Past Me:\n${past}\n\n🔮 Future Me:\n${future};
  const blob = new Blob([content], { type: "text/plain" });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = Journal_${date}.txt;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}