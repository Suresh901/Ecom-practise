import ReactImageMagnify from 'react-image-magnify';

const Magnifier = ({ currentImage }) => (
    <div className=''>
        <ReactImageMagnify
            {...{
                smallImage: {
                    src: currentImage,
                    isFluidWidth: false,
                    width: 350,
                    height: 350,
                },
                largeImage: {
                    src: currentImage,
                    width: 1200,
                    height: 1350,
                },

                enlargedImageContainerDimensions: {
                    width: '200%',
                    height: '150%',
                },
            }}
        />
    </div>

    // <div>
    //     <ReactImageMagnify {...{
    //         smallImage: {
    //             alt: 'image',
    //             isFluidWidth: false,
    //             width: 400,
    //             height: 400,
    //             src: currentImage,
    //         },
    //         largeImage: {
    //             src: currentImage,
    //             width: 1000,
    //             height: 1600,
    //         },
    //         enlargedImageContainerDimensions: {
    //             width: '300%', // Adjust the container width for increased zoom
    //             height: '150%', // Adjust the container height for increased zoom
    //         },

    //     }} />
    // </div>

);

export default Magnifier;
