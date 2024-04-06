import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'cta',
  title: 'CTA Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Section Description',
      type: 'string',
    }),

    defineField({
      name: 'bgImage',
      title: 'Background Image',
      type: 'image',
    }),

    defineField({
      name: 'button',
      title: 'Button',
      type: 'button',
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
})
