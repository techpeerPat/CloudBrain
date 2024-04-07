import {defineType} from 'sanity'

export default defineType({
  title: 'Social Link',
  name: 'socialLink',
  type: 'object',
  fields: [
    {
      name: 'icon',
      type: 'image',
      title: 'Icon',
    },
    {
      name: 'label',
      type: 'string',
      title: 'Label',
    },
    {
      name: 'linkText',
      type: 'string',
      title: 'Link Text',
    },

    {
      title: 'Link',
      name: 'link',
      type: 'url',

      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ['https', 'http', 'mailto', 'tel'],
        }),
    },
  ],
})
