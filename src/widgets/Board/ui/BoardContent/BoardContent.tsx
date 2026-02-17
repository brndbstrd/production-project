import { classNames } from 'shared/lib/classNames/classNames';
import cls from './BoardContent.module.scss';
import { Board } from 'entities/Board';
import { Loader } from 'shared/ui/Loader/ui/Loader';
import { ColumnCard } from 'shared/ui/ColumnCard/ColumnCard';
import { TaskCard } from 'shared/ui/TaskCard/TaskCard';
import { ColumnHeader } from '../ColumnHeader/ColumnHeader';
import { Column } from 'entities/Column';
import { Task } from 'entities/Task';

interface BoardContentProps {
    className?: string;
    board?: Board,
    columns?: Column[],
    tasks?: Task[]
    id: string,
}

export const BoardContent = (
    props: BoardContentProps) => {
    const { className, id, board, columns, tasks } = props

    if (!columns || !tasks) {
        return <Loader />
    }
    const elements = (
        <div className={cls.content}>
            {columns.sort((a, b) => a.order - b.order)
                .map((column) => (
                    <ColumnCard>
                        <ColumnHeader columnName={column.title} />
                        <div>
                            {tasks.sort((a, b) => a.order - b.order).map(task => task.columnId === column.id
                                ?
                                <TaskCard>
                                    <div className='w-full '>{task.title}</div>
                                    {/* <div>{task.description}</div> */}
                                </TaskCard>
                                : null)
                            }
                        </div>
                    </ColumnCard>
                ))}
        </div>
    )
    return (
        <div className={classNames(cls.BoardContent, {}, [className])}>
            {elements}
        </div>
    );
};