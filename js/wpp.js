const link = document.getElementById("whatsapp-link");
  const phone = "5564999265341"; // seu número com DDI e DDD
  const msg = "Olá, vim pelo seu portfólio!";
  const encodedMsg = encodeURIComponent(msg);

  const isMobile = /iPhone|Android|iPad|iPod|Windows Phone/i.test(navigator.userAgent);

  if (isMobile) {
    link.href = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMsg}`;
  } else {
    link.href = `https://web.whatsapp.com/send?phone=${phone}&text=${encodedMsg}`;
  }