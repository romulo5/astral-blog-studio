import {FaCogs} from 'react-icons/fa'
export default {
    name: 'siteSettings',
    type: 'document',
    title: 'Configurações do Site',
    __experimental_actions: ['update', 'delete', 'publish'],
    icon: FaCogs,
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Título'
      },
      {
        name: 'description',
        type: 'text',
        title: 'Descrição   ',
        description: 'Blog do Astral'
      },
      {
        name: 'image',
        type: 'mainImage',
        title: 'Imagem Principal',
        description: 'Imagem Principal do Blog'
      },
      {
        name: 'keywords',
        type: 'array',
        title: 'Palavras-Chave',
        description: 'Palavras-chave que descrevem o blog',
        of: [{type: 'string'}],
        options: {
          layout: 'tags'
        }
      },
      {
        name: 'author',
        type: 'reference',
        description: 'Autor do Blog',
        title: 'Autor',
        to: [{type: 'author'}]
      }
    ]
  }