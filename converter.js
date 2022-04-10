function main() {
    var source = document.getElementById("source").value
    var dest = document.getElementById("dest").value
    if (source === dest) {
        alert("Source and destination base cannot be same!");
    }
    else {
        if (source === "binary" || source === "decimal" || source === "octal") {
            var n = document.getElementById("input").value
            console.log(n)
            if (isNaN(n) === true) {
                alert("Invalid input!");
            }
            else {
                if (source === "decimal") {
                    if (dest === "binary")
                        document.getElementById('output').value = decimal_to_binary(parseInt(n))
                    else if (dest === "octal")
                        document.getElementById('output').value = decimal_to_octal(parseInt(n))
                    else if (dest === "hexadecimal")
                        document.getElementById('output').value = decimal_to_hexadecimal(parseInt(n))
                }
                else if (source === "binary") {
                    if (dest === "decimal")
                        document.getElementById('output').value = binary_to_decimal(parseInt(n))
                    else if (dest === "octal")
                        document.getElementById('output').value = binary_to_octal(parseInt(n))
                    else if (dest === "hexadecimal")
                        document.getElementById('output').value = binary_to_hexadecimal(parseInt(n))
                }
                else if (source === "octal") {
                    if (dest === "binary")
                        document.getElementById('output').value = octal_to_binary(parseInt(n))
                    else if (dest === "decimal")
                        document.getElementById('output').value = octal_to_decimal(parseInt(n))
                    else if (dest === "hexadecimal")
                        document.getElementById('output').value = octal_to_hexadecimal(parseInt(n))
                }
            }
        }
        else if (source === 'hexadecimal') {
            if (dest === "binary")
                document.getElementById('output').value = hexadecimal_to_binary(n)
            else if (dest === "decimal")
                document.getElementById('output').value = hexadecimal_to_decimal(n)
            else if (dest === "octal")
                document.getElementById('output').value = hexadecimal_to_octal(n)
        }
    }
}
function decimal_to_binary(n) {
    let p = 0, bin = 0
    while (n > 0) {
        let rem = Math.trunc(n % 2)
        bin += rem * Math.trunc(10 ** p)
        p += 1
        n = Math.trunc(n / 2)
    }
    return bin
}
function binary_to_decimal(n) {
    let p = 0, dec = 0
    while (n > 0) {
        let rem = Math.trunc(n % 10)
        dec += rem * Math.trunc(2 ** p)
        p += 1
        n = Math.trunc(n / 10)
    }
    return dec
}
function decimal_to_octal(n) {
    let p = 0, oct = 0
    while (n > 0) {
        let rem = Math.trunc(n % 8)
        oct += rem * Math.trunc(10 ** p)
        p += 1
        n = Math.trunc(n / 8)
    }
    return oct
}
function octal_to_decimal(n) {
    let p = 0, dec = 0
    while (n > 0) {
        let rem = Math.trunc(n % 10)
        dec += rem * Math.trunc(8 ** p)
        p += 1
        n = Math.trunc(n / 10)
    }
    return dec
}
function binary_to_octal(n) {
    return decimal_to_octal(binary_to_decimal(n))
}
function octal_to_binary(n) {
    return decimal_to_binary(octal_to_decimal(n))
}
function hexadecimal_to_decimal(s) {
    let rev = ""
    for (let i = s.length - 1; i >= 0; i--) {
        rev += s[i]
    }
    let p = 0, dec = 0, rem = 0
    for (var c in rev) {
        if (rev[c] == "A")
            rem = 10
        else if (rev[c] == "B")
            rem = 11
        else if (rev[c] == "C")
            rem = 12
        else if (rev[c] == "D")
            rem = 13
        else if (rev[c] == "E")
            rem = 14
        else if (rev[c] == "F")
            rem = 15
        else
            rem = Math.trunc(rev[c])
        dec += rem * Math.trunc(16 ** p)
        p += 1
    }
    return dec
}
function decimal_to_hexadecimal(n) {
    let h = "0123456789ABCDEF"
    let hex = ""
    while (n > 0) {
        let rem = Math.trunc(n % 16)
        hex += h[rem]
        n = Math.trunc(n / 16)
    }
    let rev = ""
    for (let i = hex.length; i >= 0; i--) {
        rev += hex[i]
    }
    return rev
}
function hexadecimal_to_binary(s) {
    return decimal_to_binary(hexadecimal_to_decimal(s))
}
function binary_to_hexadecimal(n) {
    return decimal_to_hexadecimal(binary_to_decimal(n))
}
function hexadecimal_to_octal(s) {
    return decimal_to_octal(hexadecimal_to_decimal(s))
}
function octal_to_hexadecimal(n) {
    return decimal_to_hexadecimal(octal_to_decimal(n))
}