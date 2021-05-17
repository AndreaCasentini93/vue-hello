//-------------------------VUE JS-------------------------------
const app = new Vue ({
    el: "#root",
    data: {
        // TESTO
        message: "Welcome to Vue Js",
        textCSS: "text",
        // IMMAGINE
        image: "img/logo-vuejs.png",
        altImage: "Image Logo VueJs",
        imageCSS: "image",
        // BACKGROUND
        backgroundCSS: "background-vuejs"
    },
    methods: {
        button: function() {
            switch (this.image) {
                case "img/logo-vuejs.png":
                    // TESTO
                    this.message = "Welcome to React";
                    // IMMAGINE
                    this.image = "img/logo-react.png";
                    this.altImage = "Image Logo React";
                    // BACKGROUND
                    this.backgroundCSS = "background-react";
                    break
                case "img/logo-react.png":
                    // TESTO
                    this.message = "Welcome to Angular";
                    // IMMAGINE
                    this.image = "img/logo-angular.png";
                    this.altImage = "Image Logo Angular";
                    // BACKGROUND
                    this.backgroundCSS = "background-angular";
                    break
                default:
                    // TESTO
                    this.message = "Welcome to Vue Js";
                    // IMMAGINE
                    this.image = "img/logo-vuejs.png";
                    this.altImage = "Image Logo VueJs";
                    // BACKGROUND
                    this.backgroundCSS = "background-vuejs";
            }
        }
    }
});
//------------------------/VUE JS-------------------------------