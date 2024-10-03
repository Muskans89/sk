import React from 'react';

const FromTheDesk = () => {
    return (
        <div className="px-16 py-10 bg-white font-futura relative">
            {/* Heading */}
            <h1 className="text-3xl text-left text-black mb-6 futura-font">From the desk of Sumit Khetan</h1>

            {/* Text Content */}
            <div className="flex flex-col justify-start">
                {/* Quotation and First Line */}
                <div className="mb-4 relative">
                    {/* Quotation Mark on the same line as text */}
                   
                    <p className="text-gray-700 leading-tight futura-font">
                        In the rhythm of the universe, dance has always been a language that transcends borders and speaks to hearts across distant shores.
                    </p>
                </div>

                {/* Paragraph Content */}
                <p className="text-gray-700 mb-4 leading-7 futura-font">
                    It has been nothing short of magical to see the choreography I create breathe life into weddings far beyond our land, weaving together cultures, emotions, and moments into a tapestry of unforgettable memories. Every step, every movement tells a story – one that echoes through the sands of time, from vibrant Indian traditions to ethereal, cross-cultural celebrations across the globe.
                </p>

                <p className="text-gray-700 mb-6 leading-7 futura-font">
                    To be a part of these sacred unions, where love knows no boundaries, fills me with a sense of awe and gratitude. I am deeply honored to share my art with those whose dreams I can help shape into reality.
                </p>

                {/* Signature */}
                <p className="text-left text-black font-bold futura-font">Sumit Khetan</p>
            </div>
        </div>
    );
};

export default FromTheDesk;
