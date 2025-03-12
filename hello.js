< !DOCTYPE html >
    <html lang="en">
        <head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Moon & Cats UI with Music Player</title>
                    <link rel="stylesheet" href="styles.css">
                    </head>
                    <body>
                        <div class="container">
                            <img src="https://i.imgur.com/Nw7eR7r.png" class="element stars" style="top: 5%; left: 15%;" alt="Star">
                                <img src="https://i.imgur.com/Nw7eR7r.png" class="element stars" style="top: 20%; left: 70%;" alt="Star">
                                    <img src="https://i.imgur.com/kbI9QZi.png" class="element lamps" style="bottom: 10%; left: 20%;" alt="Lamp">
                                        <img src="https://i.imgur.com/kbI9QZi.png" class="element lamps" style="bottom: 15%; right: 30%;" alt="Lamp">
                                            <img src="https://i.imgur.com/YNMnabg.png" class="element cats" style="bottom: 10%; left: 5%; width: 100px;" alt="Cat">
                                                <img src="https://i.imgur.com/YNMnabg.png" class="element cats" style="bottom: 20%; right: 15%; width: 90px;" alt="Cat">

                                                    <!-- Music Player -->
                                                    <div class="music-player">
                                                        <p>No song selected</p>
                                                        <img src="https://i.imgur.com/Vk5pWUr.png" alt="Music Display">
                                                            <div class="controls">
                                                                <button id="play-btn"></button>
                                                                <button id="pause-btn"></button>
                                                            </div>
                                                            <audio id="audio" src="your-audio-file.mp3"></audio>
                                                    </div>
                                                </div>
                                                <script src="script.js"></script>
                                            </body>
                                        </html>
