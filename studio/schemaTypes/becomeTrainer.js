import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'becomeTrainer',
  title: 'Become a Cloud Trainer',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'pageContent',
      title: 'Page Content',
      type: 'blockContent',
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
