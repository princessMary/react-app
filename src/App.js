import React, { Component } from "react";
import { ResponsiveStream } from "@nivo/stream";
import { ResponsiveLine } from "@nivo/line";
import "./App.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

const MyResponsiveStream = ({ data }) => (
  <ResponsiveStream
    data={data}
    keys={["Miehet", "Naiset"]}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{
      type: "time",
      format: "%m/%d/%Y",
      precision: "month",
    }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: "bottom",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "aika",
      legendOffset: 36,
      tickValues: 5,
    }}
    xFormat="time:%m"
    axisLeft={{
      orient: "left",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "tartuntoja",
      legendOffset: -40,
    }}
    offsetType="diverging"
    colors={{ scheme: "nivo" }}
    fillOpacity={0.85}
    borderColor={{ theme: "background" }}
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "#2c998f",
        size: 4,
        padding: 2,
        stagger: true,
      },
      {
        id: "squares",
        type: "patternSquares",
        background: "inherit",
        color: "#e4c912",
        size: 6,
        padding: 2,
        stagger: true,
      },
    ]}
    dotSize={8}
    dotColor={{ from: "color" }}
    dotBorderWidth={2}
    dotBorderColor={{ from: "color", modifiers: [["darker", 0.7]] }}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        translateX: 100,
        itemWidth: 80,
        itemHeight: 20,
        itemTextColor: "#999999",
        symbolSize: 12,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000000",
            },
          },
        ],
      },
    ]}
  />
);

const MyResponsiveStream2 = ({ data }) => (
  <ResponsiveStream
    data={data}
    keys={["Miehet", "Naiset"]}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    indexBy="date"
    xScale={{
      type: "time",
      format: "%m/%d/%Y",
      precision: "month",
    }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    xFormat="time:%m"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: "bottom",
      tickSize: 5,
      // format: "%m",
      tickPadding: 5,
      tickRotation: 0,
      legend: "aika",
      legendOffset: 36,
      tickValues: 5,
    }}
    axisLeft={{
      orient: "left",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "miesten ja naisten tartuntojen suhde",
      legendOffset: -40,
    }}
    offsetType="expand"
    colors={{ scheme: "nivo" }}
    fillOpacity={0.85}
    borderColor={{ theme: "background" }}
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "#2c998f",
        size: 4,
        padding: 2,
        stagger: true,
      },
      {
        id: "squares",
        type: "patternSquares",
        background: "inherit",
        color: "#e4c912",
        size: 6,
        padding: 2,
        stagger: true,
      },
    ]}
    dotSize={8}
    dotColor={{ from: "color" }}
    dotBorderWidth={2}
    dotBorderColor={{ from: "color", modifiers: [["darker", 0.7]] }}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        translateX: 100,
        itemWidth: 80,
        itemHeight: 20,
        itemTextColor: "#999999",
        symbolSize: 12,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000000",
            },
          },
        ],
      },
    ]}
  />
);

// const API =
//   "https://plus.yle.fi/lambda_sheets/korona/2021-01-korona_sukupuoli/data.json";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: [],
    };
  }

  // componentDidMount() {
  //   fetch(API)
  //     .then((response) => response.json())
  //     .then((data) => this.setState({ values: data.data }));
  // }
  // componentDidMount() {
  //   const myHeaders = new Headers({
  //     "Content-Type": "application/json",
  //     Accept: "application/json",
  //   });

  //   fetch(API, {
  //     headers: myHeaders,
  //   })
  //     .then((response) => {
  //       console.log(response);
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       this.setState({ values: data.data });
  //     });
  // }

  render() {
    const { values } = this.state;
    // const filtered = values.filter(
    //   (item) => item.group === "Kaikki"
    // );
    return (
      <div style={styles}>
        <h1>Datavisualisointi</h1>
        <p>
          Tehtävänä oli käsitellä aineistoa liittyen tartuntatautirekisterissä
          julkaistuihin koronavirusdatoihin. Ylen
          <a href="https://yle.fi/uutiset/3-11300232"> grafiikkajutussa </a>
          käsiteltiin tilastoja visuaalisesti.
        </p>
        <p>
          Yksi kuvaajista näytti prosentuaalisesti tartunnan saaneet
          sukupuolittain, muttei kertonut jos suhde on vaihdellut ajan myötä.
          Halusin siis osoittaa että tartunnan saaneiden sukupuoli on muuttunut
          ajan myötä.
        </p>
        <p>
          Visualisoinnit on toteutettu käyttäen Nivo stream visualisointia
          <a href="https://github.com/princessMary/korona_sukupuoli">
            {" "}
            [koodi]
          </a>
          , mutta valitettavasti kuvaaja ei tukenut aikajanaa, joten
          visualisointi jäi vajaaksi siltä osin.{" "}
        </p>
        <p>
          Kuvaajat näyttävät koronatartunnat 28. huhtikuusta joulukuun loppuun
          asti vuonna 2020, ja kuvaajassa on eroteltu miehet ja naiset tartunnan
          saaneista vuorokauden tartuntamäärien mukaan. Tilastona on käytetty
          YLEn{" "}
          <a href="https://plus.yle.fi/lambda_sheets/korona/2021-01-korona_sukupuoli/data.json">
            {" "}
            lähdettä
          </a>
          .
        </p>
        <div style={{ height: "400px" }}>
          <MyResponsiveStream
            data={data}
            keys={["Miehet", "Naiset"]}
            indexBy="date"
          />
        </div>
        <p>
          Koska edellisestä kuvaajasta on vaikea erottaa miesten ja naisten
          suhdetta tai eroja tartunnan saaneiden välillä, seuraava kuvaaja
          esittää selkeämmin erot. Kuvaajassa on normalisoitu kaikki tartunnan
          saaneet, jolloin erotetaan tarkemmin mikä on kokonaisuudessaan ero
          miesten ja naisten tartunnansaaneiden välillä. Kuvaaja osoittaa, että
          erot vaihtelevat suuresti. Silmiinpistävää on, että miehet näkyvät
          ensin selkeänä piikkinä paikoin aikajanalla, jonka jälkeisinä päivinä
          miesten tartunnansaaneiden määrä romahtaa ja tarunnansaaneet ovat
          lähinnä naisia. Tämä tilastollinen havainto voi johtua myös data
          virheestä, sillä joiltain päiviltä puuttui data merkinnät:
          "date":"28.10.2020","group":"Naiset","cumulative":"7452","value":""
        </p>
        <div style={{ height: "400px" }}>
          <MyResponsiveStream2
            data={data}
            keys={["Miehet", "Naiset"]}
            indexBy="date"
          />
        </div>
        {/* <ul>
          {values.map((hit) => (
            <li>
              <p>
                {hit.group} {hit.date}: {hit.value}
              </p>
            </li>
          ))}
        </ul> */}
      </div>
    );
    // }
  }
}

const data = [
  {
    x: "4/28/20",
    Kaikki: "0",
    Miehet: "0",
    Naiset: "77",
  },
  {
    x: "4/29/20",
    Kaikki: "166",
    Miehet: "89",
    Naiset: "46",
  },
  {
    x: "4/30/20",
    Kaikki: "89",
    Miehet: "43",
    Naiset: "24",
  },
  {
    x: "5/1/20",
    Kaikki: "56",
    Miehet: "32",
    Naiset: "39",
  },
  {
    x: "5/2/20",
    Kaikki: "125",
    Miehet: "86",
    Naiset: "29",
  },
  {
    x: "5/3/20",
    Kaikki: "78",
    Miehet: "49",
    Naiset: "27",
  },
  {
    x: "5/4/20",
    Kaikki: "73",
    Miehet: "46",
    Naiset: "49",
  },
  {
    x: "5/5/20",
    Kaikki: "85",
    Miehet: "36",
    Naiset: "53",
  },
  {
    x: "5/6/20",
    Kaikki: "161",
    Miehet: "108",
    Naiset: "49",
  },
  {
    x: "5/7/20",
    Kaikki: "100",
    Miehet: "51",
    Naiset: "30",
  },
  {
    x: "5/8/20",
    Kaikki: "65",
    Miehet: "35",
    Naiset: "71",
  },
  {
    x: "5/9/20",
    Kaikki: "142",
    Miehet: "71",
    Naiset: "43",
  },
  {
    x: "5/10/20",
    Kaikki: "82",
    Miehet: "39",
    Naiset: "8",
  },
  {
    x: "5/11/20",
    Kaikki: "22",
    Miehet: "14",
    Naiset: "12",
  },
  {
    x: "5/12/20",
    Kaikki: "19",
    Miehet: "7",
    Naiset: "26",
  },
  {
    x: "5/13/20",
    Kaikki: "51",
    Miehet: "25",
    Naiset: "40",
  },
  {
    x: "5/14/20",
    Kaikki: "91",
    Miehet: "51",
    Naiset: "45",
  },
  {
    x: "5/15/20",
    Kaikki: "83",
    Miehet: "38",
    Naiset: "35",
  },
  {
    x: "5/16/20",
    Kaikki: "58",
    Miehet: "23",
    Naiset: "28",
  },
  {
    x: "5/17/20",
    Kaikki: "61",
    Miehet: "33",
    Naiset: "14",
  },
  {
    x: "5/18/20",
    Kaikki: "33",
    Miehet: "19",
    Naiset: "13",
  },
  {
    x: "5/19/20",
    Kaikki: "19",
    Miehet: "6",
    Naiset: "18",
  },
  {
    x: "5/20/20",
    Kaikki: "44",
    Miehet: "26",
    Naiset: "29",
  },
  {
    x: "5/21/20",
    Kaikki: "50",
    Miehet: "21",
    Naiset: "23",
  },
  {
    x: "5/22/20",
    Kaikki: "44",
    Miehet: "21",
    Naiset: "12",
  },
  {
    x: "5/23/20",
    Kaikki: "31",
    Miehet: "19",
    Naiset: "6",
  },
  {
    x: "5/24/20",
    Kaikki: "11",
    Miehet: "5",
    Naiset: "8",
  },
  {
    x: "5/25/20",
    Kaikki: "20",
    Miehet: "12",
    Naiset: "18",
  },
  {
    x: "5/26/20",
    Kaikki: "29",
    Miehet: "11",
    Naiset: "29",
  },
  {
    x: "5/27/20",
    Kaikki: "64",
    Miehet: "35",
    Naiset: "25",
  },
  {
    x: "5/28/20",
    Kaikki: "51",
    Miehet: "26",
    Naiset: "15",
  },
  {
    x: "5/29/20",
    Kaikki: "33",
    Miehet: "18",
    Naiset: "26",
  },
  {
    x: "5/30/20",
    Kaikki: "50",
    Miehet: "24",
    Naiset: "21",
  },
  {
    x: "5/31/20",
    Kaikki: "33",
    Miehet: "12",
    Naiset: "9",
  },
  {
    x: "6/1/20",
    Kaikki: "26",
    Miehet: "17",
    Naiset: "2",
  },
  {
    x: "6/2/20",
    Kaikki: "2",
    Miehet: "4",
    Naiset: "12",
  },
  {
    x: "6/3/20",
    Kaikki: "24",
    Miehet: "12",
    Naiset: "0",
  },
  {
    x: "6/5/20",
    Kaikki: "0",
    Miehet: "0",
    Naiset: "10",
  },
  {
    x: "6/6/20",
    Kaikki: "23",
    Miehet: "13",
    Naiset: "6",
  },
  {
    x: "6/7/20",
    Kaikki: "17",
    Miehet: "11",
    Naiset: "11",
  },
  {
    x: "6/8/20",
    Kaikki: "20",
    Miehet: "9",
    Naiset: "19",
  },
  {
    x: "6/9/20",
    Kaikki: "24",
    Miehet: "5",
    Naiset: "6",
  },
  {
    x: "6/10/20",
    Kaikki: "15",
    Miehet: "9",
    Naiset: "9",
  },
  {
    x: "6/11/20",
    Kaikki: "24",
    Miehet: "15",
    Naiset: "6",
  },
  {
    x: "6/12/20",
    Kaikki: "9",
    Miehet: "3",
    Naiset: "8",
  },
  {
    x: "6/13/20",
    Kaikki: "14",
    Miehet: "6",
    Naiset: "2",
  },
  {
    x: "6/14/20",
    Kaikki: "17",
    Miehet: "15",
    Naiset: "1",
  },
  {
    x: "6/15/20",
    Kaikki: "4",
    Miehet: "3",
    Naiset: "3",
  },
  {
    x: "6/16/20",
    Kaikki: "4",
    Miehet: "1",
    Naiset: "3",
  },
  {
    x: "6/17/20",
    Kaikki: "5",
    Miehet: "2",
    Naiset: "0",
  },
  {
    x: "6/19/20",
    Kaikki: "0",
    Miehet: "0",
    Naiset: "6",
  },
  {
    x: "6/20/20",
    Kaikki: "9",
    Miehet: "3",
    Naiset: "0",
  },
  {
    x: "6/21/20",
    Kaikki: "1",
    Miehet: "1",
    Naiset: "1",
  },
  {
    x: "6/22/20",
    Kaikki: "1",
    Miehet: "0",
    Naiset: "6",
  },
  {
    x: "6/23/20",
    Kaikki: "11",
    Miehet: "5",
    Naiset: "7",
  },
  {
    x: "6/24/20",
    Kaikki: "12",
    Miehet: "5",
    Naiset: "4",
  },
  {
    x: "6/25/20",
    Kaikki: "5",
    Miehet: "1",
    Naiset: "8",
  },
  {
    x: "6/26/20",
    Kaikki: "19",
    Miehet: "11",
    Naiset: "3",
  },
  {
    x: "6/27/20",
    Kaikki: "7",
    Miehet: "4",
    Naiset: "0",
  },
  {
    x: "6/29/20",
    Kaikki: "0",
    Miehet: "0",
    Naiset: "2",
  },
  {
    x: "6/30/20",
    Kaikki: "5",
    Miehet: "3",
    Naiset: "9",
  },
  {
    x: "7/1/20",
    Kaikki: "22",
    Miehet: "13",
    Naiset: "3",
  },
  {
    x: "7/2/20",
    Kaikki: "5",
    Miehet: "2",
    Naiset: "1",
  },
  {
    x: "7/3/20",
    Kaikki: "1",
    Miehet: "2",
    Naiset: "4",
  },
  {
    x: "7/4/20",
    Kaikki: "6",
    Miehet: "2",
    Naiset: "3",
  },
  {
    x: "7/5/20",
    Kaikki: "5",
    Miehet: "2",
    Naiset: "2",
  },
  {
    x: "7/6/20",
    Kaikki: "4",
    Miehet: "2",
    Naiset: "4",
  },
  {
    x: "7/7/20",
    Kaikki: "5",
    Miehet: "1",
    Naiset: "1",
  },
  {
    x: "7/8/20",
    Kaikki: "3",
    Miehet: "2",
    Naiset: "4",
  },
  {
    x: "7/9/20",
    Kaikki: "8",
    Miehet: "4",
    Naiset: "4",
  },
  {
    x: "7/10/20",
    Kaikki: "6",
    Miehet: "2",
    Naiset: "5",
  },
  {
    x: "7/11/20",
    Kaikki: "12",
    Miehet: "7",
    Naiset: "0",
  },
  {
    x: "7/12/20",
    Kaikki: "3",
    Miehet: "3",
    Naiset: "1",
  },
  {
    x: "7/13/20",
    Kaikki: "1",
    Miehet: "0",
    Naiset: "5",
  },
  {
    x: "7/14/20",
    Kaikki: "6",
    Miehet: "1",
    Naiset: "3",
  },
  {
    x: "7/15/20",
    Kaikki: "5",
    Miehet: "2",
    Naiset: "3",
  },
  {
    x: "7/16/20",
    Kaikki: "3",
    Miehet: "0",
    Naiset: "4",
  },
  {
    x: "7/17/20",
    Kaikki: "8",
    Miehet: "4",
    Naiset: "10",
  },
  {
    x: "7/18/20",
    Kaikki: "17",
    Miehet: "7",
    Naiset: "14",
  },
  {
    x: "7/19/20",
    Kaikki: "17",
    Miehet: "3",
    Naiset: "2",
  },
  {
    x: "7/20/20",
    Kaikki: "5",
    Miehet: "3",
    Naiset: "4",
  },
  {
    x: "7/21/20",
    Kaikki: "11",
    Miehet: "7",
    Naiset: "7",
  },
  {
    x: "7/22/20",
    Kaikki: "11",
    Miehet: "4",
    Naiset: "4",
  },
  {
    x: "7/23/20",
    Kaikki: "10",
    Miehet: "6",
    Naiset: "3",
  },
  {
    x: "7/24/20",
    Kaikki: "8",
    Miehet: "5",
    Naiset: "5",
  },
  {
    x: "7/25/20",
    Kaikki: "8",
    Miehet: "3",
    Naiset: "1",
  },
  {
    x: "7/26/20",
    Kaikki: "5",
    Miehet: "4",
    Naiset: "3",
  },
  {
    x: "7/27/20",
    Kaikki: "5",
    Miehet: "2",
    Naiset: "3",
  },
  {
    x: "7/28/20",
    Kaikki: "6",
    Miehet: "3",
    Naiset: "5",
  },
  {
    x: "7/29/20",
    Kaikki: "10",
    Miehet: "5",
    Naiset: "7",
  },
  {
    x: "7/30/20",
    Kaikki: "9",
    Miehet: "2",
    Naiset: "3",
  },
  {
    x: "7/31/20",
    Kaikki: "9",
    Miehet: "6",
    Naiset: "6",
  },
  {
    x: "8/1/20",
    Kaikki: "11",
    Miehet: "5",
    Naiset: "6",
  },
  {
    x: "8/2/20",
    Kaikki: "10",
    Miehet: "4",
    Naiset: "7",
  },
  {
    x: "8/3/20",
    Kaikki: "13",
    Miehet: "6",
    Naiset: "9",
  },
  {
    x: "8/4/20",
    Kaikki: "17",
    Miehet: "8",
    Naiset: "20",
  },
  {
    x: "8/5/20",
    Kaikki: "29",
    Miehet: "9",
    Naiset: "7",
  },
  {
    x: "8/6/20",
    Kaikki: "20",
    Miehet: "13",
    Naiset: "10",
  },
  {
    x: "8/7/20",
    Kaikki: "22",
    Miehet: "12",
    Naiset: "9",
  },
  {
    x: "8/8/20",
    Kaikki: "14",
    Miehet: "5",
    Naiset: "10",
  },
  {
    x: "8/9/20",
    Kaikki: "16",
    Miehet: "6",
    Naiset: "6",
  },
  {
    x: "8/10/20",
    Kaikki: "17",
    Miehet: "11",
    Naiset: "13",
  },
  {
    x: "8/11/20",
    Kaikki: "22",
    Miehet: "9",
    Naiset: "10",
  },
  {
    x: "8/12/20",
    Kaikki: "19",
    Miehet: "9",
    Naiset: "15",
  },
  {
    x: "8/13/20",
    Kaikki: "41",
    Miehet: "26",
    Naiset: "10",
  },
  {
    x: "8/14/20",
    Kaikki: "17",
    Miehet: "7",
    Naiset: "9",
  },
  {
    x: "8/15/20",
    Kaikki: "20",
    Miehet: "11",
    Naiset: "5",
  },
  {
    x: "8/16/20",
    Kaikki: "11",
    Miehet: "6",
    Naiset: "12",
  },
  {
    x: "8/17/20",
    Kaikki: "21",
    Miehet: "9",
    Naiset: "13",
  },
  {
    x: "8/18/20",
    Kaikki: "24",
    Miehet: "11",
    Naiset: "15",
  },
  {
    x: "8/19/20",
    Kaikki: "29",
    Miehet: "14",
    Naiset: "16",
  },
  {
    x: "8/20/20",
    Kaikki: "37",
    Miehet: "21",
    Naiset: "15",
  },
  {
    x: "8/21/20",
    Kaikki: "29",
    Miehet: "14",
    Naiset: "23",
  },
  {
    x: "8/22/20",
    Kaikki: "35",
    Miehet: "12",
    Naiset: "8",
  },
  {
    x: "8/23/20",
    Kaikki: "14",
    Miehet: "6",
    Naiset: "13",
  },
  {
    x: "8/24/20",
    Kaikki: "18",
    Miehet: "5",
    Naiset: "21",
  },
  {
    x: "8/25/20",
    Kaikki: "43",
    Miehet: "22",
    Naiset: "14",
  },
  {
    x: "8/26/20",
    Kaikki: "21",
    Miehet: "7",
    Naiset: "12",
  },
  {
    x: "8/27/20",
    Kaikki: "17",
    Miehet: "5",
    Naiset: "11",
  },
  {
    x: "8/28/20",
    Kaikki: "23",
    Miehet: "12",
    Naiset: "3",
  },
  {
    x: "8/29/20",
    Kaikki: "7",
    Miehet: "4",
    Naiset: "11",
  },
  {
    x: "8/30/20",
    Kaikki: "28",
    Miehet: "17",
    Naiset: "1",
  },
  {
    x: "8/31/20",
    Kaikki: "9",
    Miehet: "8",
    Naiset: "23",
  },
  {
    x: "9/1/20",
    Kaikki: "56",
    Miehet: "33",
    Naiset: "8",
  },
  {
    x: "9/2/20",
    Kaikki: "19",
    Miehet: "11",
    Naiset: "16",
  },
  {
    x: "9/3/20",
    Kaikki: "39",
    Miehet: "23",
    Naiset: "17",
  },
  {
    x: "9/4/20",
    Kaikki: "25",
    Miehet: "8",
    Naiset: "15",
  },
  {
    x: "9/5/20",
    Kaikki: "36",
    Miehet: "21",
    Naiset: "18",
  },
  {
    x: "9/6/20",
    Kaikki: "30",
    Miehet: "12",
    Naiset: "15",
  },
  {
    x: "9/7/20",
    Kaikki: "36",
    Miehet: "21",
    Naiset: "6",
  },
  {
    x: "9/8/20",
    Kaikki: "10",
    Miehet: "4",
    Naiset: "38",
  },
  {
    x: "9/9/20",
    Kaikki: "93",
    Miehet: "55",
    Naiset: "18",
  },
  {
    x: "9/10/20",
    Kaikki: "39",
    Miehet: "21",
    Naiset: "14",
  },
  {
    x: "9/11/20",
    Kaikki: "43",
    Miehet: "29",
    Naiset: "15",
  },
  {
    x: "9/12/20",
    Kaikki: "45",
    Miehet: "30",
    Naiset: "8",
  },
  {
    x: "9/13/20",
    Kaikki: "23",
    Miehet: "15",
    Naiset: "15",
  },
  {
    x: "9/14/20",
    Kaikki: "47",
    Miehet: "32",
    Naiset: "43",
  },
  {
    x: "9/15/20",
    Kaikki: "98",
    Miehet: "55",
    Naiset: "7",
  },
  {
    x: "9/16/20",
    Kaikki: "25",
    Miehet: "18",
    Naiset: "15",
  },
  {
    x: "9/17/20",
    Kaikki: "49",
    Miehet: "34",
    Naiset: "29",
  },
  {
    x: "9/18/20",
    Kaikki: "59",
    Miehet: "30",
    Naiset: "35",
  },
  {
    x: "9/19/20",
    Kaikki: "64",
    Miehet: "29",
    Naiset: "29",
  },
  {
    x: "9/20/20",
    Kaikki: "58",
    Miehet: "29",
    Naiset: "34",
  },
  {
    x: "9/21/20",
    Kaikki: "66",
    Miehet: "32",
    Naiset: "66",
  },
  {
    x: "9/22/20",
    Kaikki: "149",
    Miehet: "83",
    Naiset: "55",
  },
  {
    x: "9/23/20",
    Kaikki: "93",
    Miehet: "38",
    Naiset: "44",
  },
  {
    x: "9/24/20",
    Kaikki: "91",
    Miehet: "47",
    Naiset: "53",
  },
  {
    x: "9/25/20",
    Kaikki: "105",
    Miehet: "52",
    Naiset: "46",
  },
  {
    x: "9/26/20",
    Kaikki: "93",
    Miehet: "47",
    Naiset: "46",
  },
  {
    x: "9/27/20",
    Kaikki: "105",
    Miehet: "59",
    Naiset: "24",
  },
  {
    x: "9/28/20",
    Kaikki: "61",
    Miehet: "37",
    Naiset: "55",
  },
  {
    x: "9/29/20",
    Kaikki: "149",
    Miehet: "94",
    Naiset: "52",
  },
  {
    x: "9/30/20",
    Kaikki: "100",
    Miehet: "48",
    Naiset: "51",
  },
  {
    x: "10/1/20",
    Kaikki: "111",
    Miehet: "60",
    Naiset: "72",
  },
  {
    x: "10/2/20",
    Kaikki: "141",
    Miehet: "69",
    Naiset: "62",
  },
  {
    x: "10/3/20",
    Kaikki: "147",
    Miehet: "85",
    Naiset: "68",
  },
  {
    x: "10/4/20",
    Kaikki: "147",
    Miehet: "79",
    Naiset: "78",
  },
  {
    x: "10/5/20",
    Kaikki: "164",
    Miehet: "86",
    Naiset: "99",
  },
  {
    x: "10/6/20",
    Kaikki: "227",
    Miehet: "128",
    Naiset: "68",
  },
  {
    x: "10/7/20",
    Kaikki: "120",
    Miehet: "52",
    Naiset: "137",
  },
  {
    x: "10/8/20",
    Kaikki: "296",
    Miehet: "159",
    Naiset: "99",
  },
  {
    x: "10/9/20",
    Kaikki: "235",
    Miehet: "136",
    Naiset: "115",
  },
  {
    x: "10/10/20",
    Kaikki: "269",
    Miehet: "154",
    Naiset: "80",
  },
  {
    x: "10/11/20",
    Kaikki: "149",
    Miehet: "69",
    Naiset: "103",
  },
  {
    x: "10/12/20",
    Kaikki: "214",
    Miehet: "111",
    Naiset: "136",
  },
  {
    x: "10/13/20",
    Kaikki: "287",
    Miehet: "151",
    Naiset: "92",
  },
  {
    x: "10/14/20",
    Kaikki: "204",
    Miehet: "112",
    Naiset: "127",
  },
  {
    x: "10/15/20",
    Kaikki: "241",
    Miehet: "114",
    Naiset: "99",
  },
  {
    x: "10/16/20",
    Kaikki: "189",
    Miehet: "90",
    Naiset: "69",
  },
  {
    x: "10/17/20",
    Kaikki: "160",
    Miehet: "91",
    Naiset: "58",
  },
  {
    x: "10/18/20",
    Kaikki: "131",
    Miehet: "73",
    Naiset: "69",
  },
  {
    x: "10/19/20",
    Kaikki: "131",
    Miehet: "62",
    Naiset: "126",
  },
  {
    x: "10/20/20",
    Kaikki: "294",
    Miehet: "168",
    Naiset: "110",
  },
  {
    x: "10/21/20",
    Kaikki: "222",
    Miehet: "112",
    Naiset: "89",
  },
  {
    x: "10/22/20",
    Kaikki: "184",
    Miehet: "95",
    Naiset: "109",
  },
  {
    x: "10/23/20",
    Kaikki: "219",
    Miehet: "110",
    Naiset: "71",
  },
  {
    x: "10/24/20",
    Kaikki: "178",
    Miehet: "107",
    Naiset: "91",
  },
  {
    x: "10/25/20",
    Kaikki: "196",
    Miehet: "105",
    Naiset: "64",
  },
  {
    x: "10/26/20",
    Kaikki: "122",
    Miehet: "58",
    Naiset: "0",
  },
  {
    x: "10/28/20",
    Kaikki: "0",
    Miehet: "0",
    Naiset: "89",
  },
  {
    x: "10/29/20",
    Kaikki: "188",
    Miehet: "99",
    Naiset: "157",
  },
  {
    x: "10/30/20",
    Kaikki: "344",
    Miehet: "187",
    Naiset: "99",
  },
  {
    x: "10/31/20",
    Kaikki: "203",
    Miehet: "104",
    Naiset: "75",
  },
  {
    x: "11/1/20",
    Kaikki: "178",
    Miehet: "103",
    Naiset: "58",
  },
  {
    x: "11/2/20",
    Kaikki: "109",
    Miehet: "51",
    Naiset: "122",
  },
  {
    x: "11/3/20",
    Kaikki: "237",
    Miehet: "115",
    Naiset: "123",
  },
  {
    x: "11/4/20",
    Kaikki: "293",
    Miehet: "170",
    Naiset: "95",
  },
  {
    x: "11/5/20",
    Kaikki: "189",
    Miehet: "94",
    Naiset: "125",
  },
  {
    x: "11/6/20",
    Kaikki: "266",
    Miehet: "141",
    Naiset: "0",
  },
  {
    x: "11/8/20",
    Kaikki: "0",
    Miehet: "0",
    Naiset: "44",
  },
  {
    x: "11/9/20",
    Kaikki: "90",
    Miehet: "46",
    Naiset: "103",
  },
  {
    x: "11/10/20",
    Kaikki: "220",
    Miehet: "117",
    Naiset: "106",
  },
  {
    x: "11/11/20",
    Kaikki: "238",
    Miehet: "132",
    Naiset: "86",
  },
  {
    x: "11/12/20",
    Kaikki: "197",
    Miehet: "111",
    Naiset: "175",
  },
  {
    x: "11/13/20",
    Kaikki: "316",
    Miehet: "141",
    Naiset: "119",
  },
  {
    x: "11/14/20",
    Kaikki: "244",
    Miehet: "125",
    Naiset: "103",
  },
  {
    x: "11/15/20",
    Kaikki: "213",
    Miehet: "110",
    Naiset: "55",
  },
  {
    x: "11/16/20",
    Kaikki: "104",
    Miehet: "49",
    Naiset: "122",
  },
  {
    x: "11/17/20",
    Kaikki: "228",
    Miehet: "106",
    Naiset: "153",
  },
  {
    x: "11/18/20",
    Kaikki: "288",
    Miehet: "135",
    Naiset: "182",
  },
  {
    x: "11/19/20",
    Kaikki: "351",
    Miehet: "169",
    Naiset: "222",
  },
  {
    x: "11/20/20",
    Kaikki: "461",
    Miehet: "239",
    Naiset: "245",
  },
  {
    x: "11/21/20",
    Kaikki: "469",
    Miehet: "224",
    Naiset: "190",
  },
  {
    x: "11/22/20",
    Kaikki: "423",
    Miehet: "233",
    Naiset: "147",
  },
  {
    x: "11/23/20",
    Kaikki: "297",
    Miehet: "150",
    Naiset: "181",
  },
  {
    x: "11/24/20",
    Kaikki: "353",
    Miehet: "172",
    Naiset: "179",
  },
  {
    x: "11/25/20",
    Kaikki: "363",
    Miehet: "184",
    Naiset: "239",
  },
  {
    x: "11/26/20",
    Kaikki: "496",
    Miehet: "257",
    Naiset: "262",
  },
  {
    x: "11/27/20",
    Kaikki: "618",
    Miehet: "356",
    Naiset: "247",
  },
  {
    x: "11/28/20",
    Kaikki: "541",
    Miehet: "294",
    Naiset: "156",
  },
  {
    x: "11/29/20",
    Kaikki: "322",
    Miehet: "166",
    Naiset: "140",
  },
  {
    x: "11/30/20",
    Kaikki: "283",
    Miehet: "143",
    Naiset: "266",
  },
  {
    x: "12/1/20",
    Kaikki: "550",
    Miehet: "284",
    Naiset: "203",
  },
  {
    x: "12/2/20",
    Kaikki: "420",
    Miehet: "217",
    Naiset: "274",
  },
  {
    x: "12/3/20",
    Kaikki: "540",
    Miehet: "266",
    Naiset: "168",
  },
  {
    x: "12/4/20",
    Kaikki: "336",
    Miehet: "168",
    Naiset: "231",
  },
  {
    x: "12/5/20",
    Kaikki: "460",
    Miehet: "229",
    Naiset: "208",
  },
  {
    x: "12/6/20",
    Kaikki: "413",
    Miehet: "205",
    Naiset: "122",
  },
  {
    x: "12/7/20",
    Kaikki: "250",
    Miehet: "128",
    Naiset: "181",
  },
  {
    x: "12/8/20",
    Kaikki: "361",
    Miehet: "180",
    Naiset: "248",
  },
  {
    x: "12/9/20",
    Kaikki: "490",
    Miehet: "242",
    Naiset: "423",
  },
  {
    x: "12/10/20",
    Kaikki: "840",
    Miehet: "417",
    Naiset: "264",
  },
  {
    x: "12/11/20",
    Kaikki: "501",
    Miehet: "237",
    Naiset: "195",
  },
  {
    x: "12/12/20",
    Kaikki: "377",
    Miehet: "182",
    Naiset: "179",
  },
  {
    x: "12/13/20",
    Kaikki: "360",
    Miehet: "181",
    Naiset: "161",
  },
  {
    x: "12/14/20",
    Kaikki: "300",
    Miehet: "139",
    Naiset: "188",
  },
  {
    x: "12/15/20",
    Kaikki: "349",
    Miehet: "161",
    Naiset: "206",
  },
  {
    x: "12/16/20",
    Kaikki: "411",
    Miehet: "205",
    Naiset: "173",
  },
  {
    x: "12/17/20",
    Kaikki: "358",
    Miehet: "185",
    Naiset: "186",
  },
  {
    x: "12/18/20",
    Kaikki: "354",
    Miehet: "168",
    Naiset: "142",
  },
  {
    x: "12/19/20",
    Kaikki: "271",
    Miehet: "129",
    Naiset: "145",
  },
  {
    x: "12/20/20",
    Kaikki: "309",
    Miehet: "164",
    Naiset: "126",
  },
  {
    x: "12/21/20",
    Kaikki: "252",
    Miehet: "126",
    Naiset: "156",
  },
  {
    x: "12/22/20",
    Kaikki: "303",
    Miehet: "147",
    Naiset: "179",
  },
  {
    x: "12/23/20",
    Kaikki: "367",
    Miehet: "188",
    Naiset: "179",
  },
  {
    x: "12/24/20",
    Kaikki: "363",
    Miehet: "184",
    Naiset: "96",
  },
  {
    x: "12/25/20",
    Kaikki: "201",
    Miehet: "105",
    Naiset: "78",
  },
  {
    x: "12/26/20",
    Kaikki: "173",
    Miehet: "95",
    Naiset: "77",
  },
  {
    x: "12/27/20",
    Kaikki: "156",
    Miehet: "79",
    Naiset: "74",
  },
  {
    x: "12/28/20",
    Kaikki: "160",
    Miehet: "86",
    Naiset: "149",
  },
  {
    x: "12/29/20",
    Kaikki: "283",
    Miehet: "134",
    Naiset: "209",
  },
  {
    x: "12/30/20",
    Kaikki: "438",
    Miehet: "229",
    Naiset: "121",
  },
  {
    x: "12/31/20",
    Kaikki: "249",
    Miehet: "128",
    Naiset: "152",
  },
];

export default App;
