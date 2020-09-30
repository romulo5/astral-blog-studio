import { FaCamera } from 'react-icons/fa'
export default {
  name: "comFoto",
  type: "document",
  title: "comFoto",
  icon: FaCamera,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Título",
      description: "Título da postagem",
    },
    {
      name: "images",
      title: "Fotos",
      type: "multipleImages",
     
    },
    {
      name: "excerpt",
      type: "excerptPortableText",
      title: "Resumo",
      description: "Resumo da postagem para preview na página principal, redes sociais e Pesquisa Google",
    },
    {
      name: "authors",
      title: "Autores",
      type: "array",
      of: [
        {
          type: "authorReference",
        },
      ],
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description:
      "Texto que será utilizado para criação da url do post",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "publishedAt",
      type: "datetime",
      title: "Publicado em",
      description: "Data da postagem, também pode ser utilizado para programar uma publicação",
    },
  ],
  orderings: [
    {
      name: "publishingDateAsc",
      title: "Data de publicação nova–>antiga",
      by: [
        {
          field: "publishedAt",
          direction: "asc",
        },
        {
          field: "title",
          direction: "asc",
        },
      ],
    },
    {
      name: "publishingDateDesc",
      title: "Data de publicação antiga–>nova",
      by: [
        {
          field: "publishedAt",
          direction: "desc",
        },
        {
          field: "title",
          direction: "asc",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      publishedAt: "publishedAt",
      slug: "slug",
      media: "images",
    },
    prepare({ title = "Sem Título", publishedAt, slug = {}, media }) {
      const dateSegment = format(publishedAt, "MM/YYYY");
      const path = `/${dateSegment}/${slug.current}/`;
      return {
        title,
        media,
        subtitle: publishedAt ? path : "Faltando data de publicação",
      };
    },
  },
};
