 function calculateAge() {
            const birthdate = document.getElementById('birthdate').value;
            const resultElement = document.getElementById('result');

            if (birthdate) {
                const today = new Date();
                const birthDate = new Date(birthdate);

                let ageYears = today.getFullYear() - birthDate.getFullYear();
                let ageMonths = today.getMonth() - birthDate.getMonth();
                let ageDays = today.getDate() - birthDate.getDate();

                if (ageDays < 0) {
                    ageMonths -= 1;
                    ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
                }

                if (ageMonths < 0) {
                    ageYears -= 1;
                    ageMonths += 12;
                }

                resultElement.innerText = `Your age is ${ageYears} years, ${ageMonths} months, and ${ageDays} days.`;
                resultElement.style.color = 'green'; // Set the text color to green
            } else {
                resultElement.innerText = 'Please enter your birthdate.';
                resultElement.style.color = 'red';
            }
        }