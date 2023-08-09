import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import './style.css';
import { OrgChartComponent } from './OrgChart';
import * as d3 from 'd3';

const App = (props) => {
  const [data, setData] = useState(null);

  let colorsObject = {
    lightBackground: '#ffffff',
    lightNodeBackground: '#f2f4f5',
    lightZoomButtonBackground: '#1d2643',
    darkBackground: '#1C2228',
    darkNodeBackground: '#1F2730',
    darkZoomButtonBackground: ' #1d2643',
  };

  useEffect(() => {
    let dataInitial = [
      {
        name: 'unrelated node 1',
        id: 'un1',
        children: null,
        attributes: {
          variant: '0',
        },
      },
      {
        name: 'unrelated node 2',
        id: 'un2',
        children: null,
        attributes: {
          variant: '0',
          tooltip:
            'Lorem ipsum dolor sit amet consectetur. Rhoncus erat tristique ipsum vestibulum felis cum. Consequat in nisl nec lectus ac eu elementum vitae. Tortor velit etiam nullam dictumst at euismod in mauris. In cras urna neque lacus posuere aliquet in morbi tortor. Lobortis sem lorem amet eu et dignissim. Egestas nunc at condimentum accumsan lorem.',
          dsc: 'unrelated node description',
        },
      },
      {
        name: 'Gateway',
        id: 1,
        children: [
          {
            name: 'auth',
            id: 11,
            children: [
              {
                name: 'redis',
                id: 111,
                children: null,
                attributes: {
                  variant: '0',
                  dsc: 'Lorem ipsum dolor sit amet consectetur. Rhoncus erat tristique ipsum vestibulum felis cum. Consequat in nisl nec lectus ac eu elementum vitae. Tortor velit etiam nullam dictumst at euismod in mauris. In cras urna neque lacus posuere aliquet in morbi tortor. Lobortis sem lorem amet eu et dignissim. Egestas nunc at condimentum accumsan lorem.',
                },
              },
              {
                name: 'postgres',
                id: 112,
                children: null,
                attributes: {
                  variant: '0',
                },
              },
              {
                name: 'postgres',
                id: 113,
                children: null,
                attributes: {
                  variant: '0',
                },
              },
            ],
            attributes: {
              variant: '0',
              version: 'dev',
              tooltip: 'tooltip additional information.',
              dsc: 'Lorem ipsum dolor sit amet consectetur. Rhoncus erat tristique ipsum vestibulum felis cum. Consequat in nisl nec lectus ac eu elementum vitae. Tortor velit etiam nullam dictumst at euismod in mauris. In cras urna neque lacus posuere aliquet in morbi tortor. Lobortis sem lorem amet eu et dignissim. Egestas nunc at condimentum accumsan lorem.',
              image:
                '<svg width="36" height="36" viewBox="0 0 36 36" style="transform:scale(0.8)" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.5 3H7.5C6.30653 3 5.16193 3.47411 4.31802 4.31802C3.47411 5.16193 3 6.30653 3 7.5V9.255C2.99979 9.87441 3.12745 10.4872 3.375 11.055V11.145C3.58692 11.6265 3.88709 12.064 4.26 12.435L13.5 21.615V31.5C13.4995 31.7549 13.564 32.0058 13.6873 32.2288C13.8107 32.4519 13.9888 32.6399 14.205 32.775C14.4437 32.9229 14.7192 33.0009 15 33C15.2348 32.9986 15.466 32.9421 15.675 32.835L21.675 29.835C21.9224 29.7104 22.1304 29.5196 22.276 29.284C22.4216 29.0484 22.4992 28.777 22.5 28.5V21.615L31.68 12.435C32.0529 12.064 32.3531 11.6265 32.565 11.145V11.055C32.8332 10.4916 32.9814 9.87867 33 9.255V7.5C33 6.30653 32.5259 5.16193 31.682 4.31802C30.8381 3.47411 29.6935 3 28.5 3ZM19.935 19.935C19.796 20.0752 19.686 20.2414 19.6113 20.4241C19.5367 20.6069 19.4989 20.8026 19.5 21V27.57L16.5 29.07V21C16.5011 20.8026 16.4633 20.6069 16.3887 20.4241C16.314 20.2414 16.204 20.0752 16.065 19.935L8.115 12H27.885L19.935 19.935ZM30 9H6V7.5C6 7.10218 6.15804 6.72064 6.43934 6.43934C6.72064 6.15804 7.10218 6 7.5 6H28.5C28.8978 6 29.2794 6.15804 29.5607 6.43934C29.842 6.72064 30 7.10218 30 7.5V9Z" fill="#5E6370"/></svg>',
            },
          },

          {
            name: 'auth',
            id: 12,
            children: [
              {
                name: 'redis',
                id: 121,
                children: null,
                attributes: {
                  variant: '0',
                },
              },
              {
                name: 'postgres',
                id: 122,
                children: null,
                attributes: {
                  variant: '0',
                },
              },
              {
                name: 'postgres',
                id: 123,
                children: null,
                attributes: {
                  variant: '0',
                },
              },
            ],
            attributes: {
              variant: '0',
              version: 'dev',
              tooltip: 'tooltip additional information.',
              dsc: 'Lorem ipsum dolor sit amet consectetur. Rhoncus erat tristique ipsum vestibulum felis cum. Consequat in nisl nec lectus ac eu elementum vitae. Tortor velit etiam nullam dictumst at euismod in mauris. In cras urna neque lacus posuere aliquet in morbi tortor. Lobortis sem lorem amet eu et dignissim. Egestas nunc at condimentum accumsan lorem.',
            },
          },

          {
            name: 'auth',
            id: 13,
            children: [
              {
                name: 'redis',
                id: 131,
                children: null,
                attributes: {
                  variant: '0',
                },
              },
              {
                name: 'postgres',
                id: 132,
                children: null,
                attributes: {
                  variant: '0',
                },
              },
              {
                name: 'postgres',
                id: 133,
                children: null,
                attributes: {
                  variant: '0',
                },
              },
            ],
            attributes: {
              variant: '0',
              version: 'dev',
              tooltip: 'tooltip additional information.',
              image:
                '<svg width="36" height="36" viewBox="0 0 36 36" style="transform:scale(0.8)" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.5 3H7.5C6.30653 3 5.16193 3.47411 4.31802 4.31802C3.47411 5.16193 3 6.30653 3 7.5V9.255C2.99979 9.87441 3.12745 10.4872 3.375 11.055V11.145C3.58692 11.6265 3.88709 12.064 4.26 12.435L13.5 21.615V31.5C13.4995 31.7549 13.564 32.0058 13.6873 32.2288C13.8107 32.4519 13.9888 32.6399 14.205 32.775C14.4437 32.9229 14.7192 33.0009 15 33C15.2348 32.9986 15.466 32.9421 15.675 32.835L21.675 29.835C21.9224 29.7104 22.1304 29.5196 22.276 29.284C22.4216 29.0484 22.4992 28.777 22.5 28.5V21.615L31.68 12.435C32.0529 12.064 32.3531 11.6265 32.565 11.145V11.055C32.8332 10.4916 32.9814 9.87867 33 9.255V7.5C33 6.30653 32.5259 5.16193 31.682 4.31802C30.8381 3.47411 29.6935 3 28.5 3ZM19.935 19.935C19.796 20.0752 19.686 20.2414 19.6113 20.4241C19.5367 20.6069 19.4989 20.8026 19.5 21V27.57L16.5 29.07V21C16.5011 20.8026 16.4633 20.6069 16.3887 20.4241C16.314 20.2414 16.204 20.0752 16.065 19.935L8.115 12H27.885L19.935 19.935ZM30 9H6V7.5C6 7.10218 6.15804 6.72064 6.43934 6.43934C6.72064 6.15804 7.10218 6 7.5 6H28.5C28.8978 6 29.2794 6.15804 29.5607 6.43934C29.842 6.72064 30 7.10218 30 7.5V9Z" fill="#5E6370"/></svg>',
            },
          },
          {
            name: 'auth',
            id: 14,
            children: [
              {
                name: 'redis',
                id: 141,
                children: null,
                attributes: {
                  variant: '0',
                },
              },
              {
                name: 'postgres',
                id: 142,
                children: null,
                attributes: {
                  variant: '0',
                },
              },
              {
                name: 'postgres',
                id: 143,
                children: null,
                attributes: {
                  variant: '0',
                },
              },
            ],
            attributes: {
              variant: '0',
              version: 'dev',
              tooltip: 'tooltip additional information.',
              dsc: 'Lorem ipsum dolor sit amet consectetur. Rhoncus erat tristique ipsum vestibulum felis cum. Consequat in nisl nec lectus ac eu elementum vitae. Tortor velit etiam nullam dictumst at euismod in mauris. In cras urna neque lacus posuere aliquet in morbi tortor. Lobortis sem lorem amet eu et dignissim. Egestas nunc at condimentum accumsan lorem.',
            },
          },
          {
            name: 'auth',
            id: 15,
            children: [
              {
                name: 'redis',
                id: 151,
                children: null,
                attributes: {
                  variant: '0',
                },
              },
              {
                name: 'postgres',
                id: 152,
                children: null,
                attributes: {
                  variant: '0',
                },
              },
              {
                name: 'postgres',
                id: 153,
                children: null,
                attributes: {
                  variant: '0',
                },
              },
            ],
            attributes: {
              variant: '0',
              version: 'dev',
            },
          },
          {
            name: 'auth',
            id: 16,
            children: [
              {
                name: 'redis',
                id: 161,
                children: null,
                attributes: {
                  variant: '0',
                },
              },
              {
                name: 'postgres',
                id: 162,
                children: null,
                attributes: {
                  variant: '0',
                },
              },
              {
                name: 'postgres',
                id: 163,
                children: null,
                attributes: {
                  variant: '0',
                },
              },
            ],
            attributes: {
              variant: '0',
              version: 'dev',
            },
          },
          {
            name: 'auth',
            id: 17,
            children: [
              {
                name: 'redis',
                id: 171,
                children: null,
                attributes: {
                  variant: '0',
                },
              },
              {
                name: 'postgres',
                id: 172,
                children: null,
                attributes: {
                  variant: '0',
                },
              },
              {
                name: 'postgres',
                id: 173,
                children: null,
                attributes: {
                  variant: '0',
                },
              },
            ],
            attributes: {
              variant: '0',
              version: 'dev',
            },
          },
          {
            name: 'auth',
            id: 18,
            children: [
              {
                name: 'redis',
                id: 181,
                children: null,
                attributes: {
                  variant: '0',
                },
              },
              {
                name: 'postgres',
                id: 182,
                children: null,
                attributes: {
                  variant: '0',
                },
              },
              {
                name: 'postgres',
                id: 183,
                children: null,
                attributes: {
                  variant: '0',
                },
              },
            ],
            attributes: {
              variant: '0',
              version: 'dev',
            },
          },
          {
            name: 'auth',
            id: 19,
            children: [
              {
                name: 'redis',
                id: 191,
                children: null,
                attributes: {
                  variant: '0',
                },
              },
              {
                name: 'postgres',
                id: 192,
                children: null,
                attributes: {
                  variant: '0',
                },
              },
              {
                name: 'postgres',
                id: 193,
                children: null,
                attributes: {
                  variant: '0',
                },
              },
            ],
            attributes: {
              variant: '0',
              version: 'dev',
              tooltip: 'tooltip additional information.',
              dsc: 'Lorem ipsum dolor sit amet consectetur. Rhoncus erat tristique ipsum vestibulum felis cum. Consequat in nisl nec lectus ac eu elementum vitae. Tortor velit etiam nullam dictumst at euismod in mauris. In cras urna neque lacus posuere aliquet in morbi tortor. Lobortis sem lorem amet eu et dignissim. Egestas nunc at condimentum accumsan lorem.',
              image:
                '<svg width="36" height="36" viewBox="0 0 36 36" style="transform:scale(0.8)" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.5 3H7.5C6.30653 3 5.16193 3.47411 4.31802 4.31802C3.47411 5.16193 3 6.30653 3 7.5V9.255C2.99979 9.87441 3.12745 10.4872 3.375 11.055V11.145C3.58692 11.6265 3.88709 12.064 4.26 12.435L13.5 21.615V31.5C13.4995 31.7549 13.564 32.0058 13.6873 32.2288C13.8107 32.4519 13.9888 32.6399 14.205 32.775C14.4437 32.9229 14.7192 33.0009 15 33C15.2348 32.9986 15.466 32.9421 15.675 32.835L21.675 29.835C21.9224 29.7104 22.1304 29.5196 22.276 29.284C22.4216 29.0484 22.4992 28.777 22.5 28.5V21.615L31.68 12.435C32.0529 12.064 32.3531 11.6265 32.565 11.145V11.055C32.8332 10.4916 32.9814 9.87867 33 9.255V7.5C33 6.30653 32.5259 5.16193 31.682 4.31802C30.8381 3.47411 29.6935 3 28.5 3ZM19.935 19.935C19.796 20.0752 19.686 20.2414 19.6113 20.4241C19.5367 20.6069 19.4989 20.8026 19.5 21V27.57L16.5 29.07V21C16.5011 20.8026 16.4633 20.6069 16.3887 20.4241C16.314 20.2414 16.204 20.0752 16.065 19.935L8.115 12H27.885L19.935 19.935ZM30 9H6V7.5C6 7.10218 6.15804 6.72064 6.43934 6.43934C6.72064 6.15804 7.10218 6 7.5 6H28.5C28.8978 6 29.2794 6.15804 29.5607 6.43934C29.842 6.72064 30 7.10218 30 7.5V9Z" fill="#5E6370"/></svg>',
            },
          },
          {
            name: 'auth',
            id: '110a',
            children: [
              {
                name: 'redis',
                id: '110a1',
                children: null,
                attributes: {
                  variant: '0',
                },
              },
              {
                name: 'postgres',
                id: '110a2',
                children: null,
                attributes: {
                  variant: '0',
                },
              },
              {
                name: 'postgres',
                id: '110a3',
                children: null,
                attributes: {
                  variant: '0',
                },
              },
            ],
            attributes: {
              variant: '0',
              version: 'dev',
            },
          },
          {
            name: 'auth',
            id: '111a',
            children: [
              {
                name: 'redis',
                id: '111a1',
                children: null,
                attributes: {
                  variant: '0',
                },
              },
              {
                name: 'postgres',
                id: '111a2',
                children: null,
                attributes: {
                  variant: '0',
                },
              },
              {
                name: 'postgres',
                id: '111a3',
                children: null,
                attributes: {
                  variant: '0',
                },
              },
            ],
            attributes: {
              variant: '0',
              version: 'dev',
            },
          },
          {
            name: 'auth',
            id: '112a',
            children: [
              {
                name: 'redis',
                id: '112a1',
                children: null,
                attributes: {
                  variant: '0',
                },
              },
              {
                name: 'postgres',
                id: '112a2',
                children: null,
                attributes: {
                  variant: '0',
                },
              },
              {
                name: 'postgres',
                id: '112a3',
                children: null,
                attributes: {
                  variant: '0',
                },
              },
            ],
            attributes: {
              variant: '0',
              version: 'dev',
            },
          },
          {
            name: 'auth',
            id: '113a',
            children: [
              {
                name: 'redis',
                id: '113a1',
                children: null,
                attributes: {
                  variant: '0',
                },
              },
              {
                name: 'postgres',
                id: '113a2',
                children: null,
                attributes: {
                  variant: '0',
                },
              },
              {
                name: 'postgres',
                id: '113a3',
                children: null,
                attributes: {
                  variant: '0',
                },
              },
            ],
            attributes: {
              variant: '0',
              version: 'dev',
            },
          },
          {
            name: 'auth',
            id: '114a',
            children: [
              {
                name: 'redis',
                id: '114a1',
                children: null,
                attributes: {
                  variant: '0',
                },
              },
              {
                name: 'postgres',
                id: '114a2',
                children: null,
                attributes: {
                  variant: '0',
                },
              },
              {
                name: 'postgres',
                id: '114a3',
                children: null,
                attributes: {
                  variant: '0',
                },
              },
            ],
            attributes: {
              variant: '0',
              version: 'dev',
            },
          },
          {
            name: 'auth',
            id: '115a',
            children: [
              {
                name: 'redis',
                id: '115a1',
                children: null,
                attributes: {
                  variant: '0',
                },
              },
              {
                name: 'postgres',
                id: '115a2',
                children: null,
                attributes: {
                  variant: '0',
                },
              },
              {
                name: 'postgres',
                id: '115a3',
                children: null,
                attributes: {
                  variant: '0',
                },
              },
            ],
            attributes: {
              variant: '0',
              version: 'dev',
            },
          },
          {
            name: 'auth',
            id: '116a',
            children: [
              {
                name: 'redis',
                id: '116a1',
                children: null,
                attributes: {
                  variant: '0',
                },
              },
              {
                name: 'postgres',
                id: '116a2',
                children: null,
                attributes: {
                  variant: '0',
                },
              },
              {
                name: 'postgres',
                id: '116a3',
                children: null,
                attributes: {
                  variant: '0',
                },
              },
            ],
            attributes: {
              variant: '0',
              version: 'dev',
            },
          },
          {
            name: 'auth',
            id: '117a',
            children: [
              {
                name: 'redis',
                id: '117a1',
                children: null,
                attributes: {
                  variant: '0',
                },
              },
              {
                name: 'postgres',
                id: '117a2',
                children: null,
                attributes: {
                  variant: '0',
                },
              },
              {
                name: 'postgres',
                id: '117a3',
                children: null,
                attributes: {
                  variant: '0',
                },
              },
            ],
            attributes: {
              variant: '0',
              version: 'dev',
            },
          },
          {
            name: 'auth',
            id: '118a',
            children: [
              {
                name: 'redis',
                id: '118a1',
                children: null,
                attributes: {
                  variant: '0',
                },
              },
              {
                name: 'postgres',
                id: '118a2',
                children: null,
                attributes: {
                  variant: '0',
                },
              },
              {
                name: 'postgres',
                id: '118a3',
                children: null,
                attributes: {
                  variant: '0',
                },
              },
            ],
            attributes: {
              variant: '0',
              version: 'dev',
            },
          },
          {
            name: 'auth',
            id: '119a',
            children: [
              {
                name: 'redis',
                id: '119a1',
                children: null,
                attributes: {
                  variant: '0',
                },
              },
              {
                name: 'postgres',
                id: '119a2',
                children: null,
                attributes: {
                  variant: '0',
                },
              },
              {
                name: 'postgres',
                id: '119a3',
                children: null,
                attributes: {
                  variant: '0',
                },
              },
            ],
            attributes: {
              variant: '0',
              version: 'dev',
            },
          },
          {
            name: 'akkkkkkkkk',
            id: '120a',
            children: [
              {
                name: 'redis',
                id: '120a1',
                children: null,
                attributes: {
                  variant: '0',
                },
              },
              {
                name: 'postgres',
                id: '120a2',
                children: null,
                attributes: {
                  variant: '0',
                },
              },
              {
                name: 'postgres',
                id: '120a3',
                children: null,
                attributes: {
                  variant: '0',
                },
              },
            ],
            attributes: {
              variant: '0',
              version: 'dev',
              dsc: 'Lorem ipsum',
            },
          },
        ],
        attributes: {
          variant: '0',
          dsc: 'Lorem ipsum dolor sit amet consectetur. Rhoncus erat tristique ipsum vestibulum felis cum. Consequat in nisl nec lectus ac eu elementum vitae. Tortor velit etiam nullam dictumst at euismod in mauris. In cras urna neque lacus posuere aliquet in morbi tortor. Lobortis sem lorem amet eu et dignissim. Egestas nunc at condimentum accumsan lorem.',
        },
      },
    ];

    setData(dataInitial);
  }, [true]);

  let theme = 'dark';

  return (
    <div>
      <div style={{ width: 400, display: 'inline-block' }}>
        <OrgChartComponent
          data={data}
          colorsObject={colorsObject}
          theme={theme}
          height={300}
        />
      </div>

      <div style={{ width: 800, marginLeft: '20px', display: 'inline-block' }}>
        <OrgChartComponent
          data={data}
          colorsObject={colorsObject}
          theme={theme}
          height={300}
        />
      </div>
      <br />
      <br />
      <OrgChartComponent
        data={data}
        colorsObject={colorsObject}
        theme={theme}
      />
    </div>
  );
};

render(<App />, document.getElementById('root'));
