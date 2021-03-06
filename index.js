const express = require('express');
const repoContext = require('./repository/repository-wrapper');
const cors = require('cors');
const { validateSong } = require("./middleware/songs-validation.js")

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true}));

app.listen(3000, function() {
    console.log("Server started. Listening on port 3000.");
 });

 app.get('/api/songs', (req, res) => {
    console.log("GET all songs triggered!")
    const songs = repoContext.songs.findAllSongs()
    return res.send(songs)
});

app.get('/api/songs/:id', (req, res) => {
    console.log("GET ON")
    const id = req.params.id;
    const song = repoContext.songs.findSongById(id);
    return res.send(song);
});

app.post('/api/songs', [ validateSong ], (req, res) => {
    const newSong = req.body;
    const addedSong = repoContext.songs.createSong(newSong);
    return res.send(addedSong);
});

app.put('/api/songs/:id', [ validateSong ], (req, res) => {
    const id = req.params.id;
    const songPropertiesToUpdate = req.body;
    const updatedSong = repoContext.songs.updateSong(id, songPropertiesToUpdate);
    return res.send(updatedSong);
})