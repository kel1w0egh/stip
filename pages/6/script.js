$(document).ready(function() {
    $(".btn-6-animation").click(function() {
        $(".green-block").animate({
            left: "78%",
            opacity: "0.5",
            backgroundColor: "#ff0000"
        }, 2000);

        $(".green-block").animate({
            left: "0",
            width: "200px",
            height: "200px"
        }, 2000, function() {
            alert("Анимация выполнена");
        });
    });
});