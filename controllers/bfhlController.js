exports.processData = (req, res) => {
    try {
        const inputData = req.body.data;
        if (!Array.isArray(inputData)) {
            return res.status(400).json({ is_success: false, message: "Invalid input format" });
        }

        const evenNumbers = [];
        const oddNumbers = [];
        const alphabets = [];
        const specialCharacters = [];
        let sum = 0;
        let alphaConcat = '';

        inputData.forEach(item => {
            if (!item) {
                specialCharacters.push(item);
            } else if (!isNaN(item)) {
                let num = parseInt(item);
                if (num % 2 === 0) {
                    evenNumbers.push(item);
                } else {
                    oddNumbers.push(item);
                }
                sum += num;
            } else if (/^[a-zA-Z]+$/.test(item)) {
                alphabets.push(item.toUpperCase());
                alphaConcat += item;
            } else {
                specialCharacters.push(item);
            }
        });

        let reversedConcat = '';
        let toggle = true;
        for (let i = alphaConcat.length - 1; i >= 0; i--) {
            let ch = alphaConcat[i];
            reversedConcat += toggle ? ch.toUpperCase() : ch.toLowerCase();
            toggle = !toggle;
        }

        const response = {
            is_success: true,
            user_id: "john_doe_17091999",
            email: "john@xyz.com",
            roll_number: "ABCD123",
            odd_numbers: oddNumbers,
            even_numbers: evenNumbers,
            alphabets: alphabets,
            special_characters: specialCharacters,
            sum: sum.toString(),
            concat_string: reversedConcat
        };

        res.status(200).json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ is_success: false, message: "Server Error" });
    }
};
