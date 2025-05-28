import { UncontrolledCarousel } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function CarouselEx() {

    return (
        <>
            <UncontrolledCarousel items={[
    {
        src: '/카피비라 무드등1.jpg',
        altText: 'Slide 1',
        caption: 'Slide 1',
        key: "1"
    },
    {
        src: '/카피비라 무드등2.jpg',
        altText: 'Slide 2',
        caption: 'Slide 2',
        key: "2"
    },
    {
        src: '/카피비라 무드등3.jpg',
        altText: 'Slide 3',
        caption: 'Slide 3',
        key: "3"
    }
]} />
        </>
    )
}