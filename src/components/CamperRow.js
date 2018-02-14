export const CamperRow = ({camper, rank}) => {
    return (
        <tr>
            <td>{rank}</td>
            <td><img src={camper.img} width="50px"/>{camper.username}</td>
            <td>{camper.recent}</td>
            <td>{camper.alltime}</td>
        </tr>
    );
}