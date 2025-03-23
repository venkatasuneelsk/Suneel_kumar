
        function isPrime(num) {
            if (num <= 1) {
                return false; 
            }

            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    return false; 
                }
            }

            return true; 
        }

        function checkPrime() {
            const num = document.getElementById('numberInput').value;
            const resultElement = document.getElementById('result');
            
            if (isPrime(num)) {
                resultElement.textContent = `${num} is a prime number.`;
            } else {
                resultElement.textContent = `${num} is not a prime number.`;
            }
        }
