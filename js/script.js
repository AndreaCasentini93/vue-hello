const app = new Vue ({
    el: "#root",
    data: {
        // TESTO
        message: "Welcome to Vue Js",
        textCSS: "text-vuejs",
        // IMMAGINE
        image: "img/logo-vuejs.png",
        altImage: "Image Logo VueJs",
        imageCSS: "image-vuejs",
        // BACKGROUND
        background: "background-vuejs"
    },
    methods: {
        button: function() {
            switch (this.image) {
                case "img/logo-vuejs.png":
                    // TESTO
                    this.message = "Welcome to React";
                    this.textCSS = "text-react";
                    // IMMAGINE
                    this.image = "img/logo-react.png";
                    this.altImage = "Image Logo React";
                    this.imageCSS = "image-react";
                    break
                case "img/logo-react.png":
                    // TESTO
                    this.message = "Welcome to Angular";
                    this.textCSS = "text-angular";
                    // IMMAGINE
                    this.image = "img/logo-angular.png";
                    this.altImage = "Image Logo Angular";
                    this.imageCSS = "image-angular";
                    break
                default:
                    // TESTO
                    this.message = "Welcome to Vue Js";
                    this.textCSS = "text-vuejs";
                    // IMMAGINE
                    this.image = "img/logo-vuejs.png";
                    this.altImage = "Image Logo VueJs";
                    this.imageCSS = "image-vuejs";
            }
        }
    }
});