import { classNames } from 'shared/lib/classNames/classNames';
import cls from './MyWorkspaces.module.scss';
import { useSelector } from 'react-redux';
import { getUserData } from 'entities/User';
import { useAllBoards } from 'features/Board';
import { Link } from 'react-router-dom';
import { RoutePath } from 'shared/config/route/routeConfig';
import { addDocAuto } from 'shared/config/firebase/firestore';
import { FirestoreSchema } from 'shared/api/firestoreSchemas';
import { useQueryClient } from '@tanstack/react-query';

interface MyWorkspacesProps {
    className?: string;
}

export const MyWorkspaces = ({ className }: MyWorkspacesProps) => {
    const user = useSelector(getUserData)
    const { data } = useAllBoards(user?.uid)

    const renderBoards = data?.map((board) => (
        <div key={board.id}><Link to={RoutePath.board + board.id}>{board.id}</Link></div>
    ))
    return (
        <div className={classNames(cls.MyWorkspaces, {}, [className])}>
            {renderBoards}
        </div>
    );
};