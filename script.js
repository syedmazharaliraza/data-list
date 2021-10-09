const input = document.querySelector("input");
        let list = document.querySelectorAll(".suggestions li");
        let listArr = Array.from(list);
        const suggestions = document.querySelector(".suggestions");


        input.addEventListener("click", () => {
            suggestions.style.display = "block";
        });
        input.addEventListener("keyup", (e) => {
            let term = e.target.value.toLowerCase();
            listArr.forEach(function (list) {
                listText = list.textContent;
                if (listText.toLowerCase().indexOf(term) != -1) {
                    list.style.display = "block";
                }
                else {
                    list.style.display = "none";
                }
            });
        });
        listArr.forEach(function (list) {
            list.addEventListener("click", () => {
                input.value = list.textContent;
            });
        });
        document.addEventListener("click", (e) => {
            if (e.target !== input) {
                suggestions.style.display = "none";
            }
        });