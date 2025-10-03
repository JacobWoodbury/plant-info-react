import cosmos from '../images/cosmos.jpg'

export default function Card(){
    return ( 
        <>
            <h2 id = "cosmosFlower">Cosmos</h2>
            <img src = {cosmos} alt = "Picture of a cosmos flower"></img>
            <table>
                <tbody>
                    <tr>
                        <td>Cosmos Info:</td>
                        <td>
                            <ul>
                                <li>Among the different species with cosmos flowers, their flower color will vary. They can be purple, pink, or white.</li>
                                <li>Cosmos are native in the Americas, from Colorado and Missouri. They also extend south through Mexico and Central America to South America.</li>
                                <li>There are about 35 accepted species of cosmos flowers.</li>
                                <li>Cosmos flowers have been known for being hardy and easy to grow, thriving in most soil types without extensive care.</li>
                                <li>For their bloom time, cosmos flowers bloom from mid-summer to early fall.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Read more about Cosmos:</td>
                        <td>
                            <ul>
                                <li><a href="https://en.wikipedia.org/wiki/Cosmos_%28plant%29" target = "_blank">Wikipedia</a></li>
                                <li><a href = "https://knowngarden.com/10-cosmos-flower-facts-that-will-make-you-love/" target = "_blank">Cosmos flower facts</a></li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Videos on Cosmos:</td>
                        <td>
                            <ul>
                                <li><a href = "https://www.youtube.com/watch?v=P6fWUosBQpU" target = "_blank">Cosmos flower information</a></li>
                                <li><a href = "https://www.youtube.com/watch?v=iyWAKLA1Zo0" target = "_blank">How to grow Cosmos Flowers</a></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}