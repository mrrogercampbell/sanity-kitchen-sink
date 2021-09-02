export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61315d1322f9e245383ace4a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-cupznt13',
                  apiId: '95818a68-bdec-4a1b-8766-36c9c7aa6e9f'
                },
                {
                  buildHookId: '61315d145389a957e0cb7fa3',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-x5obpb2n',
                  apiId: '9f9340da-30c8-46e3-8843-207619b40760'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mrrogercampbell/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-x5obpb2n.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
