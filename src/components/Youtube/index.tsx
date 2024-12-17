import styles from "./styles.module.css";

type youtube = {
  embedId: string;
};

export function Youtube(props: youtube) {
  return (
    <div className="video-responsive">
      <iframe
        src={`https://www.youtube.com/embed/${props.embedId}&amp;start=16`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        width="100%"
        height="240"
      />
    </div>
  );
}
