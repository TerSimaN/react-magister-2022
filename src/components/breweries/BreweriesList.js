import { faList, faTh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Row, Table } from "react-bootstrap";
import BreweriesGridItem from "./BreweriesGridItem";
import BreweriesTableItem from "./BreweriesTableItem";
import { useTheme } from "../../ThemeContext";
import { useBrewery } from "./BreweryContext";
import NoBreweriesFound from "./NoBreweriesFound";

function BreweriesList(props) {

    const [theme] = useTheme();
    const [list, toggleList] = useState(false);
    const {breweries} = useBrewery();

    function renderBreweries() {
        if (!breweries.length) {
            return <NoBreweriesFound message={"Didn't find any breweries!"} />
        }

        return list ? showBreweriesTable() : getBreweriesGridItems();
    }

    function getBreweriesGridItems() {
        return breweries.map((brewery) => {
            return <BreweriesGridItem 
                key={brewery.id}
                brewery={brewery} />
        })
    }

    function showBreweriesTable() {
        return (
            <>
                <Table striped hover bordered variant={theme ? "dark" : " "} className="mt-2">
                    <thead>
                        <tr>
                            <th>Brewery Name</th>
                            <th>Type</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Country</th>
                            <th>Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getBreweriesTableData()}
                    </tbody>
                </Table>
            </>
        )
    }

    function getBreweriesTableData() {
        return breweries.map((brewery) => {
            return <BreweriesTableItem 
            key={brewery.id}
            brewery={brewery} />
        })
    }

    return (
        <>
            <Row className={ `filter-results ${theme ? 'dark-theme' : ''}` } >
                <div className="d-flex justify-content-md-between align-items-center py-2 px-3">
                    <div>
                        <h5>Breweries Filter results</h5>
                    </div>
                    <FontAwesomeIcon 
                        onClick={() => {toggleList(!list)}}
                        icon={list ? faTh : faList}
                        title={list ? "Grid View" : "List View"}
                        size="lg" />
                </div>
            </Row>
            <Row>
                {renderBreweries()}
            </Row>
        </>
    )
}

export default BreweriesList;