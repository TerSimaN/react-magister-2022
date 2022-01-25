function BreweriesTableItem({brewery}) {
    return (
        <>
            <tr>
                <td>"{brewery.name}"</td>
                <td>"{brewery.brewery_type}"</td>
                <td>{brewery.city}</td>
                <td>{brewery.state === null ? "None" : brewery.state}</td>
                <td>{brewery.country}</td>
                <td>
                    <a href={brewery.website_url}>Link</a>
                </td>
            </tr>
        </>
    )
}

export default BreweriesTableItem;