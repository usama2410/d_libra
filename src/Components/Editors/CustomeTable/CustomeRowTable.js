// import React from "react";
// import { Box } from "@material-ui/core";
// import Collapse from "@material-ui/core/Collapse";
// import IconButton from "@material-ui/core/IconButton";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import { withStyles } from "@material-ui/styles";
// import PropTypes from "prop-types";
// import OpenWithIcon from "@mui/icons-material/OpenWith";
// import { SortableHandle } from "react-sortable-hoc";

// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// const styles = (theme) => ({
//   tableRow: {
//     "&.Mui-selected, &.Mui-selected:hover": {
//       backgroundColor: "purple",
//       "& > .MuiTableCell-root": {
//         color: "yellow",
//       },
//     },
//   },
// });

// const Row = (props) => {
//   const { row, classes, selectedID, setSelectedID, index, handleDragEnd } =
//     props;
//   const [open, setOpen] = React.useState(false);

//   console.log(row, classes, selectedID, index, handleDragEnd)

//   return (
//     <React.Fragment>
//       <DragDropContext onDragEnd={handleDragEnd}>
//         <Droppable droppableId="tableBody">
//           {(provider) => (
//             <TableRow
//               hover
//               key={row.id}
//               onClick={() => {
//                 setSelectedID(row.id);
//               }}
//               selected={selectedID === row.id}
//               className={classes.tableRow}
//               ref={provider.innerRef}
//               {...provider.droppableProps}
//             >
//               <Draggable
//                 key={row.CategoryName}
//                 draggableId={row.CategoryName}
//                 index={index}
//               >
//                 {(provider) => (
//                   <tr {...provider.draggableProps} ref={provider.innerRef}>
//                     <TableCell {...provider.dragHandleProps}>
//                       <IconButton size="small" onClick={() => setOpen(!open)}>
//                         {open ? (
//                           <KeyboardArrowUpIcon />
//                         ) : (
//                           <KeyboardArrowDownIcon />
//                         )}
//                       </IconButton>
//                       <IconButton size="small">
//                         <OpenWithIcon />
//                       </IconButton>
//                     </TableCell>

//                     <TableCell>{row.CategoryName}</TableCell>
//                     <TableCell>{row.CategoryName}</TableCell>
//                     <TableCell>{row.CategoryName}</TableCell>
//                     <TableCell>{row.created_at?.split("T")[0]}</TableCell>
//                     <TableCell>{row.updated_at?.split("T")[0]}</TableCell>
//                   </tr>
//                 )}
//               </Draggable>
//               {provider.placeholder}
//             </TableRow>
//           )}
//         </Droppable>
//       </DragDropContext>
//       <TableRow>
//         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//             <Box margin={1}>
//               <Table style={{ marginLeft: "70px" }}>
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>TITLE</TableCell>
//                     <TableCell>NAME</TableCell>
//                     <TableCell>UNIQUE IDENTIFIER</TableCell>
//                     <TableCell>IMAGE</TableCell>
//                     <TableCell>CREATE DATE</TableCell>
//                     <TableCell>UPDATE DATE</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {row?.SubCategory?.map((category) => (
//                     <TableRow key={category.id}>
//                       <TableCell>{category.CategoryName}</TableCell>
//                       <TableCell>{category.CategoryName}</TableCell>
//                       <TableCell>{category.unique_identifier}</TableCell>
//                       <TableCell>{category.image}</TableCell>
//                       <TableCell>
//                         {category.created_at?.split("T")[0]}
//                       </TableCell>
//                       <TableCell>
//                         {category.updated_at?.split("T")[0]}
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </Box>
//           </Collapse>
//         </TableCell>
//       </TableRow>
//     </React.Fragment>
//   );
// };

// Row.propTypes = {
//   row: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     CategoryName: PropTypes.string.isRequired,
//     CategoryName: PropTypes.string.isRequired,
//     CategoryName: PropTypes.number.isRequired,
//     image: PropTypes.number.isRequired,
//     created_at: PropTypes.number.isRequired,
//     updated_at: PropTypes.number.isRequired,
//     tags: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         CategoryName: PropTypes.string.isRequired,
//         CategoryName: PropTypes.string.isRequired,
//         unique_identifier: PropTypes.string.isRequired,
//         image: PropTypes.string.isRequired,
//         created_at: PropTypes.string.isRequired,
//         updated_at: PropTypes.string.isRequired,
//       })
//     ).isRequired,
//   }).isRequired,
// };

// export default withStyles(styles)(Row);
