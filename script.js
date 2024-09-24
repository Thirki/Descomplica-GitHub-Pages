document.addEventListener("DOMContentLoaded", () => {
  fetch("https://picsum.photos/1920/600")
    .then((response) => {
      document.getElementById(
        "home"
      ).style.backgroundImage = `url(${response.url})`;
    })
    .catch((error) =>
      console.error("Erro ao carregar imagem do header:", error)
    );

  const portfolioImages = [
    document.getElementById("portfolio-img-1"),
    document.getElementById("portfolio-img-2"),
    document.getElementById("portfolio-img-3"),
  ];

  portfolioImages.forEach((img, index) => {
    fetch(`https://picsum.photos/350/250?random=${index + 1}`)
      .then((response) => {
        img.src = response.url;
      })
      .catch((error) =>
        console.error(
          `Erro ao carregar imagem do portfólio ${index + 1}:`,
          error
        )
      );
  });
});
