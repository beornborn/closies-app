//@flow

// use http://chir.ag/projects/name-that-color to name colors
export const palette = {
  // lochmara: '#0288d1',   // dark primary
  white: '#ffffff',      // primary
  // frenchPass: '#b3e5fc', // light primary
  cerulean: '#03a9f4',   // accent
  mineshaft: '#212121',  // primary text
  boulder: '#757575',    // secondary text
  silver: '#bdbdbd',     // divider
  facebook: '#3b5998'
}

// export const format = {
//   fullDate: 'h:mma, MM/DD/YYYY', // 8:45am, 02/25/2017,
//   dateTimeWithMonth: 'h:mma MMMM DD, YYYY', // 8:45am February 25, 2017,
//   date: 'MM/DD/YY', // 1/30/2017,
//   time: 'h:mma', // 8:45am
//   timeWithSeconds: 'h:mm:ssa', // 8:45:33am
// }

// https://mapstyle.withgoogle.com/
export const mapStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#f5f5f5'
      }
    ]
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161'
      }
    ]
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#f5f5f5'
      }
    ]
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bdbdbd'
      }
    ]
  },
  {
    featureType: 'administrative.neighborhood',
    elementType: 'geometry.fill',
    stylers: [
      {
        saturation: 35
      },
      {
        weight: 5.5
      }
    ]
  },
  {
    featureType: 'administrative.neighborhood',
    elementType: 'geometry.stroke',
    stylers: [
      {
        weight: 2.5
      }
    ]
  },
  {
    featureType: 'administrative.neighborhood',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#1f06ff'
      },
      {
        saturation: -85
      },
      {
        lightness: 35
      },
      {
        weight: 8
      }
    ]
  },
  {
    featureType: 'administrative.neighborhood',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        saturation: -70
      },
      {
        lightness: 35
      }
    ]
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'geometry.stroke',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#eeeeee'
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575'
      }
    ]
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e5e5e5'
      }
    ]
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#ff6300'
      },
      {
        saturation: -40
      },
      {
        lightness: 35
      },
      {
        visibility: 'on'
      },
      {
        weight: 5.5
      }
    ]
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#ffffff'
      }
    ]
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575'
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dadada'
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161'
      }
    ]
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e'
      }
    ]
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e5e5e5'
      }
    ]
  },
  {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [
      {
        color: '#eeeeee'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#c9c9c9'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e'
      }
    ]
  }
]
