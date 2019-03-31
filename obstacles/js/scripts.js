window.onload = () => {

    var currentTab = 'mainCategory'
    var navs = ['mainSection', 'subSection', 'subSection2']
    var currentNav = 0

    var radios = document.querySelectorAll('input[type="radio"]')

    function navigate(e) {
        e.target.removeEventListener('click', navigate)
        document.querySelector(`#${currentTab}`).style.display = 'none'
        currentTab = e.target.tar
        document.querySelector(`#${currentTab}`).style.display = 'inline'

        if (e.target.id == 'mainSection') {
            document.querySelector('#mainSection').innerHTML = ''
            document.querySelector('#subSection').innerHTML = ''
            document.querySelector('#subSection2').innerHTML = ''
            document.querySelector('#message').style.display = 'none'
            currentNav = 0
        } else if (e.target.id == 'subSection') {
            document.querySelector('#subSection').innerHTML = ''
            document.querySelector('#subSection2').innerHTML = ''
            document.querySelector('#message').style.display = 'none'
            currentNav = 1
        } else if (e.target.id == 'subSection2') {
            document.querySelector('#subSection2').innerHTML = ''
            document.querySelector('#message').style.display = 'none'
            currentNav = 2
        }

        console.log('clicked on '+e.target.tar)
    }

    radios.forEach((radio) => {
        radio.addEventListener('click', function (e) {
            if (currentNav < 2) {
                console.log('input clicked', currentTab)
                document.querySelector(`#${currentTab}`).style.display = 'none'
                document.querySelector(`#${e.target.value}`).style.display = 'inline'

                var nav = document.querySelector('#'+navs[currentNav])
                nav.innerHTML = e.target.parentNode.innerText + ' >&nbsp;'
                nav.tar = currentTab
                nav.addEventListener('click', navigate)
                currentNav += 1
                currentTab = e.target.value

            } else {
                document.querySelector(`#${currentTab}`).style.display = 'none'
                document.querySelector('#message').style.display = 'inline-block'

                var nav = document.querySelector('#'+navs[currentNav])
                nav.innerHTML = e.target.parentNode.innerText + ' >&nbsp;'
                nav.tar = currentTab
                nav.addEventListener('click', navigate)
            }
        })
    })

//     function showTab(n) {
//         // This function will display the specified tab of the form ...
//         var x = document.getElementsByClassName("tab");
//         x[n].style.display = "block";
//         // ... and fix the Previous/Next buttons:
//         if (n == 0) {
//             document.getElementById("prevBtn").style.display = "none";
//         } else {
//             document.getElementById("prevBtn").style.display = "inline";
//         }
//         if (n == (x.length - 1)) {
//             document.getElementById("nextBtn").innerHTML = "Submit";
//         } else {
//             document.getElementById("nextBtn").innerHTML = "Next";
//         }
//         // ... and run a function that displays the correct step indicator:
//         fixStepIndicator(n)
//     }

//     function nextPrev(n) {
//         // This function will figure out which tab to display
//         var x = document.getElementsByClassName("tab");
//         // Exit the function if any field in the current tab is invalid:
//         if (n == 1 && !validateForm()) return false;
//         // Hide the current tab:
//         x[currentTab].style.display = "none";
//         // Increase or decrease the current tab by 1:
//         currentTab = currentTab + n;
//         // if you have reached the end of the form... :
//         if (currentTab >= x.length) {
//             //...the form gets submitted:
//             document.getElementById("regForm").submit();
//             return false;
//         }
//         // Otherwise, display the correct tab:
//         showTab(currentTab);
//     }

//     function validateForm() {
//         // This function deals with validation of the form fields
//         var x, y, i, valid = true;
//         x = document.getElementsByClassName("tab");
//         y = x[currentTab].getElementsByTagName("input");
//         // A loop that checks every input field in the current tab:
//         for (i = 0; i < y.length; i++) {
//             // If a field is empty...
//             if (y[i].value == "") {
//             // add an "invalid" class to the field:
//             y[i].className += " invalid";
//             // and set the current valid status to false:
//             valid = false;
//             }
//         }
//         // If the valid status is true, mark the step as finished and valid:
//         if (valid) {
//             document.getElementsByClassName("step")[currentTab].className += " finish";
//         }
//         return valid; // return the valid status
//     }

//     function fixStepIndicator(n) {
//         // This function removes the "active" class of all steps...
//         var i, x = document.getElementsByClassName("step");
//         for (i = 0; i < x.length; i++) {
//             x[i].className = x[i].className.replace(" active", "");
//         }
//         //... and adds the "active" class to the current step:
//         x[n].className += " active";
//     }

//     showTab(currentTab); // Display the current tab

//     document.querySelector('#nextBtn').addEventListener('click', function () {
//         nextPrev(1)
//     })
//     document.querySelector('#prevBtn').addEventListener('click', function () {
//         nextPrev(-1)
//     })
    

}
