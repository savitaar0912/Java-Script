function decipher(ciphertext, needle) {
    for (let shift = 0; shift < 26; shift++) {
        let decrypted = '';
        for (let i = 0; i < ciphertext.length; i++) {
            const char = ciphertext[i];
            if (char.match(/[a-zA-Z]/)) {
                const base = char === char.toUpperCase() ? 'A' : 'a';
                const decryptedChar = String.fromCharCode(((char.charCodeAt(0) - base.charCodeAt(0) - shift + 26) % 26) + base.charCodeAt(0));
                decrypted += decryptedChar;
            } else {
                decrypted += char;
            }
        }
        if (decrypted.toLowerCase().includes(needle.toLowerCase())) {
            return decrypted;
        }
    }
    return 'invalid';
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let ciphertext = '';
let knownword = '';

rl.question('Enter the ciphertext: ', (ciphertextInput) => {
    ciphertext = ciphertextInput;

    rl.question('Enter a word you know appears in the original text: ', (knownWordInput) => {
        knownword = knownWordInput;

        const plaintext = decipher(ciphertext, knownword);
        console.log('Deciphered text:', plaintext);

        rl.close();
    });
});


// console.log(decipher("Eqfkpi vguvu ctg hwp!","tests"))
// console.log(decipher("cdeb nqxg","love"))
