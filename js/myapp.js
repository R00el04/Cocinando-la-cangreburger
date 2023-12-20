new Vue({
  el: "#app",
  data: {
    ingredientes: [
      "Pan superior",
      "Pan inferior",
      "Mortadela",
      "Lechuga",
      "Tomate",
      "Salsa secreta",
    ],
    selectedIngredientes: [],
    paso_a_paso: [
      "Pan inferior",
      "Lechuga",
      "Tomate",
      "Mortadela",
      "Salsa secreta",
      "Pan superior",
    ],
    burgerCooked: false,
    burgerUncooked: false,
  },
  methods: {
    addIngrediente(ingrediente) {
      this.selectedIngredientes.push(ingrediente);
    },
    cookBurger() {
      // Comprobando si los ingredientes seleccionados coinciden en el orden correcto.
      if (
        JSON.stringify(this.selectedIngredientes) ===
        JSON.stringify(this.paso_a_paso)
      ) {
        this.burgerCooked = true;
        //recargar la pagina
        setTimeout(() => {
          location.reload();
        }, 3000);
      } else {
        this.burgerUncooked = true;
        setTimeout(() => {
          this.burgerUncooked = false;
          location.reload();
          alert("INTENTALO DE NUEVO :)");
        }, 2000);
      }
    },
  },
});
