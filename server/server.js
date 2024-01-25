import express, { json } from 'express';
import { appendFile, readFile, writeFile } from 'fs';
import cors from 'cors';
import readline from 'readline'; // added to be able to remove email

const app = express();
const PORT = 3001;  

app.use(cors());
app.use(json());

app.post('/subscribe', (req, res) => {
    const userEmail = req.body.email;
    const timestamp = new Date().toISOString();

    console.log(`Received email: ${userEmail} at ${timestamp}`);

    appendFile('subscribers.txt', `Email: ${userEmail}, Time: ${timestamp}\n`, (err) => {
        if (err) {
            console.error('There was an error saving the email:', err);
            res.status(500).send({ message: 'Error saving subscription' });
        } else {
            console.log(`Email saved: ${userEmail}, Timestamp: ${timestamp}`);
            res.status(200).send({ message: 'Subscription successful' });
        }
    });
});

app.get('/subscribers', (req, res) => {
    readFile('subscribers.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            res.status(500).send('Error reading subscribers');
        } else {
            const emails = data.split('\n');
            res.status(200).json(emails);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://127.0.0.1:${PORT}`);
    initiateEmailRemoval();
});

function initiateEmailRemoval() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Do you want to remove an email? (y/n) ', (answer) => {
        if (answer.toLowerCase() === 'y') {
            selectEmailToRemove(rl);
        } else {
            rl.close();
        }
    });
}

function selectEmailToRemove(rl) {
    readFile('subscribers.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            rl.close();
            return;
        }
        const lines = data.split('\n').filter(line => line.trim() !== '');
        lines.forEach((line, index) => {
            console.log(`${index + 1}: ${line}`);
        });

        rl.question('Enter the number of the email to remove: ', (num) => {
            const emailIndex = parseInt(num, 10) - 1;
            if (emailIndex >= 0 && emailIndex < lines.length) {
                const emailToRemove = lines[emailIndex].split(',')[0].split(': ')[1];
                removeEmail(emailToRemove, rl);
            } else {
                console.log('Invalid selection.');
                rl.close();
            }
        });
    });
}

function removeEmail(email, rl) {
    readFile('subscribers.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            rl.close();
            return;
        }

        const lines = data.split('\n');
        const updatedLines = lines.filter(line => !line.includes(`Email: ${email}`));

        writeFile('subscribers.txt', updatedLines.join('\n'), (writeErr) => {
            if (writeErr) {
                console.error('Error writing to the file:', writeErr);
            } else {
                console.log(`Email removed: ${email}`);
            }
            rl.close();
        });
    });
}
