$(document).ready(function() {
    var age = parseInt(prompt("How old are you?"));

    if (age >= 18) {
        $(".voter").show();
    } else if (age === 17) {
        $(".soon-to-be").show();
    } else {
        $(".under-age").show();
    }
})