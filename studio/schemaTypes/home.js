import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      title: 'Hero Section',
      name: 'homeHero',
      type: 'document',
      fields: [
        // ... other fields
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
        },
        defineField({
          name: 'bgImage',
          title: 'Background image',
          type: 'image',
        }),
      ],
    }),

    defineField({
      title: 'Google Cloud Training Section',
      name: 'googleSection',
      type: 'document',
      fields: [
        // ... other fields
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'list',
          title: 'List',
          type: 'array',
          of: [{type: 'string'}],
        },
        defineField({
          name: 'buttons',
          title: 'Buttons',
          type: 'array',
          of: [{type: 'button'}],
        }),
        defineField({
          name: 'image',
          title: 'Section Image',
          type: 'image',
        }),
      ],
    }),
    defineField({
      title: 'AWS Training Section',
      name: 'awsSection',
      type: 'document',
      fields: [
        // ... other fields
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'list',
          title: 'List',
          type: 'array',
          of: [{type: 'string'}],
        },
        defineField({
          name: 'buttons',
          title: 'Buttons',
          type: 'array',
          of: [{type: 'button'}],
        }),
        defineField({
          name: 'image',
          title: 'Section Image',
          type: 'image',
        }),
      ],
    }),

    defineField({
      title: 'CTA Section',
      name: 'cta',
      type: 'cta',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
})
