import {defineType} from 'sanity'

export default defineType({
  title: 'Button',
  name: 'button',
  type: 'object',
  fields: [
    {
      name: 'buttonText',
      type: 'string',
      title: 'Button Text',
      validation: (Rule) => Rule.min(4).max(30).error('Too many characters'),
    },

    {
      title: 'Button Link',
      name: 'buttonLink',
      type: 'url',

      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ['https', 'http', 'mailto', 'tel'],
        }),
    },

    {
      title: 'Button Version',
      name: 'version',
      type: 'string',

      options: {
        list: [
          {title: 'Primary', value: 'primary', initialValue: true},
          {title: 'Secondary', value: 'secondary'},
        ],
        layout: 'radio',
      },
    },
  ],
  initialValue: {
    version: 'primary',
  },
})
