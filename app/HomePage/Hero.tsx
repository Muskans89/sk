'use client'; 
import { useRouter } from 'next/navigation';

const Hero = () => {
    const router = useRouter();
    const pageUrl = '/contact';

    const handleButtonClick = () => {
        router.push(pageUrl);
    };

    return (
        <div className="hero relative h-screen bg-white">
            {/* YouTube video iframe with details hidden */}
            <div className="relative h-screen bg-white">
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/JRT0zSUNNNU?autoplay=1&loop=1&mute=1&playlist=JRT0zSUNNNU&controls=0&rel=0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full object-cover"
                ></iframe>
            </div>
        </div>
    );
};

export default Hero;
