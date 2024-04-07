import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [{type: 'socialLink'}],
    }),
    defineField({
      title: 'CTA Section',
      name: 'cta',
      type: 'cta',
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
})
