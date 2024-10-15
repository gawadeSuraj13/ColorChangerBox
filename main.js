

    function changeColor() {
            var colorSelect = document.getElementById("colorSelect");
            var selectedColor = colorSelect.value;
            var changeColorDiv = document.getElementById("changeColor");

            switch (selectedColor) {
                case "v":
                    changeColorDiv.style.backgroundColor = "violet";
                    break;
                case "i":
                    changeColorDiv.style.backgroundColor = "indigo";
                    break;
                case "g":
                    changeColorDiv.style.backgroundColor = "green";
                    break;
                case "y":
                    changeColorDiv.style.backgroundColor = "yellow";
                    break;
                case "b":
                    changeColorDiv.style.backgroundColor = "blue";
                    break;
                case "o":
                    changeColorDiv.style.backgroundColor = "orange";
                    break;
                case "r":
                    changeColorDiv.style.backgroundColor = "red";
                    break;
                default:
                    changeColorDiv.style.backgroundColor = "lightgray";
            }
        }
    