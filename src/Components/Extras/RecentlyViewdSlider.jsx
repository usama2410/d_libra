// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import "../Guest/LandingPG/Lp.css";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { development } from "../../endpoints";
// import { useSelector } from "react-redux";
// import CircularProgress from "@mui/material/CircularProgress";
// import Box from "@mui/material/Box";
// import { Typography } from "@material-ui/core";
// import {
//   librarybookmark,
//   setBookMarkPriority,
// } from "../../Redux/Actions/Client Side/librar.y.action";
// import { useNavigate, useLocation } from "react-router-dom";

// import Bookmark_blue from "../../assests/SVG_Files/New folder/Bookmark_blue.svg";
// import Bookmark_yellow from "../../assests/SVG_Files/New folder/Bookmark_yellow.svg";
// import Bookmark_red from "../../assests/SVG_Files/New folder/Bookmark_red.svg";
// import Bookmark_green from "../../assests/SVG_Files/New folder/Bookmark_green.svg";
// import Bookmark_grey from "../../assests/SVG_Files/New folder/Bookmark_gray.svg";
// import { addContentBookmark } from "../../Redux/Actions/bookmark.action";
// import Swal from "sweetalert2";

// const RecentlyViewdSlider = (props) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [priority, setPriority] = useState("reviewlist");
//   let [count, setCount] = useState(0);
//   const [singleContent, setSingleContent] = useState();
//   const theme = useSelector((state) => state.theme.state);
//   const role = useSelector((state) => state.auth.role);
//   const token = useSelector((state) => state.auth.token);
//   const [bookmark, setBookmark] = useState();

//   const [handleSetBookMark, setHandleSetBookMark] = useState(Bookmark_blue);

//   // console.log("handleSetBookMark", props);

//   const handleBookMark = async (Contentid) => {
//     const response = await dispatch(addContentBookmark(Contentid, role, token));
//     setBookmark(response);
//     !token &&
//       Swal.fire({
//         title: "Unauthenticated",
//         text: "Please login to bookmark",
//         iconColor: "red",
//         icon: "error", 
//       });
//   };

//   const hanldeLibraryBook = async () => {
//     const response = await dispatch(librarybookmark(role, token));
//     // console.log("librarybookmark response", response);
//     response.map((data) => {
//       data?.map((item) => {
//         setHandleSetBookMark(item.PriorityType);
//       });
//     });
//   };

//   useEffect(() => {
//   }, [bookmark, props]);

//   const settings = {
//     dots: false,
//     adaptiveHeight: true,
//     infinite: true,
//     speed: 500,
//     initialSlide: 0,
//     slidesToShow: 4,
//     autoplay: false,
//     slidesToScroll: 1,
//     centerMode: false,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 1120,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 860,
//         settings: {
//           slidesToShow: 2.14,
//           slidesToScroll: 1,
//           centerMode: true,
//         },
//       },
//       {
//         breakpoint: 700,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           centerMode: false,
//         },
//       },
//       {
//         breakpoint: 510,
//         settings: {
//           slidesToShow: 1.15,
//           slidesToScroll: 1,
//           centerMode: true,
//         },
//       },
//       {
//         breakpoint: 430,
//         settings: {
//           slidesToShow: 1.19,
//           slidesToScroll: 1,
//           centerMode: true,
//         },
//       },
//       {
//         breakpoint: 380,
//         settings: {
//           slidesToShow: 1.21,
//           slidesToScroll: 1,
//           centerMode: true,
//         },
//       },
//       {
//         breakpoint: 361,
//         settings: {
//           slidesToShow: 1.24,
//           slidesToScroll: 1,
//           centerMode: true,
//         },
//       },
//       {
//         breakpoint: 338,
//         settings: {
//           slidesToShow: 1.3,
//           slidesToScroll: 1,
//           centerMode: true,
//         },
//       },
//     ],
//   };

//   const handleDetails = (contentID, chapterID) => {
//     // console.log(chapterID, contentID);
//     navigate(
//       `/detailpage/id=${contentID}/role=${role}/categoryid=${chapterID}`,
//       {
//         state: {
//           path: location.pathname,
//         },
//       }
//     );
//   };

//   return (
//     <>
//       <div className="recentlyreviewd_slider_container">
//         {props?.history?.map((day) => (
//           <div className="content_root_container">
//             <div>
//               <span
//                 className={theme ? "chapternameclass" : "chapternameclasstwo"}
//               >
//                 {day?.chapterName}
//               </span>
//             </div>
//             <div>
//               {day?.items?.length > 0 ? (
//                 <Slider className="intro-slick" {...settings}>
//                   {day?.items?.map((e) => {
//                     return (
//                       <div className="intro-slides">
//                         <img
//                           src={`${development}/media/${e.images}`}
//                           className="landingpage_images"
//                           // style={{
//                           //   filter: `${e.disable ? "brightness(15%)" : ""}`,
//                           // }}
//                           alt=""
//                           onClick={() =>
//                             handleDetails(e.Content_id, e.chapterid)
//                           }
//                         />
//                         {e?.images ? (
//                           <div className="underimagetextcontainer">
//                             <Typography
//                               noWrap
//                               component="div"
//                               className="underimagecontent"
//                               style={{
//                                 color: theme ? "#363636" : "#FFFFFF",
//                               }}
//                             >
//                               <Typography
//                                 noWrap
//                                 component="div"
//                                 className="subcoursenametwo subcoursename"
//                               >
//                                 {e?.title}
//                               </Typography>
//                             </Typography>
//                             <div className="mycontenttagscontainer">
//                               <img
//                                 src={
//                                   e?.PriorityType === "highpriority"
//                                     ? Bookmark_blue
//                                     : e?.PriorityType === "reviewlist"
//                                     ? Bookmark_green
//                                     : e?.PriorityType === "futureread"
//                                     ? Bookmark_red
//                                     : e?.PriorityType === "Personal"
//                                     ? Bookmark_yellow
//                                     : e?.PriorityType === "Dayend"
//                                     ? Bookmark_grey
//                                     : e.PriorityType === "null"
//                                     ? Bookmark_grey
//                                     : null
//                                 }
//                                 alt=""
//                                 className="tagstwocontainer"
//                                 onClick={() => handleBookMark(e?.Content_id)}
//                               />
//                             </div>
//                           </div>
//                         ) : (
//                           ""
//                         )}
//                       </div>
//                     );
//                   })}
//                 </Slider>
//               ) : (
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "center",
//                     marginTop: "30px",
//                   }}
//                 >
//                   <CircularProgress color="inherit" size={60} />
//                 </Box>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default RecentlyViewdSlider;
