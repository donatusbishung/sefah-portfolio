const cards = document.querySelectorAll(".card");
const theButton = document.querySelector("#the-button");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    cards.forEach((cardSec) => {
      cardSec.classList.remove("selected");
    });
    card.classList.add("selected");
  });
});

// Publications data and rendering
const publications = [
  {
    title: "The spirit of the Zaria Rebels and the new African museum",
    image: "./Assets/IMG/zaria.jpg",
    description:
      "Across West Africa, a quiet but seismic shift is reshaping the region’s arts and museum culture.",
    url: "https://garlandmag.com/zaria-rebels/",
  },
  {
    title: "Style, Sweat, Signal:",
    image: "./Assets/IMG/indie.avif",
    description: "How Indie Sportswear and Smart Tech Are Rewiring the Game",
    url: "https://conemagazine.com/culture/style-sweat-signal-indie-sportswear-smart-tech/",
  },
  {
    title: "Land Beyond Empire:",
    image: "./Assets/IMG/landbeyond.png",
    description:
      "Black Speculative Fiction as a Blueprint for Food Sovereignty",
    url: "https://www.landfoodfreedom.com/post/land-beyond-empire",
  },
  {
    title: "How West Africa Is Reclaiming Its Artistic Legacy",
    image: "./Assets/IMG/Kunle-Adeyemi-artworks.webp",
    description:
      "The region's artists and arts institutions are charting their own course, pursuing the radical reintegration of...",
    url: "https://observer.com/2025/09/how-west-africa-is-reclaiming-its-artistic-legacy/",
  },
  {
    title: "Is the New Political Order Undoing Decades of Healthcare Progress?",
    image: "./Assets/IMG/Undoing_Healthcare_Reform.jpg",
    description: "",
    url: "https://nonprofitquarterly.org/is-the-new-political-order-undoing-decades-of-healthcare-progress/",
  },
  {
    title: "Political Ecology and Green Perspectives...",
    image: "./Assets/IMG/ecology.jpeg",
    description:
      "Can political ecology and green perspectives provide the solutions needed for ...",
    url: "https://niche-canada.org/2025/03/26/political-ecology-and-green-perspectives-navigating-the-far-right-terrain-in-saskatchewan/",
  },
  {
    title: "How Horror Highlights Healthcare...",
    image: "./Assets/IMG/John-q.avif",
    description:
      "Black communities today continue to battle deep-rooted healthcare disparities...",
    url: "https://www.dreadcentral.com/editorials/523026/how-horror-highlights-healthcare-inequality-in-black-communities/",
  },
  {
    title: "Equitable Innovation to Confront the Divide in ...",
    image: "./Assets/IMG/enzyme.jpg",
    description:
      "In our era of rapid healthcare transformation, technological innovations ...",
    url: "https://t.co/yFuKcdzn6d",
  },
  {
    title: "With the rise of Ozempic...",
    image: "./Assets/IMG/newImage.avif",
    description:
      "With the rise of Ozempic, is this the end of the plus-size modelling industry?",
    url: "https://www.theglobeandmail.com/business/commentary/article-with-the-rise-of-ozempic-is-this-the-end-of-the-plus-size-modelling/",
  },
  {
    title: "Agbokim Waterfall",
    image: "./Assets/IMG/obokum.jpg",
    description:
      "Seven streams tumble over a cliff, resulting in this dazzling waterfall in the Nigerian rainforest.",
    url: "https://www.atlasobscura.com/places/agbokim-waterfall",
  },
  {
    title: "Zuma Rock",
    image: "./Assets/IMG/zuma.jpg",
    description:
      "This igneous rock monolith towers above the surrounding landscape just outside the Nigerian capital.",
    url: "https://www.atlasobscura.com/places/zuma-rock",
  },
  {
    title:
      "The Crucial Importance Of Black Representation In Horror And Sci-fi",
    image: "./Assets/IMG/getout-scaled.webp",
    description: "",
    url: "https://www.dreadcentral.com/editorials/490879/the-crucial-importance-of-black-representation-in-horror-and-sci-fi/",
  },
  {
    title: "The Effect of Occupational Feminisation on Women’s Careers",
    image: "./Assets/IMG/AUGUSTINE-ILLUSTRATION-1024x552.jpg",
    description: "",
    url: "https://barrierstobridgescic.co.uk/the-effect-of-occupational-feminisation-on-womens-careersthe-inclusion-paradox/",
  },
  {
    title: "How Millennials Navigate Through Africa’s Culture",
    image: "./Assets/IMG/mellinial.webp",
    description: "",
    url: "https://aninjusticemag.com/how-millennials-navigate-through-africas-culture-a1e0020ed1f0",
  },
  {
    title: "Is Fungi in Fashion?",
    image: "./Assets/IMG/biofabric-made-with-reishi-jgreen-1068x599.png",
    description: "",
    url: "https://bluedotliving.com/is-fungi-in-fashion/",
  },
  {
    title: "From Overfishing to Sustainable Aquaculture in Lagos",
    image: "./Assets/IMG/laogs-seafood-festival-fish.jpg",
    description: "",
    url: "https://bluedotliving.com/from-overfishing-to-sustainable-aquaculture-in-lagos/",
  },
  {
    title: "TikTok Gave Me The Therapy I Needed But Couldn’t Afford",
    image:
      "./Assets/IMG/what-takes-to-be-woman-midnight-and-indigo-black-women-writers-1.webp",
    description: "",
    url: "https://bluedotliving.com/from-overfishing-to-sustainable-aquaculture-in-lagos/",
  },
];

function createPublicationCard(item) {
  return `
    <div class="col-12 col-lg-6">
      <div class="last publication-card d-flex flex-column flex-lg-row align-items-center gap-4">
        <img src="${item.image}" class="img-fluid publication-image" alt="${
    item.title
  }" width="160" height="160" />
        <div class="paragraphs d-flex flex-column text-start justify-content-center align-self-start">
          <h2>${item.title}</h2>
          ${item.description ? `<p>${item.description}</p>` : ""}
          <p><a href="${item.url}" target="_blank">Read More</a></p>
        </div>
      </div>
    </div>
  `;
}

function renderPublications(items, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = items.map(createPublicationCard).join("");
}

// Ensure DOM is ready before rendering
window.addEventListener("DOMContentLoaded", () => {
  // Render featured publications on index.html (first 8)
  renderPublications(publications.slice(0, 8), "publications-grid");
  // Render all publications on publications.html
  renderPublications(publications, "publications-grid-full");
});
