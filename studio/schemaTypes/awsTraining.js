import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'awsTraining',
  title: 'AWS Training',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'awsCategory'}]}],
    }),

    defineField({
      name: 'length',
      title: 'Length',
      type: 'string',
    }),

    defineField({
      name: 'dificulty',
      title: 'Dificulty',
      type: 'string',
      options: {
        list: [
          {title: 'Fundamental', value: 'fundamental'},
          {title: 'Intermediate', value: 'intermediate'},
          {title: 'Advanced', value: 'advanced'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'pageContent',
      title: 'Page Content',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
})
