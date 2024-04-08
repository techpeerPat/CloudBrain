import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'googleCloudTraining',
  title: 'Google Cloud Training',
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
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Foundations', value: 'foundations'},
          {title: 'Cloud Infrastructure', value: 'cloudInfrastructure'},
          {title: 'Google Cloud and Generative AI', value: 'googleCloudAndGenerativeAI'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'length',
      title: 'Length',
      type: 'string',
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
