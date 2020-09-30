import {format} from 'date-fns'
import {FaFeatherAlt} from'react-icons/fa'

export default {
  name: 'comVerso',
  type: 'document',
  title: 'comVerso',
  icon: FaFeatherAlt,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Título",
      description: "Título da postagem",
    },
    {
      name: "body",
      type: "bodyPortableText",
      title: "Texto",
      description: "Corpo da postagem",
    },
    {
      name: "mainImage",
      type: "mainImage",
      title: "Imagem",
      description: "Capa da postagem",    
    },
    {
      name: "excerpt",
      type: "excerptPortableText",
      title: "Prévia do Texto",
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
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare ({title = 'Sem Título', publishedAt, slug = {}, media}) {
      const dateSegment = format(publishedAt, 'MM/YYYY')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Faltando data de publicação'
      }
    }
  }
}