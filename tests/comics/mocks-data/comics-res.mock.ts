
import { ComicRes } from 'src/app/comics/interfaces/ComicRes';

export const comicRes: ComicRes = {
  code: 200,
  status: "Ok",
  copyright: "© 2023 MARVEL",
  attributionText: "Data provided by Marvel. © 2023 MARVEL",
  attributionHTML: "<a href=\"http://marvel.com\">Data provided by Marvel. © 2023 MARVEL</a>",
  etag: "1987951c168fa545d40f4a65d3de202919094e46",
  data: {
      offset: 0,
      limit: 20,
      total: 1,
      count: 1,
      results: [
          {
              id: 24571,
              digitalId: 0,
              title: "Avengers: The Initiative (2007) #14 (SPOTLIGHT VARIANT)",
              issueNumber: 14,
              variantDescription: "SPOTLIGHT VARIANT",
              description: "",
              modified: "-0001-11-30T00:00:00-0500",
              isbn: "",
              upc: "5960606084-01421",
              diamondCode: "",
              ean: "",
              issn: "",
              format: "Comic",
              pageCount: 32,
              textObjects: [],
              resourceURI: "http://gateway.marvel.com/v1/public/comics/24571",
              urls: [
                  {
                      type: "detail",
                      url: "http://marvel.com/comics/issue/24571/avengers_the_initiative_2007_14_spotlight_variant/spotlight_variant?utm_campaign=apiRef&utm_source=3aeb65e7ed7cda6df4abb746c29cdfd0"
                  }
              ],
              series: {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1945",
                  name: "Avengers: The Initiative (2007 - 2010)"
              },
              variants: [
                  {
                      resourceURI: "http://gateway.marvel.com/v1/public/comics/21366",
                      name: "Avengers: The Initiative (2007) #14"
                  }
              ],
              collections: [],
              collectedIssues: [],
              dates: [
                  {
                      type: "onsaleDate",
                      date: "2008-06-25T00:00:00-0400"
                  },
                  {
                      type: "focDate",
                      date: "2008-06-05T00:00:00-0400"
                  }
              ],
              prices: [
                  {
                      type: "printPrice",
                      price: 2.99
                  }
              ],
              thumbnail: {
                  path: "http://i.annihil.us/u/prod/marvel/i/mg/a/30/4e948fb5e9b52",
                  extension: "jpg"
              },
              images: [
                  {
                      path: "http://i.annihil.us/u/prod/marvel/i/mg/a/30/4e948fb5e9b52",
                      extension: "jpg"
                  }
              ],
              creators: {
                  available: 7,
                  collectionURI: "http://gateway.marvel.com/v1/public/comics/24571/creators",
                  items: [
                      {
                          resourceURI: "http://gateway.marvel.com/v1/public/creators/2133",
                          name: "Tom Brevoort",
                          role: "editor"
                      },
                      {
                          resourceURI: "http://gateway.marvel.com/v1/public/creators/694",
                          name: "Mark Brooks",
                          role: "penciller (cover)"
                      },
                      {
                          resourceURI: "http://gateway.marvel.com/v1/public/creators/5251",
                          name: "Vc Joe Caramagna",
                          role: "letterer"
                      },
                      {
                          resourceURI: "http://gateway.marvel.com/v1/public/creators/1133",
                          name: "Stefano Caselli",
                          role: "penciller"
                      },
                      {
                          resourceURI: "http://gateway.marvel.com/v1/public/creators/11765",
                          name: "Christos Gage",
                          role: "writer"
                      },
                      {
                          resourceURI: "http://gateway.marvel.com/v1/public/creators/12983",
                          name: "Dan Slott",
                          role: "writer"
                      },
                      {
                          resourceURI: "http://gateway.marvel.com/v1/public/creators/1134",
                          name: "Daniele Rudoni",
                          role: "colorist"
                      }
                  ],
                  returned: 7
              },
              characters: {
                  available: 7,
                  collectionURI: "http://gateway.marvel.com/v1/public/comics/24571/characters",
                  items: [
                      {
                          resourceURI: "http://gateway.marvel.com/v1/public/characters/1011334",
                          name: "3-D Man"
                      },
                      {
                          resourceURI: "http://gateway.marvel.com/v1/public/characters/1010802",
                          name: "Ant-Man (Eric O'Grady)"
                      },
                      {
                          resourceURI: "http://gateway.marvel.com/v1/public/characters/1011490",
                          name: "Hank Pym"
                      },
                      {
                          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009599",
                          name: "Skrulls"
                      },
                      {
                          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009639",
                          name: "Super-Skrull"
                      },
                      {
                          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009670",
                          name: "Tigra (Greer Nelson)"
                      },
                      {
                          resourceURI: "http://gateway.marvel.com/v1/public/characters/1010822",
                          name: "Trauma"
                      }
                  ],
                  returned: 7
              },
              stories: {
                  available: 2,
                  collectionURI: "http://gateway.marvel.com/v1/public/comics/24571/stories",
                  items: [
                      {
                          resourceURI: "http://gateway.marvel.com/v1/public/stories/54370",
                          name: "Avengers: The Initiative (2007) #14, Spotlight Variant",
                          type: "cover"
                      },
                      {
                          resourceURI: "http://gateway.marvel.com/v1/public/stories/54371",
                          name: "Avengers: The Initiative (2007) #14, Spotlight Variant - Int",
                          type: "interiorStory"
                      }
                  ],
                  returned: 2
              },
              events: {
                  available: 0,
                  collectionURI: "http://gateway.marvel.com/v1/public/comics/24571/events",
                  items: [],
                  returned: 0
              }
          }
      ]
  }
}
