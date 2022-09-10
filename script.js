$(window).height();

        $('#owl-carousel01').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 10,
            animateOut: 'fadeOut',
            autoplayTimeout: 4000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 1
                }
            }
        })




        // 01 01 01 01
        $(function () {

            var counter = 0,
                divs = $('.div1, .div2, .div3, .div4');

            function showDiv() {
                divs.hide() // hide all divs
                    .filter(function (index) { return index == counter % 4; }) // figure out correct div to show
                    .show(); // and show it

                counter++;
            }; // function to loop through divs and show correct div

            showDiv(); // show first div

            setInterval(function () {
                showDiv(); // show next div
            }, 10 * 1000); // do this every 10 seconds    

        });

        // 02 02 02 02
        $(function () {
            var counter = 0,
                divs = $('.div01, .div02, .div03');
            function showDiv() {
                divs.hide()
                    .filter(function (index) { return index == counter % 3; })
                    .show();
                counter++;
            };
            showDiv();
            setInterval(function () {
                showDiv();
            }, 10 * 1000);
        });


        // 03 03 03 03
        $(function () {
            var counter = 0,
                divs = $('.divs1, .divs2, .divs3');

            function showDiv() {
                divs.hide()
                    .filter(function (index) { return index == counter % 3; })
                    .show();
                counter++;
            };
            showDiv();
            setInterval(function () {
                showDiv();
            }, 10 * 1000);
        });

        $('#myTab button').on('click', function (event) {
            event.preventDefault()
            $(this).tab('show')
        })

        $('#owl-carousel02').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 10,
            nav:false,
            animateOut: 'fadeOut',
            autoplayTimeout: 4000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 1
                }
            }
        })


        // $('.tabCrousel').on('scroll', function() {
        //         if ($(this).scrollTop() +
        //             $(this).innerHeight() >= 
        //             $(this)[0].scrollHeight) {
        //             alert('End of DIV is reached!');
        //         }
        // });