export default {
    name: 'mainImage',
    type: 'image',
    title: 'Imagem',
    options: {
      hotspot: true
    },
    fields: [
      {
        name: 'caption',
        type: 'string',
        title: 'Legenda da Imagem',
        description: 'opcional',
        options: {
          isHighlighted: true
        }
      },
      {
        name: 'alt',
        type: 'string',
        title: 'Texto Alternativo para a Imagem',
        description: 'Texto para quando a imagem não estiver disponível, importante para SEO e accessibidade.',
        validation: Rule => Rule.error('você deve inserir um texto alternativo').required(),
        options: {
          isHighlighted: true
        }
      }
    ],
    preview: {
      select: {
        imageUrl: 'asset.url',
        title: 'caption'
      }
    }
  }
  