import tpl from './tpl.hbs';
import './style.css';
import * as cameraPhoto from '../../../static/cameraPhoto.png';
import {Block} from "../../domain";

interface PhotoMessageProps {
    photo?: typeof cameraPhoto;
    time?: string;
}

export const dataPhotoMessage = {
    photo: cameraPhoto,
    time: '12:56',
};

class PhotoMessage extends Block<PhotoMessageProps> {
    constructor(props: PhotoMessageProps) {
        super(tpl, props);
    }
}

function render(block: Block) {
    document.addEventListener('DOMContentLoaded', function () {
        const containerIncomingMessage = document.getElementsByClassName('incoming__chat')[0];
        containerIncomingMessage?.appendChild(block.getContent());
        return containerIncomingMessage;
    });

}

export const photoMessage = (data: PhotoMessageProps) => {
    const phMes = new PhotoMessage(data);
    render(phMes);
}

// const photoMessage = () => {
//     return tpl(data);
// };
//
// export default photoMessage;
