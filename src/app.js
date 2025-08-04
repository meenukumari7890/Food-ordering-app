//  <div id="parent">
//     <div id="child">
//         <h1> i am  h1 tag </h1>
        // <h2> i am  h1 tag </h2>
//    </div>
// </div>
{/* <div id="child2">
       <h1> i am  h1 tag </h1>
         <h2> i am  h1 tag </h2>
   </div> */}
// </div>



// const parent = React.createElement(
//      "div",  
//      {id: "parent"},// React element (Object) => html (browser understand )
//       React.createElement( "div",{id: "child"},[
//      React.createElement( "h1", {}, " Iam h1 tag"), 
//       React.createElement( "h2", {}, " Iam h2 tag"), 
// ]),
//       React.createElement( "div",{id: "child2"},[
//      React.createElement( "h1", {}, " Iam h1 tag"), 
//       React.createElement( "h2", {}, " Iam h2 tag"), 
// ]),
// );

// //jsx 
// const heading = React.createElement(
//     "h1", 
//     {id: "heading", xyz: "abc"}, 
//     "hello world form React"
// ); //object

// console.log(parent); //object



import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


// react element

// const heading = (
//       <h1 className="head" tabIndex="5">
//             React uSing JSX </h1>
// )

// const Title =  function() {
//       return(
//       <h1 className="head" tabIndex="5">
//             React uSEing JSX </h1>
// )
// }
// const Title1 = () =>(
//       <h1 className="head">
//             i am meenu 
//       </h1>
// )

//react functional component

// const HeadingComponent =  () => (
//       <div id="container" >
//             {Title()}
//             <Title1/>
//             <Title></Title>
//        <h1>  React Functional Component...................</h1>
//        </div>
// );
//     const root = ReactDOM.createRoot(document.getElementById("root"));

//     root.render(<HeadingComponent />);

// const Header = () => {
//       return(
//             <div className="header">
//                   <div className="img-container">
//                         <img className="logo"
//                         src="https://tse2.mm.bing.net/th/id/OIP.KVjCUFp2n-FA3dQsjiA62wHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"/>
//                   </div>
//                   <div className="nav-items">
//                      <ul>
//                         <li>Home</li>
//                          <li>About Us</li>
//                           <li>Contact Us</li>
//                            <li>Cart</li>
//                      </ul>
//                   </div>
//             </div>
//       );
// };

// const RestaurantCard = () =>{
//       return(
//       <div className="res-container">
//             <div className="res-card">
//                   <img className="res-logo"
//                    src="https://tse1.mm.bing.net/th/id/OIP.KA6JbM4R8pzPV0WfOyt9wwHaFj?rs=1&pid=ImgDetMain&o=7&rm=3"></img>
//                   <h3>Call Me Chow</h3>
//                   <h4>Asian fusion including Chinese, Japanese,</h4>
//                   <h4> ★4.0 rating</h4>
//                   <h4> 24 min </h4>
//             </div>
//              <div className="res-card">
//                   <img className="res-logo"
//                    src="https://lawrato.com/newsuploads/1514122189KFC-Fillet-box-meal.jpg"></img>
//                   <h3>KFC</h3>
//                   <h4>A crispy fillet burger made with a seasoned chicken breast.</h4>
//                   <h4>★4.5 rating</h4>
//                   <h4>30 min </h4>
//             </div>
//             <div className="res-card">
//                   <img className="res-logo"
//                    src="https://media-cdn.tripadvisor.com/media/photo-s/18/ad/9a/0e/img-20190727-wa0039-largejpg.jpg"></img>
//                   <h3>Kannur Food Point</h3>
//                   <h4>Regional specialties like South Indian, Kerala, Biryani, Arabic</h4>
//                   <h4>★3.5 rating</h4>
//                   <h4>35 min </h4>
            
//             </div>
//              <div className="res-card">
//                   <img className="res-logo"
//                    src="https://b.zmtcdn.com/data/pictures/chains/3/18585713/e82106649a486aee010a3667803b3b54_featured_v2.jpg"></img>
//                   <h3>Meghana Foods</h3>
//                   <h4> Offers a variety including Chinese, Continental, North Indian, </h4>
//                   <h4>★2.5 rating</h4>
//                   <h4>14 min </h4>
//             </div>
//              <div className="res-card">
//                   <img className="res-logo"
//                    src="https://media-cdn.tripadvisor.com/media/photo-s/18/ad/9a/0b/img-20190727-wa0036-largejpg.jpg"></img>
//                   <h3> Food Music Love</h3>
//                   <h4>budget-friendly Kerala dishes, mango shake popular</h4>
//                   <h4>★5.5 rating</h4>
//                   <h4>34 min </h4>
//             </div>
//             </div>
//       )
// }
const resObj = [
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
            "collectionId": "83633",
            "title": "North Indian",
            "description": "Indulge with the best of North Indian cuisines.",
            "imageId": "COLLECTIONS/IMAGES/MERCH/2025/1/24/820cca8e-ff06-4509-9855-2586384497f4_Northindian.png",
            "aspectRatio": "3.44",
            "cta": {
              "link": "swiggy://collectionV2?collection_id=83633&tags=layout_CCS_NorthIndian,north%20indian,layout_NorthIndian,ads_pc_north_indian",
              "type": "collectionv2"
            },
            "type": "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
            "count": "500 restaurants"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
            "sortConfigs": [
              {
                "key": "relevance",
                "title": "Relevance (Default)",
                "selected": true,
                "defaultSelection": true
              },
              {
                "key": "deliveryTimeAsc",
                "title": "Delivery Time"
              },
              {
                "key": "modelBasedRatingDesc",
                "title": "Rating"
              },
              {
                "key": "costForTwoAsc",
                "title": "Cost: Low to High"
              },
              {
                "key": "costForTwoDesc",
                "title": "Cost: High to Low"
              }
            ],
            "restaurantCount": 500,
            "facetList": [
              {
                "label": "10 Mins Delivery",
                "id": "isRestaurantBolt",
                "selection": "SELECT_TYPE_SINGLESELECT",
                "facetInfo": [
                  {
                    "label": "10 Mins Delivery",
                    "id": "isRestaurantBoltfacetquery0",
                    "analytics": {

                    },
                    "openFilter": true
                  }
                ],
                "viewType": "VIEW_TYPE_FLATTENED",
                "subLabel": "Filterby",
                "icon": "COLLECTIONS/IMAGES/MERCH/2024/12/18/4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.png",
                "selectedIcon": "COLLECTIONS/IMAGES/MERCH/2024/12/26/3072d307-2f8e-471c-862d-d426fb93c0bf_4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.png"
              },
              {
                "label": "Veg/Non-Veg",
                "id": "isVeg",
                "selection": "SELECT_TYPE_MULTISELECT",
                "facetInfo": [
                  {
                    "label": "Non Veg",
                    "id": "isVegfacetquery0",
                    "analytics": {

                    },
                    "openFilter": true
                  },
                  {
                    "label": "Pure Veg",
                    "id": "isVegfacetquery1",
                    "analytics": {

                    },
                    "openFilter": true
                  }
                ],
                "viewType": "VIEW_TYPE_HALF_CARD",
                "subLabel": "Filterby",
                "openFilter": true
              },
              {
                "label": "Ratings",
                "id": "rating",
                "selection": "SELECT_TYPE_MULTISELECT",
                "facetInfo": [
                  {
                    "label": "Ratings",
                    "id": "ratingfacetquery0",
                    "analytics": {

                    },
                    "openFilter": true
                  },
                  {
                    "label": "Ratings 4.0+",
                    "id": "ratingfacetquery1",
                    "analytics": {

                    },
                    "openFilter": true
                  },
                  {
                    "label": "Ratings 4.5+",
                    "id": "ratingfacetquery2",
                    "analytics": {

                    },
                    "openFilter": true
                  }
                ],
                "viewType": "VIEW_TYPE_HALF_CARD",
                "subLabel": "Filterby",
                "openFilter": true
              },
              {
                "label": "Delivery Time",
                "id": "deliveryTime",
                "selection": "SELECT_TYPE_MULTISELECT",
                "facetInfo": [
                  {
                    "label": "Less than 30 mins",
                    "id": "deliveryTimefacetquery0",
                    "analytics": {

                    },
                    "openFilter": true
                  },
                  {
                    "label": "Less than 45 mins",
                    "id": "deliveryTimefacetquery1",
                    "analytics": {

                    },
                    "openFilter": true
                  }
                ],
                "viewType": "VIEW_TYPE_HALF_CARD",
                "subLabel": "Filterby",
                "openFilter": true
              },
              {
                "label": "Cost For Two",
                "id": "costForTwo",
                "selection": "SELECT_TYPE_MULTISELECT",
                "facetInfo": [
                  {
                    "label": "Less than Rs. 300",
                    "id": "costForTwofacetquery0",
                    "analytics": {

                    },
                    "openFilter": true
                  },
                  {
                    "label": "Rs.300 - Rs.600",
                    "id": "costForTwofacetquery1",
                    "analytics": {

                    },
                    "openFilter": true
                  },
                  {
                    "label": "Greater than Rs. 600",
                    "id": "costForTwofacetquery2",
                    "analytics": {

                    },
                    "openFilter": true
                  }
                ],
                "viewType": "VIEW_TYPE_HALF_CARD",
                "subLabel": "Filterby",
                "openFilter": true
              }
            ],
            "widgetId": "inlineFacetFilter"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            "layout": {
              "rows": 1,
              "widgetPadding": {
                "left": 16,
                "right": 16
              },
              "widgetTheme": {
                "defaultMode": {
                  "backgroundColour": "#FFFFFF",
                  "theme": "THEME_TYPE_LIGHT"
                },
                "darkMode": {
                  "backgroundColour": "#1B3028",
                  "theme": "THEME_TYPE_DARK"
                }
              }
            },
            "id": "restaurantCountWidget",
            "gridElements": {
              "infoWithStyle": {
                "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
                "text": "500 Restaurants to explore",
                "headerStyling": {
                  "textSize": 15,
                  "textColor": "text_color_highest_emphasis",
                  "textFontName": "FONT_NAME_HEADER_H5",
                  "maxLines": 1
                }
              }
            }
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "934678",
              "name": "Charcoal Eats - Biryani & Beyond",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/6/3ede9157-b1af-4dd0-b56f-957c23cf57c3_934678.jpg",
              "locality": "Kothrud",
              "areaName": "Kothrud",
              "costForTwo": "₹500 for two",
              "cuisines": [
                "Biryani",
                "Kebabs",
                "North Indian",
                "Desserts"
              ],
              "avgRating": 4.1,
              "parentId": "5338",
              "avgRatingString": "4.1",
              "totalRatingsString": "651",
              "promoted": true,
              "adTrackingId": "cid=31011249~p=0~adgrpid=31011249#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=934678~plpr=COLLECTION~eid=f7b294fc-1fca-4984-9e4d-1c29251a5f9e~srvts=1752573576309~collid=83633",
              "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 6.6,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "6.6 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-07-15 23:59:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {

                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹149",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "31011249"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=934678&source=collection&query=North%20Indian",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "6239",
              "name": "Chaitanya Paranthas",
              "cloudinaryImageId": "xofljpukrkkbftsjospa",
              "locality": "F.C. Road",
              "areaName": "F.C. Road",
              "costForTwo": "₹250 for two",
              "cuisines": [
                "North Indian",
                "Punjabi",
                "Chinese",
                "Thalis",
                "Beverages",
                "Desserts"
              ],
              "avgRating": 4.3,
              "parentId": "236",
              "avgRatingString": "4.3",
              "totalRatingsString": "67K+",
              "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 1.5,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "1.5 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-07-15 23:45:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
                    "description": "bolt!"
                  },
                  {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
                          "description": "bolt!"
                        }
                      },
                      {
                        "attributes": {
                          "imageId": "v1695133679/badges/Pure_Veg111.png",
                          "description": "pureveg"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {

                  },
                  "textBased": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹109",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.0",
                  "ratingCount": "25"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=6239&source=collection&query=North%20Indian",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "1059830",
              "name": "Charcoal Eats - Biryani And Beyond",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/6/a4c52b26-d0df-4631-85b7-be49eeae2fe5_1059830.jpg",
              "locality": "Prabhat Road",
              "areaName": "Prabhat Road",
              "costForTwo": "₹500 for two",
              "cuisines": [
                "Biryani",
                "Kebabs",
                "North Indian"
              ],
              "avgRating": 4.4,
              "parentId": "591956",
              "avgRatingString": "4.4",
              "totalRatingsString": "110",
              "promoted": true,
              "adTrackingId": "cid=31011256~p=1~adgrpid=31011256#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1059830~plpr=COLLECTION~eid=b2a82979-4eb8-4e4e-a4b8-a91d86352b30~srvts=1752573576309~collid=83633",
              "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-07-15 23:59:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textExtendedBadges": {

                  },
                  "textBased": {

                  },
                  "imageBased": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹149",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "isNewlyOnboarded": true,
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "31011256"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=1059830&source=collection&query=North%20Indian",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "11887",
              "name": "Samudra Veg",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/6/d0807ef7-cc68-4cca-8032-c9eb44c9925e_11887.jpg",
              "locality": "Erandwane",
              "areaName": "Erandwane",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Chinese",
                "South Indian"
              ],
              "avgRating": 4.6,
              "parentId": "176775",
              "avgRatingString": "4.6",
              "totalRatingsString": "50K+",
              "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-07-15 23:59:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "v1695133679/badges/Pure_Veg111.png",
                          "description": "pureveg"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.2",
                  "ratingCount": "6.8K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=11887&source=collection&query=North%20Indian",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "348887",
              "name": "Big Bowl",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/deff0d02-ca1d-4ef9-9d62-b0cbeabf33d3_348887.JPG",
              "locality": "Kumar Pacific Mall",
              "areaName": "Swargate",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "North Indian",
                "Chinese",
                "Tibetan",
                "Desserts"
              ],
              "avgRating": 4.2,
              "parentId": "434792",
              "avgRatingString": "4.2",
              "totalRatingsString": "713",
              "promoted": true,
              "adTrackingId": "cid=30997010~p=3~adgrpid=30997010#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=348887~plpr=COLLECTION~eid=84533628-9496-4252-971e-8bbe1108183d~srvts=1752573576309~collid=83633",
              "sla": {
                "deliveryTime": 41,
                "lastMileTravel": 4.7,
                "serviceability": "SERVICEABLE",
                "slaString": "40-50 mins",
                "lastMileTravelString": "4.7 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-07-15 23:00:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {

                  },
                  "textExtendedBadges": {

                  },
                  "textBased": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹129",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "30997010"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=348887&source=collection&query=North%20Indian",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "386374",
              "name": "Global Punjab",
              "cloudinaryImageId": "rfin71p0netkxtauqya3",
              "locality": "Kothrud",
              "areaName": "Kothrud",
              "costForTwo": "₹600 for two",
              "cuisines": [
                "North Indian",
                "Mughlai",
                "Tandoor",
                "Chinese",
                "Beverages"
              ],
              "avgRating": 4.4,
              "parentId": "417",
              "avgRatingString": "4.4",
              "totalRatingsString": "6.3K+",
              "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-07-15 15:30:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {

                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹149",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.2",
                  "ratingCount": "1.4K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=386374&source=collection&query=North%20Indian",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "507944",
              "name": "Great Indian Khichdi by EatFit",
              "cloudinaryImageId": "6e44fd7f1e5cd9967edfe47c10247671",
              "locality": "Ghole Road",
              "areaName": "Shivajinagar",
              "costForTwo": "₹200 for two",
              "cuisines": [
                "Indian",
                "Home Food",
                "Healthy Food",
                "Snacks"
              ],
              "avgRating": 4.2,
              "veg": true,
              "parentId": "319582",
              "avgRatingString": "4.2",
              "totalRatingsString": "1.4K+",
              "promoted": true,
              "adTrackingId": "cid=31092012~p=4~adgrpid=31092012#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=507944~plpr=COLLECTION~eid=97a37b12-5f18-4ebc-b4ea-b1ee6bc2f5df~srvts=1752573576309~collid=83633",
              "sla": {
                "deliveryTime": 14,
                "lastMileTravel": 0.4,
                "serviceability": "SERVICEABLE",
                "slaString": "10-15 mins",
                "lastMileTravelString": "0.4 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-07-15 23:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "bolt/big%20RX%20listing%2018px.png",
                    "description": "bolt!"
                  },
                  {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "bolt!",
                          "imageId": "bolt/big%20RX%20listing%2018px.png"
                        }
                      },
                      {
                        "attributes": {
                          "imageId": "v1695133679/badges/Pure_Veg111.png",
                          "description": "pureveg"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {

                  },
                  "textBased": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "31092012"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=507944&source=collection&query=North%20Indian",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      }
    ]
console.log(resObj.slice(3));

// const RestaurantCard = ({res}) =>{
  
//   const imgId = res.card.card.info.cloudinaryImageId
//   const url= "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+imgId
//       // const { resData} = props;
//       console.log(res);
//       return(
//             <div className="res-card">
//                   <img className="res-logo"
//                    src={url}></img>
//                   <h3>{res.card.card.info.name}</h3>
//                   <h4>{res.card.card.info.cuisines.join(", ")}</h4>
//                  <h4>Rating is {res.card.card.info.avgRating}</h4> 
//                  <h4>Cost of Two : {res.card.card.info.costForTwo}</h4>   
//                    <h4>{res.card.card.info.sla.slaString}</h4>  


//             </div>
//       )
// }

// https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.52110&lng=73.85020&collection=83633&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null



const Body = () =>{
  const resData=resObj.slice(3);
      return(
            <div className="body">
                  <div className="search">
                        <input type="search" placeholder="Search restaurants......"></input>
                  </div>
                    <div className="res-container">
                        {resData.map((res) => <RestaurantCard key={res.card.card.info.id} res={res}/>)  }                      
                        {/* <RestaurantCard resName="KFC"
                         cuisine="crispy fillet burger  seasoned chicken breast" /> */}
                    </div>
            </div>
      )
}

const AppLayout = () =>{
      return(
            <div className="aap">
               <Header/>
               <Body/>
            </div>
      )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);