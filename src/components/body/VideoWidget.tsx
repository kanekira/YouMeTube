interface VideoWidgetProps {
    title: string;
    channel: string;
    views: string;
}

const VideoWidget: React.FC<VideoWidgetProps> = ({ title, channel, views }) => {
    return (
        <article className="rounded-lg border border-gray-200 p-4 shadow-sm">
            <div className="mb-3 h-40 w-full rounded-md bg-gray-200" />
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-600">{channel}</p>
            <p className="text-xs text-gray-500">{views}</p>
        </article>
    );
};

export default VideoWidget;
