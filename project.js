var English;
var Urdu;
var Math;
var Physics;
var Chemistry;
var Computer;
var result;
var average;

function Calculate() {
    // Getting values from the form (make sure form and input field names are correct)
    English = parseFloat(form.num1.value);
    Urdu = parseFloat(form.num2.value);
    Math = parseFloat(form.num3.value);
    Physics = parseFloat(form.num4.value);
    Chemistry = parseFloat(form.num5.value);
    Computer = parseFloat(form.num6.value);

    // Sum all subjects for the result
    result = English + Urdu + Math + Physics + Chemistry + Computer;

    // Calculate the average of all subjects (7 subjects in total)
    average = result / 7;

    // Display the result and average
    document.write("The result is: " + result + "<br>");
    document.write("The average is: " + average + "<br>");

    // Determine grade based on average
    if (average >= 90) {
        document.write("Grade A");
    } else if (average >= 80) {
        document.write("Grade B");
    } else if (average >= 70) {
        document.write("Grade C");
    } else if (average >= 60) {
        document.write("Grade D");
    } else {
        document.write("Fail");
    }
}
