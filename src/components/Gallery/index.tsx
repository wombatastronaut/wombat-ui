import React from 'react'

interface Image {
    index: number,
    title: string,
    original: string,
    thumbnail: string,
    link: string
}

interface Props {
    images: Array<Image>,
    columns: number,
    gap: number
}

const Gallery = ({images, columns = 3, gap = 10}: Props) => {
    if (!images) {
        return (null)
    }

    return (
        <div className="gallery">
            <div className={'grid ' + 'grid-cols-' + columns + ' gap-' + gap}>
                {images.map((image, index) => (
                    <div className="cursor-pointer" key={index}>
                        <img className="mb-3" src={image.thumbnail} alt={image.title} />
                        <a href={image.link} className="text-white" target="_blank">{image.title}</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Gallery