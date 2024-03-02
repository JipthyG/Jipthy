
        //1) Dynamic content
        // a)
        var name = "Jipthy";
        document.write("Welcome, " + name + "<br>");

        // b)
        var headingElement = "h1";
        document.write(`<${headingElement}>Welcome, ${name}</${headingElement}><br>`);

        // c)
        var fontColor = "blue";
        var fontSize = "24px";
        document.write(`<p style="color: ${fontColor}; font-size: ${fontSize};">Welcome, ${name}</p>`);

        // 2) Calculation
        // a)
        var num1 = 10;
        var num2 = 5;
        document.write(`Sum: ${num1 + num2}<br>`);
        document.write(`Difference: ${num1 - num2}<br>`);
        document.write(`Product: ${num1 * num2}<br>`);

        // b)
        var x1 = 10, x2 = 20, x3 = 30, x4 = 40;
        var average = (x1 + x2 + x3 + x4) / 4;
        document.write(`Average: ${average}<br>`);

        // 3) Selection
        // a)
        var number = -5;
        if (number > 0) {
            document.write("Number is positive<br>");
        } else if (number < 0) {
            document.write("Number is negative<br>");
        } else {
            document.write("Number is zero<br>");
        }

        // b)
        var str1 = "Hello";
        var str2 = "Hello";
        if (str1 === str2) {
            document.write("Strings are the same<br>");
        } else {
            document.write("Strings are not the same<br>");
        }

        // 4) Loop
        // a)
        var positiveValue = 5;
        document.write("<ul>");
        for (var i = 1; i <= positiveValue; i++) {
            document.write(`<li>${i}</li>`);
        }
        document.write("</ul>");
  