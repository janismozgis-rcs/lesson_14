function isEven(number) {
    console.log(number)
    if (number % 2 == 0) {
        console.log(true)
    } else {
        console.log(false)
    }
}
function isOdd(number) {
    console.log(number)
    if (number % 2 == 0) {
        console.log(false)
    } else {
        console.log(true)
    }
}
isEven(5)
isEven(8)

function subtract(num1, num2) {
    if (typeof num1 != 'number') {
        return 0
    }
    if (typeof num2 != 'number') {
        return 0
    }
    return num2 - num1
}
    

var megaNumber = 4;
subtract(megaNumber, 10)


console.log(4 + 5 - subtract(3, 8))
console.log(4 + 5 - subtract('a', 8))

function sayHello(name) {
    alert('Hello world!' + name)
}

document
    .getElementById('btn2')
        .addEventListener('click', function() {
            sayHello('Johnny')
        })


function showAlert(msg) {
    alert(msg)
}

document
    .getElementById('btn4')
    .addEventListener('mouseenter', function() {
        var elements = document.querySelectorAll('button')
        for (var element of elements) {
            element.innerText = 'Foo'
        }
    })

document
    .getElementById('btn5')
    .addEventListener('click', function () {
        var paragraphs = document.querySelectorAll('p')
        for (var paragraph of paragraphs) {
            if (paragraph.innerText == 'Foo') {
                paragraph.innerText = 'Bar'
            } else {
                paragraph.innerText = 'Foo'
            }
        }
    })


document
    .getElementById('check-palindrome')
    .addEventListener('click', function () {
        var inputElement = document.getElementById('palindrome-input')
        var resultElement = document.getElementById('palindrome-result')

        var inputElementText = inputElement.value.replace(/ /g, '').toLocaleLowerCase()
        var reversed = inputElementText.split('').reverse().join('')

        if (inputElementText == reversed) {
            resultElement.innerText = inputElement.value + ' is palindrome';
        } else {
            resultElement.innerText = inputElement.value + ' is not palindrome';
        }

    })


document
    .getElementById('check-anagram')
    .addEventListener('click', function () {
        var input1 = document.getElementById('anagram-input-1')
        var input2 = document.getElementById('anagram-input-2')
        var resultElement = document.getElementById('anagram-result')

        var text1 = input1
            .value
            .replace(/ /g, '')
            .toLocaleLowerCase()
            .split('')
            .sort()
            .join('')

        var text2 = input2
            .value
            .replace(/ /g, '')
            .toLocaleLowerCase()
            .split('')
            .sort()
            .join('')

        resultElement.innerText = '"' + input1.value + '" and "' + input2.value
        if (text1 === text2) {
            resultElement.innerText +=  '" are anagrams'    
        } else {
            resultElement.innerText += '" are not anagrams'    
        }
    })