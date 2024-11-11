import { createBoard } from '@wixc3/react-board';
import MyGestaltComponent from '../../../src/components/my-gestalt-component/my-gestalt-component';

export default createBoard({
    name: 'MyGestaltComponent',
    Board: () => <MyGestaltComponent />,
});
