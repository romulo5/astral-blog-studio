import {format} from 'date-fns'

export default {
  name: 'comTexto',
  type: 'document',
  title: 'comTexto',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Título',
      description: 'Título deve ser objetivo'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the post',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Publicado em',
      description: 'This can be used to schedule post for publishing'
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Imagem Principal'
    },
    {
      name: 'excerpt',
      type: 'excerptPortableText',
      title: 'Resumo do Texto',
      description:
        'Resumo para as redes sociais ou Pesquisa Google'
    },
    {
      name: 'authors',
      title: 'Autores',
      type: 'array',
      of: [
        {
          type: 'authorReference'
        }
      ]
    },
        {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Texto'
    }
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Data de publicação nova–>antiga',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'publishingDateDesc',
      title: 'Data de publicação antiga–>nova',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    }
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