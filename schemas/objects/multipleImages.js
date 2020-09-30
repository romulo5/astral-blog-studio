export default {
  name: "multipleImages",
  type: "object",
  title: "Imagens",
  options: {
    hotspot: true,
  },
  fields: [
    {
      type: "array",
      name: "images",
      title: "Galeria",
      of: [{ type: "mainImage" }],
      description: "você pode arrastar e soltar multiplas imagens aqui",
      options: {
        layout: "grid",
      },
    },
  ],
  preview: {
    select: {
      imageUrl: "asset.url",
      title: "caption",
    },
  },
};
