document.getElementById("year").textContent = new Date().getFullYear();

const shareBtn = document.getElementById("shareBtn");
const shareMsg = document.getElementById("shareMsg");

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
    shareMsg.textContent = "Link copiado!";
    setTimeout(() => (shareMsg.textContent = ""), 2500);
  } catch (err) {
    if (err.name !== "AbortError") {
      shareMsg.textContent = "Não foi possível compartilhar.";
      setTimeout(() => (shareMsg.textContent = ""), 2500);
    }
  }
});
