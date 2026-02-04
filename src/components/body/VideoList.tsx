import VideoWidget from "./VideoWidget";

const VideoList: React.FC = () => {
    const videos = [
        { id: 1, title: "Learn React Basics", channel: "Code Academy", views: "120K views" },
        { id: 2, title: "TypeScript in 15 Minutes", channel: "Dev Simplified", views: "85K views" },
        { id: 3, title: "Build a YouTube Clone", channel: "Frontend Masters", views: "230K views" },
    ];

    return (
        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
                <VideoWidget
                    key={video.id}
                    title={video.title}
                    channel={video.channel}
                    views={video.views}
                />
            ))}
        </section>
    );
};

export default VideoList;
