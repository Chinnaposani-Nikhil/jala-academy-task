function hideButton(button) {

        button.style.display = "none";
    }


    function introduce(city, country) {

        return this.name +
            " is from " +
            city +
            ", " +
            country;
    }


    function runCallExample() {

        const person = {
            name: "Rahul"
        };


        const result = introduce.call(
            person,
            "Hyderabad",
            "India"
        );

        document.getElementById(
            "callApplyResult"
        ).textContent =
            "call() result: " + result;
    }


    function runApplyExample() {

        const person = {
            name: "Priya"
        };



        const result = introduce.apply(
            person,
            ["Warangal", "India"]
        );

        document.getElementById(
            "callApplyResult"
        ).textContent =
            "apply() result: " + result;
    }



    let count = 0;


    function increaseCounter() {

        count++;

        document.getElementById(
            "counterValue"
        ).textContent = count;
    }


    function resetCounter() {

        count = 0;

        document.getElementById(
            "counterValue"
        ).textContent = count;
    }


    const counter = {

        _value: 0,

        get value() {

            return this._value;
        },

        set value(newValue) {

            if (newValue >= 0) {

                this._value = newValue;

            }

        }

    };


    function increaseAccessorCounter() {

        counter.value = counter.value + 1;

        updateAccessorCounter();
    }


    function resetAccessorCounter() {

        counter.value = 0;

        updateAccessorCounter();
    }


    function updateAccessorCounter() {

        document.getElementById(
            "accessorCounter"
        ).textContent = counter.value;

        document.getElementById(
            "accessorResult"
        ).textContent =
            "Current value: " + counter.value;
    }
    function Person(firstName, lastName) {

        this.firstName = firstName;
        this.lastName = lastName;
    }


    Person.prototype.country = "India";



    Person.prototype.getFullName = function () {

        return this.firstName +
            " " +
            this.lastName;
    };


    function showPrototypeExample() {

        const person = new Person(
            "Nikhil",
            "Kumar"
        );

        const result =
            "Name: " +
            person.getFullName() +
            "<br>" +
            "Country: " +
            person.country;

        document.getElementById(
            "prototypeResult"
        ).innerHTML = result;
    }


