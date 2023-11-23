//forms for meta and image

const metaForm = document.querySelector(".meta-form");
const imageForm = document.querySelector(".image-form");

//output for meta and image

const description = document.querySelector(".description p");
const tags = document.querySelector(".tags p");
const thumbnail = document.querySelector(".thumbnail img");

//description and tags

metaForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const response = await fetch("http://localhost:4000/openai/meta", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: metaForm.title.value,
    }),
  });

  const data = await response.json();

  console.log(data);

  description.textContent = data.description.content;
  tags.textContent = data.tags.content;
});

//thumbnail /image

imageForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const response = await fetch("http://localhost:4000/openai/image", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: imageForm.prompt.value,
    }),
  });

  const data = await response.json();

  console.log(data);

  thumbnail.setAttribute("src", data.image);

  console.log("submitted");
});
