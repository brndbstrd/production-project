import { classNames } from 'shared/lib/classNames/classNames';
import cls from './BoardPage.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { RoutePath } from 'shared/config/route/routeConfig';
import { Page } from 'shared/ui/Page/Page';
import { where } from 'firebase/firestore';
import { Board } from 'widgets/Board/ui/Board/Board';
import { useFirestoreDoc } from 'shared/lib/hooks/useFirestoreDoc';
import { PageLoader } from 'widgets/PageLoader/PageLoader';
import { useFirestoreQuery } from 'shared/lib/hooks/useFirestoreQuery';
import { Column } from 'entities/Column';
interface BoardPageProps {
    className?: string;
}

const BoardPage = ({ className }: BoardPageProps) => {
    const navigate = useNavigate()
    const { boardId } = useParams<string>()
    if (!boardId) {
        navigate(RoutePath.not_found);
        return null;
    }


    const { data: board } = useFirestoreDoc({
        collectionName: 'boards',
        queryKey: ['board', boardId],
        id: boardId
    })
    const { data: columns } = useFirestoreQuery({
        collectionName: 'columns',
        queryKey: ['columns', boardId],
        constraints: [...[where('boardId', '==', boardId)]]
    })
    // const columns = [
    //     {
    //         id: '1',
    //         boardId: 'OIVInqdggqKA9NROBpiM',
    //         order: 1,
    //         title: 'DFSDFSFDDS'
    //     },
    //     {
    //         id: '2',
    //         boardId: 'OIVInqdggqKA9NROBpiM',
    //         order: 1,
    //         title: 'DDDDASDSAASD'
    //     }
    // ] as Column[]
    const { data: tasks } = useFirestoreQuery({
        collectionName: 'tasks',
        queryKey: ['tasks', boardId],
        constraints: [...[where('boardId', '==', boardId)]]
    })
    if (!board || !columns || !tasks) {
        console.log(!!board, !!columns, !!tasks);

        return <PageLoader />
    }


    return (
        <Page className={classNames(cls.BoardPage, {}, [className])}>
            <Board id={boardId} board={board} columns={columns} tasks={tasks} />
        </Page>
    );
};
export default BoardPage