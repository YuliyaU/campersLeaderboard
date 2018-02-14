export const CamperRow = ({camper, rank}) => {
    return (
        <tr>
            <td>{rank}</td>
            <td className="camper-name"><img src={camper.img} width="50px"/><span>{camper.username}</span></td>
            <td>{camper.recent}</td>
            <td>{camper.alltime}</td>
        </tr>
    );
}