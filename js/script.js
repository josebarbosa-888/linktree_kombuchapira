document.getElementById("year").textContent = new Date().getFullYear();

const shareBtn = document.getElementById("shareBtn");
const toast = document.getElementById("toast");
const pixBtn = document.getElementById("pixBtn");
const pixKey = "+5582998313717";

let toastTimer;
function showToast(text) {
  toast.textContent = text;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2500);
}

pixBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(pixKey);
    showToast("Chave Pix copiada!");
  } catch (err) {
    showToast("Não foi possível copiar a chave.");
  }
});

shareBtn.addEventListener("click", async () => {
  const shareData = {
    title: document.title,
    text: "Confira a Kombucha Pirá!",
    url: window.location.href
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
      return;
    }
    await navigator.clipboard.writeText(shareData.url);
    showToast("Link copiado!");
  } catch (err) {
    if (err.name !== "AbortError") {
      showToast("Não foi possível compartilhar.");
    }
  }
});
