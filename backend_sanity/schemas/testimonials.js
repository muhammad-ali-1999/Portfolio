export default {
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Company Name',
      type: 'string',
    },
    {
      name: 'imageurl',
      title: 'Image URL',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'feedback',
      title: 'Feedback',
      type: 'string',
    },
  ],
}
