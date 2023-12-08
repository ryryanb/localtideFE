import React, { useState } from 'react';
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Typography,
  Box,
} from '@mui/material';

const ReviewSubmissionForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    rating: 0,
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prevData) => ({ ...prevData, images: files }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to submit the form data (formData) to your backend or perform other actions.
    console.log('Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">Submit a Review</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Description"
            multiline
            rows={4}
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Rating</InputLabel>
            <Select
              label="Rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
            >
              {[1, 2, 3, 4, 5].map((rating) => (
                <MenuItem key={rating} value={rating}>
                  {rating}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            multiple
          />
        </Grid>
        <Grid item xs={12}>
          <Box mt={2}>
            <Button variant="contained" color="primary" type="submit">
              Submit Review
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

export default ReviewSubmissionForm;
