/*------------delivery field input----------------*/

function addDelivery() {

    $('.delivery_add').on('click', function () {
        var iconDeliver = $('select[name="icon"]').val();
        var nameDeliver = $('input[name="name"]').val();
        var surnameDeliver = $('input[name="surname"]').val();
        var numberDeliver = $('input[name="number"]').val();
        var addressDeliver = $('input[name="adresse"]').val();
        var returnDeliver = $('input[name="arrived"]').val();

        var tableRowDeliver = '<tr><td>' + iconDeliver + '</td> <td>' + nameDeliver + '</td> <td>' + surnameDeliver + '</td><td>' + numberDeliver + '</td><td>' + addressDeliver + '</td><td>' + returnDeliver + '</td></tr>';

        //validates the different criterias
        function validateDelivery() {

            if (isNaN(numberDeliver) || numberDeliver == "") {
                alert("No number provided. Try again please");
                return;
            } else if (numberDeliver.length != 8) {
                alert("The phonenumber needs to contain 8 digits");
                return;
            } else if (nameDeliver == "" || surnameDeliver == "" || addressDeliver == "" || returnDeliver == "") {
                alert("need valid input")
                return;
            } else
                $(tableRowDeliver).appendTo('#driver_table');
            /*--clears the input field after done*/
            $("input").val("");



            //highlight row - needs to be inside validate delivery
            $('#delivery_table tr').on('click', function () {
                $('.table tr').removeClass('highlight_driver');
                $(this).addClass('highlight_driver');
            });
        }
        validateDelivery();

        //makes an class object delivery driver
        let driver = new Delivery_driver(nameDeliver, surnameDeliver, iconDeliver, numberDeliver, addressDeliver, returnDeliver);
        console.log(driver);


        /*------ toast-delivery --------*/
        function deliveryDriverIsLate() {

            if (driver.returnTime > new Date(new Date().getTime()).toLocaleTimeString()) {
                setTimeout(deliveryDriverIsLate, 1000);

            } if (driver.returnTime < new Date(new Date().getTime()).toLocaleTimeString()) {
                $('#deliverToastBody').append(driver.deliveryDriverIsLate());
                $('#deliverToast').toast('show');
                setTimeout(() => {
                    $('#deliverToastBody').empty()
                }, 10000);
                clearTimeout();
            }
        }

        deliveryDriverIsLate();
    });

};

//addDelivery();



/*------ clear button removes delivery ------ */
$(function () {

    $('.delivery_clear').on('click', function () {

        if (confirm("Are you sure you want to remove this delivery?")) {
            $('.highlight_driver').empty();
        } else {
            $('tbody > tr').removeClass('highlight_driver');
        }
    });

});