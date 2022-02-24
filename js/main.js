let weather = {
        "apiKey": "13885d8f6bd76304068f20d9e895ee98",
        fetchWeather: function(city, state, country) {
            //    fetching the API based off the variables put into the "City" and the API Key
            fetch(
                    "https://api.openweathermap.org/data/2.5/weather?q="
                    // "City" is given to the URL via the searchBar 
                    +
                    city + "," + state + "," + country +
                    "&units=metric&appid=" +
                    this.apiKey
                )
                //from the fetch countryment, there is a response which we are wanting to change to JSON Object
                .then(response => response.json())
                // We are grabbing the JSON object and placing it into a variable called data which is then placed into the function below
                .then(data => this.displayWeather(data))
                // If there is an error, change the text in in the class "city" to what is written below.
                .catch(error => {
                    $(".feels").html("<strong>Babes, you gotta choose a real city... <br>Make sure theres no spaces at the end...</strong>").css({
                        textAlign: "center",
                        width: "100%"
                    });
                    $(".city").html("");
                    $(".search").effect("shake");
                    $(".search").css({
                        borderColor: "red"
                    });
                    $(".quote").html("");
                    $(".temp").html("");
                    $(".humidity").html("");
                    $(".wind").html("");
                    $(".mainWeather img").attr("src", "img/gw/eyeroll.png");
                    $(".temp").css({
                        display: "none"
                    });
                    $(".tempBox").css({
                        justifyContent: "center"
                    });

                });


        },
        displayWeather: function(data) {
            // Constants connecting to the JSON Object. 
            const { name } = data;
            const { country } = data.sys;
            const { id, icon } = data.weather[0];
            const { temp, feels_like } = data.main;
            const { speed } = data.wind;

            var body = $(".body");

            // Switch Statement that controls the inner html of the text area, The memoji, the background image, and the temperature displayed.
            switch (true) {
                case (icon == "13d" || icon == "13n"):
                    body.addClass("snow");
                    $(".city").html("It's snowing in <strong>" + name + ", " + country + "</strong>!! That could be great if it's Close to holidays... Any time before or after that, it's not welcome except on the Ski Slopes.");
                    if (temp <= 1 && temp >= -10) {
                        $(".mainWeather img").attr("src", "img/gw/cold.png");
                    } else if (temp < -10) {
                        $(".mainWeather img").attr("src", "img/gw/freezing.png");

                    }

                    break;
                case (temp < -10):
                    body.addClass("freezing");
                    $(".city").html("<strong>" + name + ", " + country + "</strong>... Are you okay? It's F****** COLD there...");
                    $(".mainWeather img").attr("src", "img/gw/freezing.png");

                    break;
                case (temp <= 1 && temp >= -10):
                    body.addClass("cold");
                    $(".city").html("It's getting nippy <strong>" + name + ", " + country + "</strong>. Be sure to heat things up... in the bedroom.");
                    $(".mainWeather img").attr("src", "img/gw/cold.png");

                    break;
                case (temp >= 33):
                    body.addClass("hot");
                    $(".city").html("It's getting nippy <strong>" + name + ", " + country + "</strong>. Be sure to heat things up... in the bedroom.");
                    $(".mainWeather img").attr("src", "img/gw/hot.png");

                    break;
                case (id == 781 || speed >= 20):
                    body.addClass("windy");
                    $(".city").html("Gurrrlll, hold on to your weave!!<strong>" + name + ", " + country + "</strong> is windy AF!");
                    $(".mainWeather img").attr("src", "img/gw/windy.png");

                    break;
                case (speed >= 15 && speed <= 20):
                    body.addClass("breezy");
                    $(".city").html("Honey, if it's summer with no clouds... This weather is PERFECT! But if it's winter or raining in <strong>" + name + ", " + country + "</strong>You're gonna have a bad time...");
                    $(".mainWeather img").attr("src", "img/gw/breezy.png");
                    break;
                case (id >= 200 && id <= 299):
                    body.addClass("thunder");
                    $(".city").html("B****!!! Do you think I can charge a phone with the lightning in <strong>" + name + ", " + country + "</strong>? Asking for a friend...");
                    $(".mainWeather img").attr("src", "img/gw/thunder.png");

                    break;
                case (id >= 300 && id <= 399):
                    body.addClass("rain");
                    $(".city").html("Rain Rain, go away... This B**** wants to go out to play! Who's having cocktails in <strong>" + name + ", " + country + "</strong>?");
                    $(".mainWeather img").attr("src", "img/gw/rain1.png");

                    break;
                case (id >= 500 && id <= 599):
                    body.addClass("rain");
                    $(".city").html("<strong>" + name + ", " + country + "</strong> done flooded her basement!!! It's wet and wild there!");
                    $(".mainWeather img").attr("src", "img/gw/rain2.png");

                    break;
                case (id >= 700 && id <= 780):
                    body.addClass("fog");
                    $(".city").html("HEEELLLPPPP!!! I can't see S*** in <strong>" + name + ", " + country + "</strong>!! Where the hell am I!?");
                    $(".mainWeather img").attr("src", "img/gw/fog.png");

                    break;
                case (id == 800 && icon == "01d"):
                    body.addClass("sunny");
                    $(".city").html("B****!!! <strong>" + name + ", " + country + "</strong> is STUNNING!! Go out! Have Fun! Get a cheeky lunch cocktail! Live your best life.");
                    $(".mainWeather img").attr("src", "img/gw/sunny.png");

                    break;
                case (id == 800 && icon == "01n"):
                    body.addClass("night");
                    $(".city").html("<strong>" + name + ", " + country + "</strong> the night is always young! Go out! Have a time! Don't forget to get some shots, and live your best life!!");
                    $(".mainWeather img").attr("src", "img/gw/moon.png");

                    break;
                case (id >= 801 && id <= 802 && (icon == "02d" || icon == "03d")):
                    body.addClass("mostlysun");
                    $(".city").html("Chef's Kiss!! <strong>" + name + ", " + country + "</strong> is practically a perfect day! Now go on with your bad self!");
                    $(".mainWeather img").attr("src", "img/gw/mostlysun.png");

                    break;
                case (id >= 801 && id <= 802 && (icon == "02n" || icon == "03n")):
                    body.addClass("mostlymoon");
                    $(".city").html("The night is alive in <strong>" + name + ", " + country + "</strong>!! Go find yourself a friend and have a night on the town!");
                    $(".mainWeather img").attr("src", "img/gw/mostlymoon.png");

                    break;
                case (id >= 803 && id <= 804 && icon == "04d"):
                    body.addClass("mostlycloud");
                    $(".city").html("If my boyfriend got his way, he'd say this is a shit day... But it could be A LOT worse in <strong>" + name + ", " + country + "</strong>!");
                    $(".mainWeather img").attr("src", "img/gw/mostlycloud.png");
                    break;
                case (id >= 803 && id <= 804 && icon == "04n"):
                    body.addClass("mostlycloudn");
                    $(".city").html("Babe, it's night... does it really matter if there are clouds in <strong>" + name + ", " + country + "</strong>? FFS, what are you an astronomer?");
                    $(".mainWeather img").attr("src", "img/gw/mostlycloudn.png");
                    break;


            }
            // Displays the temp according to the API
            $(".temp").html(Math.round(temp, 0) + "<sup>°c</sup>");

            // Resets the inner HTML to ensure that it displays correctly after an error is thrown
            $(".feels").html(`<strong>Feels Like</strong>
        <div class="flex flexColumn textCenter ">
            <p><sup id="feels"></sup></p>
        </div>`);

            // Displays the "Feels Like" details from the API
            $("#feels").html(Math.round(feels_like, 0) + "°c");

        },
        // The Search function that allows each of the variables entered be entered into the API. 1)City, 2)State/Province, 3)Country
        search: function() {
            this.fetchWeather($("#searchBar1").val(), $("#searchBar2").val(), $("#searchBar3").val());
        }

    }
    // The trigger, When the searchbar is clicked, it gets rid of all the excess classes from the body to bring the background to it's original state
$(".searchBar").on("click", function() {

    $(".body").removeClass("thunder rain snow mostlycloud mostlysun sunny fog breezy windy mostlymoon mostlycloudn night freezing cold hot");

    // Brings the title down
    $(".title").animate({
        top: 150
    });

    // Brings the search bar down
    $(".search").animate({
        top: 150
    });

    // Brings the weather card out of the view port and transparent.
    $("#weather").animate({
        opacity: 0,
        bottom: -1000
    });

    // Make sure the page isn't scrollable.
    $(".body").css({
        overflow: "hidden"
    });
});

// Does the same as above if a vowel is put into any of the search bars.
$(".searchBar ").on("keyup", function(event) {
    if (event.key == "a" || event.key == "e" || event.key == "o" || event.key == "y" || event.key == "i" || event.key == "u") {
        $(".body").removeClass("thunder rain snow mostlycloud mostlysun sunny fog breezy windy mostlymoon mostlycloudn night freezing cold hot");

        $(".title").animate({
            top: 150
        });
        $(".search").animate({
            top: 150
        });
        $("#weather").animate({
            opacity: 0,
            bottom: -1000
        });
        $(".body").css({
            overflow: "hidden"
        });
    }

});


// When you press a key on the keyboard, it executes the following:
$(".searchBar ").on("keyup", function(event) {
    // If the key is strictly "Enter"
    if (event.key === "Enter") {
        // Display the Temp box
        $(".temp").css({
            display: "block"
        });
        // Align the city text to the left
        $(".city").css({
            textAlign: "left"
        });
        // Bring the search bar to the top of the screen
        $(".search").animate({
            top: -100,
        });
        // Animate the weather Modal up and bring the opacity to 100
        $("#weather").animate({
            opacity: 100,
            bottom: 100

        });
        // Animate the title bar out of the viewport
        $(".title").animate({
            top: -1000
        });
        // Make the overflow of the body visible
        $(".body").css({
            overflow: "visible"
        });


        // Clear all the following classes from the body to ensure the background doesn't get missed 
        $(".body").removeClass("thunder rain snow mostlycloud mostlysun sunny fog breezy windy mostlymoon mostlycloudn night freezing cold hot");

        // Execute the search function
        weather.search();
        // Change th placeholder for the city to "Enter New City"
        $("#searchBar1").attr("placeholder", "Enter New City");
        // Clear the values from all search bars.
        $(".searchBar").val("");
    }
});

// Same as the above, but instead when you click the search button
$(".search button").on("click", function() {
    $(".temp").css({
        display: "block"
    });
    $(".city").css({
        textAlign: "left"
    });
    $(".search").animate({
        top: -100
    });
    $("#weather").animate({
        opacity: 100,
        bottom: 100
    });
    $(".title").animate({
        top: -1000
    });
    $(".body").css({
        overflow: "visible"
    });

    $(".body").removeClass("thunder rain snow mostlycloud mostlysun sunny fog breezy windy mostlymoon mostlycloudn night freezing cold hot");

    weather.search();
    $("#searchBar1").attr("placeholder", "Enter New City");
    $(".searchBar").val("");

});

// When the Let's Go button is pressed, the modal Fades Out (Display:none, Opacity: 0)
$("#btn").on("click", function() {
    $(".modal").fadeOut();
});