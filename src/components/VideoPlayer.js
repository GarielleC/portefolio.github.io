import 'video.js/dist/video-js.css';
import videojs from 'video.js';

const VideoPlayer = () => {
  useEffect(() => {
    const player = videojs('my-video', {
      controls: true,
      responsive: true,
      fluid: true,
    });

    return () => {
      // Libérer le lecteur à la destruction du composant
      if (player) {
        player.dispose();
      }
    };
  }, []);

  return (
    <div>
      <video
        id="my-video"
        className="video-js"
        controls
        preload="auto"
        width="640"
        height="360"
        aria-label="Démonstration de l'augmentation de l'âge"
      >
        <source src="./assets/work/react/age.mp4" type="video/mp4" />
        <source src="./assets/work/react/age.webm" type="video/webm" />
        Votre navigateur ne prend pas en charge la vidéo.
      </video>
    </div>
  );
};

export default VideoPlayer;
