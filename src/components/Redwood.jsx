import redwood from '../images/redwood.jpg'

export default function Card(){
    return ( 
        <>
            <h2 id = "redwoodTree">Redwood Tree</h2>
            <img src = {redwood} alt = "Picture of a redwood tree"></img>
            <table>
                <tbody>
                    <tr>
                        <td>Redwood Tree Info:</td>
                        <td>
                            <ul>
                                <li>There are 3 locations that redwood subfamilies are found in the world: California, Oregon, and China. Redwood trees in China may not grow as large as California or Oregon, but they're still big!</li>
                                <li>These trees are famously known as one of the largest and tallest trees in the world, potentially reaching over 350 feet.</li>
                                <li>Redwood trees can live for thousands of years. The oldest living redwood has been alive for at least 2,200 years.</li>
                                <li>While all trees are curcial in maintaing the climate, redwoods are espcially good at this, as redwoods capture more carbon dioxide than any other tree.</li>
                                <li>Unfortunately, redwoods are endangered. Only 5% of the original redwood forests are left, as they are treasured for building.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Read more about Redwood Trees:</td>
                        <td>
                            <ul>
                                <li><a href="https://en.wikipedia.org/wiki/Sequoioideae" target = "_blank">Wikipedia</a></li>
                                <li><a href = "https://sempervirens.org/learn/redwood-facts/" target = "_blank">Facts on Redwoods</a></li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Videos on Redwood Trees:</td>
                        <td>
                            <ul>
                                <li><a href = "https://www.youtube.com/watch?v=iVqHIxvXwv4" target = "_blank">Redwood tree facts</a></li>
                                <li><a href = "https://www.youtube.com/watch?v=t9NDI5H2zZM" target = "_blank">How redwoods are so tall</a></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}