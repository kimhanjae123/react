import { Badge, Button } from 'reactstrap';

export default function BadgesEx() {
    return (
        <>
            <Button color="primary">
                Notifications
                <Badge color="secondary">5</Badge>
            </Button>
        </>
    )
}