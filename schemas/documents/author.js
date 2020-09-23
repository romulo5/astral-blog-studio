export default {
    name: 'author',
    type: 'document',
    title: 'Autores',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Nome'
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        description: 'Some frontends will require a slug to be set to be able to show the person',
        options: {
          source: 'name',
          maxLength: 96
        }
      },
      {
        name: 'image',
        type: 'mainImage',
        title: 'Imagem'
      },
      {
        name: 'bio',
        type: 'bioPortableText',
        title: 'Bio'
      }
    ],
    preview: {
      select: {
        title: 'name',
        subtitle: 'slug.current',
        media: 'image'
      }
    }
  }