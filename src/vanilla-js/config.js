var config = {
    style: 'mapbox://styles/ashbo2/ckgpe8dyu0q3419qmjy2sjjhc',
    accessToken: 'pk.eyJ1IjoiYXNoYm8yIiwiYSI6ImNrZ2ZnYjJ2ODFrMDkyc21pMjc5YXh3eDMifQ.HL-KcetumT5j0SkWCZf3_A',
    showMarkers: false,
    theme: 'dark',
    alignment: 'right',
    title: 'From Vacant Lots to Permanently Affordable Housing',
    subtitle: 'Leveraging vacant properties in Chicago for affordable housing',
    byline: 'By Jennah Haque, Chenab Navalkha, and Asher Simon',
    footer: 'Source: City of Chicago Data Portal',
    chapters: [
      {
          id: 'slug-style-id-1',
          title: 'Chicago',
          // image: './path/to/image/source.png',
          description: 'Welcome to Chicago. The city is home to 8.865 million inhabitants. The city is also much more diverse compared to other major US cities. Over 30% of the population is Black. The median income is roughly $57,000 with large racial disparities. THe median income for a white household is around $71,000 compared to $30,000 and $41,000 for Black and Latinx households, respectively. Chicago is not immune homelessness either. Chicago has over 86,000 homeless folks, 78% of whom are Black.',
          location: {
              center: [-87.62584, 41.87269],
              zoom: 9,
              pitch: 0,
              bearing: 0
          },
          onChapterEnter: [
               {
                   layer: 'affordable-rental-housing-develo',
                   opacity: 0
               }
          ],
          onChapterExit: [
               {
                   layer: 'affordable-rental-housing-develo',
                   opacity: 0
               }
          ]
      },
        {
            id: 'slug-style-id',
            title: 'Affordable Rental Housing Developments',
            // image: './path/to/image/source.png',
            description: 'we would like to create an interactive data visualization that puts forth a policy case for how vacant city-owned parcels can be leveraged as permanently affordable housing and incorporation into a community land trust in another city, namely Chicago. We propose to focus on Chicago because of good data availability through the city’s open data portal. Our opening visualization will be a mapbox of affordable housing in Chicago.',
            location: {
                center: [-87.62584, 41.87269],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                 {
                     layer: 'affordable-rental-housing-develo',
                     opacity: 1
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'affordable-rental-housing-develo',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'other-identifier',
            title: 'City-Owned Land Inventory',
            // image: './path/to/image/source.png',
            description: 'This map will contrast the affordable rental housing developments. There is much more city owned land inventory than affordable housing, indicating some could be converted or put into a community land trust.',
            location: {
                center: [-87.62584, 41.87269],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                 {
                     layer: 'city-owned-land-inventory-no-z',
                     opacity: 1
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'city-owned-land-inventory-no-z',
                     opacity: 0
                 }
            ]
        },
    ]
};
