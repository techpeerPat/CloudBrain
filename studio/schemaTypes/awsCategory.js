import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'awsCategory',
  title: 'AWS Training Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
})
