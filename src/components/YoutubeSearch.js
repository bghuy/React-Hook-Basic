import "./YoutubeSearch.scss"
import moment from "moment";
import axios from "axios";
import { useState, useEffect } from "react";
const YoutubeSearch = () => {
    const [videos, setVideos] = useState([]);
    const [query, setQuery] = useState("")
    const handleSearchYoutube = async (e) => {
        e.preventDefault();
        const res = await axios({
            "method": "GET",
            "url": 'https://www.googleapis.com/youtube/v3/search',
            "params": {
                'part': 'snippet',
                'maxResults': '20',
                'key': 'AIzaSyABjKVkgN4bS-mTKgtBcpyiT0Z4ALeUyns',
                'type': 'video',
                'q': query
            }
        })

        if (res && res.data && res.data.items) {
            let raw = res.data.items;
            let result = [];
            if (raw && raw.length > 0) {
                result = raw.map((item) => {
                    let object = {};
                    object.id = item.id.videoId;
                    object.title = item.snippet.title;
                    object.publishedAt = item.snippet.publishedAt;
                    object.author = item.snippet.channelTitle;
                    object.description = item.snippet.description;
                    return object;
                })
            }
            setVideos(result);
        }
    }
    return (<div className="youtube-search-container" style={{ backgroundColor: "#282c34", color: "white", height: "fit-content", minHeight: "100vh" }}>
        <div className="yt-search-bar">
            <form onSubmit={(e) => { handleSearchYoutube(e) }}>
                <input
                    type="text"
                    placeholder="Search here"
                    value={query}
                    onChange={(e) => { setQuery(e.target.value) }}
                ></input>
                <button type="submit">Search</button>
            </form>

        </div>

        {videos && videos.length > 0 && videos.map((item) => {
            return (
                <>
                    <div className="yt-result" key={item.id}>
                        <div className="left">
                            <iframe
                                width="400"
                                height="225"
                                src={`https://www.youtube.com/embed/${item.id}`}
                                title={item.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen>
                            </iframe>
                        </div>
                        <div className="right">
                            <div className="video-title"> {item.title}</div>
                            <div className="video-publishedAt"> {moment(item.publishedAt).format("DD-MM-YYYY HH:mm:ss A")}</div>
                            <div className="author">{item.author}</div>
                            <div className="video-description">{item.description}</div>
                        </div>
                    </div>
                </>
            )
        })}


    </div>)
}

export default YoutubeSearch;


// {
//     "kind": "youtube#searchListResponse",
//     "etag": "r68SdccAUVEQ1gYA9iTPL3N4CwE",
//     "nextPageToken": "CAUQAA",
//     "regionCode": "VN",
//     "pageInfo": {
//       "totalResults": 80985,
//       "resultsPerPage": 5
//     },
//     "items": [
//       {
//         "kind": "youtube#searchResult",
//         "etag": "Vyo09FLi05DTKNIkKH-xUrn3zu0",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "A8C71-mSkAk"
//         },
//         "snippet": {
//           "publishedAt": "2023-12-17T13:00:12Z",
//           "channelId": "UCtpX-hGGBtH2ZvVX9_5RwFg",
//           "title": "WREN EVANS - LOI CHOI không điểm dừng | Full Album Experience (ft. itsnk)",
//           "description": "WREN EVANS - LOI CHOI không điểm dừng | Full Album Experience (ft. itsnk) 1. Phóng Đổ Tim Em | 0:00 2. Call Me | 2:14 3.",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/A8C71-mSkAk/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/A8C71-mSkAk/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/A8C71-mSkAk/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Wren Evans Official",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-12-17T13:00:12Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "kwrn6WBVtRCUC_TLp3hRKRgjpW0",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "aCqmdPaTVSg"
//         },
//         "snippet": {
//           "publishedAt": "2023-12-17T13:30:01Z",
//           "channelId": "UCtpX-hGGBtH2ZvVX9_5RwFg",
//           "title": "WREN EVANS - Tò Te Tí | LOI CHOI The First Album (ft. itsnk)",
//           "description": "WREN EVANS - Tò Te Tí | LOI CHOI The First Album (ft. itsnk) [TÒ TE TÍ] Authors: Wren Evans, KoQuet Composers: Wren Evans, ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/aCqmdPaTVSg/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/aCqmdPaTVSg/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/aCqmdPaTVSg/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Wren Evans Official",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-12-17T13:30:01Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "BE1oRLK6edQa3-0BOXTlHsd9dRo",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "jj0N_lzwXVE"
//         },
//         "snippet": {
//           "publishedAt": "2023-12-17T13:30:16Z",
//           "channelId": "UCtpX-hGGBtH2ZvVX9_5RwFg",
//           "title": "WREN EVANS - Lối Chơi (Interlude) | LOI CHOI The First Album (ft. itsnk)",
//           "description": "WREN EVANS - Lối Chơi (Interlude) | LOI CHOI The First Album (ft. itsnk) [Lối Chơi] (Interlude) Author: Wren Evans Composers: ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/jj0N_lzwXVE/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/jj0N_lzwXVE/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/jj0N_lzwXVE/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Wren Evans Official",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-12-17T13:30:16Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "YUYcnexs3ip8e1klTra2_7eoMHA",
//         "id": {
//           "kind": "youtube#channel",
//           "channelId": "UCtpX-hGGBtH2ZvVX9_5RwFg"
//         },
//         "snippet": {
//           "publishedAt": "2020-03-25T17:15:31Z",
//           "channelId": "UCtpX-hGGBtH2ZvVX9_5RwFg",
//           "title": "Wren Evans Official",
//           "description": "That guy you know you saw somewhere cus you recognized his voice. YouTube channel chính thức của Wren Evans. It's the ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://yt3.ggpht.com/91tYSvIKKPMqGizr35PFRhUcgGY8K86po-1YmVyd_iDI4S6RB_2ogiBboD9n0tlgKZZ8n_rEQw=s88-c-k-c0xffffffff-no-rj-mo"
//             },
//             "medium": {
//               "url": "https://yt3.ggpht.com/91tYSvIKKPMqGizr35PFRhUcgGY8K86po-1YmVyd_iDI4S6RB_2ogiBboD9n0tlgKZZ8n_rEQw=s240-c-k-c0xffffffff-no-rj-mo"
//             },
//             "high": {
//               "url": "https://yt3.ggpht.com/91tYSvIKKPMqGizr35PFRhUcgGY8K86po-1YmVyd_iDI4S6RB_2ogiBboD9n0tlgKZZ8n_rEQw=s800-c-k-c0xffffffff-no-rj-mo"
//             }
//           },
//           "channelTitle": "Wren Evans Official",
//           "liveBroadcastContent": "none",
//           "publishTime": "2020-03-25T17:15:31Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "9f1e1FK60KhwzqoluY3R8-MyC6s",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "B9otsRRe0BE"
//         },
//         "snippet": {
//           "publishedAt": "2023-12-17T13:30:04Z",
//           "channelId": "UCtpX-hGGBtH2ZvVX9_5RwFg",
//           "title": "WREN EVANS - Phóng Đổ Tim Em | LOI CHOI The First Album (ft. itsnk)",
//           "description": "WREN EVANS - Phóng Đổ Tim Em | LOI CHOI The First Album (ft. itsnk) [Phóng Đổ Tim Em] Author: Wren Evans Composers: ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/B9otsRRe0BE/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/B9otsRRe0BE/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/B9otsRRe0BE/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Wren Evans Official",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-12-17T13:30:04Z"
//         }
//       }
//     ]
//   }
