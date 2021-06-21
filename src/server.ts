import express from 'express';

const app = express();

app.get("/", (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Hello there",
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on ${PORT}!`));