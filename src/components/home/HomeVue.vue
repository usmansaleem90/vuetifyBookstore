<template>
  <v-carousel>
    <v-carousel-item
      src="https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop"
      cover
    >
      <div class="slide-content">
        <h1 class="slide-title">Slide 1</h1>
        <p class="slide-description">This is the first slide.</p>
        <button class="slide-button">Button 1</button>
      </div>
    </v-carousel-item>
    <v-carousel-item
      src="https://www.southernliving.com/thmb/WYR3KLFcxNQ1MuZNVTzDe0ku33A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gettyimages-183822187-1-709a5ded972a426a9e214eba1f81c8a4.jpg"
      cover
    >
      <div class="slide-content">
        <h1 class="slide-title">Slide 1</h1>
        <p class="slide-description">This is the first slide.</p>
        <button class="slide-button">Button 1</button>
      </div>
    </v-carousel-item>
    <v-carousel-item
      src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
      cover
    >
      <div class="slide-content">
        <h1 class="slide-title">Slide 1</h1>
        <p class="slide-description">This is the first slide.</p>
        <button class="slide-button">Button 1</button>
      </div>
    </v-carousel-item>

    <!-- Other carousel items -->

  </v-carousel>
</template>

<style>
.slide-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
}

.slide-title {
  font-size: 2rem;
  font-weight: bold;
  color: #3498db; /* Customize the color */
}

.slide-description {
  font-size: 1.2rem;
  margin-top: 10px;
  color: #555; /* Customize the color */
}

.slide-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #3498db; /* Customize the background color */
  color: #fff; /* Customize the text color */
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.slide-button:hover {
  background-color: #2980b9; /* Customize the hover background color */
}
</style>
