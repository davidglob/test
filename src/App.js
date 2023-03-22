import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Container, Grid } from "@mui/material";

import CustomCard from "./components/CustomCard/CustomCard";
import CustomAccordion from "./components/CustomAccordion/CustomAccordion";
import FormAddItem from "./components/FormAddItem/FormAddItem";
import FormEditItem from "./components/FormAddItem/FormEditItem";
import FormDeleteItem from "./components/FormAddItem/FormDeleteItem";

/*
● fetch get --> Displays a list of items retrieved from an API endpoint.
● fetch post --> Allows the user to add a new item to the list.
● fetch delete (id) --> Allows the user to delete an item from the list.
● fetch put (id) ---> Allows the user to edit an item from the list.
● localstorage windows/session storage/ ---> Persists the list of items to the local storage so that it persists even if the user
refreshes the page.
*/

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(function (response) {
        setData(response.data);
        localStorage.setItem("todos", JSON.stringify(response.data));
      })
      .catch(function (error) {
        alert(`Error: ${error}`);
      });
  }, []);

  return (
    <div>
      <header>
        <Container sx={{ p: 12 }}>
          <Box maxWidth="600px" mx="auto">
            <Grid container justifyContent="center">
              <Grid item xs={12} sm={10}>
                <CustomAccordion title="Add Item">
                  <FormAddItem />
                </CustomAccordion>
              </Grid>
            </Grid>
          </Box>
          <Box maxWidth="600px" mx="auto" sx={{ marginTop: 2 }}>
            <Grid container justifyContent="center">
              <Grid item xs={12} sm={10}>
                <CustomAccordion variant="warning" title="Edit Item">
                  <FormEditItem />
                </CustomAccordion>
              </Grid>
            </Grid>
          </Box>
          <Box maxWidth="600px" mx="auto" sx={{ marginTop: 2 }}>
            <Grid container justifyContent="center">
              <Grid item xs={12} sm={10}>
                <CustomAccordion variant="danger" title="Delete Item">
                  <FormDeleteItem />
                </CustomAccordion>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </header>
      <main>
        <Container sx={{ p: 12 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            alignItems="stretch"
          >
            {data &&
              data.map((item, index) => (
                <CustomCard
                  key={`card-${index}`}
                  index={index}
                  userId={item.userId}
                  title={item.title}
                  completed={item.completed}
                />
              ))}
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default App;
