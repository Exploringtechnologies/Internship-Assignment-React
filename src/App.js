import React, { useState } from "react";
import { data } from "./data";
import {
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Card,
  CardContent,
  Button,
  TextField,
} from "@mui/material";

const LeftChild = ({ selectedId, onItemSelected }) => {
  const handleItemChange = (event) => {
    const selectedItemId = event.target.value;
    onItemSelected(selectedItemId);
  };

  return (
    <Box>
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "grey",
          fontWeight: "bold",
        }}
      >
        Items
      </Typography>
      <FormControl>
        <Select value={selectedId} onChange={handleItemChange}>
          {data.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.Name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

const RightChild = ({ selectedId, onAddItem, onRemoveItem }) => {
  const selectedItem = data.find((item) => item.id === selectedId);
  const defaultItem = data.find((item) => item.id === 3); // Default item with id 3

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleAddItem = () => {
    const newItem = {
      id: data.length + 1,
      Name: name,
      Price: parseInt(price),
    };

    data.push(newItem);
    setName("");
    setPrice("");
  };

  const handleRemoveItem = () => {
    const index = data.findIndex((item) => item.id === selectedId);
    if (index !== -1) {
      data.splice(index, 1);
      onRemoveItem();
    }
  };

  return (
    <Box>
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "grey",
          fontWeight: "bold",
        }}
      >
        Card
      </Typography>
      {selectedItem ? (
        <Card sx={{ margin: "1rem", position: "relative" }}>
          <CardContent>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "3em" }}
              variant="h6"
            >
              {selectedItem.Name}
            </Typography>
            <Typography
              sx={{ fontWeight: "500", fontSize: "1em" }}
              variant="body1"
            >
              Price: ₹{selectedItem.Price}
            </Typography>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "2em" }}
              variant="body2"
            >
              ID: {selectedItem.id}
            </Typography>
          </CardContent>
          <Button
            variant="outlined"
            onClick={handleRemoveItem}
            sx={{ position: "absolute", top: 5, right: 5 }}
          >
            Remove
          </Button>
        </Card>
      ) : defaultItem ? (
        <Card sx={{ margin: "1rem" }}>
          <CardContent>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "large" }}
              variant="h6"
            >
              {selectedItem.Name}
            </Typography>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "large" }}
              variant="body1"
            >
              Price: ₹{selectedItem.Price}
            </Typography>
          </CardContent>
          <Button
            variant="outlined"
            onClick={handleRemoveItem}
            sx={{ position: "absolute", top: 5, right: 5 }}
          >
            Remove
          </Button>
        </Card>
      ) : (
        <Typography variant="body1">No item selected</Typography>
      )}

      <Box sx={{ marginTop: "2rem" }}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "purple",
            fontWeight: "bold",
          }}
        >
          Add Item
        </Typography>
        <Box
          sx={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
        >
          <TextField
            label="Name"
            value={name}
            onChange={handleNameChange}
            sx={{ marginRight: "1rem" }}
          />
          <TextField
            label="Price"
            value={price}
            onChange={handlePriceChange}
            type="number"
          />
        </Box>
        <Button
          variant="contained"
          onClick={handleAddItem}
          disabled={!name || !price}
        >
          Add
        </Button>
      </Box>
    </Box>
  );
};

const App = () => {
  const [selectedId, setSelectedId] = useState(3);

  const handleItemSelected = (id) => {
    setSelectedId(id);
  };

  const handleRemoveItem = () => {
    setSelectedId(3); // Set default item after removal
  };

  return (
    <Box>
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "blue",
          fontWeight: "bold",
        }}
      >
        Internship Assignment
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          float: "right",
          height: "72vh",
        }}
      >
        <LeftChild
          selectedId={selectedId}
          onItemSelected={handleItemSelected}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <RightChild selectedId={selectedId} onRemoveItem={handleRemoveItem} />
      </Box>
      </Box>
    </Box>

  );
};

export default App;

// import React, { useState } from 'react';
// import { data } from './data';
// import { Box, Typography, FormControl, Select, MenuItem, Card, CardContent } from '@mui/material';

// const LeftChild = ({ selectedId, onItemSelected }) => {
//   const handleItemChange = (event) => {
//     const selectedItemId = event.target.value;
//     onItemSelected(selectedItemId);
//   };

//   return (
//     <Box sx={{ backgroundColor: '#f0f0f0', padding: '1rem', borderRadius: '0.5rem' }}>
//       <Typography variant="h2" gutterBottom sx={{ color: 'purple', fontWeight: 'bold', textAlign: 'center' }}>
//         Items
//       </Typography>
//       <FormControl>
//         <Select value={selectedId} onChange={handleItemChange} sx={{ width: '200px', marginTop: '1rem' }}>
//           {data.map((item) => (
//             <MenuItem key={item.id} value={item.id}>
//               {item.Name}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     </Box>
//   );
// };

// const RightChild = ({ selectedId }) => {
//   const selectedItem = data.find((item) => item.id === selectedId);
//   const defaultItem = data.find((item) => item.id === 3); // Default item with id 3

//   return (
//     <Box sx={{ backgroundColor: '#f0f0f0', padding: '1rem', borderRadius: '0.5rem', marginTop: '1rem' }}>
//       <Typography variant="h2" gutterBottom sx={{ color: 'purple', fontWeight: 'bold', textAlign: 'center' }}>
//         Card
//       </Typography>
//           <Card sx={{ transform: 'perspective(1000px)', backfaceVisibility: 'hidden' }}>
//             <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100px' }}>
//               {selectedItem ? (
//                 <Typography sx={{ fontWeight: 'bold', fontSize: '3em' }} variant="h6">
//                   {selectedItem.Name}
//                 </Typography>
//               ) : defaultItem ? (
//                 <Typography sx={{ fontWeight: 'bold', fontSize: 'large' }} variant="h6">
//                   {defaultItem.Name}
//                 </Typography>
//               ) : (
//                 <Typography variant="body1">No item selected</Typography>
//               )}
//               {selectedItem && (
//                 <React.Fragment>
//                   <Typography sx={{ fontWeight: '500', fontSize: '1em' }} variant="body1">
//                     Price: ₹{selectedItem.Price}
//                   </Typography>
//                   <Typography sx={{ fontWeight: 'bold', fontSize: '2em' }} variant="body2">
//                     ID: {selectedItem.id}
//                   </Typography>
//                 </React.Fragment>
//               )}
//             </CardContent>
//           </Card>
//     </Box>
//   );
// };

// const App = () => {
//   const [selectedId, setSelectedId] = useState(3);

//   const handleItemSelected = (id) => {
//     setSelectedId(id);
//   };

//   return (
//     <Box>
//       <Typography variant="h3" gutterBottom>
//         App
//       </Typography>
//       <Box display="flex">
//       <LeftChild selectedId={selectedId} onItemSelected={handleItemSelected} />
//         <RightChild selectedId={selectedId} />
//       </Box>
//     </Box>
//   );
// };

// export default App;
