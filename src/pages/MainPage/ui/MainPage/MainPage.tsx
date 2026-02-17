
import { Page } from 'shared/ui/Page/Page';
import { MyWorkspaces } from '../MyWorkspaces/MyWorkspaces';

interface MainPageProps {
    className?: string;
}

const MainPage = ({ className }: MainPageProps) => {


    return (
        <Page className='bg-blue-300'>
            {/* <ImageUploader />
            <Board /> */}
            <MyWorkspaces />
        </Page>
    );
};
export default MainPage