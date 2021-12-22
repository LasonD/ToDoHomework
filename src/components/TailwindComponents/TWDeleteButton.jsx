import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const TWDeleteButton = (props) => {
    return (
        <button class="h-10 px-5 m-2 text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800" type="danger" onClick={props.onClick}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
    );
}