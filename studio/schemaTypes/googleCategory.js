import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'googleCategory',
  title: 'Google Training Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
})
