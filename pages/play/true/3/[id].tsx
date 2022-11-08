import MainDisplay from "../../../../components/MainDisplay"
import { useRouter } from "next/router"

export default function Play() {
    const router = useRouter()
    const alphabet = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'
    const paramsArray = [1, 9, 19, 50, 99, 999]
    let firstStringValue: string = '';
    let secondStringValue: string = '';
    let thirdStringValue: string = '';
    let minValue: number = 0;
    let value: number = 0;
    function getRandomArbitrary(min: number, max: number) {
        return Math.floor(Math.random() * (max - min) + min);
      }
    if (router.query.id === ('' + paramsArray[0])) {
        firstStringValue = alphabet[getRandomArbitrary(1, 33)]
        secondStringValue = alphabet[getRandomArbitrary(1, 33)]
        thirdStringValue = alphabet[getRandomArbitrary(1, 33)]
    }
    for (let i = 1; i < paramsArray.length; i++) {
        if (router.query.id === '' + paramsArray[i]) {
            minValue = paramsArray[i - 1]
            value = paramsArray[i]
        }
    }
    return (
        <MainDisplay>
            <div className="screen">
                <button className="button right down"><p className="button__text">{firstStringValue || getRandomArbitrary(minValue, value)}</p></button>
                <button className="button money"><p className="button__text">{secondStringValue || getRandomArbitrary(minValue, value)}</p></button>
                <button className="button left down"><p className="button__text">{thirdStringValue || getRandomArbitrary(minValue, value)}</p></button>
            </div>
            <div className="arrow-container arrow-up">
                <p>По возрастанию</p>
            </div>
            <ul className="workpanel">
                <li className="workplace"></li>
                <li className="workplace"></li>
                <li className="workplace"></li>
            </ul>
        </MainDisplay>
    )
}