$(function(){

    $(".newBurger").on("submit", function(event){
        event.preventDefault();

        var newBurger = {
            burger_name: $("#ca").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("Created a new burger");
                location.reload();
            }
        )
    })

    $(".devoured").on("click", function(event){
        event.preventDefault();
        console.log("Chomp")

        var id = $(this).data("id");
        var newDevoured = true;

        var newDevouredState = {
            devoured: newDevoured
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                console.log("Changed devoured to " + newDevoured);
                location.reload();
            }
        )
    })

});