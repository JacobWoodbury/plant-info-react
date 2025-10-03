import rose from '../images/rose.jpg'

export default function Card(){
    return ( 
        <>
            <h2 id = "roseFlower"></h2>
            <img src = {rose} alt = "Picture of a rose"></img>
            <table>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <ul>
                                <li>The flowers of the rose grow in many different colors, such as red, yellow, white or even purple.</li>
                                <li>There are over 150 different species of roses. The wild rose species can be grown in gardens, but most garden roses have been selected by people</li>
                                <li>The rose holds the title of the oldest cultivated flower, which can be traced back to over 5,000 years ago.</li>
                                <li>Rose petals can be edible! They can be used in culinary creations worldwide such as sweets and teas.</li>
                                <li>Historically, roses have held medicinal value. Today, rose extracts continue to be popular in skincare.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <ul>
                                <li><a href="https://simple.wikipedia.org/wiki/Rose" target = "_blank">Wikipedia</a></li>
                                <li><a href = "https://completegardening.com/13-surprising-facts-about-roses/" target = "_blank">Facts about roses</a></li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <ul>
                                <li><a href = "https://www.youtube.com/watch?v=6uXT1QQs4UU" target = "_blank">More rose facts</a></li>
                                <li><a href = "https://www.youtube.com/watch?v=ER-8hZHdcms" target = "_blank">Information on caring for roses</a></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}