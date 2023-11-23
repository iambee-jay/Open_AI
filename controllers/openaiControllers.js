import openai from "../config/openaiConfig.js";

export const generateMetadata = async (req, res) => {
  const { title } = req.body;

  const description = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: `Come up with a description for a YouTube video called ${title}"`,
      },
    ],
    max_tokens: 100,
  });

  // console.log(description.choices[0].message);

  const tags = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: `Come up with 10 keywords for a YouTube video called ${title}"`,
      },
    ],
    max_tokens: 100,
  });

  // console.log(tags.choices[0].message);

  res.status(200).json({
    description: description.choices[0].message,
    tags: tags.choices[0].message,
  });
};

export const generateImage = async (req, res) => {
  const image = await openai.images.generate({
    model: "dall-e-3",
    prompt: req.body.prompt,
    n: 1,
    size: "1024x1024",
  });

  // console.log(image.data[0].url);

  res.status(200).json({
    image: image.data[0].url,
  });
};
