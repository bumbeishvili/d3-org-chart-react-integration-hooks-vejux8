import React, { useLayoutEffect, useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { OrgChart } from './orgChart.d3.js';

export const OrgChartComponent = (props, ref, buttons) => {
  const d3Container = useRef(null);
  let chart = null;

  function getDescription(string) {
    if (string.length > 80) return string.slice(0, 80).concat('...');
    else return string;
  }

  // We need to manipulate DOM
  useLayoutEffect(() => {
    if (props.data && d3Container.current) {
      let dataInitialSorted = [];
      //sort initial array

      props.data.forEach((d) => {
        if (dataInitialSorted.length > 0) return;
        if (d.children == null) {
          dataInitialSorted.push(d);
        }
      });

      props.data.forEach((d) => {
        if (d.children != null) {
          dataInitialSorted.push(d);
          return;
        }
      });

      props.data.forEach((d) => {
        if (!dataInitialSorted.includes(d)) {
          dataInitialSorted.push(d);
          return;
        }
      });

      let dataObject = {
        name: 'invisible',
        id: 'invisible',
        children: dataInitialSorted,
        attributes: {
          variant: '0',
        },
      };

      dataObject.children[1].children[0]._expanded = 'true';

      let data = d3
        .hierarchy(dataObject)
        .descendants()
        .map((d) => [d.parent?.data?.id, d.data])
        .map(([parentId, data]) => {
          const copy = { ...data };
          delete copy.children;
          return { ...copy, ...{ parentId } };
        });

      if (!chart) {
        chart = new OrgChart();
      }
      chart
        .container(d3Container.current)
        .data(data)
        .rootMargin(-300)
        .svgHeight(props.height || 800)
        .colorsObject(props.colorsObject)
        .theme(props.theme)
        .nodeContent(function (d) {
          return `<div style="font-size:14px; height:100%">
              <div class='nodeImageNameContainer' style="height:${
                d.data.attributes.dsc ? '50%' : '100%'
              }; width:${d.data.attributes.image ? '70%' : '100%'}; display:flex; flex-direction:row; justify-content:center; align-items:center">
                <div style="margin-left:${
                  d.data.attributes.image ? '20px' : '0px'
                }; display:flex; justify-content:center; align-items:center;"> ${d.data.attributes.image ? d.data.attributes.image : ''} </div>
                <div style="width:100%; display:flex; justify-content:center; align-items:center; font-size:16px; color:${
                  props.theme == 'dark' ? '#f6f6f6' : '#3d4752'
                };">${d.data.name ? d.data.name : ''}</div>
                </div>
                <div style="text-align:center; margin-left:25px; margin-right:25px; color:${
                  props.theme == 'dark' ? '#f6f6f67f' : '#8b9197'
                };">${d.data.attributes.dsc ? getDescription(d.data.attributes.dsc) : ''}</div>
              </div>`;
        })
        .render();

      d3.select('.zoom-out-button').on('click', chart.zoomOut());
    }
  }, [props.data, d3Container.current]);

  const url = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QMaAyMA1SdmlAAAAVRJREFUeNrt26FOw2AUhuFTElzrETNLMNPtJVRVVFbtlnYXKGQFqldANo3EoLDUITazzCxBTNBk53lv4M+XJ/ndKZ52L9uft9eP+Oeqbtgs8O7+cbWO36/PiIgmwd4ojsdIU9n2l7XzNBYZNj9Eos6oTRbcdMAZAwxYgAVYgAVYgAUYsAALsAALsAALMGABFmABFmABFmABBizAAqwFgZ/fv+slHl7q3aobNpn2proujIgo276ep/HgixZgARZgARZgAQYswAIswAIswAIswIAFWIAFWIAFWIABC7AAC7AAC7D+AHZdeN97XRf6ogVYgAVYgAVYgAELsAALsAALsAADFmABFmABFmABFmDAAizAAizAAqxrYNeF973XdaEvWoAFWIAFWIAFGLAAC7AAC7AACzBgARZgARZgARZgAQYswAIswAKsW0p1m1S2/WXtPI1Fhs0nxU1Jj2yxm2sAAAAASUVORK5CYII=`;
  const replaced = url.replace(/(\r\n|\n|\r)/gm);
  d3.select(d3Container.current)
    .style(
      'background',
      'radial-gradient(circle at center, #04192B 0, #000B0E 100%) url("https://raw.githubusercontent.com/bumbeishvili/coronavirus.davidb.dev/master/glow.png")'
    )
    .style(
      'background-image',
      `url(${replaced}), radial-gradient(circle at center,${
        props.theme == 'dark'
          ? props.colorsObject.darkBackground
          : props.colorsObject.lightBackground
      } 0, ${
        props.theme == 'dark'
          ? props.colorsObject.darkBackground
          : props.colorsObject.lightBackground
      } 100%)`
    );

  function zoomIn() {
    chart.zoomIn();
  }

  function zoomOut() {
    chart.zoomOut();
  }
  return (
    <div style={{ position: 'relative' }}>
      <div ref={d3Container} />
      <div
        style={{ position: 'absolute', top: '20px', right: '20px' }}
        className="action-buttons"
      >
        {' '}
        <button
          onClick={zoomIn}
          className="btn btn-action-button zoom-in-button"
        >
          <i>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.667 5.33366H6.66699V1.33366C6.66699 1.15685 6.59675 0.987279 6.47173 0.862254C6.34671 0.73723 6.17714 0.666992 6.00033 0.666992C5.82351 0.666992 5.65394 0.73723 5.52892 0.862254C5.4039 0.987279 5.33366 1.15685 5.33366 1.33366V5.33366H1.33366C1.15685 5.33366 0.987279 5.4039 0.862254 5.52892C0.73723 5.65394 0.666992 5.82351 0.666992 6.00033C0.666992 6.17714 0.73723 6.34671 0.862254 6.47173C0.987279 6.59675 1.15685 6.66699 1.33366 6.66699H5.33366V10.667C5.33366 10.8438 5.4039 11.0134 5.52892 11.1384C5.65394 11.2634 5.82351 11.3337 6.00033 11.3337C6.17714 11.3337 6.34671 11.2634 6.47173 11.1384C6.59675 11.0134 6.66699 10.8438 6.66699 10.667V6.66699H10.667C10.8438 6.66699 11.0134 6.59675 11.1384 6.47173C11.2634 6.34671 11.3337 6.17714 11.3337 6.00033C11.3337 5.82351 11.2634 5.65394 11.1384 5.52892C11.0134 5.4039 10.8438 5.33366 10.667 5.33366Z"
                fill="#B7BDC7"
              />
            </svg>
          </i>
        </button>
        <button
          onClick={zoomOut}
          className="btn btn-action-button zoom-out-button"
        >
          <i>
            <svg
              width="12"
              height="2"
              viewBox="0 0 12 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.667 0.333008H1.33366C1.15685 0.333008 0.987279 0.403246 0.862254 0.52827C0.73723 0.653294 0.666992 0.822864 0.666992 0.999675C0.666992 1.17649 0.73723 1.34605 0.862254 1.47108C0.987279 1.5961 1.15685 1.66634 1.33366 1.66634H10.667C10.8438 1.66634 11.0134 1.5961 11.1384 1.47108C11.2634 1.34605 11.3337 1.17649 11.3337 0.999675C11.3337 0.822864 11.2634 0.653294 11.1384 0.52827C11.0134 0.403246 10.8438 0.333008 10.667 0.333008Z"
                fill="#BFE8FF"
              />
            </svg>
          </i>
        </button>
      </div>
    </div>
  );
};
