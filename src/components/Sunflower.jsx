import sunflower from '../images/sunflower.jpg'

export default function Card(){
    return ( 
        <>
            <h2 id = "sunflower"></h2>
            <img src = {sunflower} alt = "Picture of a sunflower"></img>
            <table>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <ul>
                                <li>The common sunflower is harvested for its seeds as snacks, cooking oil, livestock food, and bird food.</li>
                                <li>In general, sunflowers may grow from 6 to 10 feet tall. The tallest sunflower on record achieved 30 feet.</li>
                                <li>While a sunflower may folow the sun's direction, there will be a time that it stops that habit. When it is fully grown, it will face east all day long</li>
                                <li>Sunflowers are actually daisies! The sunflower belongs to the daisy family, which has more than 20,000 species included in this family.</li>
                                <li>Sunflowers are annual plants, which means that they need to be replanted each year. If you plant them in May, they will wilt in early-mid August.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <ul>
                                <li><a href="https://en.wikipedia.org/wiki/Common_sunflower" target = "_blank">Wikipedia</a></li>
                                <li><a href = "https://facts.net/sunflower-facts/" target = "_blank">Sunflower Facts</a></li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <ul>
                                <li><a href = "https://www.youtube.com/watch?v=gvlumx640Yg" target = "_blank">More sunflower facts</a></li>
                                <li><a href = "https://www.youtube.com/watch?v=bMgocKSF1to&t=40s" target = "_blank">Sunflower history</a></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}