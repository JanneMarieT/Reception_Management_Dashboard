/*------------delivery field input----------------*/
//toast-delivery
      function deliveryDriverIsLate(driverId) {
        let driver = drivers.find(d => d.id === driverId)
        console.log(driver.returnTime)
        if (driver.returnTime > new Date(new Date().getTime()).toLocaleTimeString()) {
          setTimeout(function() {
            deliveryDriverIsLate(driver.id)
          }, 1000);
        } else if (driver.returnTime < new Date(new Date().getTime()).toLocaleTimeString()) {
          $('#deliverToastBody').append(driver.deliveryDriverIsLate());
          $('#deliverToast').toast('show');
          setTimeout(() => {
            $('#deliverToastBody').empty()
          }, 10000);
        }
      }

let drivers = [];

function addDelivery() {
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
        return false;
      } else if (numberDeliver.length != 8) {
        alert("The phonenumber needs to contain 8 digits");
        return false;
      } else if (nameDeliver == "" || surnameDeliver == "" || addressDeliver == "" || returnDeliver == "") {
        alert("need valid input")
        return false;
      } else {
        $(tableRowDeliver).appendTo('#driver_table');
        return true;
      }
    }
  
    // validates and adds delivery driver
    if (validateDelivery()) {
      //highlight row
      $('#driver_table tr').on('click', function () {
        $('.table tr').removeClass('highlight_driver');
        $(this).addClass('highlight_driver');
      });
  
      //makes an class object delivery driver
      let driver = new Delivery_driver(nameDeliver, surnameDeliver, iconDeliver, numberDeliver, addressDeliver, returnDeliver);
      drivers.push(driver);
      console.log(drivers)
  
      //toast-delivery
      deliveryDriverIsLate(driver.id);
  
      //clears the input field after done
      $("input").val("");
    }
  }


/*------ clear button removes delivery ------ */
function deliveryClear() {
    if (confirm("Are you sure you want to remove this delivery?")) {
        $('.highlight_driver').empty();
    } else {
        $('tbody > tr').removeClass('highlight_driver');
    }
};