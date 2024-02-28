import { MdHistory } from "react-icons/md";

const HistoryButton = ({ onClick }) => {

    return (
        <button onClick={onClick} >
            <MdHistory size={25} color="white"/>
        </button>
    )

}

export default HistoryButton;