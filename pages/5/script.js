$(document).ready(function() {
    // Задание №1
    $(".test-p").dblclick(function(e) {
        $(`.${e.target.className}`).hide("slow", function() {
            alert("Анимация выполнена");
        });
    });
    // Задание №2
    $(".btn-exersice-2").click(function(e) {
        $(".test-block-blue").animate({
            // Сдвиг в центр
            left: "42%",
            top: "40%",
            // Уменьшение
            width: "75px",
            height: "75px",
            // Увеличение текста
            fontSize: "40px"
        }, 2000, function () {
            alert("Анимация выполнена");
        });
    });
    // Задание №3
    $(".exercise-3-check").click(function(e) {
        $("#hidden-input").toggleClass("hidden");
    });
});