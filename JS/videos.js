for (let i = 1; i <= 21; i++) {
    let video = document.querySelector(`#videos${i}`);
    let playPauseBtn = document.querySelector(`#play-pause-btn-video-${i}`);
    let stopBtn = document.querySelector(`#stop-btn-video-${i}`);
    let volumeSlider = document.querySelector(`#volume-slider-video-${i}`);
    let progressBar = document.querySelector(`#progress-bar-video-${i}`);

    playPauseBtn.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            playPauseBtn.innerHTML = "PAUSE";
        } else {
            video.pause();
            playPauseBtn.innerHTML = "PLAY";
        }
    });

    stopBtn.addEventListener('click', function() {
        video.pause();
        video.currentTime = 0;
        playPauseBtn.innerHTML = "PLAY"; 
    });

    volumeSlider.addEventListener('input', function() {
        video.volume = volumeSlider.value; 
    });

    video.addEventListener('timeupdate', function() {
        let progress = (video.currentTime / video.duration) * 100;
        progressBar.value = progress; 
    });

    progressBar.addEventListener('input', function() {
        let seekTime = (progressBar.value / 100) * video.duration;
        video.currentTime = seekTime;
    });
}



const videoCards = document.querySelectorAll('.video-card');

const videoLectures = document.querySelectorAll('.videos-lecture');

videoCards.forEach(card => {
    card.addEventListener('click', function() {
        const id = this.id;

        videoLectures.forEach(videoLecture => {
            videoLecture.style.display = 'none';
        });

        const videoLectureToShow = document.querySelector(`#videos-defis-${id.split('défis')[1]}`);
        if (videoLectureToShow) {
            videoLectureToShow.style.display = 'inline-block';
        }
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
