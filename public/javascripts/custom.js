/*----- class inheritance -------*/
class Employee {
    name;
    surname;

    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}

class Staff_Member extends Employee {
    picture;
    email;
    status
    outTime;
    duration;
    expectedReturnTime;

    constructor(name, surname, picture, email, status, outTime, duration, expectedReturnTime) {
        super(name, surname);
        this.picture = picture;
        this.email = email;
        this.status = status;
        this.outTime = outTime;
        this.duration = duration;
        this.expectedReturnTime = expectedReturnTime;
    }

    staffMemberIsLate() {
        return ('Name: ' + this.name + '<br>' + 'Surname: ' + this.surname + '<br>' + 'Time away: ' + this.duration);
    }
}

class Delivery_driver extends Employee {
    vehicle;
    telephone;
    deliverAddress;
    returnTime;

    constructor(name, surname, vehicle, telephone, deliverAddress, returnTime) {
        super(name, surname);
        this.vehicle = vehicle;
        this.telephone = telephone;
        this.deliverAddress = deliverAddress;
        this.returnTime = returnTime;
    }

    deliveryDriverIsLate() {
        return ('Full Name: ' + this.name + '' + this.surname + '<br>' + 'phone number: ' + this.telephone +
            '<br>' + 'Was suppose to return: ' + this.returnTime +
            '<br>' + 'Delivery address: ' + this.deliverAddress + '<br>' + '<br>');
    }
}



/*-------- get random users ---------*/
async function staffUserGet() {
    const response = await fetch('https://randomuser.me/api/?results=5&inc=picture,name,email&noinfo');
    const data = await response.json();

    const user = data.results[0];
    const user1 = data.results[1];
    const user2 = data.results[2];
    const user3 = data.results[3];
    const user4 = data.results[4];

    /*------- staff members objects -------*/
    let staff_0 = new Staff_Member(`${user.name.first} `, `${user.name.last} `, ('src', `${user.picture.thumbnail} `), `${user.email} `, null, null, null, null);
    let staff_1 = new Staff_Member(`${user1.name.first} `, `${user1.name.last} `, ('src', `${user1.picture.thumbnail} `), `${user1.email}`, null, null, null, null);
    let staff_2 = new Staff_Member(`${user2.name.first} `, `${user2.name.last} `, ('src', `${user2.picture.thumbnail} `), `${user2.email}`, null, null, null, null);
    let staff_3 = new Staff_Member(`${user3.name.first} `, `${user3.name.last} `, ('src', `${user3.picture.thumbnail} `), `${user3.email}`, null, null, null, null);
    let staff_4 = new Staff_Member(`${user4.name.first} `, `${user4.name.last} `, ('src', `${user4.picture.thumbnail} `), `${user4.email}`, null, null, null, null);

    console.log(staff_0);
    console.log(staff_1);
    console.log(staff_2);
    console.log(staff_3);
    console.log(staff_4);

    //populate table with staff members objects
    const firstname = document.getElementById('firstname_0')
    const lastname = document.getElementById('lastname_0')
    const email = document.getElementById('email_0')
    const img = document.getElementById('img_0')

    firstname.innerText = staff_0.name;
    lastname.innerText = staff_0.surname;
    email.innerText = staff_0.email;
    img.setAttribute('src', staff_0.picture);

    const firstname1 = document.getElementById('firstname_1')
    const lastname1 = document.getElementById('lastname_1')
    const email1 = document.getElementById('email_1')
    const img1 = document.getElementById('img_1')

    firstname1.innerText = staff_1.name;
    lastname1.innerText = staff_1.surname;
    email1.innerText = staff_1.email;
    img1.setAttribute('src', staff_1.picture);

    const firstname2 = document.getElementById('firstname_2')
    const lastname2 = document.getElementById('lastname_2')
    const email2 = document.getElementById('email_2')
    const img2 = document.getElementById('img_2')

    firstname2.innerText = staff_2.name;
    lastname2.innerText = staff_2.surname;
    email2.innerText = staff_2.email;
    img2.setAttribute('src', staff_2.picture);

    const firstname3 = document.getElementById('firstname_3')
    const lastname3 = document.getElementById('lastname_3')
    const email3 = document.getElementById('email_3')
    const img3 = document.getElementById('img_3')

    firstname3.innerText = staff_3.name;
    lastname3.innerText = staff_3.surname;
    email3.innerText = staff_3.email;
    img3.setAttribute('src', staff_3.picture);

    const firstname4 = document.getElementById('firstname_4')
    const lastname4 = document.getElementById('lastname_4')
    const email4 = document.getElementById('email_4')
    const img4 = document.getElementById('img_4')

    firstname4.innerText = staff_4.name;
    lastname4.innerText = staff_4.surname;
    email4.innerText = staff_4.email;
    img4.setAttribute('src', staff_4.picture);


    /*------staff table--------*/

    //highlight row on click
    $(function () {
        $('#person_Table tr').on('click', function () {
            $('.table tr').removeClass('highlight_row');
            $(this).addClass('highlight_row');
        });
    });


    //converts time into right format
    const time_convert = (time) => {
        let h = Math.floor(time / 60);
        let m = time % 60;
        (h < 10) ? h = '0' + h : h;
        (m < 10) ? m = '0' + m : m;
        return `${h}:${m} `;
    }


    /*---- staff out button -------*/
    function staffOut() {

        $('.staff_out').on('click', function () {

            var time = prompt("Input time in minutes:")
            if (time === null) {
                return;

            } if (isNaN(time) || time == "") {
                alert("No number provided!");
                return;

            } else {

                //duration
                if ($('#row_').hasClass('highlight_row')) {
                    $('#timeAway_0').empty()
                    staff_0.duration = time_convert(time);
                    $('#timeAway_0').append(staff_0.duration)
                } else if ($('#row_1').hasClass('highlight_row')) {
                    $('#timeAway_1').empty()
                    staff_1.duration = time_convert(time);
                    $('#timeAway_1').append(staff_1.duration)
                } else if ($('#row_2').hasClass('highlight_row')) {
                    $('#timeAway_2').empty()
                    staff_2.duration = time_convert(time);
                    $('#timeAway_2').append(staff_2.duration)
                } else if ($('#row_3').hasClass('highlight_row')) {
                    $('#timeAway_3').empty()
                    staff_3.duration = time_convert(time);
                    $('#timeAway_3').append(staff_3.duration)
                } else {
                    $('#timeAway_4').empty()
                    staff_4.duration = time_convert(time);
                    $('#timeAway_4').append(staff_4.duration)
                }

                //out time
                let tid = new Date(new Date().getTime()).toLocaleTimeString();

                if ($('#row_').hasClass('highlight_row')) {
                    $('#outTime_0').empty()
                    staff_0.outTime = tid;
                    $('#outTime_0').append(staff_0.outTime);
                } else if ($('#row_1').hasClass('highlight_row')) {
                    $('#outTime_1').empty()
                    staff_1.outTime = tid;
                    $('#outTime_1').append(staff_1.outTime);
                } else if ($('#row_2').hasClass('highlight_row')) {
                    $('#outTime_2').empty()
                    staff_2.outTime = tid;
                    $('#outTime_2').append(staff_2.outTime);
                } else if ($('#row_3').hasClass('highlight_row')) {
                    $('#outTime_3').empty()
                    staff_3.outTime = tid;
                    $('#outTime_3').append(staff_3.outTime);
                } else {
                    $('#outTime_4').empty()
                    staff_4.outTime = tid;
                    $('#outTime_4').append(staff_4.outTime);
                }

                //return time
                let returnT = new Date(new Date().getTime() + time * 60000).toLocaleTimeString();

                if ($('#row_').hasClass('highlight_row')) {
                    $('#expectedReturn_0').empty()
                    staff_0.expectedReturnTime = returnT;
                    $('#expectedReturn_0').append(staff_0.expectedReturnTime);
                } else if ($('#row_1').hasClass('highlight_row')) {
                    $('#expectedReturn_1').empty()
                    staff_1.expectedReturnTime = returnT;
                    $('#expectedReturn_1').append(staff_1.expectedReturnTime);
                } else if ($('#row_2').hasClass('highlight_row')) {
                    $('#expectedReturn_2').empty()
                    staff_2.expectedReturnTime = returnT;
                    $('#expectedReturn_2').append(staff_2.expectedReturnTime);
                } else if ($('#row_3').hasClass('highlight_row')) {
                    $('#expectedReturn_3').empty()
                    staff_3.expectedReturnTime = returnT;
                    $('#expectedReturn_3').append(staff_3.expectedReturnTime);
                } else {
                    $('#expectedReturn_4').empty()
                    staff_4.expectedReturnTime = returnT;
                    $('#expectedReturn_4').append(staff_4.expectedReturnTime);
                }

            }

            //staff out
            $('.highlight_row .in_out').each(function () {
                var text = $(this).text();
                if (time != "") {
                    text = text.replace("In", "Out");
                    $(this).text(text);

                    if ($('#row_').hasClass('highlight_row')) {
                        staff_0.status = text;
                    } else if ($('#row_1').hasClass('highlight_row')) {
                        staff_1.status = text;
                    } else if ($('#row_2').hasClass('highlight_row')) {
                        staff_2.status = text;
                    } else if ($('#row_3').hasClass('highlight_row')) {
                        staff_3.status = text;
                    } else {
                        staff_4.status = text;
                    }
                };

            })


            /*-------Staff back inn button - clear cells and object-------*/
            function staffIn() {

                $('.staff_in').on('click', function () {
                    //clear cells
                    $('.highlight_row .duration').empty();
                    $('.highlight_row .time').empty();
                    $('.highlight_row .return').empty();
                    //clear object
                    if ($('#row_').hasClass('highlight_row')) {
                        staff_0.status = null;
                        staff_0.outTime = null;
                        staff_0.expectedReturnTime = null;
                        staff_0.duration = null;
                    } else if ($('#row_1').hasClass('highlight_row')) {
                        staff_1.status = null;
                        staff_1.outTime = null;
                        staff_1.expectedReturnTime = null;
                        staff_1.duration = null;
                    } else if ($('#row_2').hasClass('highlight_row')) {
                        staff_2.status = null;
                        staff_2.outTime = null;
                        staff_2.expectedReturnTime = null;
                        staff_2.duration = null;
                    } else if ($('#row_3').hasClass('highlight_row')) {
                        staff_3.status = null;
                        staff_3.outTime = null;
                        staff_3.expectedReturnTime = null;
                        staff_3.duration = null;
                    } else {
                        staff_4.status = null;
                        staff_4.outTime = null;
                        staff_4.expectedReturnTime = null;
                        staff_4.duration = null;
                    }


                    //Staff back inn
                    $('.highlight_row .in_out').each(function () {
                        var text = $(this).text();
                        text = text.replace("Out", "In");
                        $(this).text(text);

                        if ($('#row_').hasClass('highlight_row')) {
                            staff_0.status = text;
                        } else if ($('#row_1').hasClass('highlight_row')) {
                            staff_1.status = text;
                        } else if ($('#row_2').hasClass('highlight_row')) {
                            staff_2.status = text;
                        } else if ($('#row_3').hasClass('highlight_row')) {
                            staff_3.status = text;
                        } else {
                            staff_4.status = text;
                        }

                    })


                });

            }
            staffIn();

            /*--------Toast-staff-------*/
            function staffMemberIsLate() {

                timeNow = new Date(new Date().getTime()).toLocaleTimeString()

                if (staff_0.expectedReturnTime > timeNow || staff_1.expectedReturnTime > timeNow || staff_2.expectedReturnTime > timeNow || staff_3.expectedReturnTime > timeNow || staff_4.expectedReturnTime > timeNow) {
                    setTimeout(staffMemberIsLate, 1000);

                } if (staff_0.expectedReturnTime <= timeNow || staff_1.expectedReturnTime <= timeNow || staff_2.expectedReturnTime <= timeNow || staff_3.expectedReturnTime <= timeNow || staff_4.expectedReturnTime <= timeNow) {

                    switch (true) {
                        case (staff_0.expectedReturnTime == timeNow):
                            $('#staffToastBody').empty();
                            $('#img_here').attr('src', staff_0.picture)
                            $('#staffToastBody').append(staff_0.staffMemberIsLate());
                            $('#staffToast').toast('show');
                            break;

                        case (staff_1.expectedReturnTime == timeNow):
                            $('#staffToastBody').empty();
                            $('#img_here').attr('src', staff_1.picture)
                            $('#staffToastBody').append(staff_1.staffMemberIsLate());
                            $('#staffToast').toast('show');
                            break;

                        case (staff_2.expectedReturnTime == timeNow):
                            $('#staffToastBody').empty();
                            $('#img_here').attr('src', staff_2.picture)
                            $('#staffToastBody').append(staff_2.staffMemberIsLate());
                            $('#staffToast').toast('show');
                            break;

                        case (staff_3.expectedReturnTime == timeNow):
                            $('#staffToastBody').empty();
                            $('#img_here').attr('src', staff_3.picture)
                            $('#staffToastBody').append(staff_3.staffMemberIsLate());
                            $('#staffToast').toast('show');
                            break;

                        case (staff_4.expectedReturnTime == timeNow):
                            $('#staffToastBody').empty();
                            $('#img_here').attr('src', staff_4.picture)
                            $('#staffToastBody').append(staff_4.staffMemberIsLate());
                            $('#staffToast').toast('show');
                            break;

                        default:
                            clearTimeout();
                    }
                }
            }
            staffMemberIsLate();
        })
    }
    staffOut();

}
staffUserGet()


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

addDelivery();



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

/*-------Clock------*/

//get current time
function digitalClock() {
    var today = new Date();

    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    hours = hours > 24 ? hours % 24 : hours;


    //Add the 0 for the values lower than 10
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }


    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;

}

var updateClock = setInterval(digitalClock, 1000);

//Get the date
var today = new Date();
const dayNumber = today.getDate();
const year = today.getFullYear();
const dayName = today.toLocaleString("default", { weekday: "short" });
const monthName = today.toLocaleString("default", { month: "short" });


document.querySelector(".day-name").innerHTML = dayName;
document.querySelector(".day-number").innerHTML = dayNumber;
document.querySelector(".month-name").innerHTML = monthName;
document.querySelector(".year").innerHTML = year;


